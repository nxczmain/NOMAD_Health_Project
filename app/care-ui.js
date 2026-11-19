'use strict';

let supplyQuery = '';
let careReport;
let careReportState;
let careReportDate;

function supplyReference(item) {
  const reference = MissionCare.reference(item);
  const document = library.find(entry => entry.relative === reference.document);
  const passage = document?.excerpts.find(entry => entry.page === reference.page);
  return document ? documentTarget({id:document.id,title:'Medical kit · page '+reference.page,...passage}) :
    reference.source ? '<a href="'+escape(reference.source)+'">Medical kit source</a>' : '';
}

function supplyStatus(item) {
  if (item.quantity == null) return 'Stock unconfirmed';
  if (item.expires && item.expires < E.dateKey()) return 'Expired';
  return item.quantity > 0 ? 'In stock' : 'Out of stock';
}

function inventoryMarkup(item) {
  const all = MissionCare.supplies(state);
  const visible = all.filter(entry => (entry.name+' '+(entry.location || '')+' '+(entry.referenceLocation || '')).toLowerCase().includes(supplyQuery.toLowerCase())).slice(0,30);
  const listing = '<form id="medical-supply-search" class="search-form">'+field('Find a supply','<input name="query" type="search" value="'+escape(supplyQuery)+'" placeholder="Medicine, equipment or pack">')+
    '<button class="button compact">Search</button></form><p class="micro">Showing '+visible.length+' of '+all.length+' items.</p>'+
    '<div class="table-scroll"><table><thead><tr><th>Supply</th><th>Onboard stock</th><th>Location</th><th>Reference</th><th></th></tr></thead><tbody>'+visible.map(entry =>
      '<tr><th scope="row">'+escape(entry.name)+'</th><td>'+escape(entry.quantity ?? 'Unconfirmed')+' '+escape(entry.unit || '')+'<br><small>'+supplyStatus(entry)+'</small></td>'+
      '<td>'+escape(entry.location || 'Onboard location not recorded')+(entry.referenceLocation ? '<br><small>2015 reference · '+escape(entry.referenceLocation)+'</small>' : '')+'</td>'+
      '<td>'+supplyReference(entry)+'</td><td>'+button('Update','edit-medical-supply','compact','data-id="'+escape(entry.id)+'"')+'</td></tr>').join('')+'</tbody></table></div>';
  let editing = '';
  if (item) {
    const reference = MissionCare.reference(item);
    const other = item.quantity === 0 ? MissionCare.alternatives(state,item) : [];
    editing = '<h3 class="aside-break">'+escape(item.name || 'Add a supply')+'</h3><form id="medical-supplies-form" data-id="'+escape(item.id || '')+'" data-catalog="'+escape(item.catalogId || '')+'">'+
      field('Supply name','<input name="supply" maxlength="160" value="'+escape(item.name || '')+'" required>')+
      field('Confirmed units available','<input name="quantity" type="number" min="0" max="999999" step="any" value="'+escape(item.quantity ?? '')+'" required>')+
      field('Onboard location','<input name="location" maxlength="160" value="'+escape(item.location || '')+'" placeholder="Recorded storage location">')+
      field('Expiration (optional)','<input name="expires" type="date" value="'+escape(item.expires || '')+'">')+
      '<div class="actions"><button class="button primary">Save stock</button>'+
      ((state.medicalSupplies || []).some(entry => entry.id === item.id) ? button('Remove recorded stock','remove-medical-supply','','data-id="'+escape(item.id)+'"') : '')+'</div></form>'+
      (reference.referenceQuantity != null ? '<p class="micro">The 2015 reference lists '+escape(reference.referenceQuantity)+' '+escape(reference.unit || 'units')+'.</p>' : '')+
      (reference.image && /^knowledge\/pages\/[\w-]+\.png$/.test(reference.image) ? '<details><summary>View the reference page</summary><img src="'+reference.image+'" loading="lazy" alt="Original medical kit reference page '+reference.page+'"></details>' : '')+
      (item.quantity === 0 ? '<h3>Other documented supplies for medical review</h3>'+(other.length ?
        '<ul>'+other.map(entry => '<li>'+escape(entry.name)+' · '+escape(entry.quantity)+' '+escape(entry.unit || 'units')+' '+supplyReference(entry)+'</li>').join('')+'</ul>' :
        '<p>No confirmed in-stock item in the same reference category. Ask the crew medical officer to review the available options.</p>') : '');
  }
  return '<p class="muted">'+environment().name+' · Catalog based on the 2015 ISS medical kit. Confirm onboard stock and locations.</p>'+editing+listing+
    '<div class="actions">'+button('Add another supply','add-medical-supply')+button('Medication history','medication-history')+'</div>';
}

