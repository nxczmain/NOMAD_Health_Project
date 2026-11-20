'use strict';

const stages = {orbit:'Earth Orbit',earth:'Earth',mars:'Mars',transit:'Deep Space',moon:'Moon'};
const metricNames = {temp:'Temperature',pulse:'Heart rate',pressure:'Blood pressure',glucose:'Glucose',sleep:'Sleep',mood:'Mood'};
const healthTabs = {general:'General',physical:'Physical',mental:'Mental',skills:'Motor Skills'};
const flowLabels = {photo:'Daily photo',check:'Daily check-in',motor:'Motor test',journal:'Journal'};
const regions = {
  head:'Head', neck:'Neck', torso:'Chest', abdomen:'Abdomen', hip:'Hip',
  lshoulder:'Left shoulder',rshoulder:'Right shoulder',larm:'Left arm',rarm:'Right arm',
  lhand:'Left hand',rhand:'Right hand',lleg:'Left leg',rleg:'Right leg',
  lfoot:'Left foot',rfoot:'Right foot'
};
const symptoms = {pain:'Pain',injury:'Injury reported',stiffness:'Stiffness',weakness:'Weakness',tingling:'Tingling',irritation:'Irritation',other:'Other',resolved:'Resolved'};
let stageChoice = 'orbit';
let healthTab = 'general';
let physicalTab = 'body';
let bodySide = 'front';
let bodySelection = new Map();
let bodyEdit;
let moodDraft;
let documentQuery = '';
let openedDocument;
let summaryPending = '';
let trendMetric = 'pulse';
let trendRange = 7;
let trendDay = '';
let recordsFilter = {date:'',env:''};
let motorDate = '';
let appearance = {theme:'light',text:'standard',volume:85,hamMotion:'system'};

const stageGlyphs = {orbit:'◈',earth:'◉',mars:'⤢',transit:'✧',moon:'☾'};
const stageOptions = selected => Object.entries(stages).map(([key,label]) =>
  '<option value="'+key+'"'+(key === selected ? ' selected' : '')+'>'+stageGlyphs[key]+'  '+label+'</option>').join('');
const stageBadge = env => '<span class="stage-badge">'+UI.icon(env)+escape(stages[env] || 'Mission stage')+'</span>';
const stageField = (id, value) => '<div class="stage-form-field">'+field('Mission stage','<select id="'+id+'" name="stage" aria-label="Mission stage" required>'+stageOptions(value)+'</select>')+'</div>';
const firstName = () => state.profile.name.trim().split(/\s+/)[0];
const flow = () => state.dailyFlow?.date === E.dateKey() ? state.dailyFlow : {};
const markFlow = (key, status = 'done') => save({...state,dailyFlow:{...flow(),date:E.dateKey(),[key]:status}});
const journalAt = (entries, date, env) => entries.find(item => item.date === date && item.env === env);
const dailyJournal = () => journalAt(state.journals || [],E.dateKey(),state.env);
const bodyRecords = () => state.body || [];
const activeBodyRecords = () => bodyRecords().filter(item => item.env === state.env);
const flowStep = () => activeEmergency() ? undefined : Object.keys(flowLabels).find(key => flow()[key] !== 'done');
const card = (title, content, action = '', extra = '') => '<section class="card '+extra+'"><div class="card-head"><h2>'+title+'</h2>'+action+'</div>'+content+'</section>';
const empty = value => '<p class="muted">'+escape(value)+'</p>';
const initialsOf = name => name.trim().split(/\s+/).slice(0,2).map(part => Array.from(part)[0]).join('').toUpperCase();
const portrait = (name, source, extra = '') => source ? '<img class="portrait '+extra+'" src="'+source+'" alt="Photo of '+escape(name)+'">' :
  '<span class="portrait '+extra+'" aria-hidden="true">'+escape(initialsOf(name))+'</span>';
const dayDistance = date => Math.max(0,Math.round((Date.parse(E.dateKey()) - Date.parse(date)) / 86400000));

function workflow() {
  const current = flowStep();
  return '<ol class="workflow" aria-label="Daily routine">'+Object.entries(flowLabels).map(([key,label]) => {
    const status = flow()[key];
    const style = status === 'done' || status === 'urgent' ? status : key === current ? 'current' : '';
    const text = status === 'done' ? 'Complete' : status === 'urgent' ? 'Urgent follow-up' : 'Pending';
    return '<li class="'+style+'"'+(key === current ? ' aria-current="step"' : '')+'><button type="button" data-action="flow-step" data-step="'+key+'">'+
      UI.icon(status === 'done' ? 'done' : status === 'urgent' ? 'alert' : key)+'<strong>'+label+'</strong><small>'+text+'</small></button></li>';
  }).join('')+'</ol>';
}

function openFlowStep(step) {
  if (step === 'photo') return openCamera('panel',dailyPhotos.has(E.dateKey()));
  if (step === 'check') return beginIntake();
  showRoute({motor:'motor',journal:'journal'}[step] || 'panel');
}

function resumeFlow() {
  if (activeEmergency()) return showRoute('bot');
  const step = flowStep();
  if (step === 'photo') return openCamera('routine');
  openFlowStep(step);
}

let liveVitals;
let assistantTab = 'chat';
let checkScreenDate;
const moodOptions = [
  {label:'Very low',face:'😞'}, {label:'Low',face:'🙁'}, {label:'Okay',face:'😐'},
  {label:'Good',face:'🙂'}, {label:'Great',face:'😄'}
];
const demoFrame = () => Math.floor(Date.now() / 3200);
const demoOffset = () => session.key === 'netin-demo-moon' ? 2 : 0;

function wearableSnapshot() {
  if (!simulation()) return null;
  const date = E.dateKey();
  const env = state.env;
  const frame = demoFrame();
  if (liveVitals?.date !== date || liveVitals?.env !== env || liveVitals?.frame !== frame || liveVitals?.crew !== session.key) {
    liveVitals = {date,env,frame,crew:session.key,values:E.simulatedReadings(env,date,frame,demoOffset())};
  }
  return liveVitals;
}
function archerLabel() {
  return simulation() ? '<span class="state-pill archer-label"><span aria-hidden="true"></span>ARCher · Live simulation</span>' : '';
}
function refreshWearable() {
  if (!session) return;
  if (view() === 'bot' && assistantTab === 'check' && checkScreenDate !== E.dateKey() && !busy) return render();
  if (!simulation()) return;
  const items = document.querySelectorAll('[data-archer-reading]');
  const graph = $('measurement-trend');
  if (!items.length && !graph) return;
  const snapshot = wearableSnapshot();
  for (const node of items) node.textContent = E.format(snapshot.values[node.dataset.archerReading]);
  if (graph) updateTrend(graph,snapshot);
}

function vitals(entry, keys = Object.keys(metricNames), latest = false) {
  const byDate = latest ? records().filter(record => simulation() || !record.sample) : [];
  const simulated = latest ? wearableSnapshot() : null;
  return '<div class="vitals">'+E.metrics.filter(metric => keys.includes(metric.key)).map(metric => {
    const fromWearable = simulated && metric.key !== 'mood';
    const live = fromWearable && ['pulse','pressure','temp'].includes(metric.key);
    const recorded = latest ? byDate.find(item => item.values[metric.key] != null) : entry;
    const demoMood = simulated && metric.key === 'mood' && !recorded;
    const source = fromWearable || demoMood ? simulated : recorded;
    const value = source?.values[metric.key];
    const flag = !fromWearable && !demoMood && value != null && E.status(metric,value) === 'review';
    return '<div class="vital '+(flag ? 'review' : '')+'"><span class="vital-header">'+UI.icon(metric.key)+metricNames[metric.key]+'</span><strong'+
      (live ? ' data-archer-reading="'+metric.key+'"' : '')+'>'+(value == null ? '—' : escape(E.format(value)))+'</strong><small>'+
      (value == null ? 'No reading' : escape(metric.unit)+(fromWearable ? ' · ARCher (simulated)' : demoMood || (latest && source.sample && metric.key === 'mood') ? ' · Demo self-report' : latest ? ' · '+formatDay(source.date) : ''))+'</small>'+
      (flag ? '<small class="baseline">Review · Demo baseline '+escape(E.format(metric.base))+'</small>' : '')+'</div>';
  }).join('')+'</div>';
}

function medicalFlags(entry) {
  if (activeEmergency()) {
    return '<p class="notice critical">An urgent concern was reported today. Follow the emergency instructions in the Assistant.</p>';
  }
  const physical = globalThis.MissionCare?.activeBody(state) || [];
  const body = physical.length ? '<ul class="plain-list">'+physical.map(item => '<li><strong>'+escape(regionLabel(item.side,item.region))+'</strong> · '+
    escape(symptoms[item.symptom] || item.symptom)+(item.intensity == null ? '' : ' · '+item.intensity+'/10')+
    (item.notes ? ' · '+escape(item.notes) : '')+' <small>'+formatDay(item.date)+'</small></li>').join('')+'</ul>'+button('Open body map','open-body-map','compact') : '';
  if (!entry) return body || empty('No check-in in this stage yet.');
  const review = CI.differingReadings(entry).map(metric => metricNames[metric.key]);
  const flags = [...review.map(item => 'Review the recorded '+item.toLowerCase()+'.'),
    ...(entry.summary?.followUps || Object.values(checkFollowUps(entry)))];
  return body+(flags.length ? '<ul class="plain-list">'+flags.map(item => '<li>'+escape(item)+'</li>').join('')+'</ul>' :
    body ? '' : empty('No follow-up is flagged in this check-in.'));
}

function recordedSummary(summary, fallback) {
  if (!summary) return empty(fallback);
  return paragraphReply(summary);
}

