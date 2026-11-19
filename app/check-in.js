'use strict';

(function (root) {
  const E = root.AstraEngine;
  const language = root.HamLanguage;
  const emergencySource = 'https://medlineplus.gov/ency/article/001927.htm';
  const urgentPrompt = 'Before we begin, are you having trouble breathing, chest pain, sudden confusion, fainting, or bleeding that will not stop? Are you worried you might hurt yourself or someone else right now?';
  const yesNo = {yes:'Yes',no:'No',unsure:'Not sure'};
  const measures = ['sleep','glucose','mood'];
  const symptomQuestions = {
    nausea: 'Have you vomited or had trouble keeping fluids down?',
    dizziness: 'Does it happen when you move or change position?',
    headache: 'Did it start suddenly or have you noticed any changes in vision?',
    vision: 'What changed in your vision, and does it affect one eye or both?',
    exposure: 'What were you exposed to, and did the symptoms start before or after that exposure?',
    fatigue: 'Has the fatigue changed your ability to stay alert or complete your usual tasks?',
    pain: 'Where exactly is the pain, and does it change with movement or rest?',
    digestion: 'Have you noticed any change in bowel movements or your ability to drink fluids?',
    sleep: 'What changed in your sleep schedule or sleeping environment?',
    mood: 'What part of the shift felt hardest for you emotionally?',
    general: 'Have you noticed anything that makes it better or worse?'
  };
  const followUpQuestions = {
    nausea: 'Did it start after movement, eating, or a change in your work environment?',
    dizziness: 'How long does each episode last, and does it happen at rest?',
    headache: 'Have you noticed a change in what you can comfortably do since it started?',
    vision: 'Does it affect reading or operating equipment, and have you already recorded an eye exam with the crew medical officer?',
    exposure: 'How long were you exposed, and did anyone else report symptoms?',
    fatigue: 'Did it begin after a change in sleep, work hours, or activity?',
    pain: 'Has the pain spread or changed since it began?',
    digestion: 'Did you notice a change after any food, drink, or activity?',
    sleep: 'Has the change in sleep affected your alertness or ability to work?',
    mood: 'Is there anything you want the crew medical officer to know about how you are feeling?'
  };
  const measurementQuestions = {
    sleep: 'Was the shorter sleep due to a schedule change, waking up, or difficulty falling asleep?',
    mood: 'What affected your mood today, and did it make your duties harder?',
    glucose: 'When did you last eat relative to the glucose measurement?'
  };
  const detailTitles = {symptoms:'Symptoms',onset:'Onset and course',symptomDetail:'Symptom follow-up',symptomContext:'Additional symptom context',
    impact:'Effect on duties',moodImpact:'Mood and duties notes',statusUpdate:'How you feel now'};
  const freeTextOptions = ['impact','moodImpact'];
  const symptomFields = ['symptoms','onset','impact','symptomDetail','symptomContext'];
  const normalize = language.fold;

  function statusUpdate(text) {
    let wording = normalize(text).replace(/\bstable and (?=(?:good|fine|well|okay|better)\b)/g,'')
      .replace(/\b(?:both )?(?:physically and (?:emotionally|mentally)|(?:emotionally|mentally) and physically|fisica(?:mente)? y (?:emocional|mental)mente)\b/g,'on both fronts');
    const correction = /\bi (?:just|already) told you (?:that )?(?:i (?:was|am) feeling|im feeling) ([\w ]+)[.!\s]*$/.exec(wording);
    if (correction && !emergencyKind(text) &&
        !/\b(?:still|sigo|empeor\w*|i (?:feel|have|am) (?:dizzy|sick|in pain|nauseous)|now i have)\b/.test(wording)) {
      wording = 'i feel '+correction[1].trim();
    }
    const clauses = wording.split(/[,!;\n]+|\.(?!\d)|\b(?:but|pero|and|y)\b/)
      .map(clause => clause.trim()).filter(Boolean);
    const better = /^(?:(?:i (?:feel|am)|im|feeling) (?:feeling )?|me siento |ya estoy )?(?:much |a lot |a little |mucho |bastante |un poco )?(?:better|mejor)(?: now| today| than yesterday| this morning| after (?:sleeping|resting)| hoy| que ayer| despues de (?:dormir|descansar))?(?: thanks| gracias)?$/;
    const well = /^(?:(?:i (?:feel|am)|im) (?:feeling )?(?:fine|well|good|okay|ok)|(?:all|everything is) good|me siento bien|(?:ya )?estoy bien|todo bien)(?: (?:now|today|hoy|ahora|(?:(?:in|on) )?both (?:ways|respects|fronts))){0,2}(?: thanks| gracias)?$/;
    const cleared = /^(?:no (?:more )?(?:new )?(?:symptoms|pain|headache|nausea|dizziness)(?: now| today| anymore)?|i (?:dont have|no longer have) (?:any |a )?(?:symptoms|pain|headache|nausea|dizziness)(?: now| anymore)?|(?:the |my )?(?:pain|headache|dizziness|nausea) is gone|ya no (?:me duele (?:la cabeza|el brazo|la pierna)|tengo (?:dolor|sintomas|mareos|nauseas))|sin (?:sintomas|molestias|dolor))$/;
    const reading = /^(?:i )?(?:(?:slept|dormi) (?:only |solo )?\d+(?:\.\d)? (?:hours?|horas?|h)(?: last night| anoche)?|(?:my |mi )?(?:pulse|pulso|heart rate) (?:is |was |es )?\d+ bpm|(?:my |mi )?(?:mood|animo) (?:is |was |es )?\d+\s*\/\s*10|(?:my |mi )?(?:glucose|glucosa|blood sugar) (?:is |was |es )?\d+\s*mg\s*\/\s*dl)$/;
    if (!clauses.length || !clauses.every(clause => better.test(clause) || well.test(clause) || cleared.test(clause) ||
        reading.test(clause) || /^(?:thanks|gracias|nothing else|nada mas)$/.test(clause))) return '';
    return clauses.some(clause => better.test(clause) || /\b(?:gone|anymore|ya no)\b/.test(clause)) ? 'better' :
      clauses.some(clause => well.test(clause) || cleared.test(clause)) ? 'well' : '';
  }

  function routineResponse(text) {
    const normalized = language.interpret(text).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')
      .replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
    const denial = /^(?:none(?: at all)?|no(?: new symptoms| symptoms| issues| problems| concerns)?|nothing(?: to report| new)?|all good|i (?:feel|m|am) (?:fine|well|good)|ningun[oa]|no(?: tengo(?: sintomas| molestias))?|nada(?: que reportar)?|sin (?:sintomas|molestias|novedades)|me siento bien|todo bien)(?:\s+|$)/;
    const routine = /^(?:just\s+)?(?:(?:the|a|my)\s+)?(?:(?:normal|routine|regular|daily)\s+)?check\s?in$|^(?:(?:solo|nomas)\s+)?(?:(?:el|un|la|una)\s+)?(?:(?:chequeo|registro|revision)(?:\s+(?:diari[oa]|habitual|normal|de rutina))?|(?:check\s?in)(?:\s+(?:normal|diario|de rutina))?)$/;
    const remainder = normalized.replace(denial,'');
    const improvement = /^(?:i(?: m)? (?:feel(?:ing)?|am) (?:much |a lot )?better|me siento (?:mucho |bastante )?mejor)(?: (?:(?:and |y )?(?:i slept well|i slept better|ya dormi bien|dormi bien)|now|today|ya))*(?: thanks| gracias)?$/;
    return !!statusUpdate(text) || (denial.test(normalized) && !remainder) || routine.test(remainder) || improvement.test(normalized);
  }

  function restore(current) {
    const {answers,values} = current;
    if (!answers.symptoms || urgent(current) || !routineResponse(answers.symptoms)) return current;
    const cleaned = {...answers,symptoms:''};
    for (const key of ['onset','impact','symptomDetail','symptomContext']) delete cleaned[key];
    const update = statusUpdate(answers.symptoms);
    if (update) cleaned.statusUpdate = answers.symptoms;
    return {...current,answers:cleaned,values:{...values,impact:'none'},next:undefined,
      acknowledgment:update ? statusAcknowledgment(update) : undefined};
  }

  const statusAcknowledgment = update => update === 'better' ? 'I’m glad you’re feeling better.' : 'I’m glad you’re feeling well.';

  function create(env, date, previous, legacy, personal = {}) {
    const values = previous && !previous.sample ? {...previous.values,...legacy?.values} : {...legacy?.values};
    const answers = Object.fromEntries(measures.filter(key => values[key] != null).map(key => [key,values[key]]));
    return {mode:'chat',env,date,values,answers,turns:[],personal,
      image:legacy?.image ?? previous?.image ?? null};
  }

  function urgent(current) {
    if (current.emergency) return current.emergency;
    const report = current.turns?.findLast(turn => turn.role === 'user' && emergencyKind(turn.content));
    if (report) return emergencyKind(report.content);
    if (E.hasLowBodyTemperature(current)) return 'temperature';
    if (['yes','unsure'].includes(current.answers.urgent) || current.values.impact === 'urgent') return 'symptoms';
    return '';
  }

  function symptomTopic(current) {
    const text = normalize(current.answers.symptoms || '');
    if (/\b(nause\w*|vomit\w*|throw(?:ing)? up|maread[oa]\b.*estomago)/.test(text)) return 'nausea';
    if (/\b(dizz\w*|vertigo|mare\w*|unsteady|balance)\b/.test(text)) return 'dizziness';
    if (/\b(headache|migraine|dolor de cabeza)\b/.test(text)) return 'headache';
    if (/\b(vision|eyesight|blurr\w*|vista borrosa|veo borros[oa]|flashes|destellos)\b/.test(text)) return 'vision';
    if (/\b(dust|smoke|fumes|exposure|polvo|humo)\b/.test(text)) return 'exposure';
    if (/\b(lonel\w*|homesick|isolated|miss (?:home|my family)|anxious|sad|stressed|depress\w*|hopeless|overwhelmed|feel(?:ing)? (?:low|down)|soledad|sol[oa]|ansios[oa]|triste|deprimi\w*|estres\w*|extrano a)\b/.test(text)) return 'mood';
    if (/\b(sleep|slept|insomnia|nightmares|sueno|dormi|dormir|desperte)\b/.test(text)) return 'sleep';
    if (/\b(fatigu\w*|tired|exhaust\w*|agotad[oa]|cansad[oa])\b/.test(text)) return 'fatigue';
    if (/\b(digest\w*|diarrh\w*|constipat\w*|estre[nñ]imiento|diarrea)\b/.test(text)) return 'digestion';
    if (/\b(pain|ache|hurt(?:s|ing)?|dolor|duele)\b/.test(text)) return 'pain';
    return 'general';
  }

  function differingReadings(current) {
    return E.metrics.filter(metric => E.status(metric, current.values[metric.key]) === 'review');
  }

  function moodReasonReported(current) {
    return symptomTopic(current) === 'mood' &&
      /\b(?:because|(?:since|after) (?:moving|switching|changing|leaving|starting)|i miss (?:having|seeing|talking|working|my|our)|porque|desde que (?:cambi[eé]|empec[eé]|dej[eé])|extra[ñn]o)\b/i.test(current.answers.symptoms);
  }

  function questions(current) {
    const {answers,values} = current;
    const personal = current.personal || {};
    if (urgent(current)) return [];
    if (!Object.hasOwn(answers,'urgent')) return [{key:'urgent',prompt:urgentPrompt,options:yesNo}];
    if (!Object.hasOwn(answers,'symptoms')) {
      const name = personal.name ? ', '+personal.name : '';
      const earlier = personal.recentChat?.findLast(content => symptomTopic({answers:{symptoms:content}}) !== 'general' &&
        !routineResponse(content) && !trainingScenario(content) && !content.includes('?'));
      if (earlier) return [{key:'symptoms',prompt:'Earlier you said, “'+earlier+'” How are you feeling now?'}];
      const lastSleep = personal.recent?.sleep;
      const context = personal.recentConcern ? ' Yesterday you mentioned «'+personal.recentConcern+'».' :
        lastSleep != null && E.status(E.metricByKey('sleep'),lastSleep) === 'review' ? ' At your last check-in, you reported sleeping '+lastSleep+' h.' : '';
      return [{key:'symptoms',prompt:'Hello'+name+'.'+context+' How are you feeling today, physically and emotionally?'}];
    }
    const followups = [];
    if (answers.symptoms) {
      const topic = current.topic || symptomTopic(current);
      const moodReason = moodReasonReported(current);
      const positionKnown = topic === 'dizziness' && /\b(?:when|after) i (?:stand|sit|move|turn|walk)|\b(?:cuando|al) (?:me )?(?:levant\w*|sent\w*|mov\w*)\b/i.test(answers.symptoms);
      if (!Object.hasOwn(answers,'onset') && !/\b(today|yesterday|since|this morning|last night|(?:hours?|days?|weeks?) ago|desde|ayer|hoy|anoche|hace)\b/i.test(answers.symptoms.split(/[.!?;\n]/)[0])) {
        followups.push({key:'onset',prompt:(topic === 'mood' ? 'Thanks for sharing. When did you start feeling this way?' :
          'When did you first notice it?'),optional:true});
      }
      if (!Object.hasOwn(answers,'impact') && !['mood','sleep'].includes(topic)) followups.push({key:'impact',prompt:'Does it make any of your duties harder?',freeText:true,options:{mild:'I can do my duties',task:'It affects my duties',urgent:'I need help now'}});
      if (!Object.hasOwn(answers,'symptomDetail')) followups.push({key:'symptomDetail',
        prompt:moodReason ? 'What would make the rest of your shift feel easier?' :
          positionKnown ? 'How long does the dizziness last?' : symptomQuestions[topic],optional:true});
      if (!moodReason && answers.symptomDetail && followUpQuestions[topic] && !Object.hasOwn(answers,'symptomContext')) followups.push({
        key:'symptomContext',prompt:topic === 'mood' ? 'What would feel most helpful right now: talking it through, taking a quiet moment, or checking in with someone on your crew?' :
          positionKnown ? 'Have you felt dizzy while resting too?' : followUpQuestions[topic],optional:true
      });
      if (followups.length) return followups;
    }
    const readings = [];
    for (const key of measures) {
      const metric = E.metricByKey(key);
      if (!Object.hasOwn(answers,key)) readings.push({key,metric,prompt:metric.prompt,optional:true});
      if (E.status(metric,values[key]) === 'review' && !Object.hasOwn(answers,'context-'+key)) return [{
        key:'context-'+key,optional:true,prompt:'I logged '+E.format(values[key])+' '+metric.unit+' for '+metric.label.toLowerCase()+'. '+measurementQuestions[key]
      }];
    }
    if (readings.length) return readings;
    if (!Object.hasOwn(answers,'moodImpact') && ((values.mood != null && values.mood <= 6) || symptomTopic(current) === 'mood')) {
      return [{key:'moodImpact',prompt:'How much did your mood affect your focus or duties?',options:E.dutyImpact,freeText:true,optional:true}];
    }
    if (answers.symptoms && !Object.hasOwn(answers,'context') && (personal.changedEnvironment || symptomTopic(current) === 'exposure')) {
      return [{key:'context',prompt:E.environments[current.env].question,optional:true}];
    }
    if (!Object.hasOwn(answers,'note')) return [{key:'note',prompt:'Anything else you want to add before saving? You can attach a photo.',optional:true}];
    return [];
  }

  function question(current) {
    const available = questions(current);
    const selected = available.find(item => isAdaptiveQuestion(item) && item.key === current.next?.key) || available[0];
    return selected && current.acknowledgment ? {...selected,prompt:current.acknowledgment+' '+selected.prompt} : selected;
  }

  function isAdaptiveQuestion({key}) {
    return key !== 'symptoms' && (symptomFields.includes(key) || key === 'moodImpact');
  }

  function recap(current, followUps) {
    const {answers,values} = current;
    const update = statusUpdate(answers.statusUpdate);
    const report = update ? 'You reported feeling '+(update === 'better' ? 'better' : 'well')+' today.' :
      answers.symptoms ? 'You reported “'+answers.symptoms+'”.' :
        Object.hasOwn(answers,'symptoms') ? 'You reported no current concerns.' : '';
    const recorded = measures.filter(key => typeof answers[key] === 'number' && values[key] != null).map(key => {
      const metric = E.metricByKey(key);
      return metric.label.toLowerCase()+' '+E.format(values[key])+' '+metric.unit;
    });
    const text = [report, recorded.length ? 'Recorded '+recorded.join(', ')+'.' : '', followUps[0]].filter(Boolean).join(' ') ||
      'Your check-in was saved.';
    return {text,paragraph:text,followUps};
  }

  function unresponsiveReport(text) {
    const folded = normalize(text);
    if (/\b(?:responding to (?:my |the )?(?:texts?|messages?|emails?)|no responde (?:a mis mensajes|al correo))\b/.test(folded) &&
        !/\b(?:breath\w*|respira\w*|unconscious|inconsciente)\b/.test(folded)) return false;
    if (/\b(?:unresponsive|unconscious|inconsciente)\b/.test(folded) && !/\b(?:not |no esta |never )(?:unresponsive|unconscious|inconsciente)\b/.test(folded)) return true;
    return /\b(?:crew ?mate|partner|companion|colleague|companer[oa]|tripulante|he|she|they|theyre|person|persona)\b/.test(folded) &&
      /\b(?:(?:is |are )?not responding|isnt responding|arent responding|wont respond|no response|cannot wake|cant wake|wont wake|no (?:responde|reacciona|despierta))\b/.test(folded);
  }

  function trainingScenario(text) {
    const folded = normalize(text).trim();
    return /^(?:in (?:a |this )?(?:simulation|drill|scenario)|(?:this (?:is|is meant to be)|its|it is) (?:(?:just|only) )?(?:a )?(?:simulation|drill|scenario|hypothetical)|(?:training|practice) (?:scenario|drill)|hypothetically|for (?:a |this )?(?:grammar|spelling) (?:example|exercise)|how do (?:i|you) (?:spell|translate|pronounce)|is ["“].{1,180}["”] (?:spelled|grammatically|correct)|what if|what (?:would|should) (?:i|you) do if|how (?:would|should) (?:i|you) respond if|if (?:someone|a person|i)|en (?:una |esta )?(?:simulacion|simulacro)|(?:esto )?es (?:solo )?(?:una? )?(?:simulacion|simulacro)|que (?:hago|haria|pasaria) si)\b/.test(folded) &&
      !/\b(?:this is real|not a drill|en verdad|no es un simulacro|actual emergency|(?:but|pero) (?:i actually|i really|right now|ahora mismo|de verdad))\b/.test(folded);
  }

  function bloodCough(text) {
    return /(?<!\bnot )(?<!\bno )\b(?:cough(?:ing|ed|s)? (?:up )?blood|tos(?:e|o|iendo) sangre|escup(?:e|o|iendo) sangre)\b/i.test(text);
  }

  const harmObject = /\b(?:i\s+(?:still\s+|really\s+|do\s+)?(?:want to|wanna|plan to|am going to|m going to|m gonna|might|could|will|m about to|am about to)|(?:im|i am) (?:thinking (?:about|of)|having thoughts of)|restrain(?:ing)? myself from|stop(?:ping)? myself from|cant stop myself from|cannot stop myself from)\s+(?:kill(?:ing)?|hurt(?:ing)?|harm(?:ing)?|cut(?:ting)?|shoot(?:ing)?|stab(?:bing)?|attack(?:ing)?|hit(?:ting)?|punch(?:ing)?)\s+(.+)/;
  const nonPerson = /^(?:(?:my|your|his|her|their|its|our|the|a|an) )?(?:(?:own )?(?:self[ -](?:esteem|care|control|worth|image|respect|confidence|discipline|defen[cs]e|awareness)|feelings|reputation|pride|career|business|sales|chances|autoestima|ego)|it|time|process|server|job|app|program|lights?|problem|bugs?|two birds|i\b|im\b|we\b|me\b|meant\b|no one|nobody)\b/;
  const personTarget = /^(?:him|her|them|herself|himself|someone|somebody|anyone|everybody|everyone|people|another person|person|my (?:crew ?mate|friend|partner|colleague|teammate|family|brother|sister|neighbor|crew)|(?:a|the|that|this|our) (?:crew ?mate|friend|partner|colleague|person|team ?mate|neighbor|crew)|(?:a )?(?:mi |mis |un |una |el |la )?(?:companer[oa]s?|tripulantes?|personas?|alguien|otro[sas]?))\b/;
  const bareTarget = /^[a-z][a-z-]{1,24}(?=\s*(?:$|[,:]|now\b|tonight\b|right now\b|tomorrow\b|when\b|if\b|hoy\b|ahora\b))/;

  function mentalRisk(clause) {
    const target = harmObject.exec(clause)?.[1];
    const targets = (target || '').split(/\s*,\s*(?:and\s+)?|\s+(?:and|or|as well as|y|o)\s+/).map(item => item.trim());
    const self = targets.some(item => /^myself\b(?!-)/.test(item)) ||
      /\b(?:i (?:still )?(?:want to|wanna|plan to|am going to|m going to|m gonna|might) (?:end my life|die)|i (?:dont|do not) want to (?:live anymore|be alive)|(?:im|i am) (?:thinking (?:about|of)|having thoughts of) (?:suicide|ending my life)|no quiero (?:vivir mas|seguir viviendo)|estoy pensando en (?:hacerme dano|suicidarme))\b/.test(clause) ||
      /(?<!\bno\s)\b(?:quiero|voy a|pienso|podria|planeo)\s+(?:suicidarme|matarme|lastimarme|herirme|hacerme dano|quitarme la vida|(?:matar|lastimar|herir|hacer dano) a mi mism[oa])\b/.test(clause);
    const spanishTarget = /(?<!\bno\s)\b(?:quiero|voy a|pienso|podria|planeo)\s+(?:matar|herir|lastimar|atacar|disparar|hacerle dano)\s+(?:a\s+)?(.+)/.exec(clause)?.[1];
    // A reflexive belongs to the speaker. Another target needs separate words in the message.
    const other = [...targets,spanishTarget || ''].some(item => item && !/^(?:myself|mi mism[oa])\b/.test(item) &&
      !nonPerson.test(item) && (personTarget.test(item) || bareTarget.test(item))) ||
      /(?<!\bno\s)\b(?:quiero|voy a|pienso|podria|planeo)\s+(?:matar[l][oa]s?|herir[l][oa]s?|atacar[l][oa]s?|dispararle)\b|\b(?:me cuesta contenerme|no puedo controlarme|me estoy conteniendo)\b.{0,70}\b(?:matar\w*|herir\w*|atacar\w*|hacerle dano)\b/.test(clause) ||
      /\bi\s+(?:cant|cannot)\s+(?:promise|guarantee)\s+(?:he|she|they)(?:ll\s+be|\s+will\s+be)\s+safe\s+if\s+i\b/.test(clause);
    return {self,other};
  }

  function emergencyKind(text) {
    const folded = normalize(text);
    if (trainingScenario(folded)) return '';
    const clauses = folded.split(/[.!?;\n]+|\b(?:but|pero|however)\b|\band\s+(?=(?:i|im)\b)/);
    let self = false;
    let other = false;
    let physical = '';
    for (const clause of clauses) {
      if (/^\s*(?:what if|how (?:do|should) i respond if|what should i do if|if (?:someone|a person|i)|que (?:hago|pasaria) si|in (?:a |this )?(?:simulation|scenario)|hypothetically)\b/.test(clause) &&
          !/\b(?:right now|currently|ahora mismo|en este momento)\b/.test(clause)) continue;
      if (/^\s*(?:(?:yesterday|last week|earlier)\s+i (?:said|thought)|i (?:said|thought) (?:yesterday|last week|earlier)|i (?:never|didnt|did not|am not|m not) (?:say|mean|write|saying)|(?:ayer|la semana pasada) (?:dije|pense)|the (?:phrase|sentence|quote)|grammar example)\b/.test(clause)) continue;
      const risk = mentalRisk(clause);
      self ||= risk.self;
      other ||= risk.other;
      if (unresponsiveReport(clause)) physical = 'unresponsive';
      if (physical) continue;
      if (bloodCough(clause) && !/\b(?:what (?:causes|is)|why (?:do|does)|symptoms of|(?:he|she|they) (?:was|were) coughing|stopped coughing|no longer coughing|dejo de toser)\b/.test(clause) &&
          /(?:^\s*(?:coughing|coughing up|tosiendo)\b|\b(?:my|our|their|the|a)\s+(?:crew ?mate|friend|colleague|partner|person|patient)\b|\b(?:i|im|we|hes|shes|theyre|he|she|they|companer[oa]|tripulante)\b)/.test(clause)) physical = 'medical';
      const medical = /\b(?:(?:i|he|she|they|we) (?:cant|cannot|can not) breathe|(?:i|he|she|they) (?:am having|is having|are having|have|has) (?:chest pain|trouble breathing)|(?:i|he|she|they) just (?:fainted|passed out)|(?:my|his|her|their) (?:throat is closing|face is drooping)|(?:the |my |his |her |their )?bleeding (?:wont|will not) stop|no puedo respirar|(?<!\bno\s)(?:tengo (?:dolor (?:en el|de) pecho|dificultad para respirar)|me (?:duele el pecho|acabo de desmayar))|se (?:me |le )?cierra la garganta|(?:la )?hemorragia no para)\b/;
      if (medical.test(clause) || /\b(?:me falta el aire|my chest hurts|i (?:can barely breathe|am struggling to breathe|m struggling to breathe)|(?:my|our) crew ?mate (?:[a-z]+ )?(?:cant breathe|cannot breathe|collapsed|just fainted))\b/.test(clause)) physical = 'medical';
      if (/\b(?:(?:i|he|she|they) (?:just )?(?:overdosed|took an overdose)|(?:i|he|she|they) think (?:i|he|she|they) (?:am|is|are) having (?:a stroke|a heart attack)|(?:acabo de tomar una sobredosis|creo que estoy sufriendo un derrame))\b/.test(clause)) physical = 'medical';
    }
    return physical || (self && other ? 'self-and-others' : self ? 'self-harm' : other ? 'violence' : '');
  }

  function emergencyReply(kind, report = '', env = 'earth') {
    const earth = env === 'earth';
    const action = earth ? 'Call local emergency services now.' :
      'Alert the crew medical officer and activate the onboard emergency procedure now.';
    if (kind === 'violence' || kind === 'self-harm' || kind === 'self-and-others') {
      const gettingHelp = earth ? action : 'Alert the crew medical officer or mission control now.'+
        (kind === 'self-harm' ? ' Ask another crew member for help.' : '');
      const distance = kind === 'self-and-others' ? 'Move away from other people and anything you could use to cause harm, if you can do so safely.' :
        kind === 'violence' ? 'Give the other person space. Move away from them and from anything you could use to hurt them, if you can do so safely.' :
        'Put distance between yourself and anything you could use to hurt yourself. Ask a trusted person to stay with you.';
      const danger = kind === 'self-and-others' ? 'Tell responders you might hurt yourself and someone else, and say where you are.' :
        kind === 'violence' ? 'Tell responders you are afraid you may hurt someone, and say where you are.' :
        'Tell responders you may hurt yourself, and say where you are.';
      const paragraph = '[[serio]] I’m glad you told me. Let’s get help now.\n1. '+
        (kind === 'violence' ? distance+'\n2. '+gettingHelp : gettingHelp+'\n2. '+distance)+'\n3. '+danger;
      return {text:paragraph,paragraph,urgent:true,
        sources:[{ref:1,title:'NHS · Urgent help for a mental health emergency',url:'https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/'}]};
    }
    if (kind === 'medical' && bloodCough(report)) {
      const paragraph = '[[serio]] Stay as calm as you can. Take these steps now.\n1. '+action+
        '\n2. Say the person is coughing up blood. Tell responders where you are, how much blood you can see, and whether breathing or alertness has changed.'+
        '\n3. Stay with them if it is safe, keep watching their breathing and responsiveness, and follow the responders’ instructions.'+
        (/\bbleeding\b/i.test(report) ? '\n4. If there is also a separate severe external wound, use firm direct pressure with a dressing if you are trained and it is safe.' : '');
      return {text:paragraph,paragraph,urgent:true,sources:[
        {ref:1,title:'NHS · Coughing up blood',url:'https://www.nhs.uk/symptoms/coughing-up-blood/'},
        {ref:2,title:'American Red Cross · Severe internal bleeding',url:'https://www.redcross.org/take-a-class/resources/learn-first-aid/bleeding-life-threatening-internal'},
      ]};
    }
    if (kind !== 'unresponsive') {
      const paragraph = '[[serio]] Stay as calm as you can. Take these steps now.\n1. '+action+
        '\n2. Tell them what is happening, where you are and when it started.\n3. Stay with the person if it is safe and follow the responders’ directions.';
      return {text:paragraph,paragraph,urgent:true,
        sources:[{ref:1,title:'MedlinePlus · Recognizing medical emergencies',url:emergencySource}]};
    }
    const reportText = report.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’']/g,'');
    const absent = /\b(?:not breathing|isnt breathing|stopped breathing|only gasping|no respira|dejo de respirar|solo jadea)\b/.test(reportText);
    const steps = [...(earth ? [action] : ['Alert the crew medical officer now.','Activate the onboard emergency procedure now.']),
      'Tell responders the person won’t wake up and whether they are breathing normally.'];
    if (!absent) steps.push('Stay with them and keep checking their breathing.');
    steps.push('If they are not breathing normally or are only gasping, start CPR according to your training.');
    steps.push(earth ? 'If CPR is needed, use a portable defibrillator as soon as available.' :
      'If CPR is needed, use the defibrillator once the casualty is secured, following the onboard checklist.');
    if (earth && !absent) steps.push('If breathing normally, place them on their side if safe and no suspected head, neck or back injury.');
    const paragraph = '[[serio]] Stay as calm as you can. Take these steps now.\n'+
      steps.map((step,index) => (index+1)+'. '+step).join('\n');
    return {text:paragraph,paragraph,urgent:true,
      sources:[{ref:1,title:'American Red Cross · Unresponsive and breathing',url:'https://www.redcross.org/take-a-class/resources/learn-first-aid/unresponsive-and-breathing-person'}]};
  }

  function interrupt(current, prompt, report, kind) {
    return {...current,next:undefined,emergency:kind,values:{...current.values,impact:'urgent'},
      turns:[...current.turns,{role:'assistant',content:prompt.prompt},{role:'user',content:report}]};
  }

  function embeddedReadings(text) {
    const readings = {};
    const patterns = {
      sleep:/\b(?:i slept|slept|dorm[íi])\s+(?:(?:only|just|solo|apenas)\s+)?(\d{1,2}(?:[.,]\d)?)\s*(?:hours?|hrs?|horas?|h)\b/i,
      mood:/\b(?:mood|[áa]nimo)\s*(?:is|was|at|de|es|:|=)?\s*(\d{1,2})\s*(?:\/\s*|out of\s+|de\s+)10\b/i,
      pulse:/\b(?:pulse|pulso|heart rate)\s*(?:is|was|at|de|es|:|=)?\s*(\d{1,3})\s*bpm\b/i,
      pressure:/\b(?:blood pressure|presi[óo]n(?: arterial)?)\s*(?:is|was|at|de|es|:|=)?\s*(\d{2,3}\s*\/\s*\d{2,3})\b/i,
      temp:/\b(?:temperature|temperatura)\s*(?:is|was|at|de|es|:|=)?\s*(\d{2}(?:[.,]\d)?)\s*°?\s*C\b/i,
      glucose:/\b(?:glucose|glucosa|blood sugar)\s*(?:is|was|at|de|es|:|=)?\s*(\d{1,4})\s*mg\s*\/\s*dL\b/i
    };
    for (const clause of text.split(/(?<=[.!?;])\s+|\n|\b(?:but|pero)\b/i)) {
      if (/\?|\b(?:if|hypothetically|for example|not sure|used to|last week|\w+ days ago|por ejemplo|no se|si fuera|semana pasada|hace \w+ d[ií]as)\b/i.test(clause) ||
          /\b(?:crew ?mate(?:'s)?|friend(?:'s)?|partner(?:'s)?|his|her|their|he slept|she slept|they slept|mi compa[nñ]er[oa]|su pulso|su presi[oó]n)\b/i.test(clause)) continue;
      for (const [key,pattern] of Object.entries(patterns)) {
        if (key !== 'sleep' && /\b(?:yesterday|last night|ayer|anoche)\b/i.test(clause)) continue;
        const match = pattern.exec(clause);
        if (!match) continue;
        const lead = clause.slice(0,match.index);
        if (/\b(?:target|goal|should|would|normal|usual|ambient|room|cabin|outside|air|water|objetivo|deber[ií]a|ambiente|cabina)\b/i.test(lead)) continue;
        try { readings[key] = E.parseMetric(E.metricByKey(key),match[1]); }
        catch { /* Leave an invalid reading available for the user to enter. */ }
      }
    }
    return readings;
  }

  function applyContext(current, covered) {
    const answers = {...current.answers};
    const reports = current.turns.filter(turn => turn.role === 'user' && turn.content !== 'Skipped');
    for (const item of Array.isArray(covered) ? covered : []) {
      const key = item?.key;
      const answer = typeof item?.answer === 'string' ? item.answer.trim() : '';
      const validKey = ['onset','symptomDetail','symptomContext',...freeTextOptions].includes(key) ||
        (typeof key === 'string' && key.startsWith('context-') && measures.includes(key.slice(8)));
      if (!validKey || Object.hasOwn(answers,key) || answer.length < 9 || answer.length > 260 ||
          !reports.some(turn => turn.content.includes(answer))) continue;
      if (key === 'symptomDetail' && moodReasonReported(current) &&
          !/\b(?:would like|want to|plan to|helps?|would help|like to try|quiero|planeo|ayud\w*|me gustar[ií]a)\b/i.test(answer)) continue;
      if (Object.entries(answers).some(([field,value]) => field !== 'symptoms' && typeof value === 'string' && value === answer)) continue;
      answers[key] = answer;
    }
    return {...current,answers};
  }

  function apply(current, prompt, input, skip) {
    const raw = input.trim();
    const emergency = !skip && emergencyKind(raw);
    if (emergency) return interrupt(current,prompt,raw,emergency);
    if (!skip && !raw && prompt.key !== 'note') throw new Error('Enter an answer or choose an option.');
    if (skip && !prompt.optional) throw new Error('Answer this question to continue.');
    let value = skip ? '' : raw;
    const update = !skip && symptomFields.includes(prompt.key) ? statusUpdate(raw) : '';
    if (update) {
      const readings = embeddedReadings(raw);
      const answers = {...current.answers,...readings,symptoms:'',statusUpdate:raw};
      for (const key of symptomFields.slice(1)) delete answers[key];
      return {...current,next:undefined,clarificationFor:undefined,topic:undefined,answers,values:{...current.values,...readings,impact:'none'},
        acknowledgment:statusAcknowledgment(update),
        turns:[...current.turns,{role:'assistant',content:prompt.prompt},{role:'user',content:raw}]};
    }
    if (!skip && asksQuestion(raw)) {
      const explanation = explainQuestion(prompt,raw);
      return {...current,clarificationFor:prompt.key,acknowledgment:undefined,
        turns:[...current.turns,{role:'assistant',content:prompt.prompt},{role:'user',content:raw},
          {role:'assistant',content:explanation || 'Let’s answer your question before continuing the check-in.'}]};
    }
    if (prompt.options && value) {
      const match = Object.keys(prompt.options).find(key => key === value.toLowerCase() || prompt.options[key].toLowerCase() === value.toLowerCase());
      if (!match && !prompt.freeText) throw new Error('Choose one of the answers.');
      if (match) value = match;
    }
    const readings = skip || prompt.key === 'urgent' || trainingScenario(raw) ? {} : embeddedReadings(raw);
    let measurementDeferred = false;
    if (prompt.metric && value) {
      const clean = value.replace(/\s*(?:degrees?\s*(?:celsius|c)|°?\s*c|bpm|mm\s*hg|mg\s*\/\s*dl|hours?|hrs?|h|\/\s*10)\s*$/i,'');
      const unavailable = /^(?:i (?:do not|don['’]?t) know|not sure|no (?:reading|measurement|thermometer|meter)|i (?:haven['’]?t (?:measured|checked)|can['’]?t measure)|no s[eé]|no (?:lo )?he medido|no tengo (?:term[oó]metro|medidor))\b/i;
      if (Object.hasOwn(readings,prompt.key)) value = readings[prompt.key];
      else if (unavailable.test(raw)) value = '';
      else if (Object.keys(readings).length) measurementDeferred = true;
      else value = E.parseMetric(prompt.metric,clean);
    }
    const values = {...current.values};
    if (prompt.key === 'symptoms') {
      if (routineResponse(value)) value = '';
      const topic = symptomTopic({answers:{symptoms:value}});
      values.impact = value && !['mood','sleep'].includes(topic) ? 'mild' : 'none';
    }
    if (prompt.key === 'urgent' && value !== 'no') values.impact = 'urgent';
    if (prompt.key === 'urgent' && value === 'no' && values.impact === 'urgent') delete values.impact;
    if (!measurementDeferred && (prompt.metric || ['context','note'].includes(prompt.key) ||
        (freeTextOptions.includes(prompt.key) && (!value || Object.hasOwn(prompt.options,value))))) {
      if (value === '') delete values[prompt.key];
      else values[prompt.key] = value;
    }
    if (prompt.freeText && value && !Object.hasOwn(prompt.options,value)) delete values[prompt.key];
    const displayed = skip ? 'Skipped' : prompt.options?.[value] || (prompt.metric && (typeof value === 'number' || Array.isArray(value)) &&
      !Object.keys(readings).length ? E.format(value)+' '+prompt.metric.unit : raw || 'No additional note');
    const answers = {...current.answers,...readings,...(measurementDeferred ? {} : {[prompt.key]:value})};
    return {...current,next:undefined,clarificationFor:undefined,acknowledgment:undefined,values:{...values,...readings},answers,
      turns:[...current.turns,{role:'assistant',content:prompt.prompt},{role:'user',content:displayed}]};
  }

  function asksQuestion(text) {
    const value = normalize(text).trim();
    return /\?/.test(value) || /^(?:(?:what|why|how|when|where) (?:do|does|did|is|are|am|can|could|would|should|much|many|often|long|to|about|exactly|if)|can you|could you|do you mean|que significa|que quieres decir|como (?:puedo|se|debo)|por que|puedes explicar)\b/.test(value);
  }

  function explainQuestion(prompt, text) {
    const value = normalize(text);
    if (/\b(?:waking up|wake up|despert\w*)\b/.test(value) && /sleep|dorm|wak/i.test(prompt.prompt)) {
      return 'By waking up, I mean becoming awake during the time you intended to sleep, including waking repeatedly or too early.';
    }
    if (prompt.metric && /\b(?:what|mean|significa|which unit|que unidad)\b/.test(value)) {
      return 'I’m asking for your recorded '+prompt.metric.label.toLowerCase()+' in '+prompt.metric.unit+'. '+prompt.metric.prompt;
    }
    const explanations = {
      onset:'I mean when you first noticed this change, such as today, yesterday or a few days ago.',
      impact:'I mean whether the symptom makes your usual tasks harder, or whether you need help now.',
      moodImpact:'I mean whether your mood has made it harder to focus, work or get through your usual duties.',
      'context-sleep':'I’m asking what affected your sleep, such as your schedule, waking during sleep or difficulty falling asleep.',
      symptoms:'You can describe physical symptoms, changes in sleep or how you feel emotionally.'
    };
    return /\b(?:mean|explain|meaning|significa|explica|quieres decir)\b/.test(value) ? explanations[prompt.key] || '' : '';
  }

  function toEntry(current, previous) {
    const details = Object.entries(current.answers).flatMap(([key,value]) => {
      const title = detailTitles[key] ||
        (key.startsWith('context-') ? E.metricByKey(key.slice(8))?.label+' context' : '');
      return title && value && !(freeTextOptions.includes(key) && value === current.values[key]) ? [{title,answer:value}] : [];
    });
    // Preserve a previous entry when a repeat interview ends before asking for every reading.
    const values = {...(previous?.sample === false ? previous.values : {}),...current.values};
    if (current.answers.urgent === 'no' && !Object.hasOwn(current.values,'impact') && values.impact === 'urgent') delete values.impact;
    for (const [key,value] of Object.entries(current.answers)) {
      if (value === '' && (E.metricByKey(key) || ['moodImpact','context','note'].includes(key))) delete values[key];
      if (freeTextOptions.includes(key) && value !== current.values[key]) delete values[key];
    }
    const answered = new Set(details.map(item => item.title));
    const symptomTitles = Object.values(detailTitles).filter(title => title !== detailTitles.moodImpact);
    details.push(...(previous?.details || []).filter(item => !answered.has(item.title) &&
      !(Object.hasOwn(current.answers,'symptoms') && symptomTitles.includes(item.title))));
    const entry = {env:current.env,date:current.date,values,image:current.image,details,sample:false,review:previous?.review || ''};
    if ((urgent(current) || E.hasLowBodyTemperature(entry)) && !entry.review) entry.review = new Date().toISOString();
    return entry;
  }

  root.NetinCheckIn = {create,question,questions,isAdaptiveQuestion,recap,restore,apply,applyContext,urgent,toEntry,differingReadings,symptomTopic,symptomQuestions,moodReasonReported,
    statusUpdate,routineResponse,trainingScenario,bloodCough,emergencyKind,emergencyReply,interrupt,emergencySource,asksQuestion,explainQuestion};
})(globalThis);
