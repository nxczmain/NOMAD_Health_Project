'use strict';

const E = AstraEngine;
const AI = AstraAssistant;
const CI = NetinCheckIn;
const Motor = NetinMotor;
const $ = (id) => document.getElementById(id);
const legacyCrew = 'astramed-v1';
const rosterKey = 'netin-roster-v1';
const deletedCrewKey = 'netin-deleted-crew-v1';
const missionStageKey = 'netin-mission-stage-v1';
const isCrewKey = key => typeof key === 'string' && /^netin-crew:[\da-f-]{36}$/.test(key);
const routes = [['panel','Home'],['bot','Assistant'],['health','Health'],['records','Records']];
const utilityRoutes = [['guias','Documents'],['settings','Settings']];
const subRoutes = ['check','motor','journal','semana'];
const formatDay = (key) => new Date(key + 'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'});
const escape = (value = '') => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[char]);
const datedTurns = turns => turns.map(turn => ({...turn,date:turn.date || E.dateKey(),env:turn.env || state.env}));
const button = (label, action, kind = '', attrs = '') => '<button type="button" class="button '+kind+'" data-action="'+action+'" '+attrs+'>'+label+'</button>';
const link = (label, route, kind = '') => '<a class="button '+kind+'" href="#'+route+'">'+label+'</a>';
const view = () => !session ? 'home' : cameraScreen ? 'camera' :
  [...routes.map(([key]) => key),...utilityRoutes.map(([key]) => key),...subRoutes].find(key => '#'+key === location.hash) || 'panel';
const environment = () => E.environments[state.env];
const records = () => state.records.filter(entry => entry.env === state.env).sort((a,b) => b.date.localeCompare(a.date));
const today = () => records().find(entry => entry.date === E.dateKey());
const draft = () => state.drafts[state.env]?.date === E.dateKey() ? state.drafts[state.env] : null;
const week = () => E.weekly(state.records,state.env);
const reportDays = () => E.weekly(state.records,state.env,reportLength);
const simulation = () => CrewProfiles.isDemo(session.key);
const demo = E.initialState();
let state;
let session;
let crewKeys = [...CrewProfiles.demoKeys];
let dailyPhotos = new Map();
let crewPortrait;
const crewThumbnails = new Map();
let cameraScreen;
let storageError = false;
let toastTimer;
let library = [];
let libraryError = '';
let missionImport = '';
let missionIndexing;
let model = 'unchecked';
let chat = [];
let chatMode = 'companion';
let readAloud = true;
let voiceRequest = 0;
let voiceText = '';
let busy = false;
let guideTopic = '';
let selectedDay = null;
let reportLength = 7;
let motorRound;
let motorResult;
let motorMessage = '';
let motorGame = 'dock';
let rosterReset = false;
let deletedCrew = new Set();

function readCrew(key) {
  const previous = JSON.parse(localStorage.getItem(key));
  if (previous?.profile && E.environments[previous.env] && Array.isArray(previous.records)) {
    const profile = {...previous.profile};
    const sampleTranslations = {
      role: 'Especialista de misión', history: 'Mareo durante una transición de gravedad en entrenamiento.',
      allergies: 'Sin alergias registradas en la simulación.', medical: 'Dra. Lina Torres'
    };
    for (const key of Object.keys(sampleTranslations)) if (profile[key] === sampleTranslations[key]) profile[key] = demo.profile[key];
    const motorLogs = previous.motorLogs ?? (CrewProfiles.isDemo(key) ? Motor.demoHistory(previous.records) : []);
    const drafts = Object.fromEntries(Object.entries(previous.drafts || {}).map(([env,entry]) =>
      [env,entry?.mode === 'chat' ? CI.restore(entry) : entry]));
    return {...previous, profile, motorLogs, drafts, transitions: previous.transitions || []};
  }
  if (!previous && CrewProfiles.isDemo(key)) return CrewProfiles.demoState(key);
  if (!previous && key === legacyCrew) return {...demo};
  throw new Error('The crew profile could not be read.');
}

async function resetCrewData() {
  const keys = Array.from({length:localStorage.length},(_,index) => localStorage.key(index));
  const examples = CrewProfiles.demoKeys.map(key => [key,JSON.stringify(CrewProfiles.demoState(key))]);
  await CrewCamera.clearPhotos();
  for (const key of keys) {
    if (key === legacyCrew || key === rosterKey || key === deletedCrewKey || isCrewKey(key) || CrewProfiles.isDemo(key)) localStorage.removeItem(key);
  }
  for (const [key,profile] of examples) localStorage.setItem(key,profile);
}

function notify(message) {
  clearTimeout(toastTimer);
  $('toast').textContent = message;
  toastTimer = setTimeout(() => { $('toast').textContent = ''; },4200);
}
function save(next) {
  try {
    localStorage.setItem(session.key, JSON.stringify(next));
    state = next;
    storageError = false;
    return true;
  } catch {
    notify('Could not save locally. Check available storage and try a smaller attachment.');
    return false;
  }
}
function setDraft(next) {
  return save({...state,drafts:{...state.drafts,[state.env]:next}});
}
function pageHead(label, title, text, action = '') {
  return '<header class="page-head"><div><h1>'+title+'</h1>'+(text ? '<p class="muted">'+text+'</p>' : '')+'</div>'+action+'</header>';
}
function field(label, control) {
  return '<label class="field"><span>'+label+'</span>'+control+'</label>';
}
function home() {
  const cards = crewKeys.map(key => {
    try {
      const {profile} = readCrew(key);
      return '<div class="crew-row"><button type="button" class="crew-option" data-action="enter-crew" data-id="'+escape(key)+'">'+
        portrait(profile.name,validPhoto(crewThumbnails.get(key)))+'<span><strong>'+escape(profile.name)+'</strong><small>'+escape(profile.role)+
        (CrewProfiles.isDemo(key) ? ' · Demo' : '')+'</small></span>'+UI.icon('arrow')+'</button>'+
        button('Delete','delete-crew','crew-delete compact','data-id="'+escape(key)+'" aria-label="Delete '+escape(profile.name)+'"')+'</div>';
    } catch {
      return '<p class="notice">Could not read a local profile.</p>';
    }
  }).join('');
  return '<section class="crew-home"><div class="crew-picker"><h1>Welcome to NETIN</h1><p class="muted">Choose the mission stage, then sign in to your crew profile.</p>'+
    stageField('mission-stage',stageChoice)+
    (rosterReset ? '<p class="notice" role="status">Profiles reset. Each demo astronaut has 30 days of records.</p>' : '')+
    '<div class="crew-options">'+cards+'</div>'+button('Create profile','new-profile','primary')+'</div>'+
    '<figure class="earth-window"><figcaption><strong>Earth at sunrise</strong><a href="https://science.nasa.gov/earth/earth-observatory/sunrise-from-the-station-152259/">Photograph from the ISS · NASA</a></figcaption></figure></section>';
}

function cameraView() {
  const {error,pendingPhoto,destination,working} = cameraScreen;
  return pageHead('', 'Daily photo',escape(state.profile.name)+' · '+formatDay(E.dateKey()))+
    '<section class="work-sheet photo-capture">'+(pendingPhoto ? '<div class="camera-frame"><img src="'+validPhoto(pendingPhoto)+'" alt="Photo preview"></div>' :
      error ? '' : '<div class="camera-frame"><video id="photo-video" autoplay muted playsinline aria-label="Camera preview"></video>'+
      '<span class="camera-guide" aria-hidden="true"></span><span id="camera-count" class="camera-count" hidden aria-hidden="true"></span></div>')+
    '<p id="photo-status" role="status">'+(error ? escape(error) : pendingPhoto ? (working ? 'Saving your photo…' : 'Review your photo.') : 'Opening the camera…')+'</p><div class="actions">'+
    (pendingPhoto ? button('Use photo','use-camera','primary',working ? 'disabled' : '')+button('Retake','retry-camera','',working ? 'disabled' : '') :
      error ? button('Retry camera','retry-camera','primary') : button('Take photo','capture-camera','primary','disabled'))+
    button(destination === 'routine' ? 'Continue without photo' : 'Back to Home','skip-camera','',working && pendingPhoto ? 'disabled' : '')+'</div></section>';
}

function showRoute(route, focus = 'main') {
  if (route !== 'bot') stopSpeech();
  history.replaceState(null, '', '#'+route);
  render();
  window.scrollTo({top:0,behavior:'instant'});
  $(focus)?.focus({preventScroll:true});
}

function loginModal(key) {
  if (session || !crewKeys.includes(key)) return;
  let crew;
  try { crew = readCrew(key); }
  catch { notify('The crew profile could not be opened.'); return; }
  const setup = !crew.auth;
  openModal(setup ? 'Create your password' : 'Sign in','<form id="login-form" data-crew="'+escape(key)+'"><div class="sign-in-person">'+
    portrait(crew.profile.name,validPhoto(crewThumbnails.get(key)),'large')+'<div><strong>'+escape(crew.profile.name)+'</strong>'+stageBadge(stageChoice)+'</div></div>'+
    passwordFields(setup)+'<p class="error" role="alert"></p><button class="button primary" type="submit">Sign in</button></form>');
  $('login-form').elements.password.focus();
}

function deleteCrewModal(key) {
  if (session || !crewKeys.includes(key)) return;
  let crew;
  try { crew = readCrew(key); }
  catch { notify('The crew profile could not be opened.'); return; }
  openModal('Delete profile','<form id="delete-crew-form" data-crew="'+escape(key)+'"><p>Delete '+escape(crew.profile.name)+
    ' and all of their local records, conversations and photos?</p>'+(crew.auth ? passwordFields(false) : '')+
    '<p class="error" role="alert"></p><button class="button primary" type="submit">Delete profile</button></form>');
}

async function submitDeleteCrew(form) {
  const key = form.dataset.crew;
  if (session || !crewKeys.includes(key) || form.dataset.pending) return;
  const submit = form.querySelector('[type="submit"]');
  submit.disabled = true;
  form.dataset.pending = 'true';
  try {
    const crew = readCrew(key);
    if (crew.auth && !await CrewProfiles.verifyPassword(form.elements.password.value,crew.auth)) throw new Error('Incorrect password.');
    if (!form.isConnected || !$('modal').open || session) return;
    await CrewCamera.clearPhotos(key);
    const removed = new Set([...deletedCrew,key]);
    localStorage.setItem(deletedCrewKey,JSON.stringify([...removed]));
    localStorage.removeItem(key);
    localStorage.setItem(rosterKey,JSON.stringify(crewKeys.filter(item => item !== key && isCrewKey(item))));
    deletedCrew = removed;
    crewKeys = crewKeys.filter(item => item !== key);
    if ($('modal').open && form.isConnected) $('modal').close();
    render();
    notify('Profile deleted.');
  } catch (error) { form.querySelector('.error').textContent = error.message; }
  finally { delete form.dataset.pending; submit.disabled = false; }
}

