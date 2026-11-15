const {readFileSync} = require('node:fs');
const {join} = require('node:path');
const {runInContext,createContext} = require('node:vm');
const {test} = require('node:test');
const assert = require('node:assert/strict');

const context = createContext({});
for (const name of ['engine.js','ham-language.js','check-in.js','assistant.js']) {
  runInContext(readFileSync(join(__dirname,'..',name),'utf8'),context);
}
const {NetinCheckIn:CI} = context;

test('identifies danger even when another symptom improves',() => {
  assert.equal(CI.emergencyKind('i feel better, but i still wanna kill my crewmate'),'violence');
  assert.equal(CI.emergencyKind('restraining myself from killing her'),'violence');
  assert.equal(CI.emergencyKind('Me siento mejor, pero voy a matar a mi compañero'),'violence');
});

test('distinguishes emergency reports from ordinary conversation',() => {
  for (const input of ['I feel much better','I want to kill time','I want to kill the process',
    'My partner is not responding to my messages','I do not want to hurt anyone',
    'What should I do if my crewmate is unresponsive but breathing?']) {
    assert.equal(CI.emergencyKind(input),'',input);
  }
});

test('routes other kinds of health emergency',() => {
  const inputs = [
    ['My crewmate is not responding but breathing','unresponsive'],
    ['I plan to hurt myself','self-harm'],
    ['I just overdosed','medical'],
    ['He cannot breathe','medical'],
    ['Se me cierra la garganta','medical']
  ];
  for (const [input,expected] of inputs) assert.equal(CI.emergencyKind(input),expected);
});

test('a misspelled reflexive still identifies the speaker and keeps the original quote',async () => {
  const AI = context.AstraAssistant;
  for (const report of ['I want to hurt my self','I want to hutr my slef',"I'm afraid I might harm myslef",
    'I might hurt msyelf tonight','I’m afraid I might hurt mysel']) {
    assert.equal(CI.emergencyKind(report),'self-harm',report);
    assert.equal(await AI.assessSafety(report,[]),'self-harm',report);
    assert.equal(await AI.emergencyHandoff(report,'self-harm'),report);
    assert.match(CI.emergencyReply('self-harm',report,'earth').text,/Tell responders you (?:might|may) hurt yourself/);
  }
  for (const report of ['I want to hurt my self-esteem','I want to improve my self esteem',
    "I don't want to hurt my self", 'Earlier I said I want to hurt my self. I am safe now.',
    'For a spelling exercise, is "I want to hurt my self" correct?',
    'Is "I want to hurt my self" grammatically correct?',
    'I am not saying I want to hurt my self.']) {
    assert.equal(CI.emergencyKind(report),'',report);
  }
});

test('distinguishes harm to the speaker, to another person and to both',() => {
  assert.equal(CI.emergencyKind('I am stopping my self from hutring him'),'violence');
  assert.equal(CI.emergencyKind('I want to hurt my crewmate'),'violence');
  assert.equal(CI.emergencyKind('I want to hurt my self and my crewmate'),'self-and-others');
  assert.equal(CI.emergencyKind('This is a drill. But right now I do want to hurt my self.'),'self-harm');
  assert.match(CI.emergencyReply('self-and-others','','mars').text,/you might hurt yourself and someone else/);
  assert.equal(context.AstraAssistant.chatIntent('I feel dizy today',[]).search,'dizziness');
});

test('stops an intake before asking for readings or parsing a measurement answer',() => {
  let check = CI.create('earth','2026-01-01',null);
  check = CI.apply(check,CI.question(check),'no',false);
  check = CI.apply(check,CI.question(check),'Feeling better, but I still wanna kill him',false);
  assert.equal(CI.urgent(check),'violence');
  assert.equal(CI.questions(check).length,0);

  const reading = {key:'temp',metric:context.AstraEngine.metricByKey('temp'),prompt:'What is your temperature?'};
  const fromNumericField = CI.apply(CI.create('earth','2026-01-01',null),reading,'I cannot breathe',false);
  assert.equal(CI.urgent(fromNumericField),'medical');
  assert.equal(fromNumericField.values.temp,undefined);
});

test('retains the current emergency category for a short confirmation',async () => {
  const history = [{role:'assistant',content:'Get help now.',urgentKind:'violence'}];
  assert.equal(await context.AstraAssistant.assessSafety('Yes, I’m afraid I will.',history),'violence');
});