function emergencyAlerts() {
  const date = E.dateKey();
  const current = state.urgentAlert?.date === date ? state.urgentAlert : null;
  const entry = today();
  const alerts = [];
  if (current) {
    alerts.push({...current,id:current.incidentId || [date,current.env,current.urgentKind,current.content].join('|')});
  }
  if (E.hasLowBodyTemperature(entry) || entry?.values.impact === 'urgent') {
    const fromCheck = current?.mode === 'check' && current.env === entry.env;
    const id = entry.emergencyId || (fromCheck && !current.incidentId ? alerts[0].id : '') ||
      [date,entry.env,'reading',entry.values.temp ?? '',entry.review || ''].join('|');
    if (!alerts.some(alert => alert.id === id)) alerts.push({
      id,date,env:entry.env,
      reason:E.hasLowBodyTemperature(entry) ? 'Recorded temperature: '+E.format(entry.values.temp)+' °C.' : ''
    });
  }
  if (!alerts.length && flow().check === 'urgent') alerts.push({id:date+'|routine',date,env:state.env});
  return alerts;
}

function activeEmergency() {
  return emergencyAlerts().find(alert => !(state.dismissedAlerts || []).some(record => record.id === alert.id));
}

function reclassifyDrillAlert(query, kind, mode, timeline) {
  if (kind || !CI.trainingScenario(query)) return;
  const alert = activeEmergency();
  const lastReply = timeline.findLast(turn => turn.role === 'assistant');
  if (!alert?.urgent || alert.mode !== mode || !lastReply ||
      (lastReply.incidentId ? lastReply.incidentId !== alert.id : lastReply.content !== alert.content)) return;
  const dismissedAlerts = [...(state.dismissedAlerts || []),{id:alert.id,date:alert.date,env:alert.env,time:new Date().toISOString(),reason:'Clarified as a drill'}];
  const another = emergencyAlerts().some(item => !dismissedAlerts.some(record => record.id === item.id));
  const dailyFlow = !another && flow().check === 'urgent' ? {...flow(),check:state.checkBeforeAlert || 'pending'} : state.dailyFlow;
  save({...state,dismissedAlerts,dailyFlow});
}

function emergencyBanner(withLink = false) {
  const alert = activeEmergency();
  if (!alert) return '';
  const reason = alert.reason || alert.sections?.evidence;
  const onEarth = (alert.env || state.env) === 'earth';
  return '<section class="emergency-banner" role="alert"><h2>'+UI.icon('alert')+
    (onEarth ? 'Call local emergency services now.' : 'Contact the crew medical officer now.')+'</h2>'+
    '<p>'+(onEarth ? 'Follow the steps in the emergency response.' : 'Follow your approved mission emergency procedure.')+'</p>'+
    (reason ? '<p>'+escape(reason)+'</p>' : '')+
    '<div class="actions">'+(withLink ? link('Open emergency guidance','bot','danger') : '')+
    button('Dismiss alert','review-dismiss-alert','compact')+'</div></section>';
}

function dismissAlert(incident) {
  const alert = activeEmergency();
  if (!alert || alert.id !== incident) return;
  const dismissedAlerts = [...(state.dismissedAlerts || []),{id:alert.id,date:alert.date,env:alert.env,time:new Date().toISOString()}];
  const another = emergencyAlerts().some(item => !dismissedAlerts.some(record => record.id === item.id));
  const recordedCheck = (state.conversations || []).some(turn => turn.date === E.dateKey() && turn.mode === 'check');
  const dailyFlow = !another && flow().check === 'urgent' ?
    {...flow(),check:state.checkBeforeAlert === 'done' || recordedCheck ? 'done' : 'pending'} : state.dailyFlow;
  if (!save({...state,dismissedAlerts,dailyFlow})) return;
  $('modal').close();
  render();
  notify('Alert dismissed. The original report is still in Records.');
}

function dashboardCheck(entry) {
  if (!entry) return null;
  const summary = entry.summary || intakeSummary(entry,CI.urgent({values:entry.values,answers:{},sample:entry.sample}));
  return summary.urgent ? {text:'An urgent concern was recorded. See Records for the original guidance.'} : summary;
}

function backdropPicker() {
  const selected = state.backdrop || 'earth';
  const preview = (key,label,source) => button('<img src="'+source+'" alt=""><span>'+label+'</span>','choose-backdrop','wallpaper-option',
    'data-choice="'+key+'" aria-pressed="'+(selected === key)+'"');
  openModal('Choose a home photo',
    '<div class="wallpaper-picker">'+preview('earth','Earth at sunrise','assets/earth-orbit.jpg')+
    preview('panda','Giant panda','assets/giant-panda.jpg')+'</div>'+
    '<p class="micro"><a href="https://commons.wikimedia.org/wiki/File:Giant_Panda_1.jpg" target="_blank" rel="noopener noreferrer">Giant Panda 1 by Kikimora mashenka</a> · '+
    '<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a></p>'+
    '<form id="backdrop-form">'+field('Your own photo','<input type="file" name="photo" accept="image/jpeg,image/png,image/webp" required>')+
    '<button class="button">Use this photo</button></form>');
}

function changeBackdrop(backdrop, src = '') {
  if (!save({...state,backdrop,backdropPhoto:src})) return;
  $('modal').close();
  render();
  document.querySelector('[data-action="backdrop-picker"]')?.focus();
  notify('Home photo updated.');
}

async function chooseCustomBackdrop(form) {
  const owner = session;
  const submit = form.querySelector('button');
  if (submit.disabled) return;
  submit.disabled = true;
  try {
    const photo = await compressImage(form.elements.photo.files[0]);
    if (session === owner && form.isConnected && validPhoto(photo)) changeBackdrop('custom',photo.src);
  } catch (error) {
    if (session === owner) notify(error.message);
  } finally {
    submit.disabled = false;
  }
}

function workspaceHome() {
  const profile = state.profile;
  const custom = state.backdrop === 'custom' ? validPhoto({src:state.backdropPhoto}) : '';
  const backdrop = custom || (state.backdrop === 'panda' ? 'assets/giant-panda.jpg' : 'assets/earth-orbit.jpg');
  const entry = today();
  const journal = dailyJournal() || state.journals?.[0];
  const dates = [...state.records, ...(state.journals || []), ...(state.moodLogs || []), ...motorHistory(), ...dailyPhotos.values(), ...bodyRecords()]
    .filter(item => item.date && (simulation() || !item.sample)).map(item => item.date).sort();
  const start = profile.missionStartDate || dates[0];
  const days = start && Number.isFinite(Date.parse(start)) ? '<small>'+dayDistance(start)+' '+(profile.missionStartDate ? 'days since mission start' : 'days since first log')+'</small>' : '';
  const lastActivity = dates.at(-1) || state.createdDate;
  const missing = lastActivity && dayDistance(lastActivity) >= 3;
  const newest = entry || records()[0];
  const recentMood = records().find(item => item.values.moodImpact === 'task' || item.values.moodImpact === 'some');
  return pageHead('', 'Home', '')+
    '<section class="identity-banner"><img class="identity-backdrop" alt="" src="'+backdrop+'"><div class="identity">'+portrait(profile.name,validPhoto(crewPortrait),'large')+
    '<div><h2>'+escape(profile.name)+'</h2><p>'+escape(profile.role)+'</p><div class="identity-metrics">'+stageBadge(state.env)+days+'</div></div></div>'+
    '<div class="identity-actions">'+button('Change home photo','backdrop-picker','compact')+button('Change stage','stage-menu','compact')+button(UI.icon('photo')+' '+(dailyPhotos.has(E.dateKey()) ? 'Retake photo' : 'Take photo'),'daily-camera','compact')+'</div></section>'+
    emergencyBanner(true)+
    card('Daily routine',workflow()+hamRoutine()+
      (missing ? '<p class="flow-state muted">'+UI.icon('sad')+' It has been '+dayDistance(lastActivity)+' days since your last log. Pick a step to get back on track.</p>' : ''),'','daily-shell')+
    '<div class="workspace-grid home-grid">'+
    card('Latest indicators',vitals(null,undefined,true),archerLabel(),'wide')+
    card('Risks and follow-ups',medicalFlags(entry)+(recentMood ? '<p class="state-pill review">'+UI.icon('alert')+' '+escape(E.dutyImpact[recentMood.values.moodImpact])+' · '+formatDay(recentMood.date)+'</p>' : ''),
      link('View health','health','compact'),'followup-card')+
    card('Check-in',recordedSummary(dashboardCheck(newest),
      'Your summary will appear after check-in.'),newest ? '<small>'+formatDay(newest.date)+'</small>' : '')+
    card('Journal',recordedSummary(journal?.summary,'Your latest journal summary will appear here.'),
      link(journal ? 'Open journal' : 'Write entry','journal','compact'),'wide')+'</div>';
}

function hamRoutine() {
  const step = flowStep();
  const urgent = hamUrgent();
  const message = urgent ? 'Follow the emergency steps in Assistant.' :
    step ? 'Hi, '+firstName()+'. Your '+flowLabels[step].toLowerCase()+' is next.' : 'Today’s routine is complete.';
  const actions = {photo:'Take daily photo',check:'Start check-in',motor:'Start motor test',journal:'Open journal'};
  const next = urgent ? link('Open emergency guidance','bot','danger compact') :
    step ? button(actions[step],'resume-flow','primary compact') : link('Open records','records','compact');
  return '<div class="ham-inline ham-routine">'+UI.ham('ham-medium',3,'home')+
    '<div><strong>Ham</strong><p id="ham-home-copy">'+escape(message)+'</p></div>'+next+'</div>'+
    (hamTourOwner === session && !urgent ? '<div class="actions ham-tour-offer">'+button('Tour NOMAD','ham-tour','compact','data-step="0"')+
      button('Skip tour','skip-ham-tour','compact')+'</div>' : '');
}

function healthView() {
  const views = {general:generalHealth,physical:physicalHealth,mental:mentalHealth,skills:skillsHealth};
  return pageHead('', 'Health', '')+
    '<div class="tabs" role="group" aria-label="Health sections">'+Object.entries(healthTabs).map(([key,label]) =>
      button(label,'health-tab',key === healthTab ? 'selected' : '', 'data-tab="'+key+'" aria-pressed="'+(key === healthTab)+'"')).join('')+
    button(UI.icon('bag')+' Medical Supplies','medical-supplies','medical-link compact')+'</div>'+
    (['physical','mental'].includes(healthTab) ? emergencyBanner(true) : '')+views[healthTab]();
}