async function submitLogin(form) {
  const key = form.dataset.crew;
  if (session || !crewKeys.includes(key) || form.dataset.pending) return;
  const submit = form.querySelector('[type="submit"]');
  const error = form.querySelector('.error');
  form.dataset.pending = 'true';
  submit.disabled = true;
  error.textContent = '';
  try {
    const crew = readCrew(key);
    const password = form.elements.password.value;
    const stored = localStorage.getItem(key);
    const setup = !crew.auth;
    if (crew.auth) {
      if (!await CrewProfiles.verifyPassword(password,crew.auth)) throw new Error('Incorrect password.');
    } else {
      if (!form.elements.confirmation) throw new Error('Close this dialog and select your profile again.');
      crew.auth = await CrewProfiles.createPassword(password,form.elements.confirmation.value);
    }
    if (!form.isConnected || !$('modal').open || session) return;
    if (localStorage.getItem(key) !== stored) throw new Error('The profile changed. Close this dialog and sign in again.');
    if (crew.env !== stageChoice) {
      crew.transitions.push({from:crew.env,to:stageChoice,reportedAt:new Date().toISOString()});
      crew.env = stageChoice;
    }
    localStorage.setItem(key,JSON.stringify(crew));
    $('modal').close();
    state = crew;
    session = {key};
    chat = (state.conversations || []).slice(-80);
    const owner = session;
    await readCrewPhotos();
    if (owner !== session) return;
    if (dailyPhotos.has(E.dateKey()) && flow().photo !== 'done') markFlow('photo');
    if (simulation() || dailyPhotos.has(E.dateKey()) || flow().check === 'urgent') showRoute('panel');
    else void openCamera('routine');
  } catch (failure) { error.textContent = failure.message; }
  finally { delete form.dataset.pending; submit.disabled = false; }
}

function exitCrew() {
  flushJournal(false);
  clearTimeout(journalSummaryTimer);
  cameraScreen?.controller.abort();
  cameraScreen = undefined;
  session = undefined;
  state = undefined;
  dailyPhotos = new Map();
  crewPortrait = undefined;
  chat = [];
  chatMode = 'companion';
  healthTab = 'general';
  bodySide = 'front';
  bodySelection.clear();
  bodyEdit = undefined;
  recordsFilter = {date:'',env:''};
  trendRange = 7;
  trendDay = '';
  motorDate = '';
  openedDocument = undefined;
  summaryPending = '';
  guideTopic = '';
  busy = false;
  if (model === 'checking') model = 'unchecked';
  selectedDay = null;
  reportLength = 7;
  motorResult = undefined;
  motorMessage = '';
  motorGame = 'dock';
  if ($('modal').open) $('modal').close();
  showRoute('home');
}

function stopSpeech() {
  voiceRequest++;
  voiceText = '';
  globalThis.speechSynthesis?.cancel();
  globalThis.chrome?.webview?.postMessage('netin-stop-speech');
}

function speakReply(turn) {
  if (turn?.role !== 'assistant' || !turn.content) return;
  stopSpeech();
  const text = turn.paragraph || (turn.sections ? summaryParagraph(turn) : turn.content);
  voiceText = text.replace(/\[\d+\]/g,'').replace(/ +([.,])/g,'$1');
  globalThis.chrome?.webview?.postMessage('netin-speak\n'+voiceRequest+'\n'+appearance.volume+'\n'+voiceText);
}

async function readCrewPhotos() {
  const owner = session;
  try {
    const [saved,latest] = await Promise.all([CrewCamera.photos(owner.key,'',E.dateKey()),CrewCamera.latest(owner.key)]);
    if (session !== owner) return;
    dailyPhotos = new Map(saved.map(photo => [photo.date,photo]));
    crewPortrait = latest;
    if (latest) crewThumbnails.set(owner.key,latest);
  } catch {
    if (session === owner) notify('Stored photos could not be read.');
  }
}

async function openCamera(destination, retake = false) {
  if (!session) return;
  cameraScreen?.controller.abort();
  const screen = {destination,retake,controller:new AbortController(),working:true,error:''};
  cameraScreen = screen;
  const {signal} = screen.controller;
  showRoute('photo');
  try {
    const src = await CrewCamera.capture($('photo-video'),signal,() => new Promise((resolve,reject) => {
      const aborted = () => reject(signal.reason);
      signal.addEventListener('abort',aborted,{once:true});
      const take = document.querySelector('[data-action="capture-camera"]');
      screen.working = false;
      screen.capture = () => {
        screen.working = true;
        take.disabled = true;
        signal.removeEventListener('abort',aborted);
        screen.capture = undefined;
        resolve();
      };
      $('photo-status').textContent = 'Center your face in the guide, then choose Take photo.';
      take.disabled = false;
      take.focus();
    }),seconds => {
      const count = $('camera-count');
      count.hidden = false;
      count.textContent = seconds;
      $('photo-status').textContent = 'Taking the photo in '+seconds+'…';
    });
    if (signal.aborted) return;
    const captured = new Date();
    screen.pendingPhoto = {crew:session.key,date:E.dateKey(captured),env:state.env,capturedAt:captured.toISOString(),src};
    screen.working = false;
    render();
    document.querySelector('[data-action="use-camera"]')?.focus();
  } catch (error) {
    if (signal.aborted) return;
    screen.working = false;
    screen.error = 'Camera unavailable. You can try again later. '+CrewCamera.message(error);
    render();
    document.querySelector('[data-action="retry-camera"]')?.focus();
  }
}

async function saveCameraPhoto(screen, photo) {
  screen.working = true;
  screen.error = '';
  render();
  try {
    const saved = await CrewCamera.save(photo,screen.retake);
    if (screen.controller.signal.aborted) return;
    dailyPhotos.set(saved.date,saved);
    if (!crewPortrait || saved.date >= crewPortrait.date) crewPortrait = saved;
    crewThumbnails.set(session.key,crewPortrait);
    notify('Daily photo saved.');
    finishCamera();
  } catch {
    if (screen.controller.signal.aborted) return;
    screen.working = false;
    screen.error = 'The photo could not be saved. Try again.';
    render();
    document.querySelector('[data-action="use-camera"]')?.focus();
  }
}

function finishCamera() {
  const {destination} = cameraScreen;
  cameraScreen.controller.abort();
  cameraScreen = undefined;
  if (dailyPhotos.has(E.dateKey())) markFlow('photo');
  if (destination === 'routine' && flow().check !== 'done') return openFlowStep('check');
  showRoute(destination === 'routine' ? 'panel' : destination);
}

function validPhoto(image) {
  return image?.src && /^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(image.src) ? image.src : '';
}
function preview(image) {
  const source = validPhoto(image);
  return source ? '<figure class="attachment"><img alt="Check-in attachment" src="'+source+'"><figcaption>Photo for crew medical review</figcaption></figure>' : '';
}
function dailyPhoto(day) {
  const photo = dailyPhotos.get(day);
  if (!photo || !/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(photo.src)) return '';
  const time = new Intl.DateTimeFormat('en-US',{hour:'numeric',minute:'2-digit'}).format(new Date(photo.capturedAt));
  return '<figure class="attachment daily-photo"><img alt="Daily health log photo" src="'+photo.src+'"><figcaption>Daily photo · '+time+'</figcaption></figure>';
}
function reading(metric, value) {
  const status = E.status(metric,value);
  const ratio = status === 'empty' ? 0 : Array.isArray(value)
    ? Math.max(...value.map((part,index) => Math.abs(part - metric.base[index]) / metric.deviation[index]))
    : Math.abs(value - metric.base) / metric.deviation;
  return '<div class="reading '+status+'"><span>'+metric.label+'</span><strong>'+E.format(value)+' <small>'+(value == null ? '' : metric.unit)+'</small></strong><span class="signal" aria-hidden="true"><i style="--fill:'+Math.min(100,status === 'empty' ? 0 : 32 + ratio * 30)+'%"></i></span><small>'+E.labels[status]+'</small></div>';
}
function assessment(entry) {
  const result = E.evaluate(entry,state.profile);
  return '<div class="notice '+result.attention+'"><strong>'+result.title+'</strong><p>'+result.action+'</p>'+
    (result.flags.length ? '<ul>'+result.flags.map(flag => '<li>'+escape(flag)+'</li>').join('')+'</ul>' : '')+
    (result.history ? '<p><strong>Relevant history</strong> '+escape(result.history)+'</p>' : '')+'</div>';
}
function reviewEntries(length = 7) {
  const first = E.weekly([],state.env,length)[0].date;
  const last = E.dateKey();
  return state.records.filter(entry => (simulation() || !entry.sample) && entry.date >= first && entry.date <= last)
    .sort((a,b) => b.date.localeCompare(a.date) || Number(b.env === state.env) - Number(a.env === state.env));
}
function logConclusion(length = 7) {
  const entries = reviewEntries(length);
  if (!entries.length) return '<p class="muted">There are no crew check-ins to summarize for this period.</p>';
  const uniqueDays = new Set(entries.map(entry => entry.date)).size;
  const groups = Object.entries(E.environments).map(([key, env]) => {
    const logs = entries.filter(entry => entry.env === key);
    if (!logs.length) return '';
    const monitored = logs.map(entry => E.evaluate(entry,state.profile));
    const followUps = monitored.filter(item => item.attention === 'review' || item.attention === 'urgent').length;
    const emotional = logs.filter(entry => entry.values.moodImpact === 'some' || entry.values.moodImpact === 'task').length;
    const gaps = monitored.reduce((sum,item) => sum + E.metrics.length - item.coverage, 0);
    return '<tr><th scope="row">'+env.name+'</th><td>'+logs.length+'</td><td class="'+(followUps ? 'warning' : '')+'">'+followUps+'</td><td>'+emotional+'</td><td>'+gaps+'</td></tr>';
  }).join('');
  return '<p>'+uniqueDays+' of '+length+' '+(simulation() ? 'simulated days logged.' : 'days logged by this crew member.')+'</p><div class="table-scroll"><table><thead><tr><th>Environment</th><th>Check-ins</th><th>For review</th><th>Mood affected duties</th><th>Missing readings</th></tr></thead><tbody>'+groups+'</tbody></table></div>';
}

function crewContext(mode, query = '') {
  const {name, mission, context} = environment();
  const data = {activeEnvironment:name, mission, environmentContext:context};
  if (mode === 'guide') return data;
  const logs = mode === 'week' ? reviewEntries().slice(0,28) : [today()].filter(entry => entry && (simulation() || !entry.sample));
  return {...data, history:historicalContext(query), journal:(state.journals || []).slice(0,4).map(({date,text}) => ({date,text:text.slice(0,220)})),
    recentBody:bodyRecords().slice(0,5).map(({date,region,symptom,intensity,notes}) => ({date,region:regions[region],symptom:symptoms[symptom],intensity,notes:notes.slice(0,140)})),
    period: mode === 'week' ? 'Last seven local calendar days, grouped by environment' : 'Today in the active environment',
    profileContext: simulation() ? 'Simulation profile. Treat the check-ins as simulated data.' : 'Crew-entered profile',
    medicalOfficer: state.profile.medical || 'Use the mission medical contact',
    medicalHistory: state.profile.history || '', allergies: state.profile.allergies || '',
    reportedMedicalSupplies: (state.medicalSupplies || []).filter(item => item.env === state.env).slice(-20).map(({name,quantity,expires}) => ({name,quantity,expires})),
    checkIns: logs.map((entry, index) => ({date:entry.date, environment:E.environments[entry.env]?.name,
      readings: Object.fromEntries(E.metrics.filter(metric => entry.values[metric.key] != null).map(metric => [metric.label,E.format(entry.values[metric.key])+' '+metric.unit])),
      physicalCondition: E.steps[0].options[entry.values.impact], moodImpact: E.dutyImpact[entry.values.moodImpact],
      demoFlags: E.metrics.filter(metric => E.status(metric,entry.values[metric.key]) === 'review').map(metric => metric.label),
      note: (entry.values.note || '').slice(0,index < 3 ? 290 : 80), environmentNote: (entry.values.context || '').slice(0,index < 3 ? 170 : 50),
      interview: index < 3 ? (entry.details || []).map(item => ({topic:item.title,answer:item.answer.slice(0,200)})) : []
    }))};
}