function medicationHistory() {
  const entries = (state.medications || []).filter(item => item.env === state.env);
  const body = entries.length ? '<div class="table-scroll"><table><thead><tr><th>Medication</th><th>Amount taken</th><th>Taken at</th><th>Estimated interval</th></tr></thead><tbody>'+entries.map(item =>
    '<tr><th scope="row">'+escape(item.name)+'</th><td>'+escape(item.amount)+'</td><td>'+escape(new Date(item.takenAt).toLocaleString())+'</td>'+
    '<td><span data-medication-time="'+escape(item.id)+'">'+escape(MissionCare.medicationTime(item))+'</span>'+
    (item.estimateSource ? '<br><small>'+escape(item.estimateSource)+'</small>' : '')+'</td></tr>').join('')+'</tbody></table></div>' : empty('No medication taken has been recorded in this mission stage.');
  return pageHead('', 'Medication history', '',button('Record medication taken','record-medication','primary'))+
    card('Recorded doses',body)+card('Medical supplies',button('View inventory','medical-supplies'));
}

function medicationModal(medicationName = '') {
  const now = new Date();
  const localTime = new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,16);
  const items = MissionCare.supplies(state);
  openModal('Record medication taken','<form id="medication-form" data-operation="'+crypto.randomUUID()+'">'+
    field('Supply (optional)','<select name="supplyId" aria-label="Supply (optional)"><option value="">Choose a supply or enter the medication below</option>'+items.map(item =>
      '<option value="'+escape(item.id)+'">'+escape(item.name)+' · '+supplyStatus(item)+'</option>').join('')+'</select>')+
    field('Medication','<input name="name" maxlength="160" value="'+escape(medicationName)+'" required>')+
    field('Amount taken','<input name="amount" maxlength="100" placeholder="Amount and unit as taken" required>')+
    field('Time taken','<input name="takenAt" type="datetime-local" value="'+localTime+'" required>')+
    field('Units used from stock (optional)','<input name="unitsUsed" type="number" min="0" step="any">')+
    field('Estimated effect interval in hours (optional)','<input name="durationHours" type="number" min="0.01" max="8760" step="any">')+
    field('Source for that interval','<input name="estimateSource" maxlength="300" placeholder="Medical officer instruction or documented reference">')+
    field('Notes (optional)','<textarea name="notes" maxlength="1000"></textarea>')+
    '<p class="micro">The timer follows the medical reference or instruction recorded above.</p><p class="error" role="alert"></p><button class="button primary">Save dose</button></form>');
}

function refreshMedications() {
  if (!session) return;
  for (const node of document.querySelectorAll('[data-medication-time]')) {
    const item = (state.medications || []).find(entry => entry.id === node.dataset.medicationTime);
    if (item) node.textContent = MissionCare.medicationTime(item);
  }
  const due = MissionCare.dueMedications(state);
  if (!due.length) return;
  const notices = [...new Set([...(state.medicationNotices || []),...due.map(item => item.id)])];
  if (save({...state,medicationNotices:notices})) notify('Recorded estimated interval ended for '+due.map(item => item.name).join(', ')+'.');
}

