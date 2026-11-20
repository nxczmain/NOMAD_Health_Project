const {readFileSync} = require('node:fs');
const {join} = require('node:path');
const {createContext,runInContext} = require('node:vm');
const {test} = require('node:test');
const assert = require('node:assert/strict');

const app = readFileSync(join(__dirname,'..','app.js'),'utf8');
const user = content => ({role:'user',content});
const library = [{id:'first-aid',title:'Unresponsive person',excerpts:[{
  text:'Call for help. Check whether the person is breathing normally. If breathing is absent or there is only gasping, begin CPR and use an AED as soon as available. Follow your training.',
  start:0,end:210,page:null
}]}];
const sequence = {
  paragraph:'[[serio]] Practise this sequence in the drill.',references:[],steps:[
    {text:'[[serio]] Simulate calling for help.',references:[1],evidence:'Call for help.'},
    {text:'[[serio]] Check whether the person is breathing normally.',references:[1],evidence:'Check whether the person is breathing normally.'},
    {text:'[[serio]] If breathing is absent or there is only gasping, practise CPR and AED use according to your training.',references:[1],
      evidence:'If breathing is absent or there is only gasping, begin CPR and use an AED as soon as available.'}
  ]
};

function load(reply = sequence, accepted, rewrite, rewriteReview = []) {
  const calls = [];
  let receive;
  const context = createContext({setTimeout,clearTimeout,chrome:{webview:{
    addEventListener(_type,listener) { receive = listener; },
    postMessage(raw) {
      const {id,body} = JSON.parse(raw.slice('astra-ai\n'.length));
      calls.push(body);
      const proposed = body.format?.properties?.reviewed ? JSON.parse(body.messages[1].content).steps : [];
      const data = JSON.parse(body.messages[1].content);
      const result = body.format?.properties?.items ? (rewrite ? rewrite(data.items) : data) :
        body.format?.properties?.accepted ? {accepted:rewriteReview} :
        body.format?.properties?.route ? {
        route:'medical',responseMode:'procedure',search:'',
        report:data.recent.filter(turn=>turn.role === 'user').at(-1)?.content || data.latest
      } : body.format?.properties?.reviewed ?
        {reviewed:proposed.filter(step=>!accepted || accepted.includes(step.index)).map(({index,text})=>({index,text}))} : reply;
      queueMicrotask(() => receive({data:{channel:'astra-ai',id,result:JSON.stringify(result)}}));
    }
  }}});
  for (const name of ['engine.js','ham-language.js','check-in.js','assistant.js']) {
    runInContext(readFileSync(join(__dirname,'..',name),'utf8'),context);
  }
  return {context,calls,AI:context.AstraAssistant,CI:context.NetinCheckIn};
}

function appFunction(name) {
  const pattern = new RegExp('^(?:async )?function '+name+'\\(', 'm');
  const start = app.search(pattern);
  const following = /\n(?:async )?function /g;
  following.lastIndex = start + 1;
  const end = following.exec(app)?.index ?? app.length;
  assert.ok(start >= 0,name);
  return app.slice(start,end);
}

test('recognizes the screenshot drill clarification and preserves real danger overrides', () => {
  const {CI,AI} = load();
  const history = [user('My crewmate is unresponsive and not breathing normally. What should I do?')];
  for (const message of ["its just a drill","it's just a drill",'It is only a simulation','Es solo un simulacro']) {
    assert.equal(CI.trainingScenario(message),true,message);
    assert.equal(AI.chatIntent(message,history).health,true,message);
    assert.equal(AI.chatIntent(message,history).current,'',message);
  }
  assert.equal(CI.emergencyKind('This is a drill. But right now he cannot breathe.'),'medical');
  assert.equal(AI.chatIntent('How can I organize a chess night?',history).health,false);
  assert.equal(AI.chatIntent('This is a drill.',[user('We are practising docking manoeuvres.')]).health,false);
});

test('the reported heart attack in the screenshot is current, medical and procedural', async () => {
  const message='A crewmate is having a heart attack, what is the procedure that i should do. He is floating';
  const {CI,AI,calls}=load();
  assert.equal(CI.emergencyKind(message),'medical');
  assert.equal(CI.emergencyKind('In this drill, '+message),'');
  assert.equal(CI.emergencyKind('What if a crewmate is having a heart attack?'),'');
  assert.equal(CI.emergencyKind('My crewmate is not having a heart attack.'),'');
  assert.equal(AI.chatIntent(message,[]).procedure,true);
  const interpreted=await AI.interpretMessage(message,[]);
  assert.equal(interpreted.route,'medical');
  assert.equal(interpreted.responseMode,'procedure');
  assert.equal(calls[0].model,AI.clinicalModel());
});

