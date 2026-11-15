const {readFileSync} = require('node:fs');
const {join} = require('node:path');
const {runInNewContext} = require('node:vm');
const {test} = require('node:test');
const assert = require('node:assert/strict');

const context = {};
runInNewContext(readFileSync(join(__dirname,'..','ham-presence.js'),'utf8'),context);
const {hamPoseFor} = context;

test('Ham prioritizes emergency, connection, processing and listening in order',() => {
  const engaged = {busy:true,typing:true};
  for (const model of ['offline','missing','unchecked','checking']) {
    assert.equal(hamPoseFor({...engaged,model,urgent:true}),'serio');
    assert.equal(hamPoseFor({...engaged,model}),'dormido');
  }
  assert.equal(hamPoseFor({...engaged,model:'ready'}),'pensando');
  assert.equal(hamPoseFor({model:'ready',typing:true}),'escuchando');
  assert.equal(hamPoseFor({model:'ready',typing:true,speaking:true}),'neutral');
  assert.equal(hamPoseFor({model:'ready'}),'neutral');
});
