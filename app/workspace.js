'use strict';

const stages = {orbit:'Orbit',earth:'Earth',mars:'Mars',transit:'Deep space',moon:'Moon'};
const metricNames = {temp:'Temperature',pulse:'Pulse',pressure:'Blood pressure',glucose:'Glucose',sleep:'Sleep',mood:'Mood'};
const healthTabs = {general:'General',physical:'Physical',mental:'Mental',skills:'Skills'};
const flowLabels = {photo:'Daily photo',check:'Daily check-in',motor:'Motor skills',journal:'Journal'};
const regions = {
  head:'Head', neck:'Neck', torso:'Chest', abdomen:'Abdomen', hip:'Hip',
  lshoulder:'Left shoulder',rshoulder:'Right shoulder',larm:'Left arm',rarm:'Right arm',
  lhand:'Left hand',rhand:'Right hand',lleg:'Left leg',rleg:'Right leg',
  lfoot:'Left foot',rfoot:'Right foot'
};
const symptoms = {pain:'Pain',stiffness:'Stiffness',weakness:'Weakness',tingling:'Tingling',irritation:'Irritation',other:'Other',resolved:'Resolved'};
let stageChoice = 'orbit';
let healthTab = 'general';
let regionChoice = {side:'front',region:'head'};
let documentQuery = '';
let summaryPending = '';
let trendMetric = 'pulse';

const stageOptions = selected => '<option value="" disabled'+(!selected ? ' selected' : '')+'>Select a stage</option>'+Object.entries(stages)
  .map(([key,label]) => '<option value="'+key+'"'+(key === selected ? ' selected' : '')+'>'+label+'</option>').join('');
const firstName = () => state.profile.name.trim().split(/\s+/)[0];
const flow = () => state.dailyFlow?.date === E.dateKey() ? state.dailyFlow : {};
const markFlow = (key, status = 'done') => save({...state,dailyFlow:{...flow(),date:E.dateKey(),[key]:status}});
const dailyJournal = () => (state.journals || []).find(item => item.date === E.dateKey());
const bodyRecords = () => state.body || [];
const flowStep = () => flow().check === 'urgent' ? undefined : Object.keys(flowLabels).find(key => !flow()[key]);
const stageField = (id, value) => field('Mission stage','<select id="'+id+'" name="stage" required>'+stageOptions(value)+'</select>');
const card = (title, content, action = '', extra = '') => '<section class="card '+extra+'"><div class="card-head"><h2>'+title+'</h2>'+action+'</div>'+content+'</section>';
const empty = text => '<p class="muted">'+text+'</p>';
const initialsOf = name => name.trim().split(/\s+/).slice(0,2).map(part => Array.from(part)[0]).join('').toUpperCase();
const portrait = (name, source, extra = '') => source ? '<img class="portrait '+extra+'" src="'+source+'" alt="Photo of'+escape(name)+'">' :
  '<span class="portrait '+extra+'" aria-hidden="true">'+escape(initialsOf(name))+'</span>';

function workflow() {
  const current = flowStep();
  const status = {done:'Done',skipped:'Skipped',urgent:'Stopped for urgent help'};
  return '<ol class="workflow" aria-label="Daily routine">'+Object.entries(flowLabels).map(([key,label]) =>
    '<li class="'+(key === current ? 'current' : flow()[key] || '')+'"'+(key === current ? ' aria-current="step"' : '')+'><span class="step-dot" aria-hidden="true"></span>'+
    '<span>'+label+'</span><small>'+ (status[flow()[key]] || (key === current ? 'In progress' : 'Pending'))+'</small></li>').join('')+'</ol>';
}

function resumeFlow() {
  if (flow().check === 'urgent') return showRoute('bot');
  const step = flowStep();
  if (step === 'photo') return openCamera('routine');
  if (step === 'check') return beginIntake();
  showRoute({motor:'motor',journal:'journal'}[step] || 'panel');
}