function localReview(mode, limitation = '') {
  if (mode === 'daily') {
    const entry = today();
    if (!entry || (entry.sample && !simulation())) return 'Complete a daily check-in to start a review.';
    const result = E.evaluate(entry,state.profile);
    return AI.summary({immediateActions:result.attention === 'urgent' ? result.action : 'Record any new symptoms or changes.',
      evidence:(simulation() ? 'The simulated check-in' : 'Your check-in')+' includes '+result.coverage+' of '+E.metrics.length+' readings.',
      whyItMatters:limitation || 'The check-in records what you reported and highlights readings for review.',
      recommendations:result.attention === 'urgent' ? 'Share your latest symptoms and readings when you call.' : result.action});
  }
  const entries = reviewEntries();
  if (!entries.length) return 'There are no crew check-ins to summarize for these seven days.';
  const flagged = entries.filter(entry => ['review','urgent'].includes(E.evaluate(entry,state.profile).attention)).length;
  return AI.summary({immediateActions:entries.some(entry => E.dateKey() === entry.date && E.evaluate(entry,state.profile).attention === 'urgent') ?
    E.medicalHelp : 'Record any new symptoms or changes.',
    evidence:(simulation() ? 'The simulated log' : 'Your log')+' has '+entries.length+' check-ins. NETIN marked '+flagged+' for review.',
    whyItMatters:limitation || 'The weekly log shows which readings and observations warrant a closer look.',
    recommendations:flagged ? 'Bring the flagged readings and observations to the crew medical officer.' : 'Continue recording measurements and observations.'});
}
function temperatureAlert(entry) {
  return AI.summary({
    immediateActions: stageChoice === 'earth' ? 'Call local emergency services now and report the temperature reading.' :
      'Contact the crew medical officer now and report the temperature reading.',
    evidence: 'Your check-in recorded '+E.format(entry.values.temp)+' °C. CDC emergency guidance uses a threshold below 35 °C for body temperature [1].',
    whyItMatters: 'If accurate, the reading could indicate hypothermia and needs urgent assessment [1].',
    recommendations: 'Repeat the measurement with a reliable device if available while arranging medical help.',
    measurements:'Reported temperature: '+E.format(entry.values.temp)+' °C.',
    indicators:'A reading below 35 °C calls for urgent assessment [1].',
    risks:'Possible hypothermia if the reading is accurate [1].'
  }, [{ref:1,title:'CDC · Preventing Hypothermia',url:E.lowTemperatureSource}]);
}

function emergencyAnswer(kind, report = '') {
  const earth = stageChoice === 'earth';
  const action = earth ? 'Call local emergency services now.' :
    'Alert the crew medical officer and activate the onboard emergency procedure now.';
  if (kind === 'violence' || kind === 'self-harm') {
    const gettingHelp = earth ? action : 'Activate the onboard emergency procedure and contact mission command or another available crewmate now.';
    const distance = kind === 'violence' ? 'Move away from the person and from anything you could use to hurt them, if you can do so safely. ' :
      'Move away from anything you could use to hurt yourself and ask another person to stay with you. ';
    const danger = kind === 'violence' ? 'Tell responders you are afraid you may hurt someone, and say where you are.' :
      'Tell responders you may hurt yourself, and say where you are.';
    const paragraph = 'I’m taking this seriously. '+distance+gettingHelp+' '+danger;
    return {text:paragraph,paragraph,urgent:true,
      sources:[{ref:1,title:'NHS · Urgent help for a mental health emergency',url:'https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/'}]};
  }
  if (kind !== 'unresponsive') {
    const paragraph = action+' Tell responders exactly what is happening, where you are, and when it started. Follow their directions.';
    return {text:paragraph,paragraph,urgent:true,
      sources:[{ref:1,title:'MedlinePlus · Recognizing medical emergencies',url:CI.emergencySource}]};
  }
  const reportText = report.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’']/g,'');
  const absent = /\b(?:not breathing|isnt breathing|stopped breathing|only gasping|no respira|dejo de respirar|solo jadea)\b/.test(reportText);
  const breathing = absent ?
    'If they are not breathing normally or are only gasping, start CPR and use an AED as soon as available under your emergency procedure.' :
    'Stay with them and keep checking their breathing. If it stops or they are only gasping, start CPR and use an AED as soon as available under your emergency procedure.';
  const positioning = earth && !absent ? ' If breathing normally, place them on their side if you can do so safely and do not suspect a head, neck or back injury.' : '';
  const paragraph = action+' Say the person is unresponsive and describe their breathing. '+breathing+positioning;
  return {text:paragraph,paragraph,urgent:true,
    sources:[{ref:1,title:'American Red Cross · Unresponsive and breathing',url:'https://www.redcross.org/take-a-class/resources/learn-first-aid/unresponsive-and-breathing-person'}]};
}

function checkFollowUps(entry) {
  const items = {};
  if (entry.values.impact === 'task') items.duties = 'Tell the crew medical officer which duties are affected and what changed.';
  if (entry.values.moodImpact === 'task') items.mood = 'Discuss the reported impact on focus and duties with the crew medical officer.';
  const concern = entry.details?.find(item => item.title === 'Symptoms')?.answer;
  if (concern && !CI.routineResponse(concern) && CI.symptomTopic({answers:{symptoms:concern}}) !== 'general') {
    items.symptoms = 'Review the reported symptom if it is ongoing or worsening.';
  }
  return items;
}

function intakeSummary(entry, urgent) {
  if (urgent === 'temperature') return temperatureAlert(entry);
  if (urgent) return emergencyAnswer(urgent);
  const result = E.evaluate(entry,state.profile);
  const followUps = Object.values(checkFollowUps(entry));
  const text = ['Your check-in includes '+result.coverage+' of '+E.metrics.length+' measurements.',
    result.flags.length ? 'Review the recorded '+result.flags.join(', ')+'.' : '',
    followUps[0] || (result.coverage < E.metrics.length ? 'Add the missing measurements when available.' : '')].filter(Boolean).join(' ');
  return {text,paragraph:text,followUps};
}

function intakeTranscript(current, prompt) {
  const turns = [...current.turns,...(prompt ? [{role:'assistant',content:prompt.prompt}] : [])];
  return turns.map(turn => '<article class="message '+turn.role+'"><div class="speaker">'+(turn.role === 'user' ? 'You' : UI.ham()+' Ham')+'</div><p>'+escape(turn.content)+'</p></article>').join('');
}

function intakeComposer(prompt) {
  if (!prompt) return '<div class="actions">'+button('Save check-in','finish-chat-check','primary',busy ? 'disabled' : '')+'</div>';
  const disabled = busy ? ' disabled' : '';
  const existing = (draft().values[prompt.key] != null ? E.format(draft().values[prompt.key]) : '');
  const answer = prompt.options ? '<div class="actions intake-options">'+Object.entries(prompt.options).map(([key,label]) =>
    button(label,'intake-option','','data-answer="'+key+'"'+disabled)).join('')+'</div>' :
    field(prompt.metric ? metricNames[prompt.metric.key]+' ('+prompt.metric.unit+')' : 'Your answer',prompt.metric ? '<input name="answer" inputmode="'+(prompt.metric.key === 'pressure' ? 'text' : 'decimal')+'" autocomplete="off" maxlength="60" value="'+escape(existing)+'"'+disabled+'>' :
      '<textarea name="answer" rows="2" maxlength="'+(prompt.key === 'note' ? 1500 : 700)+'"'+disabled+'>'+escape(existing)+'</textarea>');
  const measure = prompt.metric ? '<div class="measure-question">'+UI.icon(prompt.metric.key)+'<strong>'+metricNames[prompt.metric.key]+'</strong></div>' : '';
  return '<form id="intake-form" class="intake-form intake-card">'+measure+answer+(prompt.key === 'note' ?
    field('Photo (optional)','<input name="image" type="file" accept="image/jpeg,image/png,image/webp"'+disabled+'>')+preview(draft().image) : '')+
    '<div class="actions">'+(prompt.options ? '' : '<button class="button primary"'+disabled+'>Send</button>')+
    (prompt.key === 'symptoms' ? button('Nothing to report','intake-option','','data-answer="none"'+disabled) : '')+
    (prompt.optional ? button('Skip','skip-intake','',disabled) : '')+'</div><p class="error" role="alert"></p></form>';
}

function speakIntake() {
  const prompt = CI.question(draft());
  if (prompt && readAloud && view() === 'bot') speakReply({role:'assistant',content:prompt.prompt});
}

async function prepareIntakeQuestion(current, openAssistant = false) {
  const available = CI.questions(current);
  const activeSession = session;
  const needsModel = available.length && !current.next && available[0].key !== 'urgent' && !['offline','missing'].includes(model);
  if (needsModel) busy = true;
  if (openAssistant) showRoute('bot');
  else if (needsModel && view() === 'bot') render();
  if (!available.length) return finishIntake();
  if (needsModel) {
    const question = await AI.checkInQuestion(available,current,environment().name,library).catch(() => null);
    if (session !== activeSession) return;
    busy = false;
    if (draft() !== current) return;
    const usable = question && !current.turns.some(turn => turn.role === 'assistant' && turn.content === question.prompt);
    setDraft({...current,next:usable ? question : undefined,localQuestion:!usable});
  }
  if (view() === 'bot') {
    render();
    document.querySelector('#intake-form [name="answer"], #intake-form [data-action="intake-option"]')?.focus();
    speakIntake();
  }
}

function beginIntake() {
  if (busy) return;
  if (draft()?.mode !== 'chat') {
    const last = records().find(entry => entry.date < E.dateKey() && (simulation() || !entry.sample));
    const yesterday = E.weekly([],state.env,2)[0].date;
    const bodyConcern = bodyRecords().find(item => item.date === yesterday && item.symptom !== 'resolved');
    const recentConcern = state.records.find(entry => entry.date === yesterday && entry.details?.some(item => item.title === 'Symptoms'))?.details
      .find(item => item.title === 'Symptoms')?.answer || (bodyConcern ? symptoms[bodyConcern.symptom]+' in '+regions[bodyConcern.region] : '');
    const previous = state.records.filter(entry => entry.date <= E.dateKey() && (simulation() || !entry.sample))
      .sort((a,b) => b.date.localeCompare(a.date))[0];
    const personal = {name:firstName(),recent:last ? {sleep:last.values.sleep,mood:last.values.mood} : null,
      recentConcern:recentConcern?.slice(0,115),history:historicalContext(recentConcern),
      changedEnvironment:!!previous && previous.env !== state.env};
    if (!setDraft(CI.create(state.env,E.dateKey(),today(),draft(),personal))) return;
  }
  return prepareIntakeQuestion(draft(),true);
}

