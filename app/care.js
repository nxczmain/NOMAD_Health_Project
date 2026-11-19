'use strict';

globalThis.MissionCare = (() => {
  let catalog = [];
  const fold = value => (globalThis.HamLanguage?.interpret(value) ?? String(value || '')).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f’']/g,'');
  const key = item => item.env+'|'+item.side+'|'+item.region;

  async function loadCatalog() {
    const response = await fetch('medical-catalog.json',{cache:'no-store'});
    if (!response.ok) throw new Error('The medical reference catalog could not be loaded.');
    const data = await response.json();
    if (!Array.isArray(data.items) || data.items.some(item => !item.id || !item.name || !item.document || !Number.isInteger(item.page))) {
      throw new Error('The medical catalog has invalid entries.');
    }
    catalog = data.items;
    return catalog;
  }

  function supplies(state) {
    const recorded = (state.medicalSupplies || []).filter(item => item.env === state.env);
    const linked = new Set(recorded.map(item => item.catalogId));
    return [...recorded,...catalog.filter(item => !linked.has(item.id) && !recorded.some(record => fold(record.name) === fold(item.name)))
      .map(item => ({...item,id:'catalog:'+item.id,catalogId:item.id,env:state.env,quantity:null,expires:'',location:''}))];
  }

  function reference(item) {
    return catalog.find(entry => entry.id === item.catalogId) || item;
  }

  function findMedication(question) {
    const text = fold(question).replace(/\bibuprofeno\b/g,'ibuprofen');
    const matching = catalog.filter(item => item.route && [item.generic,...(item.name.match(/\(([^)]+)\)/)?.slice(1) || [])]
      .some(name => name && new RegExp('\\b'+fold(name).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b').test(text)));
    return new Set(matching.map(item => fold(item.generic))).size === 1 ? matching[0] : null;
  }

  function routineMedicationReport(message) {
    const text = fold(message).trim();
    const medicine = findMedication(text);
    if (!medicine || !/^(?:i (?:just )?(?:took|have taken)|tome|acabo de tomar)\b/.test(text)) return null;
    const names = [medicine.generic,...(medicine.name.match(/\(([^)]+)\)/)?.slice(1) || [])].map(name=>fold(name).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|');
    const ordinary = new RegExp('^(?:i (?:just )?(?:took|have taken)|tome|acabo de tomar)\\s+(?:(?:some|a|an|one|1)\\s+)?(?:'+names+')(?:\\s+(?:tablet|pill))?[.! ]*$');
    return ordinary.test(text) ? medicine : null;
  }

  function alternatives(state, item) {
    const original = reference(item);
    if (!original.group) return [];
    return supplies(state).filter(entry => entry.id !== item.id && reference(entry).group === original.group &&
      fold(reference(entry).generic || entry.name) !== fold(original.generic || item.name) && entry.quantity > 0 &&
      (!entry.expires || entry.expires >= AstraEngine.dateKey())).slice(0,4);
  }

  const referenceOptions = group => catalog.filter(item => item.group === group && item.route);

  function activeBody(state) {
    const active = new Map();
    const items = (state.body || []).filter(item => item.env === state.env)
      .slice().sort((a,b) => (b.reportedAt || b.date).localeCompare(a.reportedAt || a.date));
    for (const item of items) if (!active.has(key(item))) active.set(key(item),item);
    return [...active.values()].filter(item => item.symptom !== 'resolved');
  }

  function captureBody(state, message, turn, previous = '') {
    const text = fold(message);
    if (!['chat','physical','check'].includes(turn.mode || 'chat') || NetinCheckIn.trainingScenario(message) ||
        /\b(?:what if|if i|my crew ?mate|my friend|mi companer[oa]|mi amig[oa])\b/.test(text) ||
        !/\b(?:i|my|me|tengo|siento|mi|mis)\b/.test(text)) return state.body || [];
    if (/\b(?:yesterday|last week|ayer|semana pasada)\b/.test(text) && !/\b(?:still|now|today|sigo|ahora|hoy)\b/.test(text)) return state.body || [];
    const resolved = /\b(?:resolved|no longer|doesnt hurt|does not hurt|no pain|pain is gone|ya no|resuelto|sin dolor)\b/.test(text);
    const symptom = resolved ? 'resolved' : /\b(?:broke|broken|fractur\w*|rot[oa])\b/.test(text) ? 'injury' :
      /\b(?:tingl\w*|numb\w*|hormigue\w*|entumec\w*)\b/.test(text) ? 'tingling' :
      /\b(?:weak\w*|debil\w*)\b/.test(text) ? 'weakness' :
      /\b(?:stiff\w*|rigid\w*)\b/.test(text) ? 'stiffness' :
      /\b(?:irritat\w*|irrita\w*)\b/.test(text) ? 'irritation' :
      /\b(?:pain|hurt\w*|ache\w*|headaches?|dolor|duele\w*)\b/.test(text) ? 'pain' : '';
    if (!symptom || message.includes('?') && !/\b(?:i (?:have|broke)|my .{0,25}(?:hurts|is broken)|tengo|me duele)\b/.test(text)) return state.body || [];
    const hasAnatomy = /\b(?:arm|brazo|hand|wrist|muneca|mano|shoulder|hombro|head|headache|cabeza|neck|cuello|chest|pecho|back|espalda|abdomen|stomach|leg|pierna|foot|feet|pie|knee|rodilla)s?\b/.test(text);
    const location = hasAnatomy ? text : text+' '+fold(previous);
    const left = /\b(?:left|izquierd\w*)\b/.test(location);
    const right = /\b(?:right|derech\w*)\b/.test(location);
    const both = /\b(?:both|amb[oa]s|los dos|las dos)\b/.test(location);
    const anatomy = [
      [/\b(?:shoulder|hombro)s?\b/,'shoulder'],[/\b(?:wrist|hand|finger|muneca|mano|dedo)s?\b/,'hand'],
      [/\b(?:arm|brazo)s?\b/,'arm'],[/\b(?:ankle|foot|feet|tobillo|pie)s?\b/,'foot'],
      [/\b(?:leg|knee|pierna|rodilla)s?\b/,'leg']
    ].find(([pattern]) => pattern.test(location));
    let regions = [];
    if (anatomy && (left || right || both)) {
      if (left || both) regions.push('l'+anatomy[1]);
      if (right || both) regions.push('r'+anatomy[1]);
    } else if (/\b(?:head|headaches?|cabeza)\b/.test(location)) regions = ['head'];
    else if (/\b(?:neck|cuello)\b/.test(location)) regions = ['neck'];
    else if (/\b(?:chest|pecho|upper back|espalda alta)\b/.test(location)) regions = ['torso'];
    else if (/\b(?:abdomen|stomach|estomago|lower back|espalda baja)\b/.test(location)) regions = ['abdomen'];
    if (!regions.length) return state.body || [];
    const side = /\b(?:back|espalda)\b/.test(location) ? 'back' : 'front';
    const date = turn.date || AstraEngine.dateKey();
    const score = /\b(10|[0-9])\s*\/\s*10\b/.exec(text);
    const current = activeBody(state);
    const entries = regions.map(region => {
      const prior = current.find(item => item.region === region && item.side === side);
      return {id:crypto.randomUUID(),date,env:state.env,side,region,symptom,
        intensity:resolved ? 0 : score ? Number(score[1]) : prior?.intensity ?? null,
        notes:message.trim(),origin:'chat',sourceTurn:turn.id,reportedAt:new Date().toISOString()};
    });
    if (entries.some(entry => (state.body || []).some(item => item.sourceTurn && item.sourceTurn === entry.sourceTurn && key(item) === key(entry)))) return state.body || [];
    return [...entries,...(state.body || [])];
  }

  function bodyFollowUp(state, message, turn, priorReply) {
    const pending = priorReply?.bodyFollowUp;
    const record = pending && (state.body || []).find(item => item.id === pending.id && item.env === state.env && item.symptom !== 'resolved');
    if (!record) return null;
    const text = fold(message).trim();
    if (/^(?:what do you mean|what does that mean|can you explain|que quieres decir|que significa)/.test(text)) {
      return {body:state.body,text:pending.field === 'intensity' ? 'Use 0 for no pain and 10 for the strongest pain you can imagine. What number fits now?' : 'Tell me when you first noticed this concern, for example this shift or yesterday.',bodyFollowUp:pending};
    }
    const score = /^(?:(?:the )?(?:pain|intensity) is )?(10|[0-9])(?:\s*\/\s*10| out of 10)?[.! ]*$/.exec(text);
    if (pending.field === 'intensity' && !score) return null;
    if (pending.field === 'onset' && !/^(?:(?:it started|i first noticed it|empezo) )?(?:(?:about|around|roughly|hace|desde) )?(?:(?:a|an|one|two|three|\d+) (?:minutes?|hours?|days?|weeks?) ago|\d+ (?:minutos?|horas?|dias?|semanas?)|this (?:shift|morning|afternoon|evening)|today|yesterday|last (?:night|week)|just now|hoy|ayer|ahora)[.! ]*$/.test(text)) return null;
    const updated = {...record,reportedAt:new Date().toISOString(),sourceTurns:[...(record.sourceTurns || [record.sourceTurn]).filter(Boolean),turn.id]};
    if (pending.field === 'intensity') updated.intensity = Number(score[1]);
    else updated.onset = message.trim().slice(0,500);
    const body = (state.body || []).map(item => item.id === record.id ? updated : item);
    const timingKnown = record.onset || /\b(?:just|today|yesterday|since|hours?|minutes?|days?|hoy|ayer|desde|hace)\b/i.test(record.notes || '');
    return {body,text:pending.field === 'intensity' && !timingKnown ? 'I saved that intensity. When did this concern first start?' : 'I updated the concern in your body map.',
      ...(pending.field === 'intensity' && !timingKnown ? {bodyFollowUp:{id:record.id,field:'onset'}} : {})};
  }

  function bodyQuestion(state, message, turn) {
    const record = activeBody(state).find(item => item.sourceTurn === turn.id && item.intensity == null);
    if (!record || message.includes('?') || /\b(?:what|how|why|can i|should i|que hago|como)\b/i.test(message)) return null;
    return {text:'I saved the concern in your body map. On a scale from 0 to 10, how strong is it now?',bodyFollowUp:{id:record.id,field:'intensity'}};
  }

  function recordMedication(state, values, now = new Date()) {
    const id = values.id;
    if (!id || (state.medications || []).some(item => item.id === id)) return state;
    const name = String(values.name || '').trim();
    const amount = String(values.amount || '').trim();
    const taken = new Date(values.takenAt);
    if (!name || !amount || !Number.isFinite(taken.getTime()) || taken.getTime() > now.getTime()+60000) throw new Error('Enter the medication, amount and the time it was taken.');
    const duration = values.durationHours === '' || values.durationHours == null ? null : Number(values.durationHours);
    const basis = String(values.estimateSource || '').trim();
    if (duration != null && (!Number.isFinite(duration) || duration <= 0 || duration > 8760 || !basis)) {
      throw new Error('Enter a positive estimated duration and its medical reference or officer instruction.');
    }
    const used = values.unitsUsed === '' || values.unitsUsed == null ? 0 : Number(values.unitsUsed);
    if (!Number.isFinite(used) || used < 0) throw new Error('Enter a valid quantity used from stock.');
    const allSupplies = supplies(state);
    const item = allSupplies.find(entry => entry.id === values.supplyId);
    if (used && (!item || !Number.isFinite(item.quantity))) throw new Error('Confirm the supply’s stock before recording consumption.');
    if (used && (item.quantity < used || item.expires && item.expires < AstraEngine.dateKey())) throw new Error('The selected supply is expired or has insufficient stock.');
    const medicalSupplies = used ? [...(state.medicalSupplies || []).filter(entry => entry.id !== item.id),{...item,quantity:item.quantity-used}] : state.medicalSupplies;
    const entry = {id,env:state.env,name,amount,takenAt:taken.toISOString(),
      recordedAt:now.toISOString(),supplyId:item?.id,unitsUsed:used,estimateSource:basis,
      expectedUntil:duration == null ? null : new Date(taken.getTime()+duration*3600000).toISOString(),notes:String(values.notes || '').trim()};
    return {...state,medicalSupplies,medications:[entry,...(state.medications || [])]};
  }

  function medicationTime(item, now = Date.now()) {
    if (!item.expectedUntil) return 'Effect interval not recorded';
    const remaining = Date.parse(item.expectedUntil)-now;
    if (remaining <= 0) return 'Estimated interval ended';
    const minutes = Math.ceil(remaining/60000);
    return 'Estimated interval · '+(minutes >= 60 ? Math.floor(minutes/60)+' h '+minutes%60+' min' : minutes+' min')+' remaining';
  }

  function dueMedications(state, now = Date.now()) {
    const notified = new Set(state.medicationNotices || []);
    return (state.medications || []).filter(item => item.env === state.env && item.expectedUntil &&
      Date.parse(item.expectedUntil) <= now && !notified.has(item.id));
  }

  return {loadCatalog,supplies,reference,findMedication,routineMedicationReport,referenceOptions,alternatives,activeBody,captureBody,bodyFollowUp,bodyQuestion,recordMedication,medicationTime,dueMedications};
})();