function vitals(entry, keys = Object.keys(metricNames)) {
  return '<div class="vitals">'+E.metrics.filter(metric => keys.includes(metric.key)).map(metric => {
    const value = entry?.values[metric.key];
    const flag = value != null && E.status(metric,value) === 'review';
    return '<div class="vital '+(flag ? 'review' : '')+'"><span>'+metricNames[metric.key]+'</span><strong>'+
      (value == null ? '—' : escape(E.format(value)))+'</strong><small>'+(value == null ? 'No reading' : escape(metric.unit))+
      (flag ? ' · Review' : '')+'</small></div>';
  }).join('')+'</div>';
}

function medicalFlags(entry) {
  if (flow().check === 'urgent') {
    return '<p class="notice critical">An urgent concern was reported today. Follow the emergency instructions in the Assistant.</p>';
  }
  if (!entry) return empty('No check-in in this stage yet.');
  const review = CI.differingReadings(entry).map(metric => metricNames[metric.key]);
  if (E.hasLowBodyTemperature(entry) || entry.values.impact === 'urgent') {
    return '<p class="notice critical">Alert the crew medical officer and follow the mission emergency procedure.</p>';
  }
  const flags = [...review.map(item => 'Review the recorded '+item.toLowerCase()+'.'),
    ...(entry.summary?.followUps || Object.values(checkFollowUps(entry)))];
  return flags.length ? '<ul class="plain-list">'+flags.map(item => '<li>'+escape(item)+'</li>').join('')+'</ul>' :
    empty('No follow-up is flagged in this check-in.');
}

function recordedSummary(summary, fallback) {
  if (!summary) return empty(fallback);
  return paragraphReply(summary);
}

function workspaceHome() {
  const profile = state.profile;
  const entry = today();
  const journal = dailyJournal();
  return pageHead('', 'Home', 'Your health and daily routine.',button('Continue routine','resume-flow','primary',!flowStep() ? 'hidden' : ''))+
    '<div class="workspace-grid"><section class="card crew-card">'+portrait(profile.name,validPhoto(crewPortrait),'large')+
    '<div><h2>'+escape(profile.name)+'</h2><p class="muted">'+escape(profile.role)+'</p>'+
    '<dl class="crew-details"><dt>Stage</dt><dd>'+stages[state.env]+'</dd><dt>Crew medical officer</dt><dd>'+escape(profile.medical || 'Not recorded')+
    '</dd><dt>Health history</dt><dd>'+escape(profile.history || 'Not recorded')+'</dd><dt>Allergies</dt><dd>'+escape(profile.allergies || 'Not recorded')+
    '</dd></dl>'+button('Retake photo','daily-camera','compact')+'</div></section>'+
    card('Daily routine',workflow(),button('Start check-in','assist-check','compact',busy ? 'disabled' : ''))+
    card('Today’s check-in',recordedSummary(entry && (entry.summary || intakeSummary(entry,CI.urgent({values:entry.values,answers:{}}))),'Your summary will appear after check-in.'))+
    card('Journal',recordedSummary(journal?.summary || (journal && {text:journal.text}),'No journal entry today.'),link('Open','journal','compact'))+
    card('Risks and follow-ups',medicalFlags(entry),link('View health','health','compact'))+
    card('Indicators',vitals(entry),'','wide')+'</div>';
}

function healthView() {
  const views = {general:generalHealth,physical:physicalHealth,mental:mentalHealth,skills:skillsHealth};
  return pageHead('', 'Health', 'Review your records and changes that need follow-up.')+
    '<div class="tabs" role="group" aria-label="Health sections">'+Object.entries(healthTabs).map(([key,label]) =>
      button(label,'health-tab',key === healthTab ? 'selected' : '', 'data-tab="'+key+'" aria-pressed="'+(key === healthTab)+'"')).join('')+'</div>'+views[healthTab]();
}

function summaryAction(area) {
  return button(summaryPending === area ? 'Working…' : 'Update with NETIN','generate-summary','compact',
    'data-area="'+area+'"'+(summaryPending || busy ? ' disabled' : ''));
}

function generalHealth() {
  const entry = today();
  const summary = state.healthSummaries?.general;
  return '<div class="workspace-grid">'+card('Vital signs',vitals(entry),'','wide')+
    card('Risks',medicalFlags(entry))+
    card('Precautions and next steps',recordedSummary(summary || entry?.summary,'NETIN can review your readings and mission documents.'),summaryAction('general'))+
    card('Seven-day trend',trendView(),'','wide')+'</div>';
}

