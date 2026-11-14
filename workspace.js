'use strict';

const stages = {orbit:'Órbita',earth:'Tierra',mars:'Marte',transit:'Espacio',moon:'Luna'};
const metricNames = {temp:'Temperatura',pulse:'Pulso',pressure:'Presión arterial',glucose:'Glucosa',sleep:'Sueño',mood:'Ánimo'};
const healthTabs = {general:'General',physical:'Físico',mental:'Mental',skills:'Skills'};
const flowLabels = {photo:'Foto diaria',check:'Chequeo diario',motor:'Prueba motora',journal:'Bitácora'};
const regions = {
  head:'Cabeza', neck:'Cuello', torso:'Tórax', abdomen:'Abdomen', hip:'Cadera',
  lshoulder:'Hombro izq.',rshoulder:'Hombro der.',larm:'Brazo izq.',rarm:'Brazo der.',
  lhand:'Mano izq.',rhand:'Mano der.',lleg:'Pierna izq.',rleg:'Pierna der.',
  lfoot:'Pie izq.',rfoot:'Pie der.'
};
const symptoms = {pain:'Dolor',stiffness:'Rigidez',weakness:'Debilidad',tingling:'Hormigueo',irritation:'Irritación',other:'Otro',resolved:'Sin molestia'};
let stageChoice = '';
let healthTab = 'general';
let regionChoice = {side:'front',region:'head'};
let documentQuery = '';
let summaryPending = '';
let trendMetric = 'pulse';

const stageOptions = selected => '<option value="" disabled'+(!selected ? ' selected' : '')+'>Elige una etapa</option>'+Object.entries(stages)
  .map(([key,label]) => '<option value="'+key+'"'+(key === selected ? ' selected' : '')+'>'+label+'</option>').join('');
const firstName = () => state.profile.name.trim().split(/\s+/)[0];
const flow = () => state.dailyFlow?.date === E.dateKey() ? state.dailyFlow : {};
const markFlow = (key, status = 'done') => save({...state,dailyFlow:{...flow(),date:E.dateKey(),[key]:status}});
const dailyJournal = () => (state.journals || []).find(item => item.date === E.dateKey());
const bodyRecords = () => state.body || [];
const flowStep = () => Object.keys(flowLabels).find(key => !flow()[key]);
const stageField = (id, value) => field('Etapa de misión','<select id="'+id+'" name="stage" required>'+stageOptions(value)+'</select>');
const card = (title, content, action = '', extra = '') => '<section class="card '+extra+'"><div class="card-head"><h2>'+title+'</h2>'+action+'</div>'+content+'</section>';
const empty = text => '<p class="muted">'+text+'</p>';
const initialsOf = name => name.trim().split(/\s+/).slice(0,2).map(part => Array.from(part)[0]).join('').toUpperCase();
const portrait = (name, source, extra = '') => source ? '<img class="portrait '+extra+'" src="'+source+'" alt="Foto de '+escape(name)+'">' :
  '<span class="portrait '+extra+'" aria-hidden="true">'+escape(initialsOf(name))+'</span>';

function workflow() {
  const current = flowStep();
  const status = {done:'Listo',skipped:'Omitido'};
  return '<ol class="workflow" aria-label="Rutina diaria">'+Object.entries(flowLabels).map(([key,label]) =>
    '<li class="'+(key === current ? 'current' : flow()[key] || '')+'"'+(key === current ? ' aria-current="step"' : '')+'><span class="step-dot" aria-hidden="true"></span>'+
    '<span>'+label+'</span><small>'+ (status[flow()[key]] || (key === current ? 'En curso' : 'Pendiente'))+'</small></li>').join('')+'</ol>';
}

function resumeFlow() {
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
      (value == null ? '—' : escape(E.format(value)))+'</strong><small>'+(value == null ? 'Sin medición' : escape(metric.unit))+
      (flag ? ' · Revisar' : '')+'</small></div>';
  }).join('')+'</div>';
}

