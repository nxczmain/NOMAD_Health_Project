const {readFileSync} = require('node:fs');
const {join} = require('node:path');
const {runInContext,createContext} = require('node:vm');
const {test} = require('node:test');
const assert = require('node:assert/strict');

function load(respond) {
  const calls = [];
  let receive;
  const context = createContext({setTimeout,clearTimeout,chrome:{webview:{
    addEventListener(_event,listener) { receive = listener; },
    postMessage(raw) {
      const {id,operation,body} = JSON.parse(raw.slice('astra-ai\n'.length));
      calls.push(body);
      queueMicrotask(() => {
        const result = respond?.(body,operation);
        receive({data:{channel:'astra-ai',id,result:operation === 'status' ? result : result && JSON.stringify(result),
          error:result ? undefined : 'Offline'}});
      });
    }
  }}});
  for (const name of ['engine.js','ham-language.js','check-in.js','assistant.js','workspace.js']) {
    runInContext(readFileSync(join(__dirname,'..',name),'utf8'),context);
  }
  runInContext(`const E = AstraEngine, CI = NetinCheckIn, AI = AstraAssistant;
    let state;
    const records = () => state.records.filter(item => item.env === state.env).sort((a,b) => b.date.localeCompare(a.date));
    const today = () => records().find(item => item.date === E.dateKey());
    const environment = () => E.environments[state.env];
    const simulation = () => true;
    globalThis.workspace = {physicalContext,mentalContext,healthChatTurns,seed:value=>{state=value;}};
  `,context);
  return {CI:context.NetinCheckIn,AI:context.AstraAssistant,E:context.AstraEngine,workspace:context.workspace,calls};
}

const {CI,AI} = load();
const user = content => ({role:'user',content});
const makeCheckIn = () => {
  const check = CI.create('earth','2026-11-15',null);
  return CI.apply(check,CI.question(check),'no',false);
};
const replyToCheckIn = (check,message) => CI.apply(check,CI.question(check),message,false);
const isSymptomQuestion = ({key}) => ['onset','impact','symptomDetail','symptomContext'].includes(key);
const emptyMood = {moodCheckIns:[],moodScores:[]};
const exampleLibrary = [{title:'Crew notes on wrist pain',id:'wrist',excerpts:[
  {page:1,text:'For wrist pain, tell the crew medical officer when it began and which hand movements make it worse.'}
]}];

test('MedGemma authors both replies while the wording option selects Qwen 4B or 8B', async () => {
  const {AI,calls} = load((body,operation) => operation === 'status' ? {ready:true,deepReady:true} :
    body.format?.properties?.items ? JSON.parse(body.messages[1].content) :
    {paragraph:'Record when the wrist pain started and which movements make it worse.',references:[1]});
  await AI.modelStatus();
  const routine = await AI.answer('What should I record about wrist pain?',[],exampleLibrary,{});
  const deep = await AI.answer('What should I record about wrist pain?',[],exampleLibrary,{},'',true,'',true);
  assert.equal(routine.localModel,'qwen3:4b');
  assert.equal(deep.localModel,'qwen3:8b');
  const explanations = calls.filter(body => body.model === AI.model || body.model === AI.deepModel);
  assert.deepEqual(explanations.map(body => body.model),['qwen3:4b','qwen3:8b']);
  assert.deepEqual(explanations[0].messages,explanations[1].messages);
});

test('a missing item from Qwen 8B retries the wording with 4B and preserves MedGemma citations', async () => {
  const {AI,calls} = load((body,operation) => operation === 'status' ? {ready:true,deepReady:true} :
    body.format?.properties?.items ? operation === 'deep' ? {items:[]} : JSON.parse(body.messages[1].content) :
    {paragraph:'Record when the wrist pain started.',references:[1]});
  await AI.modelStatus();
  const reply = await AI.answer('What should I record about wrist pain?',[],exampleLibrary,{},'',true,'',true);
  assert.equal(reply.localModel,'qwen3:4b');
  assert.equal(reply.sources[0].id,'wrist');
  const explanations = calls.filter(body => body.model === AI.model || body.model === AI.deepModel);
  assert.deepEqual(explanations.map(body => body.model),['qwen3:8b','qwen3:4b']);
  assert.deepEqual(explanations[0].messages,explanations[1].messages);
});

test('an unavailable MedGemma author never delegates medical interpretation to Qwen', async () => {
  const {AI,calls}=load();
  await assert.rejects(()=>AI.answer('What does this reference say about wrist pain?',[],exampleLibrary,{},'',false));
  assert.ok(calls.length);
  assert.ok(calls.every(call=>call.model===AI.clinicalModel()));
});