function spaceflightGuide(title) {
  const relative = 'First Aid/Spaceflight Emergencies/'+title+'.md';
  const markdown = readFileSync(join(__dirname,'..','..','Investigation (.md)',relative),'utf8');
  return {id:relative,relative,title,markdown,excerpts:[{text:markdown.replace(/\s+/g,' ')}]};
}

test('orbital CPR applies stable support before compressions and restraint before defibrillation', async () => {
  const {AI,CI}=load();
  const result=await AI.answer('What is the CPR procedure?',[],[spaceflightGuide('Microgravity CPR')],{activeEnvironment:'Earth orbit'});
  assert.equal(result.steps.length,9);
  assert.match(result.steps[0].phase,/^Phase 1/);
  assert.match(result.steps[1].text,/stable support/);
  assert.match(result.steps[2].text,/100–120.*Do not delay compressions/);
  assert.match(result.steps[4].phase,/^Phase 2/);
  assert.match(result.steps[4].text,/restraint surface before applying the defibrillator/);
  assert.match(result.steps[7].text,/2 breaths for every 30 compressions/);
  assert.match(result.steps[8].text,/every 2 minutes/);
  assert.equal(result.sources[0].title,'Microgravity CPR');
  assert.match(CI.emergencyReply('unresponsive','not breathing normally','orbit').text,/establish stable support/);
  assert.doesNotMatch(CI.emergencyReply('unresponsive','not breathing normally','moon').text,/establish stable support/);
});

test('MedGemma receives gravity and condition-specific references in orbit and on the Moon', async () => {
  const docs=['Cabin atmosphere and EVA emergencies','Anaphylaxis and medication emergencies',
    'Suspected cardiac emergency in spaceflight'].map(spaceflightGuide);
  docs.push({id:'distractor',title:'Unrelated first aid',excerpts:[{text:'Steps for cabin pressure, heart attack and anaphylaxis.'}]});
  for (const [question,stage,gravity,title] of [
    ['What is the procedure for cabin pressure loss?', 'Earth orbit','microgravity','Cabin atmosphere and EVA emergencies'],
    ['What are the procedure steps for anaphylaxis?', 'Lunar surface','partial gravity','Anaphylaxis and medication emergencies'],
    ['What is the procedure for a heart attack? He is floating.', 'Earth','microgravity','Suspected cardiac emergency in spaceflight']
  ]) {
    const {AI,calls}=load({paragraph:'',references:[],steps:[]});
    await AI.interpretMessage(question,[],stage);
    await AI.answer(question,[],docs,{activeEnvironment:stage},'',false);
    const draft = calls.find(call=>call.format?.properties?.steps);
    assert.equal(JSON.parse(calls[0].messages[1].content).mission.gravity,gravity);
    const input = JSON.parse(draft.messages[1].content);
    assert.equal(input.mission.gravity,gravity);
    assert.equal(input.excerpts[0].title,title);
    assert.equal(draft.model,AI.clinicalModel());
  }
  const {AI}=load();
  assert.equal(AI.missionContext('What are the CPR steps on Earth?','Earth orbit').gravity,'Earth gravity');
  assert.equal(AI.missionContext('What are the CPR steps on Mars?','Earth orbit').gravity,'partial gravity');
});

test('the live heart-attack wording opens both CPR phases immediately and keeps the arrest condition', async () => {
  const {context,calls}=load();
  context.testLibrary=[spaceflightGuide('Microgravity CPR')];
  context.crypto={randomUUID:()=> 'test-incident'};
  runInContext(`
    const E=AstraEngine, AI=AstraAssistant, CI=NetinCheckIn;
    const library=testLibrary, session={}, chatMode='companion';
    let state={env:'orbit',conversations:[],dismissedAlerts:[]}, chat=[], busy=false, hamChatWork='', summaryPending=false;
    const stopSpeech=()=>{},syncHamPresence=()=>{},showRoute=()=>{},addEmergencyHandoff=()=>{};
    const addClinicalProcedure=()=>{throw Error('Unexpected second procedure request');};
    const datedTurns=turns=>turns.map(turn=>({date:E.dateKey(),env:'orbit',...turn}));
    const save=next=>{state=next;return true;};
    const activeEmergency=()=>null, view=()=> 'home', today=()=>undefined, flow=()=>({});
    const environment=()=>E.environments.orbit;
    const escape=value=>String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;');
    const documentTarget=source=>'<a>'+escape(source.title)+'</a>';
  `,context);
  for (const name of ['sendMessage','sourcesView','summaryParagraph','paragraphReply']) {
    runInContext(appFunction(name),context);
  }
  await runInContext("sendMessage('A crewmate is having a heart attack, what is the procedure that I should do. He is floating')",context);
  const reply=runInContext('state.conversations.at(-1)',context);
  assert.equal(reply.urgent,true);
  assert.equal(reply.steps.length,9);
  assert.match(reply.introduction,/Start CPR only if the crewmate is unresponsive/);
  const html=runInContext('paragraphReply(state.conversations.at(-1))',context);
  assert.equal((html.match(/class="protocol-steps"/g)||[]).length,2);
  assert.match(html,/<strong>Establish support while floating\.<\/strong>/);
  assert.equal(calls.length,0);
});