function trendView() {
  const metric = E.metricByKey(trendMetric);
  const days = week().map(({date,entry}) => ({date,value:entry?.values[trendMetric]}));
  const number = value => Array.isArray(value) ? value[0] : value;
  const values = days.filter(day => day.value != null).map(day => number(day.value));
  const min = Math.min(...values);
  const max = Math.max(...values);
  return field('Measurement','<select id="trend-metric">'+Object.entries(metricNames).map(([key,name]) =>
    '<option value="'+key+'"'+(key === trendMetric ? ' selected' : '')+'>'+name+'</option>').join('')+'</select>')+
    (values.length ? '<ol class="trend" aria-label="'+metricNames[trendMetric]+'">'+days.map(({date,value}) => {
      const height = value == null ? 0 : max === min ? 52 : 16+76*(number(value)-min)/(max-min);
      return '<li><span class="trend-track"><span class="trend-bar '+(E.status(metric,value) === 'review' ? 'review' : '')+
        '" style="height:'+height+'%"></span></span><strong>'+(value == null ? '—' : escape(E.format(value)))+
        '</strong><small>'+formatDay(date)+'</small></li>';
    }).join('')+'</ol><p class="micro">'+escape(metric.unit)+(trendMetric === 'pressure' ? ' · Bar height shows systolic pressure.' : '')+'</p>' :
    empty('No measurements in this stage yet.'));
}

function bodyStatus(record) {
  if (!record || !record.intensity || record.symptom === 'resolved') return '';
  return record.intensity >= 7 ? 'strong' : record.intensity >= 4 ? 'medium' : 'low';
}

function bodyFigure(side) {
  return '<div class="figure-view"><h3>'+ (side === 'front' ? 'Front' : 'Back')+'</h3>'+
    '<div class="body-figure '+side+'" role="group" aria-label="'+(side === 'front' ? 'Front view' : 'Back view')+'">'+
    Object.entries(regions).map(([key,name]) => {
      const record = bodyRecords().find(item => item.side === side && item.region === key);
      const active = regionChoice.side === side && regionChoice.region === key;
      const label = (side === 'back' && key === 'torso' ? 'Upper back' : side === 'back' && key === 'abdomen' ? 'Lower back' : name);
      return '<button type="button" class="region '+key+' '+bodyStatus(record)+'" data-action="body-part" data-side="'+side+'" data-region="'+key+
        '" aria-label="'+label+(record ? ', '+symptoms[record.symptom]+' '+record.intensity+'/10' : '')+'" aria-pressed="'+active+'" title="'+label+'"></button>';
    }).join('')+'</div></div>';
}

function physicalHealth() {
  const {side,region} = regionChoice;
  const record = bodyRecords().find(item => item.side === side && item.region === region);
  const selected = side === 'back' && region === 'torso' ? 'Upper back' : side === 'back' && region === 'abdomen' ? 'Lower back' : regions[region];
  return '<div class="workspace-grid">'+card('Body map','<div class="body-map">'+bodyFigure('front')+bodyFigure('back')+'</div>'+
    '<p class="legend"><span class="dot low"></span> 1–3 <span class="dot medium"></span> 4–6 <span class="dot strong"></span> 7–10 · Reported intensity</p>')+
    card('Log a symptom','<p><strong>'+selected+'</strong> <span class="muted">· '+(side === 'front' ? 'Front' : 'Back')+'</span></p>'+
    '<form id="body-form">'+field('Symptom','<select name="symptom">'+Object.entries(symptoms).map(([key,label]) => '<option value="'+key+'">'+label+'</option>').join('')+'</select>')+
    field('Intensity (0–10)','<input name="intensity" type="number" min="0" max="10" step="1" value="'+(record?.intensity ?? 1)+'" required>')+
    field('What changed','<textarea name="notes" maxlength="600" rows="3" placeholder="When it started or what activity affects it">'+escape(record?.notes || '')+'</textarea>')+
    '<button class="button primary" type="submit">Save</button></form>')+
    card('Possible causes and considerations',recordedSummary(state.healthSummaries?.physical,'Log a symptom so NETIN can review the changes and look up relevant evidence.'),summaryAction('physical'),'wide')+'</div>';
}