async function submitIntake(value, skip = false, file) {
  const current = draft();
  if (current?.mode !== 'chat' || busy) return;
  const prompt = CI.question(current);
  if (!prompt) return;
  const activeSession = session;
  let next;
  try {
    let kind = skip ? '' : CI.emergencyKind(value);
    if (!kind && !skip && value.trim() && !prompt.options &&
        !(prompt.metric && /^[\d\s.,/°]+(?:c|bpm|mm\s*hg|mg\s*\/\s*dl|hrs?|hours?)?$/i.test(value))) {
      busy = true;
      if (view() === 'bot') render();
      kind = await AI.assessSafety(value,current.turns).catch(() => '');
      if (session !== activeSession || draft() !== current) return;
    }
    next = kind ? CI.interrupt(current,prompt,value.trim(),kind) : CI.apply(current,prompt,value,skip);
    if (file && !CI.urgent(next)) {
      busy = true;
      next.image = await compressImage(file);
    }
  } catch (error) {
    if (session === activeSession && view() === 'bot') {
      busy = false;
      render();
      const form = $('intake-form');
      if (form?.elements.answer) form.elements.answer.value = value;
      form?.querySelector('.error')?.replaceChildren(error.message);
    }
    return;
  } finally { if (session === activeSession) busy = false; }
  if (session !== activeSession || draft() !== current) return;
  stopSpeech();
  if (CI.urgent(next)) return finishIntake(next);
  if (!setDraft(next)) return;
  return prepareIntakeQuestion(next);
}

async function finishIntake(current = draft()) {
  if (current?.mode !== 'chat' || busy) return;
  const entry = CI.toEntry(current,today());
  entry.sample = simulation();
  const urgent = CI.urgent({...current,values:entry.values});
  const drafts = {...state.drafts};
  delete drafts[current.env];
  const urgentReport = urgent && (current.turns.findLast(turn => turn.role === 'user' && CI.emergencyKind(turn.content) === urgent) ||
    current.turns.findLast(turn => turn.role === 'user'));
  let reply = urgent && urgent !== 'temperature' ? emergencyAnswer(urgent,urgentReport?.content) : intakeSummary(entry,urgent);
  const hasData = !!urgent || Object.keys(current.values).length > 0 ||
    Object.entries(current.answers).some(([key,value]) => key !== 'urgent' && value !== '') || current.image !== today()?.image && !!current.image;
  entry.summary = reply;
  if (!save({...state,drafts,records:hasData ? [...state.records.filter(item => item.env !== entry.env || item.date !== entry.date),entry] : state.records})) {
    if (urgent) {
      state = {...state,drafts,dailyFlow:{...flow(),date:E.dateKey(),check:'urgent'}};
      const safetyTurn = {...reply,role:'assistant',mode:'check',content:reply.text,urgent:true,date:E.dateKey(),env:state.env};
      chat.push(...current.turns,safetyTurn);
      showRoute('bot');
      if (readAloud) speakReply(safetyTurn);
    }
    return;
  }
  const activeSession = session;
  const measurements = {values:entry.values,flags:CI.differingReadings(entry).map(metric => metric.key)};
  const transcript = current.turns.map(turn => ({...turn,mode:'check'}));
  if (hasData && !urgent) {
    const concern = entry.details.map(item => item.answer).join(' ');
    const context = crewContext('daily',concern);
    busy = true;
    if (view() === 'bot') render();
    try {
      const recentResponses = current.turns.filter(turn => turn.role === 'user').map(turn => turn.content.slice(0,240));
      reply = await AI.checkInSummary({...context,recentResponses},checkFollowUps(entry));
    } catch { /* Keep the local summary when documents or Qwen are unavailable. */ }
    finally { if (session === activeSession) busy = false; }
  }
  if (session !== activeSession) return;
  const turn = {...(hasData ? reply : {}),role:'assistant',mode:'check',content:hasData ? reply.text : 'Check-in skipped.',measurements,urgent:!!urgent,urgentKind:urgent || undefined};
  const conversation = datedTurns([...transcript,turn]);
  const persisted = save({...state,urgentAlert:urgent ? conversation.at(-1) : state.urgentAlert,dailyFlow:{...flow(),date:E.dateKey(),check:urgent ? 'urgent' : hasData ? 'done' : 'skipped'},
    records:state.records.map(item => item === entry ? {...item,summary:reply} : item),
    conversations:[...(state.conversations || []),...conversation]});
  if (!persisted && !urgent) return;
  if (!persisted) state = {...state,dailyFlow:{...flow(),date:E.dateKey(),check:'urgent'}};
  chat.push(...conversation);
  if (urgent && view() !== 'bot') showRoute('bot');
  if (view() === 'bot') {
    render();
    if (readAloud) speakReply(turn);
  }
  if (urgentReport && ['violence','self-harm','unresponsive','medical'].includes(urgent)) {
    addEmergencyHandoff(urgentReport.content,urgent,conversation.at(-1),activeSession);
  }
}

function details(entry, includeControls = true) {
  const impact = E.steps[0].options[entry.values.impact];
  return '<dl><dt>Physical condition</dt><dd>'+escape(impact || 'Not recorded')+'</dd><dt>Mood and mission duties</dt><dd>'+escape(E.dutyImpact[entry.values.moodImpact] || 'Not recorded')+'</dd><dt>Environment notes</dt><dd>'+escape(entry.values.context || 'None')+
    '</dd><dt>Observations</dt><dd>'+escape(entry.values.note || 'None')+'</dd>'+(entry.details || []).map(item => '<dt>'+escape(item.title)+'</dt><dd>'+escape(item.answer)+'</dd>').join('')+
    '<dt>Crew medical review</dt><dd>'+(entry.review ? 'Marked locally' : 'Not marked')+'</dd></dl>'+preview(entry.image)+
    (includeControls && entry.image?.src ? button('Save photo','save-image','','data-day="'+entry.date+'"') : '');
}

function traceReading(day) {
  if (!day?.entry) return '<p class="folio">'+(day ? formatDay(day.date) : '')+'</p><h3>No check-in</h3><p class="muted">No readings were recorded for this day.</p>';
  const {entry} = day;
  const {sleep, mood, pulse} = entry.values;
  return '<p class="folio">'+formatDay(day.date)+' / '+(entry.sample ? 'Simulation' : 'Crew log')+'</p><h3>'+E.evaluate(entry,state.profile).title+
    '</h3><dl class="trace-readings"><div><dt>Sleep</dt><dd>'+E.format(sleep)+(sleep == null ? '' : ' h')+'</dd></div><div><dt>Mood</dt><dd>'+E.format(mood)+(mood == null ? '' : ' / 10')+
    '</dd></div><div><dt>Pulse</dt><dd>'+E.format(pulse)+(pulse == null ? '' : ' bpm')+'</dd></div></dl>';
}
function checkView() {
  const current = draft();
  const entry = today();
  let body;
  if (current?.mode === 'chat') {
    body = '<h2>Check-in in progress</h2>'+button('Resume with NETIN','assist-check','primary');
  } else if (current) {
    const step = E.steps[current.index];
    const metric = E.metricByKey(step.key);
    const value = current.values[step.key];
    const question = metric?.prompt || step.prompt || environment().question;
    let input;
    if (step.options) {
      input = '<select name="answer"><option value="">Select an option</option>'+Object.entries(step.options).map(([id,label]) => '<option value="'+id+'"'+(id === value ? ' selected' : '')+'>'+label+'</option>').join('')+'</select>';
    } else if (metric) {
      input = '<input name="answer" inputmode="'+(metric.key === 'pressure' ? 'text' : 'decimal')+'" autocomplete="off" value="'+(value == null ? '' : escape(E.format(value)))+'" placeholder="'+E.format(metric.base)+'">';
    } else {
      input = '<textarea name="answer" maxlength="1500">'+escape(value)+'</textarea>';
    }
    body = '<div class="actions">'+button('Continue in chat','assist-check','primary')+'</div><div class="step-counter"><span>STEP '+(current.index + 1)+' / '+E.steps.length+'</span><progress max="'+E.steps.length+'" value="'+(current.index+1)+'"></progress></div><h2>'+step.title+'</h2><p>'+question+'</p>'+
      (E.hasLowBodyTemperature(current) ? '<p class="notice urgent">Contact the crew medical officer now and report the low temperature reading.</p>' :
        current.values.impact === 'urgent' ? '<p class="notice urgent">'+E.medicalHelp+'</p>' : '')+'<form id="check-form">'+field(metric ? metric.label+' ('+metric.unit+')' : step.title,input)+
      (step.key === 'note' ? field('How did your emotional state affect your work today?','<select name="moodImpact"><option value="">Select an option</option>'+
        Object.entries(E.dutyImpact).map(([id,label]) => '<option value="'+id+'"'+(id === current.values.moodImpact ? ' selected' : '')+'>'+label+'</option>').join('')+'</select>')+
        field('Photo (optional)','<input name="image" type="file" accept="image/jpeg,image/png,image/webp">')+preview(current.image)+(current.image ? button('Remove photo','remove-image') : '') : '')+
      '<p class="error" role="alert"></p><div class="actions"><button class="button primary" type="submit" value="next">'+(step.key === 'note' ? 'Save check-in' : 'Next')+'</button>'+
      (step.key === 'note' ? '' : '<button class="button" type="submit" value="skip">Skip</button>')+(current.index ? button('Back','back') : '')+'</div></form>';
  } else if (entry) {
    body = '<h2>Today’s check-in</h2>'+assessment(entry)+E.metrics.map(metric => reading(metric,entry.values[metric.key])).join('')+details(entry)+
      '<div class="actions">'+button('Check in again with NETIN','assist-check')+button('Edit readings manually','start')+button(entry.review ? 'Marked for review' : 'Mark for medical review','review','',entry.review ? 'disabled' : '')+
      button('Review with assistant','assist-daily')+button('Save medical summary','export')+'</div>';
  } else {
    body = '<h2>Ready to check in?</h2><p>Record physical condition, sleep, mood and instrument readings for this shift.</p><div class="actions">'+button('Start check-in with NETIN','assist-check','primary')+button('Enter readings manually','start')+'</div>';
  }
  const photo = dailyPhoto(E.dateKey());
  return pageHead(environment().name,'Daily check-in',simulation() ? 'Demo profile. Entries are saved as simulation data.' : 'Entries are saved on this computer.')+'<div class="work-grid"><section class="work-sheet">'+body+
    '</section><aside class="side-sheet"><h2>Shift context</h2><dl><dt>Environment</dt><dd>'+environment().context+'</dd><dt>Crew medical officer</dt><dd>'+escape(state.profile.medical)+
    '</dd><dt>Allergies</dt><dd>'+escape(state.profile.allergies || 'Not recorded')+'</dd></dl>'+button('Edit crew profile','profile')+
    '<h2 class="aside-break">Daily photo</h2>'+(photo || '<p class="muted">A daily photo has not been saved.</p>')+button(photo ? 'Retake daily photo' : 'Take daily photo','daily-camera')+
    '<h2 class="aside-break">Motor skills</h2>'+link('Open daily motor check','motor')+
    '<h2 class="aside-break">Medical supplies</h2>'+button('Open inventory','medical-supplies')+
    '<h2 class="aside-break">Taking measurements</h2><details><summary>Measurement instructions</summary>'+E.metrics.map(metric => '<p><strong>'+metric.label+'</strong> '+metric.prompt+'</p>').join('')+'</details></aside></div>';
}