test('Qwen cannot remove steps or add actions to MedGemma procedure drafts', async () => {
  for (const rewrite of [
    items => ({items:items.slice(0,1)}),
    items => ({items:items.map(item => ({...item,text:item.text ? item.text+' Wait until tomorrow.' : ''}))})
  ]) {
    const {AI,calls}=load(sequence,undefined,rewrite);
    const result=await AI.answer('What steps does the first aid document describe for CPR?',[],library,{},'',false);
    assert.equal(result.steps.length,3);
    assert.doesNotMatch(result.text,/tomorrow/);
    const qwen=calls.filter(call=>call.model===AI.model);
    assert.ok(qwen.length);
    for(const call of qwen) assert.deepEqual(Object.keys(JSON.parse(call.messages[1].content)),['items']);
    assert.equal(calls[0].model,AI.clinicalModel());
    assert.deepEqual(Array.from(result.steps,step=>step.references[0]),[1,1,1]);
  }
});

test('heart-attack retrieval excludes an unrelated NIMH passage despite generic matching words', async () => {
  const evidence='Call the crew medical officer for assistance.';
  const {AI,calls}=load({paragraph:'',references:[],steps:[{text:'Call the crew medical officer.',references:[1],evidence}]});
  const documents=[
    {id:'nimh',title:'autism-spectrum-disorder',excerpts:[{heading:'Having an unusual tone of voice',text:'Having an unusual tone of voice and trouble understanding other people.'}]},
    {id:'cardiac',title:'Acute Coronary Syndrome',excerpts:[{heading:'Treatment scope',text:evidence}]}
  ];
  const result=await AI.answer('A crewmate is having a heart attack. What is the procedure?',[],documents,{},'',false);
  const input=JSON.parse(calls[0].messages[1].content);
  assert.ok(input.excerpts.every(passage=>passage.title==='Acute Coronary Syndrome'));
  assert.equal(result.sources[0].id,'cardiac');
});

test('a quote about an unrelated observation cannot support a breathing instruction', async () => {
  const evidence='Having an unusual tone of voice.';
  const {AI,calls}=load({paragraph:'',references:[],steps:[{text:'Check breathing immediately.',references:[1],evidence}]});
  const result=await AI.answer('What CPR steps does this reference support?',[],[{id:'unrelated',title:'Reference',excerpts:[{text:evidence}]}],{},'',false);
  assert.equal(result.sources.length,0);
  assert.ok(result.steps.every(step=>step.references.length===0));
  assert.ok(calls.every(call=>call.model===AI.clinicalModel()));
});

test('historical clinical equipment actions keep the officer role and blank form fields are removed', async () => {
  const draft={paragraph:'',references:[],steps:[
    {text:'Administer O2 with Russian Gas Mask.',references:[1],evidence:'Administer O2 with Russian Gas Mask.'},
    {text:'Perform chest examination.',references:[1],evidence:'Perform chest examination.'},
    {text:'√Heart Sounds with Stethoscope Regular ____________',references:[1],evidence:'√Heart Sounds with Stethoscope Regular ____________'},
    {text:'Contact Surgeon.',references:[1],evidence:'Contact Surgeon.'}
  ]};
  const {AI}=load(draft);
  const result=await AI.answer('What steps does this chest pain reference describe?',[],[{
    id:'iss',title:'ISS-Medical-Checklist-2001',status:'Historical ISS checklist, 2001',
    excerpts:[{text:draft.steps.map(step=>step.evidence).join(' ')}]
  }],{},'',false);
  assert.equal(result.steps.length,3);
  assert.match(result.steps[0].text,/^Ask the crew medical officer/);
  assert.match(result.steps[1].text,/^Ask the crew medical officer/);
  assert.doesNotMatch(result.text,/____|√/);
});