function medicalFlags(entry) {
  if (!entry) return empty('Todavía no hay un chequeo en esta etapa.');
  const review = CI.differingReadings(entry).map(metric => metricNames[metric.key]);
  if (E.hasLowBodyTemperature(entry) || entry.values.impact === 'urgent') {
    return '<p class="notice critical">Avisa al médico de la tripulación y sigue el protocolo de la misión.</p>';
  }
  const flags = [...review.map(item => 'Revisar '+item.toLowerCase()),...((entry.details || [])
    .filter(item => item.title === 'Symptoms').map(item => 'Dar seguimiento a '+item.answer))];
  return flags.length ? '<ul class="plain-list">'+flags.map(item => '<li>'+escape(item)+'</li>').join('')+'</ul>' :
    empty('El registro no tiene alertas de revisión. Consulta las mediciones y cualquier dato pendiente.');
}

function recordedSummary(summary, fallback) {
  if (!summary) return empty(fallback);
  if (!summary.sections) return '<p>'+escape(summary.text)+'</p>';
  return replySections(summary);
}

function workspaceHome() {
  const profile = state.profile;
  const entry = today();
  const journal = dailyJournal();
  return pageHead('', 'Home', 'Tu salud y tu rutina de hoy.',button('Continuar rutina','resume-flow','primary',!flowStep() ? 'hidden' : ''))+
    '<div class="workspace-grid"><section class="card crew-card">'+portrait(profile.name,validPhoto(crewPortrait),'large')+
    '<div><h2>'+escape(profile.name)+'</h2><p class="muted">'+escape(profile.role)+'</p>'+
    '<dl class="crew-details"><dt>Etapa</dt><dd>'+stages[state.env]+'</dd><dt>Médico a bordo</dt><dd>'+escape(profile.medical || 'Sin registrar')+
    '</dd><dt>Antecedentes</dt><dd>'+escape(profile.history || 'Sin registrar')+'</dd><dt>Alergias</dt><dd>'+escape(profile.allergies || 'Sin registrar')+
    '</dd></dl>'+button('Volver a tomar foto','daily-camera','compact')+'</div></section>'+
    card('Rutina diaria',workflow(),button('Iniciar chequeo','assist-check','compact',busy ? 'disabled' : ''))+
    card('Chequeo de hoy',recordedSummary(entry?.summary,entry ? 'Consulta las mediciones registradas.' : 'Tu resumen aparecerá al terminar el chequeo.'))+
    card('Bitácora',recordedSummary(journal?.summary,journal ? 'Tu entrada está guardada. El resumen de NETIN está pendiente.' : 'Todavía no hay una entrada para hoy.'),link('Abrir','journal','compact'))+
    card('Riesgos y pendientes',medicalFlags(entry),link('Ver salud','health','compact'))+
    card('Indicadores',vitals(entry),'','wide')+'</div>';
}

function healthView() {
  const views = {general:generalHealth,physical:physicalHealth,mental:mentalHealth,skills:skillsHealth};
  return pageHead('', 'Salud', 'Consulta tus registros y los cambios que requieren seguimiento.')+
    '<div class="tabs" role="group" aria-label="Áreas de salud">'+Object.entries(healthTabs).map(([key,label]) =>
      button(label,'health-tab',key === healthTab ? 'selected' : '', 'data-tab="'+key+'" aria-pressed="'+(key === healthTab)+'"')).join('')+'</div>'+views[healthTab]();
}

function summaryAction(area) {
  return button(summaryPending === area ? 'Preparando…' : 'Actualizar con NETIN','generate-summary','compact',
    'data-area="'+area+'"'+(summaryPending || busy ? ' disabled' : ''));
}

function generalHealth() {
  const entry = today();
  const summary = state.healthSummaries?.general;
  return '<div class="workspace-grid">'+card('Signos vitales',vitals(entry),'','wide')+
    card('Riesgos',medicalFlags(entry))+
    card('Precauciones e indicaciones',recordedSummary(summary || entry?.summary,'NETIN puede revisar tus mediciones y documentos de misión.'),summaryAction('general'))+
    card('Tendencia de siete días',trendView(),'','wide')+'</div>';
}