test('classifies an active report of coughing blood as medical', () => {
  assert.equal(CI.emergencyKind('My crewmate is bleeding and coughing blood, what do i do step by step'),'medical');
  assert.equal(CI.emergencyKind('My crewmate is coughing up blood'),'medical');
  assert.equal(CI.emergencyKind('What causes coughing up blood?'),'');
  assert.equal(CI.emergencyKind('He is not coughing blood'),'');
});

test('a drill and a resolution do not carry an earlier emergency into a new turn', async () => {
  assert.equal(CI.emergencyKind('This is a simulation call. My crewmate is bleeding and coughing blood.'),'');
  const history = [{role:'assistant',content:'Get help now.',urgentKind:'violence'}];
  assert.equal(await context.AstraAssistant.assessSafety('im good now',history),'');
  assert.equal(context.AstraAssistant.chatIntent('Tell me something about space radiaton',[]).health,true);
  assert.equal(context.AstraAssistant.chatIntent('My crewmate is having his hand broken',[]).health,true);
});

test('glucose, sleep and mood are fixed during a live session', () => {
  const date='2026-11-15';
  const series=Array.from({length:12},(_,frame)=>context.AstraEngine.simulatedReadings('mars',date,frame,0));
  for (const key of ['glucose','sleep','mood']) assert.equal(new Set(series.map(sample=>sample[key])).size,1);
  assert.equal(new Set(series.map(sample=>sample.pulse)).size,3);
});

test('a single check-in reply can answer future readings and carry specific context', () => {
  let check = CI.create('earth','2026-01-01',null);
  check = CI.apply(check,CI.question(check),'no',false);
  check = CI.apply(check,CI.question(check),'I feel lonely since switching shifts. I would like to arrange dinner with my crew. I slept only 7 hours.',false);
  assert.equal(check.values.sleep,7);
  assert.equal(CI.questions(check).some(question => question.key === 'onset'),false);
  assert.match(CI.question(check).prompt,/make .* shift feel easier/i);
  check = CI.applyContext(check,[
    {key:'symptomDetail',answer:'I would like to arrange dinner with my crew'},
    {key:'symptomContext',answer:'I would like to arrange dinner with my crew'},
    {key:'pulse',answer:'I would like to arrange dinner with my crew'},
    {key:'onset',answer:'It started four days ago'}
  ]);
  assert.equal(check.answers.symptomDetail,'I would like to arrange dinner with my crew');
  assert.equal(check.answers.symptomContext,undefined);
  assert.equal(check.answers.pulse,undefined);
  assert.equal(check.answers.onset,undefined);
  check = CI.apply(check,CI.question(check),'I would like to arrange another meal together. My pulse was 70 bpm.',false);
  assert.equal(check.values.pulse,70);
  assert.equal(CI.questions(check).some(question => ['sleep','pulse'].includes(question.key)),false);
});

test('distinguishes fresh readings, missing readings and personal duty notes', () => {
  let check = CI.create('earth','2026-01-01',null);
  check = CI.apply(check,CI.question(check),'no',false);
  check = CI.apply(check,CI.question(check),'My shoulder hurts today. Yesterday my pulse was 90 bpm.',false);
  assert.equal(check.values.pulse,undefined);
  check = CI.apply(check,CI.question(check),'I had to switch tasks halfway through my shift.',false);
  assert.equal(check.answers.impact,'I had to switch tasks halfway through my shift.');
  assert.equal(check.values.impact,undefined);
  assert.equal(CI.toEntry(check).details.some(detail => detail.title === 'Effect on duties'),true);
  const temperature = {key:'temp',metric:context.AstraEngine.metricByKey('temp'),prompt:'What is your temperature?'};
  check = CI.apply(check,temperature,"I don't know my temperature. My pulse is 72 bpm.",false);
  assert.equal(check.answers.temp,'');
  assert.equal(check.values.pulse,72);
});

test('a new social topic can follow a health discussion in the same thread', () => {
  const history = [{role:'user',content:'I had a headache after a long shift'}];
  const intent = context.AstraAssistant.chatIntent;
  assert.equal(intent('What can I do to feel better?',history).health,true);
  assert.equal(intent('What can I do about my headache?',history).health,true);
  assert.equal(intent('How can I organize a chess night for the crew?',history).health,false);
});