function careReportMarkup(exporting = false) {
  const report = careReport;
  const recorded = careReportState || state;
  const body = MissionCare.activeBody(recorded);
  const medication = (recorded.medications || []).filter(item => item.env === recorded.env).slice(0,20);
  const checkIns = (recorded.records || []).filter(item => item.env === recorded.env).sort((a,b) => b.date.localeCompare(a.date)).slice(0,7);
  const references = report.sources?.length ? report.sources : report.related || [];
  const review = exporting ? '<p style="white-space:pre-wrap">'+escape(AI.clearTags(report.text))+'</p><ul>'+references.map(source =>
    '<li>'+escape(source.title)+(source.page ? ' · PDF page '+source.page : '')+(source.url ? ' <a href="'+escape(source.url)+'">Original source</a>' : '')+'</li>').join('')+'</ul>' : paragraphReply(report);
  const unfinished = Object.values(recorded.drafts || {}).filter(entry => entry?.mode === 'chat').flatMap(entry =>
    entry.turns.map(turn => ({...turn,mode:'check',partialCheck:true,date:entry.date,env:entry.env})));
  return '<h1>Medical review · '+escape(recorded.profile.name)+'</h1><p>'+escape(E.environments[recorded.env].name)+' · '+escape(careReportDate || E.dateKey())+'</p>'+
    '<p>Crew medical officer · '+escape(recorded.profile.medical || 'Not recorded')+'</p>'+
    '<p>History · '+escape(recorded.profile.history || 'Not recorded')+'<br>Allergies · '+escape(recorded.profile.allergies || 'Not recorded')+'</p>'+
    '<h2>Reported physical concerns</h2>'+(body.length ? '<ul>'+body.map(item => '<li>'+escape(regionLabel(item.side,item.region))+' · '+escape(symptoms[item.symptom] || item.symptom)+
      (item.intensity == null ? '' : ' · '+item.intensity+'/10')+' · '+escape(item.notes || '')+'</li>').join('')+'</ul>' : '<p>No active body-map concern recorded.</p>')+
    '<h2>Recent check-ins</h2>'+(checkIns.length ? checkIns.map(item=>'<h3>'+escape(item.date)+(item.sample ? ' · Simulation' : '')+'</h3><ul>'+E.metrics.filter(metric=>item.values?.[metric.key] != null)
      .map(metric=>'<li>'+escape(metric.label)+' · '+escape(E.format(item.values[metric.key]))+' '+escape(metric.unit)+'</li>').join('')+'</ul>'+
      (item.note ? '<p>'+escape(item.note)+'</p>' : '')).join('') : '<p>No check-in recorded.</p>')+
    '<h2>Recorded medications</h2>'+(medication.length ? '<ul>'+medication.map(item=>'<li>'+escape(item.name)+' · '+escape(item.amount)+' · '+escape(item.takenAt)+'</li>').join('')+'</ul>' : '<p>No doses recorded.</p>')+
    '<h2>Ham’s review for the medical officer</h2>'+review+
    '<h2>Recent conversation (up to 30 turns)</h2>'+conversationLog([...(recorded.conversations || []),...unfinished].filter(turn => turn.env === recorded.env).slice(-30),false);
}

function displayCareReport() {
  const recorded = careReportState;
  const recipient = recorded.profile.medicalEmail || '';
  const email = recipient ? '<a class="button" data-action="compose-medical-email" href="mailto:'+escape(recipient)+'?subject='+encodeURIComponent('NOMAD medical review · '+recorded.profile.name)+
    '&amp;body='+encodeURIComponent('Crew member: '+recorded.profile.name+'\n'+careReportDate+' · '+E.environments[recorded.env].name+'\n\n'+AI.clearTags(careReport.text)+
      '\n\nPlease attach the saved NOMAD medical review for the recorded concerns and sources.')+'">Prepare email to medical officer</a>' : '';
  openModal('Medical review',careReportMarkup()+'<div class="actions">'+button('Save medical review','save-care-report','primary')+email+
    (!recipient ? button('Set medical contact','profile') : '')+'</div>');
}