function trendView() {
  const metric = E.metricByKey(trendMetric);
  const days = week().map(({date,entry}) => ({date,value:entry?.values[trendMetric]}));
  const number = value => Array.isArray(value) ? value[0] : value;
  const values = days.filter(day => day.value != null).map(day => number(day.value));
  const min = Math.min(...values);
  const max = Math.max(...values);
  return field('Medición','<select id="trend-metric">'+Object.entries(metricNames).map(([key,name]) =>
    '<option value="'+key+'"'+(key === trendMetric ? ' selected' : '')+'>'+name+'</option>').join('')+'</select>')+
    (values.length ? '<ol class="trend" aria-label="'+metricNames[trendMetric]+'">'+days.map(({date,value}) => {
      const height = value == null ? 0 : max === min ? 52 : 16+76*(number(value)-min)/(max-min);
      return '<li><span class="trend-track"><span class="trend-bar '+(E.status(metric,value) === 'review' ? 'review' : '')+
        '" style="height:'+height+'%"></span></span><strong>'+(value == null ? '—' : escape(E.format(value)))+
        '</strong><small>'+formatDay(date)+'</small></li>';
    }).join('')+'</ol><p class="micro">'+escape(metric.unit)+(trendMetric === 'pressure' ? ' · La altura indica la presión sistólica.' : '')+'</p>' :
    empty('Todavía no hay mediciones para esta etapa.'));
}

function bodyStatus(record) {
  if (!record || !record.intensity || record.symptom === 'resolved') return '';
  return record.intensity >= 7 ? 'strong' : record.intensity >= 4 ? 'medium' : 'low';
}

function bodyFigure(side) {
  return '<div class="figure-view"><h3>'+ (side === 'front' ? 'Frente' : 'Espalda')+'</h3>'+
    '<div class="body-figure '+side+'" role="group" aria-label="'+(side === 'front' ? 'Vista frontal' : 'Vista posterior')+'">'+
    Object.entries(regions).map(([key,name]) => {
      const record = bodyRecords().find(item => item.side === side && item.region === key);
      const active = regionChoice.side === side && regionChoice.region === key;
      const label = (side === 'back' && key === 'torso' ? 'Espalda alta' : side === 'back' && key === 'abdomen' ? 'Espalda baja' : name);
      return '<button type="button" class="region '+key+' '+bodyStatus(record)+'" data-action="body-part" data-side="'+side+'" data-region="'+key+
        '" aria-label="'+label+(record ? ', '+symptoms[record.symptom]+' '+record.intensity+'/10' : '')+'" aria-pressed="'+active+'" title="'+label+'"></button>';
    }).join('')+'</div></div>';
}

function physicalHealth() {
  const {side,region} = regionChoice;
  const record = bodyRecords().find(item => item.side === side && item.region === region);
  const selected = side === 'back' && region === 'torso' ? 'Espalda alta' : side === 'back' && region === 'abdomen' ? 'Espalda baja' : regions[region];
  return '<div class="workspace-grid">'+card('Mapa corporal','<div class="body-map">'+bodyFigure('front')+bodyFigure('back')+'</div>'+
    '<p class="legend"><span class="dot low"></span> 1–3 <span class="dot medium"></span> 4–6 <span class="dot strong"></span> 7–10 · Intensidad reportada</p>')+
    card('Registrar molestia','<p><strong>'+selected+'</strong> <span class="muted">· '+(side === 'front' ? 'Frente' : 'Espalda')+'</span></p>'+
    '<form id="body-form">'+field('Síntoma','<select name="symptom">'+Object.entries(symptoms).map(([key,label]) => '<option value="'+key+'">'+label+'</option>').join('')+'</select>')+
    field('Intensidad (0–10)','<input name="intensity" type="number" min="0" max="10" step="1" value="'+(record?.intensity ?? 1)+'" required>')+
    field('Qué cambió','<textarea name="notes" maxlength="600" rows="3" placeholder="Cuándo empezó o qué actividad lo afecta">'+escape(record?.notes || '')+'</textarea>')+
    '<button class="button primary" type="submit">Guardar</button></form>')+
    card('Posibles causas y consideraciones',recordedSummary(state.healthSummaries?.physical,'Registra lo que sientes para que NETIN pueda buscar evidencia y revisar tus cambios.'),summaryAction('physical'),'wide')+'</div>';
}