function mentalHealth() {
  const entries = (state.journals || []).slice(0,5);
  return '<div class="workspace-grid">'+card('Mental health indicators',vitals(today(),['sleep','mood'])+
    recordedSummary(state.healthSummaries?.mental,'NETIN can summarize patterns in your journal entries.'),summaryAction('mental'))+
    card('Recent journals',entries.length ? entries.map(item => '<article class="record-item"><strong>'+formatDay(item.date)+'</strong><p>'+escape(item.text)+'</p></article>').join('') :
      empty('No journal entries yet.'),link('Write','journal','compact'))+'</div>';
}

function skillsHealth() {
  const recent = motorHistory().slice().sort((a,b) => b.date.localeCompare(a.date))[0];
  return '<div class="workspace-grid">'+card('Performance summary',recordedSummary(state.healthSummaries?.skills,'Ask NETIN to compare your recorded results.'),summaryAction('skills'))+
    card('Latest test',recent ? motorSummary(recent) : empty('No results yet.'),link('Play','motor','compact'))+
    card('Test history',motorTable(E.weekly([],state.env,30)),'','wide')+'</div>';
}

function journalView() {
  const current = dailyJournal();
  return pageHead('', 'Daily journal', 'Describe how today went and what you want to remember.')+workflow()+
    card('Your entry','<form id="journal-form">'+field('What happened today?','<textarea name="note" rows="5" maxlength="2400" required placeholder="Describe your shift, how you felt, or what is on your mind.">'+
      escape(current?.text || '')+'</textarea>')+'<button type="submit" class="button primary" '+(summaryPending ? 'disabled' : '')+'>'+
      (summaryPending === 'journal' ? 'Saving with NETIN…' : 'Save with NETIN')+'</button> '+link('Back to Home','panel')+'</form>'+
      (current?.summary ? recordedSummary(current.summary,'') : ''),'','journal-card');
}

function recordsView() {
  const byDay = new Map();
  const put = (date, kind, item) => {
    if (!date) return;
    if (!byDay.has(date)) byDay.set(date,{});
    (byDay.get(date)[kind] ||= []).push(item);
  };
  state.records.forEach(item => put(item.date,'check',item));
  (state.journals || []).forEach(item => put(item.date,'journal',item));
  bodyRecords().forEach(item => put(item.date,'body',item));
  (state.motorLogs || []).forEach(item => put(item.date,'motor',item));
  (state.conversations || []).forEach(item => put(item.date,'chat',item));
  dailyPhotos.forEach((photo,date) => put(date,'photo',photo));
  return pageHead('', 'Records', 'Your history by day and mission stage.',link('Report and trends','semana','primary'))+
    (byDay.size ? [...byDay].sort(([a],[b]) => b.localeCompare(a)).map(([day,items],index) =>
      '<details class="card day-record" '+(index === 0 ? 'open' : '')+'><summary>'+formatDay(day)+' <small>'+escape(day)+'</small></summary>'+
      (items.photo ? dailyPhoto(day) : '')+
      (items.check || []).map(item => '<h3>Check-in ·'+stages[item.env]+'</h3>'+vitals(item)+
        (item.details || []).map(detail => '<p><strong>'+escape(detail.title)+'</strong> '+escape(detail.answer)+'</p>').join('')+
        (item.values.note ? '<p>'+escape(item.values.note)+'</p>' : '')+preview(item.image)+recordedSummary(item.summary,'')).join('')+
      (items.journal || []).map(item => '<h3>Journal · '+stages[item.env]+'</h3><p>'+escape(item.text)+'</p>'+recordedSummary(item.summary,'')).join('')+
      (items.motor || []).map(item => '<h3>'+escape(Motor.games[Motor.gameOf(item)].name)+' · '+stages[item.env]+'</h3>'+motorSummary(item)).join('')+
      (items.body || []).map(item => '<p><strong>'+regions[item.region]+' · '+symptoms[item.symptom]+'</strong> '+item.intensity+'/10 '+escape(item.notes)+'</p>').join('')+
      (items.chat?.length ? '<details><summary>Conversations ('+items.chat.length+')</summary>'+items.chat.map(item =>
        '<p><strong>'+(item.role === 'assistant' ? 'NETIN' : 'You')+'</strong> '+escape(item.content)+'</p>').join('')+'</details>' : '')+'</details>').join('') : empty('No records yet.'));
}