test('01 Daily check-in · the exact misspelling in the screenshot is understood', () => {
  const check = replyToCheckIn(makeCheckIn(),'Im feeling stalb eand good now');
  assert.equal(check.answers.symptoms,'');
  assert.equal(check.values.impact,'none');
  assert.match(CI.question(check).prompt,/glad you’re feeling well/i);
  assert.equal(CI.questions(check).some(isSymptomQuestion),false);
  const old = {...check,answers:{urgent:'no',symptoms:'Im feeling stalb eand good now',onset:'Skipped'}};
  assert.equal(CI.restore(old).answers.onset,undefined);
});

test('Mateo’s wellness reply clears the old concern and leads to only three routine readings', () => {
  let check = CI.create('moon','2026-11-16',null,null,{
    name:'Mateo',recentConcern:'I felt mild nausea and unsteadiness after surface training.',changedEnvironment:true
  });
  check = replyToCheckIn(check,'No');
  assert.match(CI.question(check).prompt,/nausea and unsteadiness/);
  check = replyToCheckIn(check,'I feel good on both ways');
  assert.equal(check.answers.symptoms,'');
  assert.equal(check.answers.statusUpdate,'I feel good on both ways');
  assert.match(CI.question(check).prompt,/glad you’re feeling well.*last 24 hours/);
  check.next = {key:'sleep',prompt:'How many hours did you sleep in the last 2:48 hours?'};
  assert.doesNotMatch(CI.question(check).prompt,/2:48/);
  for (const [key,answer] of [['sleep','8 h'],['glucose','96 mg/dL'],['mood','8/10'],['note','no']]) {
    assert.equal(CI.question(check).key,key);
    check = replyToCheckIn(check,answer);
  }
  assert.equal(CI.question(check),undefined);
  const recap = CI.recap(check,[]);
  assert.match(recap.text,/You reported feeling well today/);
  assert.match(recap.text,/sleep duration 8 h/);
  assert.match(recap.text,/glucose 96 mg\/dL/);
  assert.doesNotMatch(recap.text,/nausea|unsteadiness|torres|forearm|coordination drill/i);
});

test('keeps symptom follow-ups for new concerns and preserves previously recorded vitals', () => {
  const well = replyToCheckIn(makeCheckIn(),'I feel good physically and emotionally.');
  assert.equal(well.answers.symptoms,'');
  const active = replyToCheckIn(makeCheckIn(),'I feel good on both ways, but I still feel dizzy when I stand.');
  assert.equal(CI.symptomTopic(active),'dizziness');
  assert.ok(CI.questions(active).some(isSymptomQuestion));
  const restored = CI.restore({...well,values:{...well.values,temp:38,pulse:110,pressure:[118,76]},
    answers:{urgent:'no',symptoms:'I feel good on both ways',impact:'mild'},next:{key:'temp',prompt:'What was your temperature?'}});
  assert.deepEqual(Array.from(CI.questions(restored),item=>item.key),['sleep','glucose','mood']);
  const preserved = CI.toEntry(restored);
  assert.equal(preserved.values.temp,38);
  assert.equal(preserved.values.pulse,110);
});

test('check-in uses the selected follow-up key but keeps NOMAD’s authored question', async () => {
  const fake = load(() => ({key:'symptomDetail',covered:[],question:'I am Dr. Lina Torres. What was your pulse?'}));
  const current = replyToCheckIn(makeCheckIn(),'I have pain in my wrist.');
  const plan = await fake.AI.checkInQuestion(CI.questions(current).filter(CI.isAdaptiveQuestion),current,'Earth');
  assert.equal(plan.next.key,'symptomDetail');
  assert.equal(CI.question({...current,next:plan.next}).prompt,CI.symptomQuestions.pain);
});

test('02 Daily check-in · an explicit correction stops the follow-up loop', () => {
  let check = replyToCheckIn(makeCheckIn(),'I feel dizzy.');
  assert.ok(isSymptomQuestion(CI.question(check)));
  check = replyToCheckIn(check,'You asked what makes it better or worse. I JUST TOLD YOU i was feeling better.');
  assert.match(CI.question(check).prompt,/glad you’re feeling better/i);
  assert.equal(CI.questions(check).some(isSymptomQuestion),false);
  assert.equal(CI.toEntry(check).details.some(item=>item.title==='Symptoms'),false);
});

test('03 Daily check-in · feeling better overall can coexist with dizziness', () => {
  const check = replyToCheckIn(makeCheckIn(),'I feel better, but I still feel dizzy when I stand.');
  assert.equal(CI.symptomTopic(check),'dizziness');
  assert.ok(CI.questions(check).some(isSymptomQuestion));
  assert.match(CI.questions(check).find(item=>item.key==='symptomDetail').prompt,/how long/i);
  assert.equal(check.acknowledgment,undefined);
});