const latestSummary = area => {
  const summary = state.healthSummaries?.[area];
  return summary && (!summary.env || summary.env === state.env) && (area !== 'mental' || summary.scope === 'mental-only') ? summary : null;
};
function summaryAction(area) {
  return button(summaryPending === area ? 'Working…' : 'Review with Ham','generate-summary','compact',
    'data-area="'+area+'"'+(summaryPending || busy ? ' disabled' : ''));
}

function healthReview(area, fallback, emptyMessage) {
  const summary = latestSummary(area) || fallback;
  const waiting = summaryPending === area && !hamUrgent();
  if (!summary && !waiting) return empty(emptyMessage);
  return '<div class="ham-inline ham-review">'+UI.ham('ham-medium',3,waiting ? 'pensando' : 'review-'+area)+
    '<div>'+(waiting ? '<p role="status">Ham is thinking…</p>' : recordedSummary(summary,emptyMessage))+'</div></div>';
}

const healthChatTurns = area => (state.conversations || []).filter(turn => turn.mode === area && turn.env === state.env).slice(-12);

function hamReplyButtons() {
  const disabled = busy || summaryPending ? ' disabled' : '';
  return '<div class="actions"><button class="button primary"'+disabled+'>Send</button>'+
    '<button class="button" value="deep"'+(AI.availableModels().deepReady ? disabled : ' disabled')+
    '>Clearer wording</button></div>';
}

function healthChat(area) {
  const mental = area === 'mental';
  const history = healthChatTurns(area);
  const placeholder = mental ? 'Share how you feel or ask for support' : 'Ask about a symptom, reading or physical change';
  const physical = !mental && globalThis.MissionCare ? MissionCare.activeBody(state) : [];
  const recorded = physical.length ? '<details class="record-item"><summary>Recorded physical concerns ('+physical.length+')</summary><ul>'+physical.map(item =>
    '<li>'+escape(regionLabel(item.side,item.region))+' · '+escape(symptoms[item.symptom] || item.symptom)+' · '+escape(item.notes || '')+'</li>').join('')+'</ul></details>' : '';
  return card(mental ? 'Mental health with Ham' : 'Physical health with Ham',
    recorded+'<div id="health-chat-log" class="health-transcript" aria-live="polite">'+history.slice(-6).map(turn => messageBubble(turn)).join('')+
    pendingHam(area)+'</div>'+
    (mental ? '<div class="ham-inline ham-composer">'+UI.ham('ham-small',2,'mental')+'<strong>Ham</strong></div>' : '')+
    '<form id="health-chat-form" class="composer" data-area="'+area+'">'+
    field('Message',
      '<textarea name="query" rows="2" maxlength="1000" placeholder="'+placeholder+'" required'+(busy ? ' disabled' : '')+'></textarea>')+
    hamReplyButtons()+'</form>','','wide');
}

function generalHealth() {
  const entry = today() || records()[0];
  return emergencyBanner(true)+'<div class="workspace-grid">'+
    card('Health summary',healthReview('general',dashboardCheck(entry),
      'Complete a check-in to see a summary.'),'<div class="actions">'+summaryAction('general')+button('Prepare medical review','prepare-care-report','compact',busy || summaryPending ? 'disabled' : '')+'</div>')+
    card('Risks and follow-ups',medicalFlags(entry),'','followup-card')+
    card('Latest measurements',vitals(null,undefined,true),archerLabel(),'wide')+
    card('Measurement trend',trendView(),'','wide')+'</div>';
}

function trendSeries(snapshot) {
  return E.weekly(state.records,state.env,trendRange).map(({date,entry}) => {
    if (snapshot && date === snapshot.date && trendMetric !== 'mood') {
      return {date,value:snapshot.values[trendMetric],simulated:true,live:['pulse','pressure','temp'].includes(trendMetric)};
    }
    const recorded = entry?.values[trendMetric];
    if (recorded != null) return {date,value:recorded,simulated:!!entry.sample};
    if (snapshot) return {date,value:E.simulatedReadings(state.env,date,0,demoOffset())[trendMetric],simulated:true};
    return {date};
  });
}

function trendReading(metric, day) {
  if (day.value == null) return 'No reading recorded';
  return E.format(day.value)+' '+metric.unit+(day.live ? ' · ARCher (live simulation)' : day.simulated ? ' · Simulated' : '');
}

function drawTrend(days, metric) {
  const values = days.flatMap(day => {
    if (day.value == null) return [];
    const value = day.live ? E.simulatedReadings(state.env,day.date,0,demoOffset())[metric.key] : day.value;
    return [value].flat();
  });
  if (!values.length) return '<p class="trend-empty muted">No measurements for this period.</p>';
  const padding = ({temp:.4,pressure:4,sleep:.3,mood:1})[metric.key] || 3;
  const low = Math.min(...values)-padding;
  const high = Math.max(...values)+padding;
  const horizontal = index => 52 + (880 * (index+.5) / days.length);
  const vertical = value => 143-121*(value-low)/(high-low);
  const formatAxis = value => Number(value.toFixed(metric.step === .1 ? 1 : 0)).toString();
  const grid = [low,(high+low)/2,high].map(value => {
    const y = vertical(value).toFixed(1);
    return '<path class="trend-gridline" d="M52 '+y+' H932"/><text x="44" y="'+y+'" dy=".32em" text-anchor="end">'+formatAxis(value)+'</text>';
  }).join('');
  const series = (metric.key === 'pressure' ? [0,1] : [0]).map(index => {
    let continuous = false;
    const path = [];
    const points = [];
    days.forEach((day,i) => {
      if (day.value == null) { continuous = false; return; }
      const part = Array.isArray(day.value) ? day.value[index] : day.value;
      const x = horizontal(i).toFixed(1);
      const y = vertical(part).toFixed(1);
      path.push((continuous ? 'L' : 'M')+x+' '+y);
      points.push('<circle class="trend-point'+(day.live ? ' live' : '')+'" cx="'+x+'" cy="'+y+'" r="'+(day.live ? 4.2 : days.length>14 ? 2.1 : 3.3)+'"/>');
      continuous = true;
    });
    return '<g class="trend-series'+(index ? ' secondary' : '')+'"><path d="'+path.join(' ')+'" class="trend-line"/>'+points.join('')+'</g>';
  }).join('');
  return '<svg class="line-trend" viewBox="0 0 960 158" preserveAspectRatio="none" aria-hidden="true">'+grid+series+'</svg>';
}

function updateTrend(graph,snapshot) {
  const days = trendSeries(snapshot);
  const points = graph.querySelectorAll('[data-action="trend-day"]');
  if (points[0]?.dataset.day !== days[0].date) return render();
  const metric = E.metricByKey(trendMetric);
  const selected = days.find(day => day.date === trendDay) || days.at(-1);
  days.forEach((day,index) => {
    const point = points[index];
    const title = formatDay(day.date)+': '+trendReading(metric,day);
    point.title = title;
    point.setAttribute('aria-label',title);
  });
  $('trend-plot').innerHTML = drawTrend(days,metric);
  $('trend-detail').textContent = formatDay(selected.date)+' · '+trendReading(metric,selected);
}

function trendView() {
  const snapshot = wearableSnapshot();
  const days = trendSeries(snapshot);
  const selected = days.find(day => day.date === trendDay) || days.at(-1);
  const heading = '<div class="trend-controls">'+field('Measurement','<select id="trend-metric" aria-label="Measurement">'+Object.entries(metricNames).map(([key,name]) =>
    '<option value="'+key+'"'+(key === trendMetric ? ' selected' : '')+'>'+name+'</option>').join('')+'</select>')+
    '<div class="actions" aria-label="Trend period">'+[[1,'Today'],[7,'7 days'],[30,'30 days']].map(([range,label]) =>
      button(label,'trend-range','compact','data-range="'+range+'" aria-pressed="'+(range === trendRange)+'"')).join('')+'</div></div>';
  const graph = days.map(({date}) => '<li><button type="button" data-action="trend-day" data-day="'+date+'" aria-pressed="'+(date === selected.date)+'">'+
    '<span class="trend-day-label" aria-hidden="true">'+(trendRange === 30 ? date.slice(-2) : formatDay(date))+'</span></button></li>').join('');
  return heading+'<div class="trend-scroll"><div class="trend-chart"><div id="trend-plot"></div><ol id="measurement-trend" class="trend '+(trendRange === 30 ? 'many' : '')+
    '" style="--days:'+trendRange+'" aria-label="'+metricNames[trendMetric]+' trend dates">'+graph+'</ol></div></div>'+
    (trendMetric === 'pressure' ? '<p class="micro">Solid line: systolic · Dashed line: diastolic</p>' : '')+
    (snapshot ? '<p class="micro">Demo trends include simulated readings for '+stages[state.env]+'.</p>' : '')+
    '<p id="trend-detail"></p>'+button('Ask Ham about this trend','ask-ham-trend','compact',busy || summaryPending ? 'disabled' : '');
}

function composeTrendQuestion() {
  if (busy || summaryPending) return;
  const period = trendRange === 1 ? 'today' : 'over the last '+trendRange+' days';
  assistantTab = 'chat';
  showRoute('bot');
  const input = $('chat-form')?.elements.query;
  if (!input) return;
  input.value = 'Help me understand my '+metricNames[trendMetric].toLowerCase()+' '+period+'.';
  input.focus();
}