function documentsView() {
  const query = documentQuery.toLocaleLowerCase().trim();
  const matches = library.filter(item => item.relative.toLocaleLowerCase().includes(query) || item.markdown.toLocaleLowerCase().includes(query));
  return pageHead('', 'Documents', 'Mission documents NETIN can consult.',button('Load Markdown folder','choose-markdown','primary',missionIndexing ? 'disabled' : ''))+
    '<input id="markdown-files" type="file" webkitdirectory multiple hidden>'+
    card('Local library','<form id="document-search" class="search-form">'+field('Search','<input name="query" type="search" value="'+escape(documentQuery)+'" placeholder="Name or content">')+
      '<button class="button">Search</button></form><p class="muted" role="status">'+escape(missionImport || matches.length+' of '+library.length+' documents')+'</p>'+
      (libraryError ? '<p class="error">'+escape(libraryError)+'</p>' : '')+
      (matches.length ? matches.map(item => '<div class="document-row"><span>'+escape(item.relative)+'</span>'+
        button('Open','read-markdown','compact','data-id="'+escape(item.id)+'"')+'</div>').join('') : empty(library.length ? 'No matches.' : 'Load your mission Markdown folder.')));
}

function settingsView() {
  const status = {unchecked:'Not checked',checking:'Checking…',ready:'Qwen is ready',missing:'Model missing',offline:'Ollama is offline'};
  return pageHead('', 'Settings', 'Profile, voice and local model settings.')+'<div class="workspace-grid">'+
    card('Profile','<p>'+escape(state.profile.name)+'</p><div class="actions">'+button('Edit profile','profile')+button('Sign out','exit-crew')+'</div>')+
    card('Voice',empty('NETIN can read its replies aloud.')+button('Automatic read-aloud','toggle-speech','','aria-pressed="'+readAloud+'"'))+
    card('Local assistant','<p>'+status[model]+'</p>'+button('Check connection','model','',model === 'checking' || busy ? 'disabled' : ''))+
    card('Mission','<div class="actions">'+button('Change mission stage','stage-menu')+button('Medical supplies','medical-supplies')+'</div>')+'</div>';
}

function setStage(next) {
  if (!Object.hasOwn(stages,next) || busy || summaryPending || motorRound || cameraScreen) return false;
  if (next === stageChoice) return true;
  const previous = stageChoice;
  try {
    localStorage.setItem(missionStageKey,next);
    if (session && !save({...state,env:next,transitions:[...state.transitions,{from:state.env,to:next,reportedAt:new Date().toISOString()}]})) {
      localStorage.setItem(missionStageKey,previous);
      return false;
    }
  } catch {
    notify('Could not save the mission stage.');
    return false;
  }
  stageChoice = next;
  selectedDay = null;
  return true;
}