test('04 Daily check-in · Spanish improvement and two volunteered readings', () => {
  const check = replyToCheckIn(makeCheckIn(),'Me siento mejor. Dormí 7 horas. Mi pulso es 70 bpm.');
  assert.equal(check.values.sleep,7);
  assert.equal(check.values.pulse,70);
  assert.equal(check.answers.symptoms,'');
  assert.equal(CI.questions(check).some(({key})=>['sleep','pulse'].includes(key)),false);
});

test('05 Daily check-in · a new emergency overrides an improvement', () => {
  const check = replyToCheckIn(makeCheckIn(),'Me siento mejor, pero ahora me falta el aire.');
  assert.equal(CI.urgent(check),'medical');
  assert.equal(CI.questions(check).length,0);
});

test('06 Chat · today’s wrist pain takes priority over an older headache', () => {
  const result = AI.chatIntent('My wrist hurts right now, after lifting a box.',[user('I had a headache yesterday.')]);
  assert.match(result.current,/wrist/);
  assert.equal(result.search,'pain');
  assert.equal(result.prior,'');
});

test('07 Chat · a short update refers to the current physical complaint', () => {
  const previous = 'My shoulder hurts when I move it.';
  const result = AI.chatIntent('It feels worse when I move it now.',[user(previous)]);
  assert.equal(result.current,'It feels worse when I move it now.');
  assert.equal(result.prior,previous);
});

test('08 Chat · a change to a social topic leaves the old symptom behind', () => {
  const result = AI.chatIntent('How can I organize a chess night?', [user('My head hurts.')]);
  assert.equal(result.health,false);
  assert.equal(result.current,'');
});

test('09 Chat · a crewmate coughing blood gets calm, numbered actions', () => {
  const report = 'My crewmate Elena is bleeding and coughing up blood. What do I do?';
  assert.equal(CI.emergencyKind(report),'medical');
  const reply = CI.emergencyReply('medical',report,'mars');
  assert.match(reply.text,/stay as calm as you can/i);
  assert.match(reply.text,/\n1\. Alert the crew medical officer/);
  assert.match(reply.text,/\n2\..*coughing up blood/);
  assert.match(reply.text,/\n3\..*breathing/);
});

test('10 Chat · an unresponsive crewmate gets emergency steps on Earth', () => {
  const report = 'My crewmate won’t wake up, but she is breathing.';
  assert.equal(CI.emergencyKind(report),'unresponsive');
  const reply = CI.emergencyReply('unresponsive',report,'earth');
  assert.match(reply.text,/\n1\. Call local emergency services now/);
  assert.match(reply.text,/\n2\..*won’t wake up/);
  assert.match(reply.text,/\n3\..*checking their breathing/);
});

test('11 Physical · a localized injury gets a short, sourced answer about that injury', async () => {
  const setup = load(()=>({paragraph:'Tell the crew medical officer when your wrist started hurting and what makes it worse.',references:[1]}));
  const report = 'My wrist hurts after lifting a box. What should I report?';
  const result = await setup.AI.answer(report,[],exampleLibrary,{activeEnvironment:'Earth'},'wrist pain',false,'physical');
  assert.equal(result.sources.length,1);
  assert.match(result.text,/wrist/);
  const explanation = setup.calls.find(call => call.model === setup.AI.clinicalModel());
  assert.equal(JSON.parse(explanation.messages[1].content).latestMessage,report);
  assert.match(explanation.messages[0].content,/plain English.*three short sentences/);
});

test('12 Physical · an emotional question belongs in Mental', () => {
  assert.equal(AI.scopeMismatch('physical','I feel depressed today. What can I do?'),'mental');
});

test('13 Physical · a resolved body note and unrelated emotional history are excluded', () => {
  const {workspace,E} = load();
  workspace.seed({env:'earth',profile:{history:'I used to have shoulder pain. I felt anxious for a week.'},
    records:[{env:'earth',date:E.dateKey(),values:{mood:3,pulse:74}},
      {env:'earth',date:'2026-01-01',values:{},details:[{answer:'Shoulder stiffness after lifting.'}]}],
    body:[
      {env:'earth',date:E.dateKey(),side:'front',region:'lshoulder',symptom:'resolved',notes:'Resolved',intensity:0},
      {env:'earth',date:'2026-01-01',side:'front',region:'lshoulder',symptom:'pain',notes:'Old shoulder pain',intensity:4}
    ],journals:[{text:'Unrelated private mood context.'}]});
  const summary = workspace.physicalContext();
  const context = workspace.physicalContext('My shoulder is stiff today.');
  assert.equal(context.activeSymptoms.length,0);
  assert.equal(context.resolvedSymptoms[0].region,'Left shoulder');
  assert.equal(context.previousRecords.length,1);
  assert.doesNotMatch(JSON.stringify(summary),/mood|anxious|private|old shoulder pain/i);
});

