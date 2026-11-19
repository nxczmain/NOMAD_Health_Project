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

function load(reply = sequence, accepted) {
  const calls = [];
  let receive;
  const context = createContext({setTimeout,clearTimeout,chrome:{webview:{
    addEventListener(_type,listener) { receive = listener; },
    postMessage(raw) {
      const {id,body} = JSON.parse(raw.slice('astra-ai\n'.length));
      calls.push(body);
      const proposed = body.format?.properties?.reviewed ? JSON.parse(body.messages[1].content).steps : [];
      const result = body.format?.properties?.reviewed ?
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