function mentalHealth() {
  const entries = (state.journals || []).slice(0,5);
  return '<div class="workspace-grid">'+card('Indicadores de salud mental',vitals(today(),['sleep','mood'])+
    recordedSummary(state.healthSummaries?.mental,'NETIN puede resumir los patrones que hayas descrito en tus bitácoras.'),summaryAction('mental'))+
    card('Bitácoras recientes',entries.length ? entries.map(item => '<article class="record-item"><strong>'+formatDay(item.date)+'</strong><p>'+escape(item.text)+'</p></article>').join('') :
      empty('Aún no hay bitácoras.'),link('Escribir','journal','compact'))+'</div>';
}

function skillsHealth() {
  const recent = motorHistory().slice().sort((a,b) => b.date.localeCompare(a.date))[0];
  return '<div class="workspace-grid">'+card('Resumen de desempeño',recordedSummary(state.healthSummaries?.skills,'Pide a NETIN que compare tus pruebas registradas.'),summaryAction('skills'))+
    card('Prueba más reciente',recent ? motorSummary(recent) : empty('Todavía no hay resultados.'),link('Jugar','motor','compact'))+
    card('Historial de pruebas',motorTable(E.weekly([],state.env,30)),'','wide')+'</div>';
}

function journalView() {
  const current = dailyJournal();
  return pageHead('', 'Bitácora diaria', 'Cuéntame cómo te fue y qué quieres recordar.')+workflow()+
    card('Tu entrada','<form id="journal-form">'+field('¿Qué pasó hoy?','<textarea name="note" rows="5" maxlength="2400" required placeholder="Puedes contarme de tu turno, cómo te sentiste o qué te preocupa.">'+
      escape(current?.text || '')+'</textarea>')+'<button type="submit" class="button primary" '+(summaryPending ? 'disabled' : '')+'>'+
      (summaryPending === 'journal' ? 'Guardando con NETIN…' : 'Guardar con NETIN')+'</button> '+link('Volver a Home','panel')+'</form>'+
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
  return pageHead('', 'Registros', 'Tu historial por día y por etapa.',link('Informe y tendencias','semana','primary'))+
    (byDay.size ? [...byDay].sort(([a],[b]) => b.localeCompare(a)).map(([day,items],index) =>
      '<details class="card day-record" '+(index === 0 ? 'open' : '')+'><summary>'+formatDay(day)+' <small>'+escape(day)+'</small></summary>'+
      (items.photo ? dailyPhoto(day) : '')+
      (items.check || []).map(item => '<h3>Chequeo · '+stages[item.env]+'</h3>'+vitals(item)+
        (item.details || []).map(detail => '<p><strong>'+escape(detail.title)+'</strong> '+escape(detail.answer)+'</p>').join('')+
        (item.values.note ? '<p>'+escape(item.values.note)+'</p>' : '')+preview(item.image)+recordedSummary(item.summary,'')).join('')+
      (items.journal || []).map(item => '<h3>Bitácora · '+stages[item.env]+'</h3><p>'+escape(item.text)+'</p>'+recordedSummary(item.summary,'')).join('')+
      (items.motor || []).map(item => '<h3>'+escape(Motor.games[Motor.gameOf(item)].name)+' · '+stages[item.env]+'</h3>'+motorSummary(item)).join('')+
      (items.body || []).map(item => '<p><strong>'+regions[item.region]+' · '+symptoms[item.symptom]+'</strong> '+item.intensity+'/10 '+escape(item.notes)+'</p>').join('')+
      (items.chat?.length ? '<details><summary>Conversaciones ('+items.chat.length+')</summary>'+items.chat.map(item =>
        '<p><strong>'+(item.role === 'assistant' ? 'NETIN' : 'Tú')+'</strong> '+escape(item.content)+'</p>').join('')+'</details>' : '')+'</details>').join('') : empty('Todavía no hay registros.'));
}

function documentsView() {
  const query = documentQuery.toLocaleLowerCase().trim();
  const matches = library.filter(item => item.relative.toLocaleLowerCase().includes(query) || item.markdown.toLocaleLowerCase().includes(query));
  return pageHead('', 'Documents', 'Biblioteca de misión que consulta NETIN.',button('Cargar carpeta Markdown','choose-markdown','primary',missionIndexing ? 'disabled' : ''))+
    '<input id="markdown-files" type="file" webkitdirectory multiple hidden>'+
    card('Biblioteca local','<form id="document-search" class="search-form">'+field('Buscar','<input name="query" type="search" value="'+escape(documentQuery)+'" placeholder="Nombre o contenido">')+
      '<button class="button">Buscar</button></form><p class="muted" role="status">'+escape(missionImport || matches.length+' de '+library.length+' documentos')+'</p>'+
      (libraryError ? '<p class="error">'+escape(libraryError)+'</p>' : '')+
      (matches.length ? matches.map(item => '<div class="document-row"><span>'+escape(item.relative)+'</span>'+
        button('Abrir','read-markdown','compact','data-id="'+escape(item.id)+'"')+'</div>').join('') : empty(library.length ? 'No hay coincidencias.' : 'Carga la carpeta Markdown de la misión.')));
}

function settingsView() {
  const status = {unchecked:'Por verificar',checking:'Verificando…',ready:'Qwen disponible',missing:'Modelo no encontrado',offline:'Ollama no disponible'};
  return pageHead('', 'Settings', 'Perfil, voz y conexión local.')+'<div class="workspace-grid">'+
    card('Perfil','<p>'+escape(state.profile.name)+'</p><div class="actions">'+button('Editar perfil','profile')+button('Cerrar sesión','exit-crew')+'</div>')+
    card('Voz',empty('NETIN puede leer sus respuestas en voz alta.')+button('Lectura automática','toggle-speech','','aria-pressed="'+readAloud+'"'))+
    card('Asistente local','<p>'+status[model]+'</p>'+button('Verificar conexión','model','',model === 'checking' || busy ? 'disabled' : ''))+
    card('Misión','<div class="actions">'+button('Cambiar etapa','stage-menu')+button('Inventario médico','medical-supplies')+'</div>')+'</div>';
}

function setStage(next) {
  if (!Object.hasOwn(stages,next) || next === state.env) return true;
  return save({...state,env:next,transitions:[...state.transitions,{from:state.env,to:next,reportedAt:new Date().toISOString()}]});
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
        'En español y en pocas palabras, explica causas posibles respaldadas para los síntomas reportados, qué medir, qué observar, riesgos y cuándo avisar al médico. Expresa la incertidumbre.' :
        'En español y en pocas palabras, revisa mis signos vitales registrados, riesgos respaldados, precauciones y un paso concreto para el chequeo.';
      const body = bodyRecords().slice(0,7).map(item => ({...item,region:regions[item.region],symptom:symptoms[item.symptom]}));
      const terms = [...base.checkIns.flatMap(item => [item.note,...item.interview.map(detail => detail.answer)]),
        ...(physical ? body.map(item => item.region+' '+item.symptom+' '+item.notes) : [])].join(' ').slice(0,800);
      summary = await AI.answer(question,[],library,{...base,records,body:physical ? body : undefined},terms);
    } else {
      const journals = (state.journals || []).slice(0,6).map(item => ({date:item.date,text:item.text.slice(0,420)}));
      const games = area === 'skills' ? (state.motorLogs || []).slice().sort((a,b) => b.date.localeCompare(a.date)).slice(0,10) : undefined;
      const role = {journal:'Resume la entrada de hoy y recoge un detalle importante. Respóndele con empatía.',
        mental:'Resume cómo describe su ánimo, descanso o impacto en tareas. Señala un patrón solo si se repite en varias fechas.',
        skills:'Resume sus resultados y cambios comparables. Mantén unidades, mano y entorno. Evita conclusiones clínicas.'}[area];
      summary = {text:await AI.reflect(role,{current:journal?.text,journals:area === 'skills' ? undefined : journals,records,games})};
    }
    if (owner !== session) return;
    summary = {...summary,date:E.dateKey(),env:state.env};
    if (journal) save({...state,journals:state.journals.map(item => item === journal ? {...item,summary} : item)});
    else save({...state,healthSummaries:{...state.healthSummaries,[area]:summary}});
    if (readAloud && ['journal','health'].includes(view())) speakReply({role:'assistant',content:summary.text,sections:summary.sections});
  } catch { if (owner === session) notify('NETIN no pudo generar el resumen. Tus registros están guardados.'); }
  finally { if (owner === session) { summaryPending = ''; render(); } }
}