function sourcesView(sources) {
  if (!sources?.length) return '';
  return '<details class="citations"><summary>Sources ('+sources.length+')</summary>'+
    sources.map(source => '<p><strong>'+escape(source.title)+'</strong> '+documentTarget(source)+'</p>').join('')+'</details>';
}

function replySections(turn) {
  const fields = AI.titles(turn.sections);
  return '<dl class="reply-sections">'+fields.map(([key,title]) =>
    '<dt>'+title+'</dt><dd>'+escape(turn.sections[key])+'</dd>').join('')+'</dl>'+sourcesView(turn.sources);
}

function summaryParagraph(value) {
  if (value?.paragraph) return value.paragraph;
  const fields = ['immediateActions','evidence','recommendations','whyItMatters'];
  return value?.sections ? [...new Set(fields.map(key => value.sections[key]).filter(Boolean))].join(' ') : value?.text || value?.content || '';
}

function paragraphReply(value) {
  const actions = value.related?.length ? '<div class="actions">'+value.related.map((source,index) =>
    documentTarget({...source, action:index === 0 ? 'Open relevant passage' : source.title})).join('')+'</div>' :
    value.related ? '<div>'+link('Open Documents','guias','compact')+'</div>' : '';
  if (value.sections && !value.urgent) return replySections(value)+actions;
  return '<p'+(value.urgent ? ' class="notice critical"' : '')+'>'+escape(summaryParagraph(value))+'</p>'+
    sourcesView(value.sources)+actions+
    (value.handoff ? '<p class="micro">Report to responders: “'+escape(value.handoff)+'”</p>' : '');
}

function motorHistory() {
  return state.motorLogs ?? [];
}

function motorTable(days, env = state.env) {
  const dates = new Set(days.map(day => day.date));
  const rows = motorHistory().filter(day => dates.has(day.date) && day.env === env).sort((a,b) => b.date.localeCompare(a.date));
  if (!rows.length) return '<p class="muted">No motor rounds were saved in this period.</p>';
  return '<div class="table-scroll"><table><thead><tr><th scope="col">Date</th><th scope="col">Environment</th>'+
    '<th scope="col">Game</th><th scope="col">Measurements</th><th scope="col">Misses</th>'+
    '<th scope="col">Input / hand</th></tr></thead><tbody>'+
    rows.map(result => '<tr><th scope="row">'+formatDay(result.date)+(result.sample ? ' <small>Sim</small>' : '')+'</th><td>'+E.environments[result.env]?.name+
      '</td><td>'+Motor.games[Motor.gameOf(result)].name+'</td><td>'+Motor.games[Motor.gameOf(result)].metrics.map(([key,label,unit]) =>
        label+' '+Motor.value(result,key)+' '+unit).join('<br>')+'</td><td>'+result.misses+
      (result.early != null ? ' / '+result.early+' early' : '')+'</td><td>'+Motor.inputs[result.input]+' / '+Motor.hands[result.hand]+'</td></tr>').join('')+'</tbody></table></div>';
}

function motorSummary(result) {
  const baseline = Motor.baseline(result,motorHistory());
  const game = Motor.gameOf(result);
  const measurements = Motor.games[game].metrics;
  const skill = {dock:'This test records visual reaction and hand–eye coordination.',
    cargo:'This test records controlled pointer movement and placement accuracy.',
    taps:'This test records the timing and accuracy of alternating taps.'}[game];
  return '<p class="micro">'+E.environments[result.env].name+' · '+Motor.hands[result.hand]+' · '+Motor.inputs[result.input]+'</p>'+
    '<dl class="motor-readings">'+measurements.map(([key,label,unit]) =>
    '<div><dt>'+label+'</dt><dd>'+Motor.value(result,key)+' <small>'+unit+'</small></dd>'+
    (baseline ? '<dd class="micro">Usual '+baseline[key]+' '+unit+'</dd>' : '')+'</div>').join('')+'</dl>'+
    '<p>'+skill+'</p><p>'+result.misses+' misses'+(result.early != null ? ' · '+result.early+' early taps' : '')+'</p>'+
    '<p class="muted">'+(baseline ? 'Usual values are medians from '+baseline.count+' matching previous days. If a change persists, share the log with the crew medical officer.' :
      'Your usual values will appear after 3 previous days with the same hand, input, board size, environment and cue.')+'</p>';
}

function motorView() {
  const game = Motor.games[motorGame];
  const saved = motorHistory().find(day => day.date === E.dateKey() && day.env === state.env && Motor.gameOf(day) === motorGame);
  const result = motorResult || saved;
  const grid = motorGame === 'taps' ? '<span class="motor-pad">Left</span><span class="motor-pad">Right</span>' :
    Array.from({length:15},() => '<span class="'+(motorGame === 'dock' ? 'motor-beacon' : 'motor-bay')+'" aria-hidden="true"></span>').join('');
  return pageHead(environment().name,'Motor skills','Practice reaction, hand–eye coordination and finger control.')+
    workflow()+'<div class="actions flow-actions">'+button(flow().motor ? 'Continue to journal' : 'Skip today’s test','next-journal',flow().motor ? 'primary' : '',motorRound ? 'disabled' : '')+'</div>'+
    '<div class="actions motor-select" role="group" aria-label="Select a motor game">'+Object.entries(Motor.games).map(([key,item]) =>
      button(item.name,'motor-game',key === motorGame ? 'primary' : '',
        'data-game="'+key+'" aria-pressed="'+(key === motorGame)+'"'+(motorRound ? ' disabled' : ''))).join('')+'</div>'+
    '<div class="work-grid"><section class="work-sheet"><h2>'+game.name+'</h2>'+
    (motorRound ? '<p id="motor-status" role="status"></p><div id="motor-board" class="motor-board motor-'+motorGame+'" aria-label="'+game.name+'">'+
      grid+'</div><div class="actions">'+button('End round','motor-cancel')+'</div>' :
      '<p id="motor-status" role="status">'+escape(motorMessage)+'</p>'+
      (result ? '<h3>'+(motorResult ? 'Round complete' : 'Today’s result')+'</h3>'+motorSummary(result) : '<p>'+game.description+'</p>')+
      '<form id="motor-form"><fieldset class="motor-hands"><legend>Which hand will you use?</legend>'+
      Object.entries(Motor.hands).map(([key,label]) => '<label><input type="radio" name="hand" value="'+key+'"'+
        ((result?.hand || motorHistory().at(-1)?.hand || 'right') === key ? ' checked' : '')+'> '+label+'</label>').join('')+'</fieldset>'+
      '<button class="button primary" type="submit">'+(saved ? 'Practice' : 'Start test')+'</button></form>')+'</section>'+
    '<aside class="side-sheet"><h2>Compare your results</h2><p class="muted">Use the same hand and device each day. NETIN logs your first result for each test.</p>'+
    '<p class="muted">The result measures your performance in the test.'+
    (simulation() ? ' Demo profile results are labeled as simulation.' : '')+'</p></aside></div>'+
    '<section class="work-sheet report-notes motor-log"><h2>Motor log</h2>'+motorHistoryFilter()+'</section>';
}

function startMotorRound(hand) {
  if (motorRound || !Object.hasOwn(Motor.hands,hand)) return;
  const round = {date:E.dateKey(),env:state.env,hand,game:motorGame};
  motorRound = round;
  motorResult = undefined;
  motorMessage = '';
  render();
  $('motor-board').scrollIntoView({block:'nearest'});
  round.cancel = Motor.play[round.game]($('motor-board'),$('motor-status'),result => {
    motorRound = undefined;
    motorResult = {date:round.date,env:round.env,hand,game:round.game,...result,sample:simulation()};
    if (motorHistory().some(day => day.date === round.date && day.env === round.env && Motor.gameOf(day) === round.game)) {
      markFlow('motor');
      motorMessage = 'Practice complete. Your saved daily result is still in the log.';
    } else if (save({...state,motorLogs:[...motorHistory(),motorResult],dailyFlow:{...flow(),date:round.date,motor:'done'}})) {
      motorMessage = 'Daily result saved.';
    } else {
      motorMessage = 'The result could not be saved.';
    }
    render();
    $('motor-form').querySelector('button').focus({preventScroll:true});
  },stopMotorRound,{volume:appearance.volume});
}

function stopMotorRound(message) {
  motorRound?.cancel();
  motorRound = undefined;
  motorMessage = message;
  render();
  $('motor-form')?.querySelector('button').focus({preventScroll:true});
}

function reportView() {
  const days = reportDays();
  const weekly = reportLength === 7;
  const label = weekly ? 'Weekly' : '30-day';
  const available = days.filter(day => day.entry);
  const flagged = available.filter(day => ['review','urgent'].includes(E.evaluate(day.entry,state.profile).attention)).length;
  const average = (values) => new Intl.NumberFormat('en-US',{maximumFractionDigits:1}).format(values.reduce((sum,value) => sum+value,0)/values.length);
  const summary = E.metrics.map(metric => {
    const values = available.map(day => day.entry.values[metric.key]).filter(value => value != null);
    let mean = '–';
    if (values.length) mean = metric.key === 'pressure'
      ? average(values.map(value => value[0]))+'/'+average(values.map(value => value[1]))
      : average(values);
    return '<tr><th scope="row">'+metric.label+'</th><td>'+mean+(values.length ? ' '+metric.unit : '')+'</td><td>'+E.format(metric.base)+' '+metric.unit+
      '</td><td>'+values.length+' / '+reportLength+'</td><td>'+values.filter(value => E.status(metric,value) === 'review').length+'</td></tr>';
  }).join('');
  return pageHead(environment().name,label+' log',formatDay(days[0].date)+' to '+formatDay(days.at(-1).date),
    '<div class="actions">'+(weekly ? button('Review with assistant','assist-week') : '')+button('Save '+label.toLowerCase()+' log','week-export')+'</div>')+
    '<div class="actions report-range" role="group" aria-label="Log period">'+[7,30].map(length =>
      button(length+' days','report-range',length === reportLength ? 'primary' : '','data-length="'+length+'" aria-pressed="'+(length === reportLength)+'"')).join('')+'</div>'+
    '<section class="work-sheet weekly-conclusion"><h2>'+label+' conclusion</h2>'+logConclusion(reportLength)+'</section>'+
    '<section class="work-sheet"><h2>'+label+' readings</h2><p class="report-summary"><strong>'+available.length+' of '+reportLength+'</strong> check-ins recorded <span class="dot"></span> '+flagged+' flagged for review</p>'+
    '<div class="table-scroll"><table><thead><tr><th>Reading</th><th>Average</th><th>Demo baseline</th><th>Days logged</th><th>Days for review</th></tr></thead><tbody>'+summary+'</tbody></table></div>'+
    '</section><section class="work-sheet report-notes"><h2>Daily entries</h2>'+
    '<div class="table-scroll"><table><thead><tr><th>Date</th><th>Source</th>'+E.metrics.map(metric => '<th>'+metric.short+' ('+metric.unit+')</th>').join('')+
    '<th>Follow-up</th></tr></thead><tbody>'+[...days].reverse().map(({date,entry}) => '<tr><th scope="row">'+formatDay(date)+'</th><td>'+
    (entry ? entry.sample ? 'Simulation' : 'Crew log' : 'No check-in')+'</td>'+E.metrics.map(metric => '<td class="'+(E.status(metric,entry?.values[metric.key]) === 'review' ? 'warning' : '')+'">'+
    E.format(entry?.values[metric.key])+'</td>').join('')+'<td>'+(entry ? E.evaluate(entry,state.profile).title : '–')+'</td></tr>').join('')+
    '</tbody></table></div></section><section class="work-sheet report-notes"><h2>Observations and attachments</h2>'+
    (available.length ? [...available].reverse().map(({date,entry}) => '<details><summary>'+formatDay(date)+' / '+(entry.sample ? 'Simulation' : 'Crew log')+'</summary>'+assessment(entry)+details(entry)+'</details>').join('') :
    '<p class="muted">There are no records for this environment in the selected period.</p>')+'</section><section class="work-sheet report-notes"><h2>Daily photo log</h2>'+
    ([...days].reverse().map(({date}) => dailyPhotos.get(date)).filter(Boolean).map(photo => '<details><summary>'+formatDay(photo.date)+' · '+escape(E.environments[photo.env]?.name ?? '')+'</summary>'+dailyPhoto(photo.date)+'</details>').join('') ||
    '<p class="muted">No daily photos were saved during this period.</p>')+'</section>'+
    '<section class="work-sheet report-notes"><h2>Motor skills</h2>'+motorTable(days)+'</section>';
}