const regionKey = ({side,region}) => side+':'+region;
function regionLabel(side, region) {
  if (side === 'back' && region === 'torso') return 'Upper back';
  if (side === 'back' && region === 'abdomen') return 'Lower back';
  return regions[region];
}
function bodyStatus(record) {
  if (!record) return '';
  if (record.symptom === 'resolved') return '';
  if (record.intensity == null) return 'reported';
  return record.intensity >= 7 ? 'strong' : record.intensity >= 4 ? 'medium' : 'low';
}
function selectedHistory(selection) {
  return activeBodyRecords().filter(item => regionKey(item) === regionKey(selection)).sort((a,b) => (b.reportedAt || b.date).localeCompare(a.reportedAt || a.date));
}
function bodyFigure(side) {
  return '<div class="figure-view"><div class="body-figure '+side+'" role="group" aria-label="'+(side === 'front' ? 'Front view' : 'Back view')+'">'+
    Object.entries(regions).map(([region]) => {
      const key = regionKey({side,region});
      const latest = selectedHistory({side,region})[0];
      const label = regionLabel(side,region);
      return '<button type="button" class="region '+region+' '+bodyStatus(latest)+'" data-action="body-part" data-side="'+side+'" data-region="'+region+
        '" aria-label="'+label+(latest ? ', '+(symptoms[latest.symptom] || latest.symptom)+(latest.intensity == null ? '' : ' '+latest.intensity+'/10') : '')+'" aria-pressed="'+bodySelection.has(key)+'" title="'+label+'"></button>';
    }).join('')+'</div></div>';
}
function physicalHealth() {
  const submenu = '<div class="tabs physical-tabs" role="group" aria-label="Physical health views">'+
    [['body','Body map'],['ultrasound','Ultrasound simulation']].map(([key,label]) =>
      button(label,'physical-tab',key === physicalTab ? 'selected' : '', 'data-tab="'+key+'" aria-pressed="'+(key === physicalTab)+'"')).join('')+'</div>';
  return submenu+(physicalTab === 'ultrasound' ? Ultrasound.workspace() : bodyHealth());
}
function bodyHealth() {
  const selection = [...bodySelection.values()];
  const regionTags = selection.map(({side,region}) => button(regionLabel(side,region)+' · '+(side === 'front' ? 'Front' : 'Back')+' ×',
    'body-remove','compact','data-side="'+side+'" data-region="'+region+'" aria-label="Remove '+regionLabel(side,region)+'"')).join('');
  const value = bodyEdit?.intensity ?? 1;
  const history = selection.map(({side,region}) => {
    const [current,...prior] = selectedHistory({side,region});
    return '<div class="record-item"><h3>'+regionLabel(side,region)+'</h3>'+
      (current ? '<p><strong>'+(current.symptom === 'resolved' ? 'Resolved' : 'Active')+'</strong> · '+symptoms[current.symptom]+' · '+(current.intensity == null ? 'Intensity not recorded' : current.intensity+'/10')+' · '+formatDay(current.date)+'</p>'+
        (current.notes ? '<p>'+escape(current.notes)+'</p>' : '')+(current.onset ? '<p>Started · '+escape(current.onset)+'</p>' : '') : empty('No prior records.'))+
      (prior.length ? '<details><summary>Previous records ('+prior.length+')</summary><ul>'+prior.map(item =>
        '<li>'+formatDay(item.date)+' · '+symptoms[item.symptom]+' · '+item.intensity+'/10 '+escape(item.notes)+'</li>').join('')+'</ul></details>' : '')+'</div>';
  }).join('');
  return '<div class="workspace-grid body-console">'+card('Body map',
    '<div class="actions" aria-label="Body view">'+['front','back'].map(side => button(side === 'front' ? 'Front' : 'Back','body-side','compact',
      'data-side="'+side+'" aria-pressed="'+(bodySide === side)+'"')).join('')+'</div>'+
    '<div class="body-map">'+bodyFigure(bodySide)+'</div>'+
    '<p class="legend"><span class="dot low"></span> 1–3 <span class="dot medium"></span> 4–6 <span class="dot strong"></span> 7–10 <span class="dot reported"></span> Intensity not recorded</p>'+
    field('Find a region','<input id="region-search" type="search" list="body-regions" placeholder="Search and select a region">')+
    '<datalist id="body-regions">'+Object.keys(regions).map(region => '<option value="'+regionLabel(bodySide,region)+'"></option>').join('')+'</datalist>')+
    card('Log a symptom',(regionTags ? '<div class="region-list">'+regionTags+'</div>' : empty('Choose one or more regions to log a symptom.'))+
    '<form id="body-form">'+field('Symptom','<select name="symptom">'+Object.entries(symptoms).map(([key,label]) => '<option value="'+key+'"'+(bodyEdit?.symptom === key ? ' selected' : '')+'>'+label+'</option>').join('')+'</select>')+
    field('Intensity, 0–10','<input name="intensity" type="range" min="0" max="10" step="1" value="'+value+'">')+
    '<div class="range-description">'+UI.icon('mood')+' <output id="intensity-value">'+value+' / 10</output> '+UI.icon('sad')+'</div>'+
    field('What changed','<textarea name="notes" maxlength="600" rows="3" placeholder="When it started or what activity affects it">'+escape(bodyEdit?.notes || '')+'</textarea>')+
    '<div class="actions"><button class="button primary" type="submit" '+(selection.length ? '' : 'disabled')+'>Save symptom</button>'+
    button('Mark as resolved','resolve-body','',selection.length ? '' : 'disabled')+'</div></form>'+history)+
    card('Physical review',healthReview('physical',null,'Log a physical change to review it with Ham.'),summaryAction('physical'),'wide')+
    healthChat('physical')+'</div>';
}
function moodReport(item) {
  const choice = moodOptions[item.level - 1];
  if (!choice) return '';
  return '<p><strong>'+choice.face+' '+choice.label+'</strong> · '+formatDay(item.date)+' · '+escape(stages[item.env])+'</p>'+
    (item.emotions ? '<p><strong>Emotions</strong> '+escape(item.emotions)+'</p>' : '')+
    (item.cause ? '<p><strong>What contributed</strong> '+escape(item.cause)+'</p>' : '');
}

function mentalHealth() {
  const entries = (state.journals || []).filter(item => item.env === state.env).slice(0,5);
  const entry = records().find(item => item.values.mood != null || item.values.sleep != null);
  const latest = (state.moodLogs || []).find(item => item.env === state.env);
  const latestToday = latest?.date === E.dateKey() ? latest : null;
  const draftMood = moodDraft || latestToday;
  const duty = entry?.values.moodImpact;
  const moodForm = '<form id="mood-form"><fieldset class="mood-field"><legend>How are you feeling?</legend><div class="mood-scale">'+
    moodOptions.map(({label,face},index) => '<label class="mood-option"><input type="radio" name="level" value="'+(index+1)+'" required'+
      (draftMood?.level === index+1 ? ' checked' : '')+'><span class="mood-option-card"><span aria-hidden="true">'+face+'</span>'+label+'</span></label>').join('')+
    '</div></fieldset>'+
    field('What emotions are you feeling?','<textarea name="emotions" rows="2" maxlength="500">'+escape(draftMood?.emotions || '')+'</textarea>')+
    field('What contributed to how you feel?','<textarea name="cause" rows="3" maxlength="1000">'+escape(draftMood?.cause || '')+'</textarea>')+
    '<button class="button primary" type="submit">Save mood check-in</button></form>'+
    (latestToday?.level <= 2 ? '<div class="mood-support"><p>You reported a low mood today. Ham can help you reflect on what you wrote.</p>'+
      button('Reflect with Ham','generate-summary','compact','data-area="mental"'+(summaryPending || busy ? ' disabled' : ''))+'</div>' : '');
  return '<div class="workspace-grid">'+card('Mood check-in',moodForm,UI.ham('ham-small',2,'mood'),'wide')+
    card('Mood overview',vitals(null,['mood'],true)+
    (duty ? '<p>'+UI.icon('mood')+' '+escape(E.dutyImpact[duty])+'</p>' : '')+
    (latest ? moodReport(latest) : '')+healthReview('mental',null,'Review what you’ve shared about your mood and what might help.'),summaryAction('mental'))+
    healthChat('mental')+
    card('Recent journals',entries.length ? entries.map(item => '<details class="record-item"><summary>View journal entry · '+formatDay(item.date)+'</summary><p>'+escape(item.text)+'</p></details>').join('') :
      empty('No journal entries in this stage.'),link('Write','journal','compact'))+'</div>';
}

function readMoodForm(form) {
  return {level:Number(form.elements.level.value),emotions:form.elements.emotions.value,cause:form.elements.cause.value};
}

function saveMood(form) {
  const {level,emotions,cause} = readMoodForm(form);
  if (!Number.isInteger(level) || !moodOptions[level - 1]) return;
  const report = {id:crypto.randomUUID(),date:E.dateKey(),env:state.env,level,emotions:emotions.trim(),cause:cause.trim()};
  const text = [report.emotions,report.cause].filter(Boolean).join(' ');
  const kind = CI.emergencyKind(text);
  const moodLogs = [report,...(state.moodLogs || [])];
  if (kind) {
    const response = emergencyAnswer(kind,text);
    const turn = {...response,role:'assistant',content:response.text,date:report.date,env:report.env,mode:'mood',
      thread:state.chatThread || '',urgent:true,urgentKind:kind,incidentId:crypto.randomUUID()};
    const saved = save({...state,moodLogs,urgentAlert:turn,conversations:[...(state.conversations || []),turn]});
    if (!saved) state = {...state,urgentAlert:turn};
    else { moodDraft = undefined; notify('Mood check-in saved in Records.'); }
    assistantTab = 'chat';
    showRoute('bot');
    presentHam(turn);
    if (saved) addEmergencyHandoff(text,kind,turn,session);
  } else if (save({...state,moodLogs})) {
    moodDraft = undefined;
    render();
    notify('Mood check-in saved in Records.');
  }
}