async function prepareCareReport() {
  if (busy || summaryPending) return;
  const owner = session;
  careReportState = structuredClone(state);
  careReportDate = E.dateKey();
  const concerns = MissionCare.activeBody(careReportState).map(item => regionLabel(item.side,item.region)+' '+(item.notes || symptoms[item.symptom])).join(' ');
  const reportContext = crewContext('chat',concerns);
  summaryPending = 'medical-report';
  openModal('Preparing medical review','<p role="status">Ham is reviewing the recorded concerns and sources.</p>');
  try {
    if (missionIndexing) await missionIndexing;
    const recent = (careReportState.conversations || []).filter(turn => turn.env === careReportState.env).slice(-12);
    const response = await AI.answer('Prepare a concise review for the crew medical officer. Summarize the reported concerns and source-supported possible explanations with their uncertainty for the officer to assess. '+concerns,recent,library,reportContext);
    if (session !== owner) return;
    careReport = response;
    displayCareReport();
  } catch {
    if (session === owner) {
      careReport = {text:'The recorded observations are ready for the crew medical officer’s assessment. Ham’s document review is unavailable.',sources:[]};
      displayCareReport();
    }
  } finally { if (session === owner) summaryPending = ''; }
}

function saveCareReport() {
  if (!careReport) return;
  const markup = '<!doctype html><html lang="en"><meta charset="utf-8"><title>NOMAD medical review</title><style>body{font:16px Arial;line-height:1.5;max-width:900px;margin:32px auto;padding:20px}h2{margin-top:28px}strong{font-weight:700}.transcript-speaker{margin-right:12px}.protocol-steps li{margin:12px 0}</style>'+careReportMarkup(true)+'</html>';
  globalThis.chrome?.webview?.postMessage('nomad-medical-review-'+careReportDate+'.html\n'+markup);
}

function developerMode() {
  return globalThis.NOMAD_DEVELOPER === true;
}

function problemModal() {
  if (!developerMode()) return;
  openModal('Report an application problem','<form id="problem-report-form">'+field('Problem','<input name="title" maxlength="160" required>')+
    field('Steps to reproduce','<textarea name="steps" maxlength="3000" required></textarea>')+
    field('Expected result','<textarea name="expected" maxlength="1500" required></textarea>')+
    field('Observed result','<textarea name="actual" maxlength="1500" required></textarea>')+
    '<button class="button primary">Save developer report</button></form>');
}

async function submitCareForm(form) {
  if (form.id === 'medical-supply-search') {
    supplyQuery = form.elements.query.value.trim();
    medicalSuppliesModal();
  } else if (form.id === 'medication-form') {
    try {
      const values = Object.fromEntries(new FormData(form));
      const next = MissionCare.recordMedication(state,{...values,id:form.dataset.operation});
      if (save(next)) { $('modal').close(); showRoute('medications'); refreshMedications(); }
    } catch (error) { form.querySelector('.error').textContent = error.message; }
  } else if (form.id === 'clinical-model-form') {
    const owner = session;
    const submit = form.querySelector('button[type="submit"],button');
    submit.disabled = true;
    try {
      await AI.setClinicalModel(form.elements.modelName.value);
      if (session === owner) { render(); notify('Medical model is ready.'); }
    } catch (error) { if (form.isConnected) form.querySelector('.error').textContent = error.message; }
    finally { submit.disabled = false; }
  } else if (form.id === 'problem-report-form' && developerMode()) {
    const report = {id:crypto.randomUUID(),createdAt:new Date().toISOString(),route:view(),environment:state.env,...Object.fromEntries(new FormData(form))};
    if (save({...state,problemReports:[report,...(state.problemReports || [])]})) {
      globalThis.chrome?.webview?.postMessage('nomad-problem-'+report.id+'.html\n<!doctype html><meta charset="utf-8"><title>NOMAD developer report</title><pre>'+escape(JSON.stringify(report,null,2))+'</pre>');
      $('modal').close();
      notify('Developer report saved locally.');
    }
  }
}