function render() {
  const route = view();
  if (route !== 'journal' && journalDraft) flushJournal(true);
  if (route !== 'motor' && motorRound) {
    motorRound.cancel?.();
    motorRound = undefined;
  }
  const workspace = !!session;
  document.documentElement.dataset.stage = workspace ? state.env : stageChoice;
  $('sidebar').hidden = !workspace;
  $('brand').innerHTML = workspace ? '' : UI.icon('orbit')+' NETIN';
  $('mast-stage').innerHTML = workspace ? stageBadge(state.env) : '';
  if (workspace) {
    const active = {motor:'health',journal:'panel',check:'bot',semana:'records',camera:'panel'}[route] || route;
    const icons = {panel:'home',bot:'bot',health:'health',records:'records',guias:'guias',settings:'settings'};
    const navigation = items => items.map(([key,label]) => '<a href="#'+key+'" title="'+label+'"'+(key === active ? ' aria-current="page"' : '')+'>'+UI.icon(icons[key])+'<span>'+label+'</span></a>').join('');
    $('sidebar-brand').innerHTML = UI.icon('orbit')+' NETIN';
    $('sidebar-crew').innerHTML = portrait(state.profile.name,validPhoto(crewPortrait))+'<div><strong>'+escape(state.profile.name)+
      '</strong><small>'+escape(state.profile.role)+'</small></div>';
    $('nav').innerHTML = navigation(routes);
    $('utilities').innerHTML = navigation(utilityRoutes);
  }
  $('main').innerHTML = (storageError ? '<p class="notice">The local log could not be read. Restart NETIN if the problem persists.</p>' : '')+
    ({home,camera:cameraView,panel:workspaceHome,check:checkView,motor:motorView,bot:assistantView,semana:reportView,guias:documentsView,
      health:healthView,records:recordsView,settings:settingsView,journal:journalView})[route]();
  const log = $('chat-log');
  if (log) log.scrollTop = log.scrollHeight;
}