function motorHistoryFilter() {
  const days = motorDate ? [{date:motorDate}] : E.weekly([],state.env,30);
  return '<form id="motor-filter" class="search-form">'+field('Filter by date','<input type="date" name="date" value="'+escape(motorDate)+'">')+
    '<button class="button compact">Apply</button>'+button('Clear','clear-motor-date','compact')+'</form>'+motorTable(days,state.env);
}
function skillsHealth() {
  const recent = motorHistory().filter(result => result.env === state.env).sort((a,b) => b.date.localeCompare(a.date))[0];
  return '<div class="workspace-grid">'+card('Performance summary',healthReview('skills',null,'Review comparable test results with Ham.'),summaryAction('skills'))+
    card('Latest test',recent ? motorSummary(recent) : empty('No results in this stage.'),link('Open motor tests','motor','compact'))+
    card('Test history',motorHistoryFilter(),'','wide')+'</div>';
}

let journalDraft;
let journalTimer;
let journalSummaryTimer;
const journalRequests = new WeakSet();

function journalView() {
  const current = dailyJournal();
  return pageHead('', 'Journal', '',link('Back to Home','panel','compact'))+workflow()+
    card('Today’s entry','<p class="muted">What stood out during your shift? How did you feel today?</p><form id="journal-form">'+
      field('Your journal','<textarea name="note" rows="5" maxlength="2400" placeholder="Write about your day…">'+escape((journalDraft?.owner === session ? journalDraft.raw : current?.text) || '')+'</textarea>')+
      '<p id="journal-status" class="micro journal-status" role="status">'+(current ? 'Saved on this device' : 'Saves automatically as you write')+'</p></form>'+
      '<div id="journal-summary">'+journalSummaryView(current)+'</div>',UI.ham('ham-small',2,'journal'),'journal-card');
}

function journalSummaryView(entry) {
  if (!entry) return '';
  return '<h3>Ham’s summary</h3>'+(entry.summary ? recordedSummary(entry.summary,'') :
    '<p class="muted">'+(journalRequests.has(entry) ? 'Preparing your summary…' : 'Your entry is saved. A summary will appear when available.')+'</p>'+
    (journalRequests.has(entry) ? '' : button('Generate summary','journal-retry','compact')));
}
function updateJournalView(entry, status) {
  if ($('journal-status') && status) $('journal-status').textContent = status;
  if ($('journal-summary')) $('journal-summary').innerHTML = journalSummaryView(entry);
}
function queueJournal(input) {
  clearTimeout(journalTimer);
  clearTimeout(journalSummaryTimer);
  journalDraft = {owner:session,date:E.dateKey(),env:state.env,raw:input.value,text:input.value.trim()};
  $('journal-status').textContent = journalDraft.text ? 'Saving…' : 'Enter some text to save changes.';
  journalTimer = setTimeout(() => flushJournal(true),550);
}
function flushJournal(scheduleSummary = true) {
  clearTimeout(journalTimer);
  const pending = journalDraft;
  journalDraft = undefined;
  if (!pending?.text || pending.owner !== session) return;
  const entries = state.journals || [];
  const existing = journalAt(entries,pending.date,pending.env);
  if (existing?.text === pending.text) return updateJournalView(existing,'Saved on this device');
  const journal = {date:pending.date,env:pending.env,text:pending.text};
  if (!save({...state,dailyFlow:{...flow(),date:pending.date,journal:'done'},journals:[journal,...entries.filter(item => item !== existing)]})) {
    journalDraft = pending;
    return updateJournalView(existing,'Could not save. Edit the entry to try again.');
  }
  updateJournalView(journal,'Saved on this device');
  if (scheduleSummary) {
    clearTimeout(journalSummaryTimer);
    journalSummaryTimer = setTimeout(() => void summarizeJournal(journal,pending.owner),1600);
  }
}
async function summarizeJournal(journal, owner = session) {
  if (!journal || journal.summary || journalRequests.has(journal) || owner !== session || !state.journals.includes(journal)) return;
  journalRequests.add(journal);
  if (view() === 'journal' && !journalDraft) updateJournalView(journal);
  try {
    const text = await AI.reflect('Summarize today’s saved journal entry. Use only the astronaut’s own recorded details.',{current:journal.text});
    if (owner !== session || !state.journals.includes(journal)) return;
    const updated = {...journal,summary:{date:journal.date,env:journal.env,text}};
    if (!save({...state,journals:state.journals.map(item => item === journal ? updated : item)})) return;
    if (view() === 'journal' && state.env === journal.env && !journalDraft) updateJournalView(updated);
    if (view() === 'panel') render();
    if (readAloud && !hamUrgent() && view() === 'journal' && state.env === journal.env && !journalDraft) {
      speakReply({role:'assistant',content:text,mode:'mental'},$('main').querySelector('[data-ham-presence="journal"]'));
    }
  } catch {
    if (owner === session && state.journals.includes(journal)) notify('Your journal was saved. Ham’s summary is unavailable.');
  } finally {
    journalRequests.delete(journal);
    if (owner === session && view() === 'journal' && !journalDraft) updateJournalView(dailyJournal());
  }
}

function recordedConversations() {
  const drafts = Object.values(state.drafts).filter(entry => entry?.mode === 'chat' && entry.turns.length);
  return [...(state.conversations || []),...drafts.flatMap(entry => intakeTurns(entry,true))];
}

function conversationLog(turns, fold = true) {
  const groups = [['Daily check-in',turns.filter(turn => turn.mode === 'check')],
    ['Chat with Ham',turns.filter(turn => !['check','physical','mental'].includes(turn.mode))],
    ['Physical health with Ham',turns.filter(turn => turn.mode === 'physical')],
    ['Mental health with Ham',turns.filter(turn => turn.mode === 'mental')]];
  if (!turns.length) return '';
  const multipleStages = new Set(turns.map(turn => turn.env)).size > 1;
  const listings = groups.filter(([,items]) => items.length).map(([label,items]) => {
    const messages = items.map(turn => '<p class="transcript-entry"><strong class="transcript-speaker">'+(turn.role === 'assistant' ? 'Ham:' : 'You:')+'</strong>'+
      (multipleStages ? ' <small>· '+escape(stages[turn.env] || 'Mission stage')+'</small>' : '')+' <span>'+escape(turn.role === 'assistant' ? AI.clearTags(turn.content) : turn.content)+'</span>'+
      (turn.partialCheck ? ' <small>(unfinished check-in)</small>' : '')+'</p>').join('');
    return fold ? '<details><summary>'+label+'</summary>'+messages+'</details>' : '<h3>'+label+'</h3>'+messages;
  }).join('');
  return fold ? '<details><summary>Conversations ('+turns.length+')</summary>'+listings+'</details>' : '<h3>Conversations</h3>'+listings;
}

function recordsView() {
  const byDay = new Map();
  const put = (date, kind, item) => {
    if (!date || (recordsFilter.date && date !== recordsFilter.date) || (recordsFilter.env && item.env !== recordsFilter.env)) return;
    if (!byDay.has(date)) byDay.set(date,{});
    (byDay.get(date)[kind] ||= []).push(item);
  };
  state.records.forEach(item => put(item.date,'check',item));
  (state.journals || []).forEach(item => put(item.date,'journal',item));
  bodyRecords().forEach(item => put(item.date,'body',item));
  motorHistory().forEach(item => put(item.date,'motor',item));
  (state.moodLogs || []).forEach(item => put(item.date,'mood',item));
  recordedConversations().forEach(item => put(item.date,'chat',item));
  dailyPhotos.forEach((photo,date) => put(date,'photo',photo));
  const names = {photo:'Photo',check:'Check-in',journal:'Journal',motor:'Motor tests',body:'Symptoms',mood:'Mood',chat:'Conversations'};
  return pageHead('', 'Records', '',link('Reports and trends','semana','primary'))+
    '<form id="records-filter" class="search-form">'+field('Date','<input name="date" type="date" value="'+escape(recordsFilter.date)+'">')+
    field('Mission stage','<select name="env"><option value="">All stages</option>'+stageOptions(recordsFilter.env)+'</select>')+
    '<button class="button compact">Apply</button>'+button('Clear','clear-records-filter','compact')+'</form>'+
    (byDay.size ? '<div class="timeline">'+[...byDay].sort(([a],[b]) => b.localeCompare(a)).map(([day,items],index) =>
      '<details class="card day-record" '+(index === 0 ? 'open' : '')+'><summary>'+formatDay(day)+' <small>'+escape(day)+'</small>'+
      '<span class="day-tags">'+Object.keys(items).map(key => '<span class="state-pill">'+names[key]+'</span>').join('')+'</span></summary>'+
      (items.photo ? dailyPhoto(day) : '')+
      (items.check || []).map(item => '<h3>Check-in · '+stages[item.env]+(item.sample ? ' · Demo' : '')+'</h3>'+vitals(item)+
        (item.details || []).map(detail => '<p><strong>'+escape(detail.title)+'</strong> '+escape(detail.answer)+'</p>').join('')+
        (item.values.note ? '<p>'+escape(item.values.note)+'</p>' : '')+preview(item.image)+recordedSummary(item.summary,'')).join('')+
      (items.journal || []).map(item => '<h3>Journal · '+stages[item.env]+'</h3><p>'+escape(item.text)+'</p>'+recordedSummary(item.summary,'')).join('')+
      (items.motor || []).map(item => '<h3>'+escape(Motor.games[Motor.gameOf(item)].name)+' · '+stages[item.env]+'</h3>'+motorSummary(item)).join('')+
      (items.body || []).map(item => '<p><strong>'+regionLabel(item.side,item.region)+' · '+symptoms[item.symptom]+'</strong> '+item.intensity+'/10 '+escape(item.notes)+'</p>').join('')+
      (items.mood || []).map(item => '<h3>Mood check-in</h3>'+moodReport(item)).join('')+
      conversationLog(items.chat || [])+'<div class="actions">'+button('Save daily report','export-day','compact','data-day="'+day+'"')+'</div></details>').join('')+'</div>' :
      '<section class="card ham-inline">'+UI.ham('ham-small',2,'records')+
      (recordsFilter.date || recordsFilter.env ? '<p>No records match these filters. Clear the filters to see all records.</p>' :
        '<div><p>Complete a daily check-in to save your first record.</p>'+button('Start check-in','assist-check','compact')+'</div>')+'</section>');
}