test('an accepted simplification still cannot remove the medical officer role', async () => {
  const evidence='Oxygen support is arranged by the crew medical officer.';
  const {AI}=load({paragraph:'',references:[],steps:[{
    text:'Ask the crew medical officer to arrange oxygen support.',references:[1],evidence
  }]},undefined,items=>({items:items.map(item=>({...item,text:item.text.replace('crew medical officer','crew medical:')}))}),[0,1]);
  const result=await AI.answer('What steps does this medical oxygen support procedure describe?',[],[{
    id:'oxygen',title:'Oxygen support',excerpts:[{text:evidence}]
  }],{},'',false);
  assert.match(result.steps[0].text,/crew medical officer/);
  assert.doesNotMatch(result.text,/medical:/);
});

test('returns numbered actions, preserves their conditions and sends the scenario without personal logs', async () => {
  const {AI,calls} = load();
  const history = [user('What steps does the first aid document describe for CPR?')];
  const result = await AI.answer('its just a drill',history,library,{activeSymptoms:['unrelated wrist pain']},'',false);
  assert.equal(result.steps.length,3);
  assert.match(result.text,/\n1\. .*\n2\. .*\n3\. /);
  assert.match(result.steps[2].text,/If breathing is absent or there is only gasping/);
  assert.equal(result.sources[0].id,'first-aid');
  const explanation = calls.find(call => call.format?.properties?.steps);
  const payload = JSON.parse(explanation.messages[1].content);
  assert.equal(payload.scenario.report,history[0].content);
  assert.equal(payload.scenario.drill,true);
  assert.equal(payload.crewContext,undefined);
  assert.deepEqual(payload.recentCrewMessages,[]);
  assert.ok(explanation.format.properties.steps);
});

test('physical health also uses steps when the astronaut explicitly asks for a sequence', async () => {
  const {AI} = load();
  const result = await AI.answer('In this drill, what steps should I take for an unresponsive crewmate?',[],library,{},'',false,'physical');
  assert.ok(result.steps.length >= 3);
});

test('unsupported proposed actions are removed before the checklist is returned', async () => {
  const {AI} = load(sequence,[0,1]);
  const result = await AI.answer('What steps does the first aid document describe for CPR?',[],library,{},'',false);
  assert.equal(result.steps.length,2);
  assert.doesNotMatch(result.text,/AED use/);
});

test('a cited action cannot gain an unsupported waiting condition or duration', async () => {
  const reply = {...sequence,steps:[
    {text:'Call for help if pain persists.',references:[1],evidence:'Call for help.'},
    {text:'Monitor breathing for 30 minutes.',references:[1],evidence:'Check whether the person is breathing normally.'},
    sequence.steps[1]
  ]};
  const {AI} = load(reply);
  const result = await AI.answer('What steps does the first aid document describe for CPR?',[],library,{},'',false);
  assert.equal(result.steps.length,1);
  assert.doesNotMatch(result.text,/pain persists|30 minutes/);
});

test('clinical treatments retain the medical officer role required by the source', async () => {
  const evidence = 'Oxygen support is arranged by the crew medical officer.';
  const {AI} = load({paragraph:'',references:[],steps:[{text:'Provide oxygen support.',references:[1],evidence}]});
  const source = [{id:'respiratory',title:'Respiratory failure',
    markdown:'This version presumes physician level knowledge. '+evidence,excerpts:[{text:evidence}]}];
  const result = await AI.answer('Training scenario. What steps apply to respiratory failure?',[],source,{},'',false);
  assert.match(result.steps[0].text,/^Ask the crew medical officer to provide oxygen support/);
  const second = load({paragraph:'',references:[],steps:[{text:'Ensure oxygen support is provided.',references:[1],evidence}]});
  const updated = await second.AI.answer('Training scenario. What steps apply to respiratory failure?',[],source,{},'',false);
  assert.match(updated.steps[0].text,/^Ask the crew medical officer to ensure oxygen support/);
});

test('a medication action is directed to the medical officer even in a general first-aid source', async () => {
  const evidence = 'Use NSAIDs for pain relief.';
  const {AI} = load({paragraph:'',references:[],steps:[{text:evidence,references:[1],evidence}]});
  const source = [{id:'arm',title:'Arm fracture',excerpts:[{text:evidence}]}];
  const result = await AI.answer('I went in an EVA and broke my arm, what should I do?',[],source,{},'',false);
  assert.match(result.steps[0].text,/^Ask the crew medical officer to use NSAIDs/);
});