function openModal(title, body) {
  const modal = $('modal');
  modal.innerHTML = '<header class="section-head"><h2 id="modal-title">'+title+'</h2>'+button('Close','close')+'</header>'+body;
  modal.setAttribute('aria-labelledby','modal-title');
  modal.showModal();
}
function passwordFields(setup) {
  const autocomplete = setup ? 'new-password' : 'current-password';
  return field('Password','<input name="password" type="password" autocomplete="'+autocomplete+'" maxlength="128" '+(setup ? 'minlength="8" ' : '')+'required>')+
    (setup ? field('Confirm password','<input name="confirmation" type="password" autocomplete="new-password" minlength="8" maxlength="128" required>') : '');
}
function medicalSuppliesModal(item) {
  const items = (state.medicalSupplies || []).filter(entry => entry.env === state.env);
  const list = items.map(entry => {
    const captions = [...(entry.quantity === 0 ? ['Out of stock'] : []),
      ...(!entry.expires ? ['Expiration not recorded'] : entry.expires < E.dateKey() ? ['Expired'] : [])];
    const statuses = captions.length ? captions.map(label => '<span class="state-pill review">'+UI.icon('alert')+label+'</span>').join(' ') :
      '<span class="state-pill done">'+UI.icon('done')+'In stock</span>';
    return '<tr><th scope="row">'+escape(entry.name)+'</th><td>'+escape(entry.quantity)+'</td><td>'+
      escape(entry.expires || '—')+'</td><td>'+statuses+'</td><td>'+button('Edit','edit-medical-supply','','data-id="'+escape(entry.id)+'" aria-label="Edit '+escape(entry.name)+'"')+'</td></tr>';
  }).join('');
  const form = '<form id="medical-supplies-form" data-id="'+escape(item?.id)+'">'+
    field('Supply name','<input name="supply" maxlength="80" value="'+escape(item?.name)+'" required>')+
    field('Units available','<input name="quantity" type="number" min="0" max="999999" step="1" value="'+escape(item?.quantity)+'" required>')+
    field('Expiration (optional)','<input name="expires" type="date" value="'+escape(item?.expires)+'">')+
    '<div class="actions"><button class="button primary" type="submit">'+(item ? 'Save changes' : 'Add supply')+'</button>'+
    (item ? button('Remove supply','remove-medical-supply','','data-id="'+escape(item.id)+'"') : '')+'</div></form>';
  const body = '<p class="muted">'+environment().name+' · Supplies reported by this astronaut.</p>'+
    (list ? '<div class="table-scroll"><table><thead><tr><th>Item</th><th>Quantity</th><th>Expiration date</th><th>Status</th><th>Action</th></tr></thead><tbody>'+list+'</tbody></table></div>' :
      '<p class="muted">No supplies recorded for this environment.</p>')+form;
  if ($('modal').open) $('modal').close();
  openModal('Medical supplies',body);
}
function profileModal(create = false) {
  const profile = create ? {role:'Mission specialist'} : state.profile;
  const fields = keys => keys.map(([key,label]) =>
    field(label,'<input name="'+key+'" maxlength="'+(key === 'name' || key === 'role' ? '80' : '350')+'" value="'+escape(profile[key])+'" '+(['name','role'].includes(key) ? 'required' : '')+'>')).join('');
  const identity = fields([['name','Name'],['role','Role or rank']]);
  const medical = fields([['medical','Crew medical officer'],['history','Medical history'],['allergies','Allergies']]);
  openModal(create ? 'Create profile' : 'Crew profile','<form id="profile-form">'+(create ?
    '<section id="profile-identity"><h3>1. Crew identity</h3>'+identity+button('Continue','profile-next','primary')+'</section>'+
    '<section id="profile-access" hidden><h3>2. Profile password</h3>'+passwordFields(true)+
      '<p class="muted">You can add medical details after signing in.</p><p class="error" role="alert"></p><div class="actions">'+
      button('Back','profile-back')+'<button class="button primary" type="submit">Create profile</button></div></section>' :
    identity+medical+field('Mission start date (optional)','<input name="missionStartDate" type="date" value="'+escape(profile.missionStartDate)+'">'+
    '')+'<button class="button primary" type="submit">Save profile</button>')+'</form>');
  if (create) {
    $('profile-form').elements.password.disabled = true;
    $('profile-form').elements.confirmation.disabled = true;
  }
  $('profile-form').elements.name.focus();
}
function profileStep(access) {
  const form = $('profile-form');
  if (!form?.elements.confirmation) return;
  if (access && (!form.elements.name.reportValidity() || !form.elements.role.reportValidity())) return;
  $('profile-identity').hidden = access;
  $('profile-access').hidden = !access;
  form.elements.password.disabled = !access;
  form.elements.confirmation.disabled = !access;
  form.elements[access ? 'password' : 'name'].focus();
}
async function compressImage(file) {
  if (!['image/jpeg','image/png','image/webp'].includes(file.type) || file.size > 12*1024*1024) throw new Error('Choose a JPEG, PNG or WebP image up to 12 MB.');
  const url = URL.createObjectURL(file);
  try {
    const image = new Image();
    image.src = url;
    await image.decode();
    const ratio = Math.min(1,720/Math.max(image.width,image.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1,Math.round(image.width*ratio));
    canvas.height = Math.max(1,Math.round(image.height*ratio));
    const context = canvas.getContext('2d',{alpha:false});
    context.fillStyle = '#fff';
    context.fillRect(0,0,canvas.width,canvas.height);
    context.drawImage(image,0,0,canvas.width,canvas.height);
    return {src:canvas.toDataURL('image/jpeg',0.7)};
  } catch { throw new Error('This image could not be read. Try a different file.'); }
  finally { URL.revokeObjectURL(url); }
}

async function submitCheck(event) {
  const form = event.target;
  const current = draft();
  if (!current || busy || form.dataset.pending) return;
  const step = E.steps[current.index];
  const value = form.elements.answer.value.trim();
  const metric = E.metricByKey(step.key);
  const values = {...current.values};
  const owner = session;
  const skip = event.submitter?.value === 'skip';
  form.dataset.pending = 'true';
  try {
    let kind = !skip && (CI.emergencyKind(value) || (step.key === 'impact' && value === 'urgent' ? 'medical' : ''));
    if (!kind && !skip && value && !step.options && !metric) {
      busy = true;
      kind = await AI.assessSafety(value,[]).catch(() => '');
      if (session !== owner || draft() !== current) return;
      busy = false;
    }
    if (kind) return finishIntake(CI.interrupt(CI.create(state.env,current.date,today(),current),step,value,kind));
    if (skip || (step.key === 'note' && !value)) delete values[step.key];
    else if (metric) values[step.key] = E.parseMetric(metric,value);
    else if (value && (!step.options || Object.hasOwn(step.options,value))) values[step.key] = value;
    else throw new Error('Enter a response or choose Skip.');
    if (E.hasLowBodyTemperature({values})) {
      return finishIntake(CI.interrupt(CI.create(state.env,current.date,today(),{...current,values}),step,value,'temperature'));
    }
    if (step.key !== 'note') {
      if (setDraft({...current,values,index:current.index+1})) {
        render();
        $('check-form')?.elements.answer.focus();
      }
      return;
    }
    const moodImpact = form.elements.moodImpact.value;
    if (Object.hasOwn(E.dutyImpact,moodImpact)) values.moodImpact = moodImpact;
    else delete values.moodImpact;
    const file = form.elements.image.files[0];
    const image = file ? await compressImage(file) : current.image;
    if (!form.isConnected || draft() !== current) return;
    if (!Object.keys(values).length && !image) throw new Error('Add a reading, note or photo before saving.');
    const review = today()?.review || (values.impact === 'urgent' ? new Date().toISOString() : '');
    const entry = {env:state.env,date:current.date,values,image,details:today()?.details || [],sample:simulation(),review};
    const drafts = {...state.drafts};
    delete drafts[state.env];
    if (save({...state,drafts,records:[...state.records.filter(record => record.env !== entry.env || record.date !== entry.date),entry]})) {
      render();
      notify('Check-in saved on this computer.');
    }
  } catch (error) { form.querySelector('.error').textContent = error.message; }
  finally { if (session === owner) busy = false; delete form.dataset.pending; }
}

async function checkModel() {
  const currentSession = session;
  model = 'checking';
  render();
  let result;
  try { result = (await AI.modelStatus()).ready ? 'ready' : 'missing'; }
  catch { result = 'offline'; }
  if (session !== currentSession) return;
  model = result;
  if (['bot','settings'].includes(view())) render();
}
async function sendMessage(query, mode = 'chat', searchContext = '') {
  if (!session || !query || busy || summaryPending) return;
  stopSpeech();
  const currentSession = session;
  const [turn] = datedTurns([{role:'user',content:query}]);
  const history = chat.filter(item => !item.mode || item.mode === 'chat').slice(-12).map(({role,content}) => ({role,content}));
  turn.mode = mode;
  save({...state,conversations:[...(state.conversations || []),turn]});
  const safetyHistory = chat.filter(item => item.date === turn.date).slice(-6);
  chat = [...chat.slice(-79),turn];
  let kind = CI.emergencyKind(query);
  if (!kind && mode === 'chat') {
    busy = true;
    if (view() === 'bot') render();
    try { kind = await AI.assessSafety(query,safetyHistory).catch(() => ''); }
    finally { if (session === currentSession) busy = false; }
    if (session !== currentSession) return;
  }
  const nextEnv = mode === 'chat' ? E.detectEnvironmentChange(query) : null;
  const lowTemperature = mode !== 'guide' && E.hasLowBodyTemperature(today());
  const urgent = kind || (lowTemperature ? 'temperature' : '');
  if (urgent) {
    const alert = kind ? emergencyAnswer(kind,query) : temperatureAlert(today());
    chat.push({...alert,role:'assistant',content:alert.text,urgent:true,urgentKind:urgent});
  } else if (nextEnv) {
    let text = E.environments[nextEnv].name+' is already the active environment.';
    if (nextEnv !== state.env) {
      text = 'Review the mission stage change before applying it.';
      confirmStage(nextEnv);
      selectedDay = null;
    }
    chat.push({role:'assistant',content:text});
  } else {
    const review = mode === 'daily' || mode === 'week';
    const data = crewContext(mode,query);
    const intent = mode === 'chat' ? AI.chatIntent(query,history) : null;
    busy = true;
    render();
    try {
      let social;
      if (mode === 'chat' && chatMode === 'companion' && !intent.health) {
        social = await AI.companion(query,history,environment().name,data);
        if (session !== currentSession) return;
      }
      if ((!social || social.health) && missionIndexing) {
        await missionIndexing;
        if (session !== currentSession) return;
      }
      const hasReviewData = !review || data.checkIns.length > 0;
      const relevantTerms = searchContext || (review ? reviewSearch(data) : intent?.search || '');
      const result = social && !social.health ? {text:social.text || 'I didn’t have a useful reply to that. You can try a different way of asking.'} :
        hasReviewData ? await AI.answer(query,mode === 'chat' ? history : [],library,data,relevantTerms,!intent?.search) : null;
      if (session !== currentSession) return;
      turn.modelTurn = !!result?.sources?.length;
      turn.companion = !!social && !social.health;
      const reply = review && !turn.modelTurn ? localReview(mode, result?.text) : result;
      chat.push({role:'assistant',mode,content:reply?.text || reply,paragraph:reply?.paragraph,
        sections:reply?.sections,sources:reply?.sources,modelTurn:turn.modelTurn,companion:turn.companion});
      if (turn.modelTurn || turn.companion) model = 'ready';
    } catch (error) {
      if (session === currentSession) {
        if (missionIndexing) await missionIndexing;
        if (session !== currentSession) return;
        const related = AI.findPassages(query,history,library,searchContext,environment().name);
        const text = review ? summaryParagraph(localReview(mode,'Ham is unavailable.')) :
          related.length ? 'Ham could not respond. These passages match your question.' :
          library.length ? 'Ham could not respond, and no related passage was found.' :
          'Ham could not respond. Load mission documents to find relevant passages.';
        chat.push({role:'assistant',content:text,related});
      }
    } finally { if (session === currentSession) busy = false; }
  }
  if (session === currentSession && chat.at(-1)?.role === 'assistant') {
    const [reply] = datedTurns([{...chat.at(-1),mode,date:turn.date,env:turn.env}]);
    chat[chat.length-1] = reply;
    const dailyFlow = urgent ? {...flow(),date:E.dateKey(),check:'urgent'} : state.dailyFlow;
    if (!save({...state,dailyFlow,urgentAlert:urgent ? reply : state.urgentAlert,conversations:[...(state.conversations || []),reply]}) && urgent) state = {...state,dailyFlow};
  }
  if (session === currentSession && view() === 'bot') {
    render();
    $('chat-form')?.elements.query.focus();
    if (readAloud) speakReply(chat.at(-1));
  }
  if (session === currentSession && urgent && view() !== 'bot') showRoute('bot');
  if (session === currentSession && kind) addEmergencyHandoff(query,kind,chat.at(-1),currentSession);
}

function addEmergencyHandoff(report,kind,immediate,owner) {
  void AI.emergencyHandoff(report,kind).then(handoff => {
    if (!handoff || session !== owner || !immediate?.urgent) return;
    const update = reply => reply === immediate ? {...reply,handoff} : reply;
    if (!save({...state,conversations:(state.conversations || []).map(update)})) return;
    chat = chat.map(update);
    const last = $('chat-log')?.lastElementChild;
    if (view() === 'bot' && !draft() && chat.at(-1)?.handoff === handoff && last?.classList.contains('assistant')) {
      const note = document.createElement('p');
      note.className = 'micro';
      note.textContent = 'Report to responders: "'+handoff+'"';
      last.append(note);
    }
  }).catch(() => {});
}

function reviewSearch(data) {
  const topics = new Set();
  for (const log of data.checkIns.slice(0,4)) {
    for (const flag of log.demoFlags) topics.add(flag);
    if (log.moodImpact && log.moodImpact !== E.dutyImpact.none) topics.add('mood fatigue concentration performance');
    if (log.note) topics.add(log.note.slice(0,120));
    if (log.environmentNote) topics.add(log.environmentNote.slice(0,85));
    if (log.interview?.length) for (const item of log.interview.slice(0,3)) topics.add(item.answer.slice(0,95));
  }
  return [...topics, data.activeEnvironment].join(' ');
}

function exportReport(weekly) {
  const entries = weekly ? reportDays() : [{date:today().date,entry:today()}];
  const title = weekly ? (reportLength === 7 ? 'Weekly' : '30-day')+' crew health log' : 'Crew medical summary';
  const markup = '<!doctype html><html lang="en"><meta charset="utf-8"><title>'+title+'</title><style>body{max-width:860px;margin:35px auto;padding:0 20px;font:16px/1.5 system-ui;color:#152c33}article{border-top:1px solid #a5b4b1;margin-top:26px}dt{font-weight:bold}img{max-width:100%;height:auto}</style><h1>'+
    title+'</h1><p>NETIN / '+(entries.some(({entry}) => entry?.sample) ? 'Includes demonstration data / ' : '')+environment().name+'</p><p>Crew member: '+escape(state.profile.name)+'<br>Crew medical officer: '+escape(state.profile.medical)+
    '<br>History: '+escape(state.profile.history)+'<br>Allergies: '+escape(state.profile.allergies)+'</p>'+
    (weekly ? '<h2>Log conclusion</h2>'+logConclusion(reportLength) : '')+
    entries.map(({date,entry}) => '<article><h2>'+formatDay(date)+'</h2>'+(entry ? assessment(entry)+'<ul>'+
    E.metrics.map(metric => '<li>'+metric.label+': '+E.format(entry.values[metric.key])+' '+metric.unit+'</li>').join('')+'</ul>'+details(entry,false) : '<p>No check-in.</p>')+
    dailyPhoto(date)+'</article>').join('')+'<section><h2>Motor skills</h2>'+motorTable(entries)+'</section></html>';
  const filename = 'netin-'+(weekly ? (reportLength === 7 ? 'weekly' : '30-day') : 'medical')+'-'+E.dateKey()+'.html';
  const bridge = globalThis.chrome?.webview;
  if (bridge) bridge.postMessage(filename+'\n'+markup);
  else notify('Open NETIN.exe to save the report.');
}

window.addEventListener('hashchange',() => {
  if (!session) return;
  if (cameraScreen) {
    cameraScreen.controller.abort();
    cameraScreen = undefined;
  }
  if (view() !== 'bot') stopSpeech();
  render();
  window.scrollTo({top:0,behavior:'instant'});
  $('main').focus({preventScroll:true});
});
document.addEventListener('click',(event) => {
  const control = event.target.closest('[data-action]');
  if (!control) return;
  const {action} = control.dataset;
  if (action === 'enter-crew') return loginModal(control.dataset.id);
  if (action === 'delete-crew') return deleteCrewModal(control.dataset.id);
  if (action === 'exit-crew') return exitCrew();
  if (action === 'profile-next' || action === 'profile-back') return profileStep(action === 'profile-next');
  if (action === 'capture-camera') return cameraScreen?.capture?.();
  if (action === 'new-profile') return profileModal(true);
  if (session && workspaceClick(control)) return;
  if (action === 'medical-supplies') return medicalSuppliesModal();
  if (action === 'edit-medical-supply' || action === 'remove-medical-supply') {
    const item = (state.medicalSupplies || []).find(entry => entry.id === control.dataset.id && entry.env === state.env);
    if (!item) return;
    if (action === 'edit-medical-supply') return medicalSuppliesModal(item);
    if (save({...state,medicalSupplies:state.medicalSupplies.filter(entry => entry !== item)})) medicalSuppliesModal();
    return;
  }
  if (action === 'motor-cancel') return stopMotorRound('Round ended.');
  if (action === 'motor-game' && !motorRound && Object.hasOwn(Motor.games,control.dataset.game)) {
    motorGame = control.dataset.game;
    motorResult = undefined;
    motorMessage = '';
    render();
    return document.querySelector('[data-action="motor-game"][aria-pressed="true"]').focus();
  }
  if (action === 'daily-camera') return void openCamera('panel',dailyPhotos.has(E.dateKey()));
  if (action === 'retry-camera') return void openCamera(cameraScreen.destination,cameraScreen.retake);
  if (action === 'use-camera' && !cameraScreen.working) return void saveCameraPhoto(cameraScreen,cameraScreen.pendingPhoto);
  if (action === 'skip-camera') return finishCamera();
  if (action === 'report-range') {
    reportLength = Number(control.dataset.length) === 30 ? 30 : 7;
    render();
    return document.querySelector('[data-action="report-range"][aria-pressed="true"]').focus();
  }
  if (action === 'assist-check') {
    return beginIntake();
  }
  if (action === 'chat-mode' && !busy) {
    chatMode = control.dataset.mode === 'companion' ? 'companion' : 'health';
    render();
    return $('chat-form')?.elements.query.focus();
  }
  if (action === 'intake-option') return void submitIntake(control.dataset.answer);
  if (action === 'skip-intake') return void submitIntake('',true,control.form?.elements.image?.files[0]);
  if (action === 'end-chat-check' || action === 'finish-chat-check') return void finishIntake();
  if (action === 'assist-daily' || action === 'assist-week') {
    if (busy || draft()?.mode === 'chat') return beginIntake();
    const daily = action === 'assist-daily';
    showRoute('bot');
    return void sendMessage(daily ? 'Review today’s check-in. Explain which recorded items merit follow-up and what to ask the crew medical officer.' :
      'Review my last seven days of check-ins by environment. Summarize changes, gaps, impact on duties, and possible follow-up for the crew medical officer.',daily ? 'daily' : 'week');
  }
  if (action === 'trace') {
    selectedDay = control.dataset.day;
    document.querySelectorAll('.trace-day').forEach(day => day.setAttribute('aria-pressed',String(day === control)));
    $('trace-readout').innerHTML = traceReading(week().find(day => day.date === selectedDay));
  }
  if (action === 'open-chat' && view() === 'bot') $('chat-form')?.elements.query.focus();
  if (action === 'speak-reply') return speakReply(chat[Number(control.dataset.index)]);
  if (action === 'stop-speech') return stopSpeech();
  if (action === 'toggle-speech') {
    readAloud = !readAloud;
    try { localStorage.setItem('netin-read-aloud',readAloud ? 'on' : 'off'); } catch { /* Apply for this session. */ }
    if (!readAloud) stopSpeech();
    control.setAttribute('aria-pressed',String(readAloud));
    return;
  }
  if (action === 'close') $('modal').close();
  if (action === 'profile') profileModal();
  if (action === 'model') void checkModel();
  if (action === 'start' && setDraft({env:state.env,date:E.dateKey(),index:0,values:{...today()?.values},image:today()?.image || null})) {
    render(); $('check-form')?.elements.answer.focus();
  }
  if (action === 'back' && setDraft({...draft(),index:draft().index-1})) render();
  if (action === 'remove-image' && setDraft({...draft(),image:null})) render();
  if (action === 'review') {
    const entry = today();
    if (save({...state,records:state.records.map(item => item === entry ? {...entry,review:new Date().toISOString()} : item)})) render();
  }
  if (action === 'export' || action === 'week-export') exportReport(action === 'week-export');
  if (action === 'save-image') {
    const image = records().find(entry => entry.date === control.dataset.day)?.image?.src;
    if (image && /^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(image)) {
      globalThis.chrome?.webview?.postMessage('netin-attachment.jpg\n'+image.split(',')[1]);
    }
  }
});
document.addEventListener('input',(event) => {
  const control = event.target;
  if (control.form?.id === 'journal-form') queueJournal(control);
  if (control.form?.id === 'body-form') {
    const fields = control.form.elements;
    bodyEdit = {symptom:fields.symptom.value,intensity:fields.intensity.value,notes:fields.notes.value};
    $('intensity-value').textContent = bodyEdit.intensity+' / 10';
  }
  if (control.dataset.preference === 'volume') $('volume-value').value = control.value+'%';
});
document.addEventListener('change',(event) => {
  const control = event.target;
  if (control.id === 'mission-stage') {
    setStage(control.value);
    render();
    $('mission-stage')?.focus();
  }
  if (control.dataset.preference) saveAppearance(control);
  if (control.id === 'region-search') {
    const region = Object.keys(regions).find(key => regionLabel(bodySide,key).toLowerCase() === control.value.trim().toLowerCase());
    if (region && !bodySelection.has(regionKey({side:bodySide,region}))) {
      toggleRegion(bodySide,region);
      $('region-search').focus();
    }
  }
  if (control.id === 'markdown-files') void importSelectedMarkdown(Array.from(control.files));
  if (control.id === 'trend-metric' && Object.hasOwn(metricNames,control.value)) {
    trendMetric = control.value;
    render();
    $('trend-metric').focus();
  }
  if (control.form?.id === 'check-form' && E.steps[draft()?.index]?.key === 'impact') {
    control.form.querySelector('.error').textContent = control.value === 'urgent' ? E.medicalHelp : '';
  }
});
document.addEventListener('submit',async (event) => {
  event.preventDefault();
  const form = event.target;
  if (['stage-form','stage-confirm-form','body-form','journal-form','document-search','records-filter','motor-filter'].includes(form.id)) return workspaceSubmit(form);
  if (form.id === 'medical-supplies-form') {
    const items = state.medicalSupplies || [];
    const name = form.elements.supply.value.trim();
    const quantity = form.elements.quantity.valueAsNumber;
    if (!name) return notify('Enter a supply name.');
    if (!Number.isInteger(quantity) || quantity < 0 || quantity > 999999) return notify('Enter a whole number of units.');
    const id = form.dataset.id || crypto.randomUUID();
    const supply = {id,env:state.env,name,quantity,expires:form.elements.expires.value};
    if (save({...state,medicalSupplies:[...items.filter(entry => entry.id !== id),supply]})) medicalSuppliesModal();
    return;
  }
  if (form.id === 'motor-form') return startMotorRound(form.elements.hand.value);
  if (form.id === 'login-form') return submitLogin(form);
  if (form.id === 'delete-crew-form') return submitDeleteCrew(form);
  if (form.id === 'check-form') return submitCheck(event);
  if (form.id === 'intake-form') return submitIntake(form.elements.answer?.value || '',false,form.elements.image?.files[0]);
  if (form.id === 'chat-form') return sendMessage(form.elements.query.value.trim());
  if (form.id === 'guide-form') {
    const topic = form.elements.topic.value.trim();
    if (!topic || busy || draft()?.mode === 'chat') return;
    guideTopic = topic;
    return sendMessage('Summarize the protocol or evidence about '+topic+'. Cover measurement instructions, indicators, risks, precautions, treatment steps for the medical officer to review, and which environment the evidence applies to. Mark details the sources do not support.','guide',topic);
  }
  if (form.id === 'profile-form') {
    const profile = Object.fromEntries(['name','role','medical','history','allergies'].map(key => [key,form.elements[key]?.value.trim() || '']));
    if (session) profile.missionStartDate = form.elements.missionStartDate.value;
    if (!profile.name || !profile.role) return notify('Complete the crew member and role fields.');
    if (!session) {
      if (form.dataset.pending) return;
      if (form.elements.password.disabled) return profileStep(true);
      const submit = form.querySelector('[type="submit"]');
      form.dataset.pending = 'true';
      submit.disabled = true;
      const key = 'netin-crew:'+crypto.randomUUID();
      try {
        const auth = await CrewProfiles.createPassword(form.elements.password.value,form.elements.confirmation.value);
        if (!form.isConnected || !$('modal').open || session) return;
        localStorage.setItem(key,JSON.stringify({...E.initialState(),profile,auth,records:[],createdDate:E.dateKey()}));
        try { localStorage.setItem(rosterKey,JSON.stringify([...crewKeys.filter(isCrewKey),key])); }
        catch (failure) { localStorage.removeItem(key); throw failure; }
      } catch (error) { form.querySelector('.error').textContent = error.message; return; }
      finally { delete form.dataset.pending; submit.disabled = false; }
      crewKeys.splice(crewKeys.length - CrewProfiles.demoKeys.length,0,key);
      $('modal').close();
      render();
      document.querySelector('[data-id="'+key+'"]').focus();
      return;
    }
    if (save({...state,profile})) { $('modal').close(); render(); notify('Crew profile saved.'); }
  }
});

globalThis.chrome?.webview?.addEventListener('message', ({data}) => {
  if (data?.channel !== 'netin-voice-unavailable' || data.id !== voiceRequest || !voiceText) return;
  const voices = globalThis.speechSynthesis?.getVoices().filter(voice => voice.localService) || [];
  const voice = voices.find(voice => /^en(?:[-_]|$)/i.test(voice.lang)) || voices[0];
  const message = 'Windows could not play this reply. Check the installed voices and sound output.';
  if (!voice) return notify(message);
  const reply = new SpeechSynthesisUtterance(voiceText);
  reply.voice = voice;
  reply.volume = appearance.volume / 100;
  reply.onerror = () => { if (data.id === voiceRequest) notify(message); };
  speechSynthesis.speak(reply);
});
window.addEventListener('pagehide', () => { flushJournal(false); cameraScreen?.controller.abort(); });
$('modal').addEventListener('close', event => {
  if (!event.target.open) event.target.replaceChildren();
});
async function start() {
  if (new URLSearchParams(location.search).get('reset-crew') === '1') {
    $('main').textContent = 'Resetting profiles…';
    try {
      await resetCrewData();
      history.replaceState(null,'',location.pathname);
      rosterReset = true;
    } catch {
      $('main').textContent = 'Could not reset the profiles. Close NETIN and run the updater again.';
      return;
    }
  }
  try {
    const preferences = JSON.parse(localStorage.getItem('netin-appearance-v1'));
    if (preferences) {
      if (['light','dark'].includes(preferences.theme)) appearance.theme = preferences.theme;
      if (['standard','large','larger'].includes(preferences.text)) appearance.text = preferences.text;
      if (Number.isInteger(preferences.volume) && preferences.volume >= 0 && preferences.volume <= 100) appearance.volume = preferences.volume;
    }
    applyAppearance();
    const storedStage = localStorage.getItem(missionStageKey);
    if (Object.hasOwn(stages,storedStage)) stageChoice = storedStage;
    const removed = JSON.parse(localStorage.getItem(deletedCrewKey));
    if (Array.isArray(removed)) deletedCrew = new Set(removed);
    if (localStorage.getItem(legacyCrew)) crewKeys.unshift(legacyCrew);
    const roster = JSON.parse(localStorage.getItem(rosterKey));
    readAloud = localStorage.getItem('netin-read-aloud') !== 'off';
    if (Array.isArray(roster)) crewKeys.splice(crewKeys.length - CrewProfiles.demoKeys.length,0,...new Set(roster.filter(isCrewKey)));
  } catch { storageError = true; }
  crewKeys = crewKeys.filter(key => !deletedCrew.has(key));
  showRoute('home');
  if (!rosterReset && !deletedCrew.has(legacyCrew) && !crewKeys.includes(legacyCrew)) {
    CrewCamera.latest(legacyCrew).then(photo => {
      if (!photo) return;
      crewKeys.unshift(legacyCrew);
      if (!session) render();
    }).catch(() => {});
  }
  const thumbnails = await Promise.all(crewKeys.map(async key => [key,await CrewCamera.latest(key).catch(() => null)]));
  thumbnails.forEach(([key,photo]) => { if (photo) crewThumbnails.set(key,photo); });
  if (!session && !$('modal').open) render();
  void loadMarkdown();
}
void start();