function documentTarget(source) {
  if (source.id && library.some(item => item.id === source.id)) {
    return button(source.action || 'Open passage','read-markdown','compact',
      'data-id="'+escape(source.id)+'" data-start="'+escape(source.start)+'" data-end="'+escape(source.end)+'"');
  }
  return /^https:\/\//i.test(source.url || '') ? '<a class="button compact" href="'+escape(source.url)+'" target="_blank" rel="noopener noreferrer">Open source</a>' : '';
}

function markdownPreview(item, range) {
  const source = item.markdown;
  const blocks = Array.from(source.matchAll(/\S[^\n]*(?:\n(?!\s*\n)[^\n]+)*/g));
  const inPassage = match => range && match.index + match[0].length > range.start && match.index < range.end;
  const focus = blocks.find(match => inPassage(match) && !/^#{1,6} [^\n]+\s*$/.test(match[0])) || blocks.find(inPassage);
  return '<article class="document-content" aria-label="'+escape(item.title)+'">'+blocks.map(match => {
    const lines = match[0].trim().split(/\r?\n/);
    const marked = inPassage(match);
    let content;
    if (/^#{1,6} /.test(lines[0])) {
      content = '<h3>'+escape(lines.shift().replace(/^#+ /,''))+'</h3>'+lines.map(line => '<p>'+escape(line)+'</p>').join('');
    } else if (/^!\[([^\]]*)\]\((knowledge\/pages\/[a-zA-Z0-9_-]+\.png)\)$/.test(lines[0])) {
      const image = /^!\[([^\]]*)\]\(([^)]+)\)$/.exec(lines[0]);
      content = '<figure><img src="'+image[2]+'" alt="'+escape(image[1])+'" loading="lazy"><figcaption>'+escape(image[1])+'</figcaption></figure>';
    } else if (lines.length >= 2 && /^\|?[\s:|-]+$/.test(lines[1]) && lines[0].includes('|')) {
      const cells = (line,tag) => line.trim().replace(/^\||\|$/g,'').split('|').map(cell => '<'+tag+'>'+escape(cell.trim())+'</'+tag+'>').join('');
      content = '<div class="table-scroll"><table><thead><tr>'+cells(lines[0],'th')+'</tr></thead><tbody>'+
        lines.slice(2).map(line => '<tr>'+cells(line,'td')+'</tr>').join('')+'</tbody></table></div>';
    } else if (lines.every(line => /^(?:[-*] |\d+\. )/.test(line))) {
      const list = /^\d/.test(lines[0]) ? 'ol' : 'ul';
      content = '<'+list+'>'+lines.map(line => '<li>'+escape(line.replace(/^(?:[-*] |\d+\. )/,''))+'</li>').join('')+'</'+list+'>';
    } else {
      content = '<p>'+lines.map(escape).join('<br>')+'</p>';
    }
    return '<div'+(marked ? ' class="focused-passage"' : '')+(match === focus ? ' id="document-passage" tabindex="-1"' : '')+'>'+content+'</div>';
  }).join('')+'</article>';
}
function openDocument(data) {
  const item = library.find(entry => entry.id === data.id);
  if (!item) return;
  const start = Number(data.start);
  const end = Number(data.end);
  openedDocument = {id:item.id,range:Number.isFinite(start) && Number.isFinite(end) && end > start ? {start,end} : null};
  showRoute('guias');
  const target = $('document-passage') || $('document-reading');
  target?.scrollIntoView({block:'nearest'});
  target?.focus({preventScroll:true});
}
let semanticIndexing = false;
let semanticStatus = '';