test('14 Physical · a named crewmate who cannot breathe triggers emergency steps', () => {
  const report = 'My crewmate Elena can’t breathe.';
  assert.equal(CI.emergencyKind(report),'medical');
  assert.match(CI.emergencyReply('medical',report,'orbit').text,/\n1\. Alert the crew medical officer/);
});

test('15 Mental · a depressed day gets support in plain English', async () => {
  const setup = load(()=>({reply:'I’m sorry today feels heavy. Has it made your usual tasks harder? You could check in with someone you trust on the crew.'}));
  const report = 'I feel depressed today.';
  assert.equal(CI.emergencyKind(report),'');
  assert.equal(AI.chatIntent(report,[]).mental,true);
  assert.match((await setup.AI.mentalSupport(report,[],emptyMood)).text,/heavy.*tasks.*trust/i);
  const overconfident = load(()=>({reply:'You have depression.'}));
  const response = await overconfident.AI.mentalSupport('Does that mean I have depression?',[user(report)],emptyMood);
  assert.doesNotMatch(response.text,/you have depression/i);
  assert.match(response.text,/crew medical officer/i);
});

test('16 Mental · ongoing low mood with difficulty working points to human support', async () => {
  const result = await AI.mentalSupport('I’ve felt low for two weeks and it is hard to focus on work.',[],emptyMood);
  assert.match(result.text,/crew medical officer/i);
  assert.doesNotMatch(result.text,/does .*affect|is it making/i);
});

test('17 Mental · loneliness keeps its context and uses only mood records', async () => {
  const report = 'I feel lonely on the night shift and miss dinner with the crew.';
  const setup = load(()=>({reply:'Missing dinner with your crew sounds lonely. Could you ask one crewmate to share a short break during your next shift?'}));
  const {workspace,E} = setup;
  workspace.seed({env:'earth',records:[{env:'earth',date:E.dateKey(),values:{mood:3,pulse:74,temp:37}}],
    moodLogs:[{env:'earth',date:E.dateKey(),level:2,emotions:'Lonely',cause:'Night shift'}]});
  assert.match((await setup.AI.mentalSupport(report,[],workspace.mentalContext())).text,/dinner.*break/i);
  const sent = setup.calls[0].messages[1].content;
  assert.match(sent,/Night shift/);
  assert.doesNotMatch(sent,/pulse|temp/);
});

test('18 Mental · immediate risk of self-harm gets distinct steps for staying safe', () => {
  const report = 'I feel hopeless and I might hurt myself tonight.';
  assert.equal(CI.emergencyKind(report),'self-harm');
  const reply = CI.emergencyReply('self-harm',report,'mars');
  assert.match(reply.text,/glad you told me.*\n1\. Alert/);
  assert.match(reply.text,/\n2\..*trusted person to stay with you/);
  assert.match(reply.text,/\n3\..*hurt yourself/);
});

test('19 Mental · risk of hurting a crewmate calls for distance and immediate help', () => {
  const report = 'I am going to hurt my crewmate.';
  assert.equal(CI.emergencyKind(report),'violence');
  const reply = CI.emergencyReply('violence',report,'mars');
  assert.match(reply.text,/\n1\. Give the other person space/);
  assert.match(reply.text,/\n2\. Alert the crew medical officer/);
  assert.match(reply.text,/\n3\..*hurt someone/);
});

test('20 Mental · a quoted, explicitly denied intention is not an emergency', async () => {
  const report = 'I feel down today, but I don’t want to hurt myself.';
  const setup = load(()=>({kind:'self-harm',evidence:'hurt myself'}));
  assert.equal(CI.emergencyKind(report),'');
  assert.equal(await setup.AI.assessSafety(report,[]),'');
  assert.equal(AI.scopeMismatch('mental','My wrist hurts after lifting.'),'physical');
});

test('a model response cannot reinterpret a negated or figurative phrase as an emergency', async () => {
  const denied = load(() => ({kind:'self-harm',evidence:'hurt my self'}));
  assert.equal(await denied.AI.assessSafety("I don't want to hurt my self",[]),'');
  const figurative = load(() => ({kind:'medical',evidence:'hurt my self-esteem'}));
  assert.equal(await figurative.AI.assessSafety('I feel like criticism could hurt my self-esteem',[]),'');
  const other = load(() => ({kind:'violence',evidence:'my self'}));
  assert.equal(await other.AI.assessSafety('I want to hurt my self',[]),'self-harm');
  assert.equal(other.calls.length,0);
});