test('historical CPR targets and pulse-check schedules cannot become present-day instructions',async()=>{
  const first='Check breathing.';
  const breath='Deliver two slow breaths.';
  const pulse='Check for pulse after four cycles.';
  const {AI}=load({paragraph:'',references:[],steps:[first,breath,pulse].map(text=>({text,references:[1],evidence:text}))});
  const source=[{id:'old-cpr',title:'CPR',status:'Historical ISS checklist, 2001',excerpts:[{text:'CPR. '+[first,breath,pulse].join(' ')}]}];
  const result=await AI.answer('What CPR steps does the historical document describe?',[],source,{},'',false);
  assert.equal(result.steps.length,1);
  assert.equal(result.steps[0].text,first);
  assert.match(result.introduction,/Historical reference/);
  assert.doesNotMatch(result.text,/two slow|four cycles/);
});

test('rejects actions with missing or unknown references and an empty sequence', async () => {
  for (const steps of [[],[{text:'Call for help.',references:[]}],[{text:'Call for help.',references:[99]}],
    [{text:'Wait for pain to stop.',references:[1],evidence:'Wait for pain to stop.'}],
    [{text:'Step 1: ... (original text)',references:[1],evidence:'Call for help.'}]]) {
    const {AI} = load({...sequence,steps});
    const result = await AI.answer('What steps should I take for an unresponsive crewmate?',[],library,{},'',false);
    assert.equal(result.steps.length,2);
    assert.match(result.text,/could not verify the steps/);
    assert.ok(result.steps.every(step=>step.references.length === 0));
    assert.equal(result.related[0].id,'first-aid');
  }
});

test('informational answers keep the existing paragraph format', async () => {
  const {AI,calls} = load({paragraph:'The reference discusses unresponsiveness.',references:[1]});
  const result = await AI.answer('What does unresponsive mean?',[],library,{},'',false);
  assert.equal(result.text,'The reference discusses unresponsiveness.');
  assert.equal(result.steps,undefined);
  assert.equal(calls[0].format.properties.steps,undefined);
});

test('the normal chat entry point saves steps and renders them after reload', async () => {
  const {context} = load();
  context.testLibrary = library;
  runInContext(`
    const E = AstraEngine, AI = AstraAssistant, CI = NetinCheckIn;
    let state = {env:'orbit',conversations:[],dismissedAlerts:[]};
    const session = {};
    let busy = false, summaryPending = false, hamChatWork = '', model = '', missionIndexing;
    let chat = [{role:'user',date:E.dateKey(),content:'My crewmate is unresponsive and not breathing normally. What should I do?'}];
    const library = testLibrary, chatMode = 'companion';
    const stopSpeech = () => {};
    const datedTurns = turns => turns.map(turn => ({date:E.dateKey(),env:'orbit',...turn}));
    const save = next => { state = next; return true; };
    const activeEmergency = () => null;
    const view = () => 'home';
    const today = () => undefined;
    const crewContext = () => ({activeEnvironment:'Earth orbit'});
    const healthChatTurns = () => [{role:'user',date:E.dateKey(),content:'My crewmate is unresponsive and not breathing normally. What should I do?'}];
    const physicalContext = () => ({activeEnvironment:'Earth orbit'});
    const healthTab = 'physical', physicalTab = 'body';
    const environment = () => ({name:'Earth orbit'});
    const syncHamPresence = () => {};
    const escape = value => String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const documentTarget = source => '<a>'+escape(source.title)+'</a>';
  `,context);
  for (const name of ['sendMessage','sourcesView','summaryParagraph','paragraphReply']) {
    runInContext(appFunction(name),context);
  }
  await runInContext("sendMessage('its just a drill')",context);
  const saved = JSON.parse(runInContext('JSON.stringify(state.conversations.at(-1))',context));
  assert.equal(saved.steps.length,5);
  assert.match(saved.content,/\n1\. /);
  assert.equal(saved.urgent,undefined);
  await runInContext("sendMessage('its just a drill','physical')",context);
  assert.equal(runInContext('state.conversations.at(-1).steps.length',context),5);
  context.savedReply = JSON.parse(JSON.stringify(saved));
  const html = runInContext('paragraphReply(savedReply)',context);
  assert.match(html,/<ol class="protocol-steps">/);
  assert.equal((html.match(/<li>/g) || []).length,5);
  assert.equal((html.match(/Practise these steps/g) || []).length,1);
  assert.doesNotMatch(html,/\[\[serio\]\]/);
  assert.match(html,/Sources \(1\)/);
  context.savedReply.steps[0].text = '<script>alert(1)</script>';
  assert.doesNotMatch(runInContext('paragraphReply(savedReply)',context),/<script>/);
  assert.equal(runInContext("paragraphReply({content:'An older saved reply.'})",context),'<p>An older saved reply.</p>');
});