function documentsView() {
  const load = button('Load Markdown folder','choose-markdown','primary',missionIndexing || semanticIndexing ? 'disabled' : '');
  const picker = '<input id="markdown-files" type="file" webkitdirectory multiple hidden>';
  if (!library.length) {
    return pageHead('', 'Documents', '')+picker+
      card('Local library','<div class="ham-inline">'+UI.ham('ham-medium',3,'pensando')+
        '<div><p role="status">'+escape(missionImport || 'Choose the mission’s Markdown folder to load your references.')+'</p>'+
        (libraryError ? '<p class="error">'+escape(libraryError)+'</p>' : '')+load+'</div></div>');
  }
  const query = documentQuery.toLowerCase().trim();
  const matches = library.filter(item => (item.relative+' '+item.markdown).toLowerCase().includes(query));
  const active = library.find(item => item.id === openedDocument?.id);
  const sourcePage = active?.excerpts.find(item => openedDocument.range && item.start < openedDocument.range.end && item.end > openedDocument.range.start)?.page;
  const originalLinks = active ? (active.status ? '<p class="notice">'+escape(active.status)+'</p>' : '')+
    (active.original ? '<p><a href="'+escape(active.original)+(sourcePage ? '#page='+sourcePage : '')+'">Open original PDF'+(sourcePage ? ' · page '+sourcePage : '')+'</a></p>' : '')+
    (active.url && /^https:\/\//i.test(active.url) ? '<p><a href="'+escape(active.url)+'">Open original source</a></p>' : '') : '';
  const results = matches.map(item => {
    const index = query ? item.markdown.toLowerCase().indexOf(query) : 0;
    const snippet = item.markdown.slice(Math.max(0,index-34),Math.max(0,index)+112).replace(/\s+/g,' ');
    return '<div class="document-row"><div><strong>'+escape(item.title)+'</strong><small>'+escape(snippet)+'</small></div>'+
      button(active === item ? 'Open again' : 'Open','read-markdown','compact','data-id="'+escape(item.id)+'" aria-label="Open '+escape(item.title)+'"')+'</div>';
  }).join('');
  const semantic = button('Prepare semantic search','index-semantic','','id="index-semantic"'+
    (missionIndexing || semanticIndexing ? ' disabled' : ''))+
    '<p id="semantic-status" class="muted" role="status">'+escape(semanticStatus)+'</p>';
  return pageHead('', 'Documents', '',load)+picker+'<div class="workspace-grid document-layout">'+
    card('Local library','<form id="document-search" class="search-form">'+field('Search documents','<input name="query" type="search" value="'+escape(documentQuery)+'" placeholder="Title or content">')+
      '<button class="button compact">Search</button></form><p class="muted" role="status">'+escape(missionImport || matches.length+' of '+library.length+' documents')+'</p>'+
      (libraryError ? '<p class="error">'+escape(libraryError)+'</p>' : '')+semantic+
      (results || empty('No matches.')))+
    card(active ? escape(active.title) : 'Reader',active ? '<div id="document-reading" tabindex="-1">'+originalLinks+markdownPreview(active,openedDocument.range)+'</div>' :
      empty('Choose a document to read.'))+'</div>';
}
function settingsView() {
  const status = {unchecked:'Not checked',checking:'Checking…',ready:'MedGemma is ready',missing:'MedGemma is missing',offline:'Ollama is offline'};
  const models = AI.availableModels();
  const modelRows = model === 'ready' || model === 'missing' ?
    '<ul>'+[[AI.model,'Standard wording',models.ready],[AI.deepModel,'Clearer wording',models.deepReady],
      [AI.embeddingModel,'Semantic search',models.embeddingReady],['qwen3-vl:4b','Simulated ultrasound',models.visionReady]]
      .map(([tag,label,ready]) => '<li>'+label+' · '+(ready ? 'Ready' : 'Install with <code>ollama pull '+tag+'</code>')+'</li>').join('')+'</ul>' : '';
  const choices = (key,label,options) => '<select aria-label="'+label+'" data-preference="'+key+'">'+Object.entries(options).map(([value,label]) =>
    '<option value="'+value+'"'+(appearance[key] === value ? ' selected' : '')+'>'+label+'</option>').join('')+'</select>';
  const connectionHelp = ['offline','missing'].includes(model) ?
    '<div class="ham-inline ham-connection">'+UI.ham('ham-small',2,'dormido')+
    '<div><p>Install and open Ollama. In PowerShell, run these commands.</p><pre><code>ollama pull medgemma1.5:4b\nollama pull qwen3:4b\nollama list</code></pre>'+
    '<p>Confirm that <code>medgemma1.5:4b</code> appears, then leave Ollama running and check the connection.</p></div></div>' : '';
  return pageHead('', 'Settings', '')+'<div class="workspace-grid">'+
    card('Appearance','<div class="appearance-controls">'+field('Theme',choices('theme','Theme',{light:'Light',dark:'Dark'}))+
      field('Text size',choices('text','Text size',{standard:'Standard',large:'Large',larger:'Extra large'}))+
      field('Ham animation',choices('hamMotion','Ham animation',{system:'Use system setting',on:'On',off:'Off'}))+'</div>')+
    card('Voice &amp; Audio',field('Volume','<input type="range" min="0" max="100" value="'+appearance.volume+'" data-preference="volume">')+
      '<output id="volume-value">'+appearance.volume+'%</output><div class="actions">'+button('Automatic read-aloud','toggle-speech','','aria-pressed="'+readAloud+'"')+'</div>')+
    card('Profile','<p>'+escape(state.profile.name)+'</p><div class="actions">'+button('Edit profile','profile')+button('Sign out','exit-crew')+'</div>')+
    card('Local assistant','<p role="status">'+status[model]+'</p>'+connectionHelp+modelRows+button('Check connection','model','','id="check-connection"'+
      (model === 'checking' || busy ? ' disabled' : '')))+
    card('Medical model','<p>Medical interpretation · '+escape(AI.clinicalModel())+'</p><p>Chat and explanations · '+escape(AI.model)+'</p><form id="clinical-model-form">'+
      field('Installed Ollama model','<input name="modelName" maxlength="160" value="'+escape(AI.clinicalModel())+'" placeholder="Local MedGemma 1.5 model name" required>')+
      '<p class="error" role="alert"></p><button class="button primary"'+(busy ? ' disabled' : '')+'>Test and use model</button></form>'+
      '<p><a href="https://ollama.com/library/medgemma1.5:4b">MedGemma 1.5 for Ollama</a></p>')+
    (developerMode() ? card('Developer tools', '<div class="actions">'+button('Report issue','report-problem')+
      button('Open reports folder','open-developer-reports')+'</div>') : '')+'</div>';
}
function applyAppearance() {
  document.documentElement.dataset.theme = appearance.theme;
  document.documentElement.dataset.text = appearance.text;
}
function saveAppearance(control) {
  const key = control.dataset.preference;
  const valid = {theme:['light','dark'],text:['standard','large','larger'],hamMotion:['system','on','off']};
  const value = key === 'volume' ? Math.round(Number(control.value)) : control.value;
  if (key === 'volume' ? !Number.isFinite(value) || value < 0 || value > 100 : !valid[key]?.includes(value)) return;
  appearance = {...appearance,[key]:value};
  try { localStorage.setItem('netin-appearance-v1',JSON.stringify(appearance)); } catch { notify('Could not save preferences.'); }
  applyAppearance();
  if (key === 'hamMotion') {
    if (!canAnimateHam()) detachHamVoice();
    syncHamPresence();
  }
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

function mentalContext() {
  return {
    moodCheckIns:(state.moodLogs || []).filter(item => item.env === state.env).slice(0,5).map(({date,level,emotions,cause}) =>
      ({date,mood:moodOptions[level - 1]?.label,emotions,cause})),
    moodScores:records().filter(item => item.values.mood != null).slice(0,5)
      .map(({date,values}) => ({date,mood:values.mood,dutyImpact:E.dutyImpact[values.moodImpact]}))
  };
}

function physicalContext(query = '', earlierReport = '') {
  const terms = value => value.toLowerCase().match(/[\p{L}]{4,}/gu) || [];
  const currentTerms = new Set(terms(query+' '+earlierReport).filter(word =>
    !['pain','hurt','hurts','feel','feels','today','started','since','what','with','about','when','this','have','from','still'].includes(word)));
  const related = text => (!query && !earlierReport) || terms(text).some(word => currentTerms.has(word));
  const recent = activeBodyRecords().slice().sort((a,b) => b.date.localeCompare(a.date));
  const active = new Map();
  for (const item of recent) if (!active.has(regionKey(item))) active.set(regionKey(item),item);
  const activeSymptoms = [...active.values()].filter(item => item.symptom !== 'resolved' &&
    (!bodySelection.size || query || bodySelection.has(regionKey(item))))
    .map(({date,side,region,symptom,intensity,notes}) => ({date,region:regionLabel(side,region),symptom:symptoms[symptom],intensity,notes:notes.slice(0,190)}))
    .filter(item => related(item.region+' '+item.symptom+' '+item.notes)).slice(0,5);
  const resolvedSymptoms = [...active.values()].filter(item => item.symptom === 'resolved')
    .map(({date,side,region}) => ({date,region:regionLabel(side,region)}))
    .filter(item => related(item.region)).slice(0,4);
  const previousRecords = historicalContext(query+' '+earlierReport).slice(0,5)
    .filter(item => item.env === stages[state.env] && item.concern && related(item.concern) && AI.healthTopic(item.concern) !== 'mood')
    .map(({date,concern}) => ({date,concern}));
  const knownReadings = today()?.values || {};
  const readings = E.metrics.filter(metric => metric.key !== 'mood' && knownReadings[metric.key] != null &&
    related(metric.label+' '+metric.key)).map(metric => ({name:metric.label,value:E.format(knownReadings[metric.key])+' '+metric.unit}));
  const profileHistory = (state.profile.history || '').split(/(?<=[.!;])\s+|\n/)
    .filter(item => item && (query || earlierReport) && related(item) && AI.healthTopic(item) !== 'mood').slice(0,3);
  return {activeEnvironment:environment().name,earlierReport:earlierReport || undefined,activeSymptoms,resolvedSymptoms,readings,previousRecords,profileHistory,
    medicalOfficer:state.profile.medical,allergies:state.profile.allergies,
    recordedMedications:(state.medications || []).filter(item=>item.env===state.env).slice(0,10),
    reportedMedicalSupplies:globalThis.MissionCare ? MissionCare.supplies(state).filter(item=>item.group==='Pain Reliever' || item.quantity != null).slice(0,15) : []};
}

async function generateSummary(area) {
  if (summaryPending || busy) return;
  const owner = session;
  summaryPending = area;
  render();
  let presented;
  try {
    if (missionIndexing && ['physical','general','mental'].includes(area)) await missionIndexing;
    if (owner !== session) return;
    let summary;
    if (area === 'mental') {
      summary = {...await AI.mentalSupport('',[],mentalContext(),library),scope:'mental-only'};
    } else if (area === 'physical') {
      const context = physicalContext();
      const question = 'Review the reported physical changes and give one practical next step.';
      const terms = context.activeSymptoms.map(item => item.region+' '+item.symptom+' '+item.notes).join(' ').slice(0,800);
      summary = await AI.answer(question,[],library,context,terms,false,'physical').catch(() => AI.physicalFallback(question,context));
    } else if (area === 'general') {
      const context = crewContext('daily');
      const terms = context.checkIns.flatMap(item => [item.note,...item.interview.map(detail => detail.answer)]).join(' ').slice(0,800);
      summary = await AI.answer('Explain the relevant readings, evidence-based precautions and a concrete next step.',[],library,context,terms);
    } else {
      const games = (state.motorLogs || []).slice().sort((a,b) => b.date.localeCompare(a.date)).slice(0,10);
      summary = {text:await AI.reflect('Summarize comparable results and changes. Keep units, hand and environment. Avoid clinical conclusions.',{games}),scope:area};
    }
    if (owner !== session) return;
    summary = {...summary,date:E.dateKey(),env:state.env};
    if (save({...state,healthSummaries:{...state.healthSummaries,[area]:summary}})) presented = summary;
  } catch { if (owner === session) notify('Ham could not generate the summary. Your records are saved.'); }
  finally {
    if (owner === session) {
      summaryPending = '';
      if (view() === 'health') {
        render();
        const canvas = $('main').querySelector('[data-ham-presence="review-'+area+'"]');
        if (presented && canvas && !hamUrgent()) presentHam({...presented,role:'assistant',content:presented.text,mode:area},canvas);
      } else syncHamPresence();
    }
  }
}

function confirmStage(next) {
  if (!Object.hasOwn(stages,next) || next === state.env) return;
  $('modal').close();
  openModal('Switch mission stage?',
    '<form id="stage-confirm-form" data-next="'+next+'"><p>'+stageBadge(state.env)+' '+UI.icon('arrow')+' '+stageBadge(next)+'</p>'+
    '<p class="muted">New entries will use '+stages[next]+'. Existing records keep the stage where they were logged.</p>'+
    '<div class="actions">'+button('Cancel','close')+'<button class="button primary">Switch stage</button></div></form>');
}
function toggleRegion(side,region,remove = false) {
  const key = regionKey({side,region});
  if (remove || bodySelection.has(key)) bodySelection.delete(key);
  else bodySelection.set(key,{side,region});
  render();
}
function workspaceClick(control) {
  const {action,side,region,tab,area} = control.dataset;
  if (action === 'open-body-map') { healthTab = 'physical'; physicalTab = 'body'; showRoute('health'); }
  else if (action === 'resume-flow') resumeFlow();
  else if (action === 'flow-step' && Object.hasOwn(flowLabels,control.dataset.step)) openFlowStep(control.dataset.step);
  else if (action === 'backdrop-picker') backdropPicker();
  else if (action === 'choose-backdrop' && ['earth','panda'].includes(control.dataset.choice)) changeBackdrop(control.dataset.choice);
  else if (action === 'review-dismiss-alert') {
    const alert = activeEmergency();
    if (alert) openModal('Dismiss emergency alert?',
      '<form id="dismiss-alert-form" data-incident="'+escape(alert.id)+'"><p>Dismiss this alert after the immediate concern has been handled. The original report will remain in Records.</p>'+
      '<div class="actions">'+button('Cancel','close')+'<button class="button primary">Dismiss alert</button></div></form>');
  } else if (action === 'assistant-tab' && ['chat','check'].includes(tab) && !busy) {
    assistantTab = tab;
    stopSpeech();
    render();
    document.querySelector('[data-action="assistant-tab"][data-tab="'+tab+'"]')?.focus();
  } else if (action === 'new-daily-check') beginIntake(true);
  else if (action === 'review-restart-chat' && !busy) {
    openModal('Restart conversation?',
      '<form id="restart-chat-form"><p>Start with a fresh chat. Earlier messages will still be available in Records.</p>'+
      '<div class="actions">'+button('Cancel','close')+'<button class="button primary">Restart conversation</button></div></form>');
  } else if (action === 'resolve-body') {
    const selected = [...bodySelection.values()].filter(item => {
      const previous = selectedHistory(item)[0];
      return previous && previous.symptom !== 'resolved';
    });
    if (!selected.length) notify('Select a region with a recorded symptom.');
    else {
      const resolved = selected.map(item => ({...item,env:state.env,date:E.dateKey(),symptom:'resolved',intensity:0,notes:''}));
      if (save({...state,body:[...resolved,...bodyRecords()]})) {
        bodySelection.clear();
        bodyEdit = undefined;
        render();
        notify('Selected symptoms marked as resolved.');
      }
    }
  } else if (action === 'export-day' && /^\d{4}-\d{2}-\d{2}$/.test(control.dataset.day)) exportReport(false,control.dataset.day,recordsFilter.env);
  else if (action === 'stage-menu') openModal('Change mission stage','<form id="stage-form">'+stageField('active-stage',state.env)+'<button class="button primary">Review change</button></form>');
  else if (action === 'clear-ultrasound') { Ultrasound.reset(); render(); $('ultrasound-file')?.focus(); }
  else if (action === 'physical-tab' && ['body','ultrasound'].includes(tab)) {
    physicalTab = tab;
    render();
    document.querySelector('[data-action="physical-tab"][data-tab="'+tab+'"]')?.focus();
  }
  else if (action === 'health-tab' && Object.hasOwn(healthTabs,tab)) {
    healthTab = tab;
    render();
    document.querySelector('[data-tab="'+tab+'"]')?.focus();
  } else if (action === 'body-side' && ['front','back'].includes(side)) {
    bodySide = side;
    render();
    document.querySelector('[data-action="body-side"][data-side="'+side+'"]')?.focus();
  } else if (['body-part','body-remove'].includes(action) && ['front','back'].includes(side) && Object.hasOwn(regions,region)) {
    toggleRegion(side,region,action === 'body-remove');
    document.querySelector('[data-action="body-part"][data-side="'+side+'"][data-region="'+region+'"]')?.focus();
  } else if (action === 'trend-range' || action === 'trend-day') {
    if (action === 'trend-range' && [1,7,30].includes(Number(control.dataset.range))) trendRange = Number(control.dataset.range);
    if (action === 'trend-day') trendDay = control.dataset.day;
    render();
    const selector = action === 'trend-range' ? '[data-range="'+trendRange+'"]' : '[data-action="trend-day"][data-day="'+trendDay+'"]';
    document.querySelector(selector)?.focus({preventScroll:true});
  } else if (action === 'ask-ham-trend') composeTrendQuestion();
  else if (action === 'generate-summary' && Object.hasOwn(healthTabs,area)) void generateSummary(area);
  else if (action === 'journal-retry') void summarizeJournal(dailyJournal());
  else if (action === 'next-motor') showRoute('motor');
  else if (action === 'next-journal') showRoute('journal');
  else if (action === 'choose-markdown') $('markdown-files').click();
  else if (action === 'index-semantic') void prepareSemanticSearch();
  else if (action === 'read-markdown') openDocument(control.dataset);
  else if (action === 'clear-records-filter') { recordsFilter = {date:'',env:''}; render(); }
  else if (action === 'clear-motor-date') { motorDate = ''; render(); }
  else return false;
  return true;
}

function workspaceSubmit(form) {
  const data = new FormData(form);
  if (form.id === 'stage-form') {
    if (data.get('stage') === state.env) $('modal').close();
    else confirmStage(data.get('stage'));
  } else if (form.id === 'stage-confirm-form') {
    if (!setStage(form.dataset.next)) return notify('Wait for the current activity to finish before switching stage.');
    bodySelection.clear();
    bodyEdit = undefined;
    moodDraft = undefined;
    trendDay = '';
    $('modal').close();
    render();
    notify('Mission stage updated.');
  } else if (form.id === 'mood-form') {
    saveMood(form);
  } else if (form.id === 'backdrop-form') {
    void chooseCustomBackdrop(form);
  } else if (form.id === 'dismiss-alert-form') {
    dismissAlert(form.dataset.incident);
  } else if (form.id === 'restart-chat-form') {
    if (busy || !save({...state,chatThread:crypto.randomUUID()})) return;
    stopSpeech();
    chat = [];
    assistantTab = 'chat';
    $('modal').close();
    render();
    $('chat-form')?.elements.query.focus();
    notify('New conversation started.');
  } else if (form.id === 'body-form') {
    const symptom = data.get('symptom');
    const intensity = symptom === 'resolved' ? 0 : Number(data.get('intensity'));
    if (!bodySelection.size || !Object.hasOwn(symptoms,symptom) || !Number.isInteger(intensity) || intensity < 0 || intensity > 10) return;
    const date = E.dateKey();
    const entries = [...bodySelection.values()].map(selection => ({...selection,id:crypto.randomUUID(),reportedAt:new Date().toISOString(),origin:'body-map',date,env:state.env,symptom,intensity,notes:data.get('notes').trim()}));
    const prior = bodyRecords().filter(record => record.date !== date || record.env !== state.env || record.symptom === 'resolved' || !bodySelection.has(regionKey(record)));
    if (save({...state,body:[...entries,...prior]})) {
      bodySelection.clear();
      bodyEdit = undefined;
      render();
      notify('Symptom saved.');
    }
  } else if (form.id === 'document-search') {
    documentQuery = data.get('query');
    render();
    $('document-search').elements.query.focus();
  } else if (form.id === 'records-filter') {
    recordsFilter = {date:data.get('date'),env:data.get('env')};
    render();
  } else if (form.id === 'motor-filter') {
    motorDate = data.get('date');
    render();
  } else if (form.id === 'journal-form') {
    queueJournal(form.elements.note);
    flushJournal(true);
  }
}

function completedCheckTurns() {
  const date = E.dateKey();
  return (state.conversations || []).filter(turn => turn.mode === 'check' && !turn.partialCheck && turn.date === date && turn.env === state.env);
}

function messageBubble(turn, controls = '', avatar = UI.ham()) {
  const name = turn.role === 'user' ? 'You:' : avatar+' Ham:';
  const body = turn.role === 'assistant' ? paragraphReply(turn) : '<p>'+escape(turn.content)+'</p>';
  return '<article class="message '+turn.role+(turn.urgent ? ' urgent' : '')+'"'+
    (turn.incidentId ? ' tabindex="-1" data-incident="'+escape(turn.incidentId)+'"' : '')+'><div class="speaker">'+name+
    (turn.interpreter || turn.localModel ? ' <small class="muted">· '+escape(turn.interpreter || turn.localModel)+'</small>' : '')+'</div>'+body+controls+'</article>';
}

function assistantView() {
  const isCheck = assistantTab === 'check';
  const current = isCheck && draft()?.mode === 'chat' ? draft() : null;
  const history = isCheck ? completedCheckTurns() : chat;
  const alert = activeEmergency();
  const currentAlert = alert?.content && !history.some(turn => turn.urgent &&
    (turn.incidentId ? turn.incidentId === alert.incidentId : turn.content === alert.content)) ? messageBubble(alert) : '';
  const messages = history.map((turn,index) => messageBubble(turn,
    turn.role === 'assistant' ? button('Listen','speak-reply','voice-button',
      'data-index="'+index+'" data-thread="'+assistantTab+'"') : '')).join('');
  const controls = isCheck && !alert && (current || !history.length) ?
    button(current ? 'Save and finish' : 'Start today’s check-in',current ? 'end-chat-check' : 'assist-check','compact',busy ? 'disabled' : '') :
    !isCheck && history.length ? button('Restart conversation','review-restart-chat','compact',busy ? 'disabled' : '') : '';
  if (isCheck) checkScreenDate = E.dateKey();
  return pageHead('', 'Assistant', '',controls)+
    '<div class="tabs assistant-tabs" role="group" aria-label="Ham conversations">'+
    [['chat','Chat with Ham'],['check','Daily check-in']].map(([tab,label]) => button(label,'assistant-tab',assistantTab === tab ? 'selected' : '',
      'data-tab="'+tab+'" aria-pressed="'+(assistantTab === tab)+'"'+(busy ? ' disabled' : ''))).join('')+'</div>'+
    emergencyBanner()+(isCheck ? workflow() : '')+
    '<section class="card assistant-shell"><div class="assistant-toolbar"><div class="assistant-head">'+UI.ham()+
      (isCheck ? ' Daily check-in · '+formatDay(E.dateKey()) : ' Ham')+'</div>'+
    '<div class="actions">'+(isCheck && history.length && !current && !alert ?
      button('New check-in','new-daily-check','compact',busy ? 'disabled' : '') : '')+
    (isCheck && history.length && !current && !alert && flow().motor !== 'done' ? button('Continue to motor test','next-motor','compact') : '')+
    button(UI.icon('sound')+' Auto-read','toggle-speech','compact','aria-label="Automatic read-aloud" aria-pressed="'+readAloud+'"')+
    button('Stop audio','stop-speech','compact')+'</div></div><div id="chat-log" class="transcript" aria-live="polite">'+
    currentAlert+
    (current ? intakeTranscript(current,busy ? null : CI.question(current)) :
      messages || empty(isCheck ? 'Start a new daily check-in with Ham. It will be saved in Records.' : 'Hello, '+firstName()+'. How is your shift going?'))+
    pendingHam(assistantTab)+'</div>'+
    (isCheck ? current && !alert ? intakeComposer(CI.question(current)) : '' : '<form id="chat-form" class="composer">'+field('Message',
      '<textarea name="query" rows="2" maxlength="1000" placeholder="Ask Ham a question or share how you are doing" required '+(busy ? 'disabled' : '')+'></textarea>')+
      hamReplyButtons()+'</form>')+'</section>';
}

function loadMarkdown() {
  return refreshMarkdown(() => AI.loadMarkdown(progress => { missionImport = progress; }));
}

function importSelectedMarkdown(files) {
  if (!files.length || missionIndexing || semanticIndexing) return;
  return refreshMarkdown(() => AI.replaceMarkdown(files, progress => { missionImport = progress; }));
}

function refreshMarkdown(load) {
  missionImport = 'Preparing the library…';
  libraryError = '';
  missionIndexing = (async () => {
    try { library = await load(); semanticStatus = ''; }
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

async function prepareSemanticSearch() {
  if (semanticIndexing || missionIndexing || !library.length) return;
  const update = message => {
    semanticStatus = message;
    const status = $('semantic-status');
    if (status) status.textContent = message;
  };
  semanticIndexing = true;
  update('Preparing semantic search…');
  $('index-semantic').disabled = true;
  document.querySelector('[data-action="choose-markdown"]').disabled = true;
  try {
    if (!AI.availableModels().embeddingReady) await checkModel();
    await AI.buildSemanticIndex(library,(done,total) => update('Indexing '+done+' of '+total+' passages…'));
    update('Semantic search is ready for this library.');
  } catch (error) {
    update(error.message);
  } finally {
    semanticIndexing = false;
    if (view() === 'guias') {
      const restoreFocus = document.activeElement === document.body || document.activeElement === $('index-semantic');
      render();
      if (restoreFocus) $('index-semantic')?.focus();
    }
  }
}