function workspaceClick(control) {
  const {action,side,region,tab,id,area} = control.dataset;
  if (action === 'resume-flow') resumeFlow();
  else if (action === 'stage-menu') openModal('Etapa de misión','<form id="stage-form">'+stageField('active-stage',state.env)+'<button class="button primary">Guardar etapa</button></form>');
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
    if (save({...state,body:[item,...prior]})) { render(); notify('Molestia guardada.'); }
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
  const finished = !current && flow().check && !flow().motor;
  const messages = history.map((turn,index) => '<article class="message '+turn.role+'"><span class="folio">'+
    (turn.role === 'user' ? 'Tú' : 'NETIN')+'</span>'+(turn.sections ? replySections(turn) : '<p>'+escape(turn.content)+'</p>')+
    (turn.role === 'assistant' ? button('Escuchar','speak-reply','voice-button','data-index="'+(chat.length-history.length+index)+'"') : '')+
    '</article>').join('');
  const controls = current ? button('Guardar y terminar','end-chat-check','compact',busy ? 'disabled' : '') :
    button('Chequeo diario','assist-check','compact',busy ? 'disabled' : '');
  return pageHead('',current ? 'Chequeo diario' : 'Asistente',current ? '' : '',controls)+
    (current || finished ? workflow() : '')+
    '<section class="card assistant-shell"><div class="assistant-toolbar">'+
    (finished ? button('Continuar a prueba motora','next-motor','primary') : '<strong>NETIN</strong>')+
    '<div class="actions">'+button('Voz','toggle-speech','compact','aria-pressed="'+readAloud+'"')+
    button('Detener audio','stop-speech','compact')+'</div></div><div id="chat-log" class="transcript" aria-live="polite">'+
    (current ? intakeTranscript(current,busy ? null : CI.question(current)) : messages || empty('Hola, '+escape(firstName())+'. ¿Cómo va tu turno?'))+
    (busy ? '<p class="muted">NETIN está preparando su respuesta…</p>' : '')+'</div>'+
    (current ? intakeComposer(CI.question(current)) : '<form id="chat-form" class="composer">'+field('Mensaje',
      '<textarea name="query" rows="2" maxlength="1000" placeholder="Pregúntame o cuéntame cómo estás" required '+(busy ? 'disabled' : '')+'></textarea>')+
      '<button class="button primary" '+(busy ? 'disabled' : '')+'>Enviar</button></form>')+'</section>';
}

function loadMarkdown() {
  return refreshMarkdown(() => AI.loadMarkdown(progress => { missionImport = progress; }));
}

function importSelectedMarkdown(files) {
  if (!files.length || missionIndexing) return;
  return refreshMarkdown(() => AI.replaceMarkdown(files, progress => { missionImport = progress; }));
}

function refreshMarkdown(load) {
  missionImport = 'Preparando la biblioteca…';
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
