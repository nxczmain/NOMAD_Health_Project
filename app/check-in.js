'use strict';

(function (root) {
  const E = root.AstraEngine;
  const emergencySource = 'https://medlineplus.gov/ency/article/001927.htm';
  const urgentPrompt = 'Before we begin, are you experiencing trouble breathing, chest pain, sudden confusion, fainting, or bleeding that will not stop?';
  const yesNo = {yes:'Yes',no:'No',unsure:'Not sure'};
  const measures = ['temp','pulse','pressure','sleep','mood','glucose'];
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
    temp: 'Where and how did you take the temperature, and was the method different from usual?',
    pulse: 'Were you resting, exercising, or feeling symptoms when you measured your pulse?',
    pressure: 'Were you seated and at rest when you took the blood pressure reading?',
    sleep: 'Was the shorter sleep due to a schedule change, waking up, or difficulty falling asleep?',
    mood: 'What affected your mood today, and did it make your duties harder?',
    glucose: 'When did you last eat relative to the glucose measurement?'
  };
  const detailTitles = {symptoms:'Symptoms',onset:'Onset and course',symptomDetail:'Symptom follow-up',symptomContext:'Additional symptom context'};

  function routineResponse(text) {
    const normalized = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')
      .replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
    const denial = /^(?:none(?: at all)?|no(?: new symptoms| symptoms| issues| problems| concerns)?|nothing(?: to report| new)?|all good|i (?:feel|m|am) (?:fine|well|good)|ningun[oa]|no(?: tengo(?: sintomas| molestias))?|nada(?: que reportar)?|sin (?:sintomas|molestias|novedades)|me siento bien|todo bien)(?:\s+|$)/;
    const routine = /^(?:just\s+)?(?:(?:the|a|my)\s+)?(?:(?:normal|routine|regular|daily)\s+)?check\s?in$|^(?:(?:solo|nomas)\s+)?(?:(?:el|un|la|una)\s+)?(?:(?:chequeo|registro|revision)(?:\s+(?:diari[oa]|habitual|normal|de rutina))?|(?:check\s?in)(?:\s+(?:normal|diario|de rutina))?)$/;
    const remainder = normalized.replace(denial,'');
    const improvement = /^(?:i(?: m)? (?:feel(?:ing)?|am) (?:much |a lot )?better|me siento (?:mucho |bastante )?mejor)(?: (?:now|today|i slept well|i slept better|ya dormi bien|dormi bien|ya))*(?: thanks| gracias)?$/;
    return (denial.test(normalized) && !remainder) || routine.test(remainder) || improvement.test(normalized);
  }

  function restore(current) {
    const {answers,values} = current;
    if (!answers.symptoms || urgent(current) || !routineResponse(answers.symptoms)) return current;
    const cleaned = {...answers,symptoms:''};
    for (const key of ['onset','impact','symptomDetail','symptomContext']) delete cleaned[key];
    return {...current,answers:cleaned,values:{...values,impact:'none'},next:undefined};
  }

  function create(env, date, previous, legacy, personal = {}) {
    const values = previous && !previous.sample ? {...previous.values,...legacy?.values} : {...legacy?.values};
    const answers = Object.fromEntries(measures.filter(key => values[key] != null).map(key => [key,values[key]]));
    return {mode:'chat',env,date,values,answers,turns:[],personal,
      image:legacy?.image ?? previous?.image ?? null};
  }

  function urgent(current) {
    if (E.hasLowBodyTemperature(current)) return 'temperature';
    if (['yes','unsure'].includes(current.answers.urgent) || current.values.impact === 'urgent') return 'symptoms';
    return '';
  }

  function symptomTopic(current) {
    const text = (current.answers.symptoms || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    if (/\b(nause\w*|vomit\w*|throw(?:ing)? up|maread[oa]\b.*estomago)/.test(text)) return 'nausea';
    if (/\b(dizz\w*|vertigo|mare\w*|unsteady|balance)\b/.test(text)) return 'dizziness';
    if (/\b(headache|migraine|dolor de cabeza)\b/.test(text)) return 'headache';
    if (/\b(vision|eyesight|blurr\w*|vista borrosa|veo borros[oa]|flashes|destellos)\b/.test(text)) return 'vision';
    if (/\b(dust|smoke|fumes|exposure|polvo|humo)\b/.test(text)) return 'exposure';
    if (/\b(lonel\w*|homesick|isolated|miss (?:home|my family)|anxious|sad|stressed|soledad|sol[oa]|ansios[oa]|triste|estres\w*|extrano a)\b/.test(text)) return 'mood';
    if (/\b(sleep|slept|insomnia|nightmares|sueno|dormi|dormir|desperte)\b/.test(text)) return 'sleep';
    if (/\b(fatigu\w*|tired|exhaust\w*|agotad[oa]|cansad[oa])\b/.test(text)) return 'fatigue';
    return 'general';
  }

  function differingReadings(current) {
    return E.metrics.filter(metric => E.status(metric, current.values[metric.key]) === 'review');
  }

  function questions(current) {
    const {answers,values} = current;
    const personal = current.personal || {};
    if (urgent(current)) return [];
    if (!Object.hasOwn(answers,'urgent')) return [{key:'urgent',prompt:urgentPrompt,options:yesNo}];
    if (!Object.hasOwn(answers,'symptoms')) {
      const name = personal.name ? ', '+personal.name : '';
      const lastSleep = personal.recent?.sleep;
      const context = personal.recentConcern ? ' Yesterday you mentioned «'+personal.recentConcern+'».' :
        lastSleep != null && E.status(E.metricByKey('sleep'),lastSleep) === 'review' ? ' At your last check-in, you reported sleeping '+lastSleep+' h.' : '';
      return [{key:'symptoms',prompt:'Hello'+name+'.'+context+' How are you feeling today, physically and emotionally?'}];
    }
    const followups = [];
    if (answers.symptoms) {
      const topic = current.topic || symptomTopic(current);
      if (!Object.hasOwn(answers,'onset') && !/\b(today|yesterday|since|this morning|last night|hours? ago|desde|ayer|hoy|anoche)\b/i.test(answers.symptoms)) {
        followups.push({key:'onset',prompt:(topic === 'mood' ? 'Thanks for sharing. When did you start feeling this way?' :
          'When did you first notice it?'),optional:true});
      }
      if (!Object.hasOwn(answers,'impact') && !['mood','sleep'].includes(topic)) followups.push({key:'impact',prompt:'Does it make any of your duties harder?',options:{mild:'I can do my duties',task:'It affects my duties',urgent:'I need help now'}});
      if (!Object.hasOwn(answers,'symptomDetail')) followups.push({key:'symptomDetail',prompt:symptomQuestions[topic],optional:true});
      if (answers.symptomDetail && followUpQuestions[topic] && !Object.hasOwn(answers,'symptomContext')) followups.push({
        key:'symptomContext',prompt:topic === 'mood' ? 'What would feel most helpful right now: talking it through, taking a quiet moment, or checking in with someone on your crew?' :
          followUpQuestions[topic],optional:true
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
    if (!Object.hasOwn(answers,'moodImpact') && (values.mood == null || values.mood <= 6 || symptomTopic(current) === 'mood')) {
      return [{key:'moodImpact',prompt:'How much did your mood affect your focus or duties?',options:E.dutyImpact,optional:true}];
    }
    if (!Object.hasOwn(answers,'context') && (personal.changedEnvironment || symptomTopic(current) === 'exposure')) {
      return [{key:'context',prompt:E.environments[current.env].question,optional:true}];
    }
    if (!Object.hasOwn(answers,'note')) return [{key:'note',prompt:'Anything else you want to add before saving? You can attach a photo.',optional:true}];
    return [];
  }

  function question(current) {
    const available = questions(current);
    const next = available.find(item => item.key === current.next?.key);
    return next ? {...next,prompt:current.next.prompt} : available[0];
  }

  function unresponsiveReport(text) {
    const folded = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’']/g,'');
    if (/\b(?:responding to (?:my |the )?(?:texts?|messages?|emails?)|no responde (?:a mis mensajes|al correo))\b/.test(folded) &&
        !/\b(?:breath\w*|respira\w*|unconscious|inconsciente)\b/.test(folded)) return false;
    if (/\b(?:unresponsive|unconscious|inconsciente)\b/.test(folded) && !/\b(?:not |no esta |never )(?:unresponsive|unconscious|inconsciente)\b/.test(folded)) return true;
    return /\b(?:crew ?mate|partner|companion|colleague|companer[oa]|tripulante|he|she|person|persona)\b/.test(folded) &&
      /\b(?:is not responding|isnt responding|wont respond|no response|cannot wake|cant wake|wont wake|no (?:responde|reacciona|despierta))\b/.test(folded);
  }

  function emergencyReport(text) {
    if (unresponsiveReport(text)) return true;
    return /\b(?:i (?:can(?:not|['’]t) breathe|(?:am having|have) (?:chest pain|trouble breathing)|just (?:fainted|passed out)|(?:want|plan) to (?:kill myself|end my life))|no puedo respirar|(?<!\bno\s)(?:tengo (?:dolor (?:en el|de) pecho|dificultad para respirar)|me (?:duele el pecho|acabo de desmayar)|(?:quiero|voy a) (?:suicidarme|quitarme la vida)))\b/i.test(text);
  }

  function embeddedReadings(text) {
    const readings = {};
    const patterns = {
      sleep:/\b(?:slept|dorm[íi])\s+(\d{1,2}(?:[.,]\d)?)\s*(?:hours?\b|horas?\b|h\b)/i,
      mood:/\b(?:mood|[áa]nimo)\s*(?:is|at|de|es|:|=)?\s*(\d{1,2})\s*\/\s*10\b/i,
      pulse:/\b(?:pulse|pulso|heart rate)\s*(?:is|at|de|es|:|=)?\s*(\d{1,3})\s*bpm\b/i,
      pressure:/\b(?:blood pressure|presi[óo]n)\s*(?:is|at|de|es|:|=)?\s*(\d{2,3}\s*\/\s*\d{2,3})\b/i,
      temp:/\b(?:temperature|temperatura)\s*(?:is|at|de|es|:|=)?\s*(\d{2}(?:[.,]\d)?)\s*°?\s*C\b/i,
      glucose:/\b(?:glucose|glucosa)\s*(?:is|at|de|es|:|=)?\s*(\d{1,4})\s*mg\s*\/\s*dL\b/i
    };
    for (const [key,pattern] of Object.entries(patterns)) {
      const match = pattern.exec(text);
      if (!match) continue;
      try { readings[key] = E.parseMetric(E.metricByKey(key),match[1]); }
      catch { /* Let the dedicated measurement question request a valid value. */ }
    }
    return readings;
  }

  function apply(current, prompt, input, skip) {
    const raw = input.trim();
    if (!skip && !raw && prompt.key !== 'note') throw new Error('Enter an answer or choose an option.');
    if (skip && !prompt.optional) throw new Error('Answer this question to continue.');
    let value = skip ? '' : raw;
    if (prompt.options && value) {
      const match = Object.keys(prompt.options).find(key => key === value.toLowerCase() || prompt.options[key].toLowerCase() === value.toLowerCase());
      if (!match) throw new Error('Choose one of the answers.');
      value = match;
    }
    if (prompt.metric && value) {
      const clean = value.replace(/\s*(?:degrees?\s*(?:celsius|c)|°?\s*c|bpm|mm\s*hg|mg\s*\/\s*dl|hours?|hrs?|h|\/\s*10)\s*$/i,'');
      value = E.parseMetric(prompt.metric,clean);
    }
    const values = {...current.values};
    if (prompt.key === 'symptoms') {
      if (routineResponse(value)) value = '';
      const topic = symptomTopic({answers:{symptoms:value}});
      values.impact = value && !['mood','sleep'].includes(topic) ? 'mild' : 'none';
    }
    if (prompt.key === 'urgent' && value !== 'no') values.impact = 'urgent';
    if (prompt.key === 'urgent' && value === 'no' && values.impact === 'urgent') delete values.impact;
    if (prompt.metric || ['impact','moodImpact','context','note'].includes(prompt.key)) {
      if (value === '') delete values[prompt.key];
      else values[prompt.key] = value;
    }
    // Explicit current emergency statements also interrupt free-text follow-ups.
    if (!prompt.metric && !prompt.options && emergencyReport(raw)) values.impact = 'urgent';
    const readings = prompt.key === 'symptoms' ? embeddedReadings(raw) : {};
    const displayed = skip ? 'Skipped' : prompt.options?.[value] || (prompt.metric ? E.format(value)+' '+prompt.metric.unit : raw || 'No additional note');
    return {...current,next:undefined,values:{...values,...readings},answers:{...current.answers,...readings,[prompt.key]:value},
      turns:[...current.turns,{role:'assistant',content:prompt.prompt},{role:'user',content:displayed}]};
  }

  function toEntry(current, previous) {
    const details = Object.entries(current.answers).flatMap(([key,value]) => {
      const title = detailTitles[key] ||
        (key.startsWith('context-') ? E.metricByKey(key.slice(8))?.label+' context' : '');
      return title && value ? [{title,answer:value}] : [];
    });
    // Preserve a previous entry when a repeat interview ends before asking for every reading.
    const values = {...(previous?.sample === false ? previous.values : {}),...current.values};
    if (current.answers.urgent === 'no' && !Object.hasOwn(current.values,'impact') && values.impact === 'urgent') delete values.impact;
    for (const [key,value] of Object.entries(current.answers)) {
      if (value === '' && (E.metricByKey(key) || ['moodImpact','context','note'].includes(key))) delete values[key];
    }
    const answered = new Set(details.map(item => item.title));
    const symptomTitles = Object.values(detailTitles);
    details.push(...(previous?.details || []).filter(item => !answered.has(item.title) &&
      !(Object.hasOwn(current.answers,'symptoms') && symptomTitles.includes(item.title))));
    const entry = {env:current.env,date:current.date,values,image:current.image,details,sample:false,review:previous?.review || ''};
    if ((urgent(current) || E.hasLowBodyTemperature(entry)) && !entry.review) entry.review = new Date().toISOString();
    return entry;
  }

  root.NetinCheckIn = {create,question,questions,restore,apply,urgent,toEntry,differingReadings,symptomTopic,symptomQuestions,
    routineResponse,unresponsiveReport,emergencyReport,emergencySource};
})(globalThis);
