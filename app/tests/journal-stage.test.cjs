const {readFileSync} = require('node:fs');
const {join} = require('node:path');
const {runInContext,createContext} = require('node:vm');
const {test} = require('node:test');
const assert = require('node:assert/strict');

test('editing a daily journal preserves the same date in other mission stages', () => {
  const context = createContext({clearTimeout,$:()=>null});
  for (const name of ['engine.js','workspace.js']) {
    runInContext(readFileSync(join(__dirname,'..',name),'utf8'),context);
  }
  const result = runInContext(`
    const E = AstraEngine;
    const session = {};
    let state = {env:'orbit',journals:[]};
    const save = next => { state=next; return true; };
    const write = (env,text) => {
      state.env=env;
      journalDraft={owner:session,env,date:E.dateKey(),text};
      flushJournal(false);
    };
    write('orbit','Orbit entry');
    write('moon','Moon entry');
    write('orbit','Revised orbit entry');
    JSON.stringify({current:dailyJournal().text,entries:state.journals.map(({env,text})=>[env,text])});
  `,context);
  assert.deepEqual(JSON.parse(result),{current:'Revised orbit entry',entries:[
    ['orbit','Revised orbit entry'],['moon','Moon entry']
  ]});
});