function historicalContext(query = '') {
  const tokens = value => (value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').match(/[a-z]{4,}/g) || []);
  const terms = new Set(tokens(query));
  const date = E.dateKey();
  const sorted = state.records.filter(item => item.date < date && (simulation() || !item.sample)).map(item => {
    const description = [item.values.note,...(item.details || []).map(detail => detail.answer)].filter(Boolean).join(' ');
    return {date:item.date,env:stages[item.env],values:item.values,concern:description.slice(0,280),
      relevance:tokens(description).filter(term => terms.has(term)).length};
  }).sort((a,b) => b.relevance-a.relevance || b.date.localeCompare(a.date));
  return sorted.slice(0,5).map(({relevance,...item}) => item);
}

async function generateSummary(area, journal) {
  if (summaryPending || busy) return;
  const owner = session;
  summaryPending = area;
  render();
  try {
    if (missionIndexing) await missionIndexing;
    if (owner !== session) return;
    const base = crewContext('daily');
    const records = historicalContext(journal?.text || bodyRecords().slice(0,4).map(item => item.notes).join(' '));
    let summary;
    if (area === 'physical' || area === 'general') {
      const physical = area === 'physical';
      const question = physical ?
        'In one short paragraph, explain possible causes supported by the evidence, what to monitor and when to contact the crew medical officer. State uncertainty.' :
        'In one short paragraph, explain the relevant readings, evidence-based precautions and a concrete next step.';
      const body = bodyRecords().slice(0,7).map(item => ({...item,region:regions[item.region],symptom:symptoms[item.symptom]}));
      const terms = [...base.checkIns.flatMap(item => [item.note,...item.interview.map(detail => detail.answer)]),
        ...(physical ? body.map(item => item.region+' '+item.symptom+' '+item.notes) : [])].join(' ').slice(0,800);
      summary = await AI.answer(question,[],library,{...base,records,body:physical ? body : undefined},terms);
    } else {
      const journals = (state.journals || []).slice(0,6).map(item => ({date:item.date,text:item.text.slice(0,420)}));
      const games = area === 'skills' ? (state.motorLogs || []).slice().sort((a,b) => b.date.localeCompare(a.date)).slice(0,10) : undefined;
      const role = {journal:'Summarize today’s entry completely. Preserve the key events, symptoms or feelings, impact on duties and any next step mentioned.',
        mental:'Summarize reported mood, sleep and impact on duties. Describe patterns only if they recur on multiple dates.',
        skills:'Summarize comparable results and changes. Keep units, hand and environment. Avoid clinical conclusions.'}[area];
      summary = {text:await AI.reflect(role,{current:journal?.text,journals:area === 'skills' ? undefined : journals,records,games})};
    }
    if (owner !== session) return;
    summary = {...summary,date:E.dateKey(),env:state.env};
    if (journal) save({...state,journals:state.journals.map(item => item === journal ? {...item,summary} : item)});
    else save({...state,healthSummaries:{...state.healthSummaries,[area]:summary}});
    if (readAloud && ['journal','health'].includes(view())) speakReply({role:'assistant',content:summary.text,sections:summary.sections});
  } catch { if (owner === session) notify('NETIN could not generate the summary. Your records are saved.'); }
  finally { if (owner === session) { summaryPending = ''; render(); } }
}

function workspaceClick(control) {
  const {action,side,region,tab,id,area} = control.dataset;
  if (action === 'resume-flow') resumeFlow();
  else if (action === 'stage-menu') openModal('Mission stage','<form id="stage-form">'+stageField('active-stage',state.env)+'<button class="button primary">Save stage</button></form>');
  else if (action === 'health-tab' && Object.hasOwn(healthTabs,tab)) {
    healthTab = tab;
    render();
    document.querySelector('[data-tab="'+tab+'"]')?.focus();
  } else if (action === 'body-part' && ['front','back'].includes(side) && Object.hasOwn(regions,region)) {
    regionChoice = {side,region};
    render();
    $('body-form').elements.symptom.focus();
  } else if (action === 'generate-summary' && Object.hasOwn(healthTabs,area)) void generateSummary(area);
  else if (action === 'next-motor') showRoute('motor');
  else if (action === 'next-journal') {
    if (!flow().motor && !markFlow('motor','skipped')) return true;
    showRoute('journal');
  } else if (action === 'choose-markdown') $('markdown-files').click();
  else if (action === 'read-markdown') {
    const item = library.find(entry => entry.id === id);
    if (item) openModal(escape(item.relative),'<pre class="markdown-reader">'+escape(item.markdown)+'</pre>');
  } else return false;
  return true;
}

async function workspaceSubmit(form) {
  const data = new FormData(form);
  if (form.id === 'stage-form') {
    if (setStage(data.get('stage'))) { $('modal').close(); render(); }
  } else if (form.id === 'body-form') {
    const symptom = data.get('symptom');
    const intensity = symptom === 'resolved' ? 0 : Number(data.get('intensity'));
    if (!Object.hasOwn(symptoms,symptom) || !Number.isInteger(intensity) || intensity < 0 || intensity > 10) return;
    const item = {...regionChoice,date:E.dateKey(),env:state.env,symptom,intensity,notes:data.get('notes').trim()};
    const prior = bodyRecords().filter(record => record.region !== item.region || record.side !== item.side || record.date !== item.date || record.env !== item.env);
    if (save({...state,body:[item,...prior]})) { render(); notify('Symptom saved.'); }
  } else if (form.id === 'journal-form') {
    const note = data.get('note').trim();
    if (!note || summaryPending) return;
    const journal = {date:E.dateKey(),env:state.env,text:note};
    if (!save({...state,dailyFlow:{...flow(),date:E.dateKey(),journal:'done'},journals:[journal,...(state.journals || []).filter(item => item.date !== journal.date)]})) return;
    const owner = session;
    await generateSummary('journal',journal);
    if (session === owner && view() === 'journal') showRoute('panel');
  } else if (form.id === 'document-search') {
    documentQuery = data.get('query');
    render();
    $('document-search').elements.query.focus();
  }
}

function assistantView() {
  const current = draft()?.mode === 'chat' ? draft() : null;
  const history = chat.slice(-80);
  const stopped = !current && flow().check === 'urgent';
  const finished = !current && !stopped && flow().check && !flow().motor;
  const messages = history.map((turn,index) => '<article class="message '+turn.role+'"><span class="folio">'+
    (turn.role === 'user' ? 'You' : 'NETIN')+'</span>'+(turn.role === 'assistant' ? paragraphReply(turn) : '<p>'+escape(turn.content)+'</p>')+
    (turn.role === 'assistant' ? button('Listen','speak-reply','voice-button','data-index="'+(chat.length-history.length+index)+'"') : '')+
    '</article>').join('');
  const controls = stopped ? '' : current ? button('Save and finish','end-chat-check','compact',busy ? 'disabled' : '') :
    button('Daily check-in','assist-check','compact',busy ? 'disabled' : '');
  return pageHead('',current ? 'Daily check-in' : 'Assistant',current ? '' : '',controls)+
    (current || finished || stopped ? workflow() : '')+
    '<section class="card assistant-shell"><div class="assistant-toolbar">'+
    (finished ? button('Continue to motor skills','next-motor','primary') : '<strong>NETIN</strong>')+
    '<div class="actions">'+button('Voice','toggle-speech','compact','aria-pressed="'+readAloud+'"')+
    button('Stop audio','stop-speech','compact')+'</div></div><div id="chat-log" class="transcript" aria-live="polite">'+
    (current ? intakeTranscript(current,busy ? null : CI.question(current)) : messages || empty('Hello,'+escape(firstName())+'. How is your shift going?'))+
    (busy ? '<p class="muted">NETIN is preparing a response…</p>' : '')+'</div>'+
    (current ? intakeComposer(CI.question(current)) : '<form id="chat-form" class="composer">'+field('Message',
      '<textarea name="query" rows="2" maxlength="1000" placeholder="Ask NETIN a question or share how you are doing" required '+(busy ? 'disabled' : '')+'></textarea>')+
      '<button class="button primary" '+(busy ? 'disabled' : '')+'>Send</button></form>')+'</section>';
}

function loadMarkdown() {
  return refreshMarkdown(() => AI.loadMarkdown(progress => { missionImport = progress; }));
}

function importSelectedMarkdown(files) {
  if (!files.length || missionIndexing) return;
  return refreshMarkdown(() => AI.replaceMarkdown(files, progress => { missionImport = progress; }));
}

function refreshMarkdown(load) {
  missionImport = 'Preparing the library…';
  libraryError = '';
  missionIndexing = (async () => {
    try { library = await load(); }
    catch (error) { libraryError = error.message; }
    finally {
      missionImport = '';
      missionIndexing = undefined;
      if (view() === 'guias' && !$('modal').open) render();
    }
  })();
  if (view() === 'guias') render();
  return missionIndexing;
}
