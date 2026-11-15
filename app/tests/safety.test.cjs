const {readFileSync} = require('node:fs');
const {join} = require('node:path');
const {runInContext,createContext} = require('node:vm');
const {test} = require('node:test');
const assert = require('node:assert/strict');

const context = createContext({});
for (const name of ['engine.js','check-in.js','assistant.js']) {
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
