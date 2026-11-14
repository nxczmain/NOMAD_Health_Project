'use strict';

const CrewProfiles = (() => {
  const demos = {
    'netin-demo-orbit': {
      env: 'orbit',
      profile: {name:'Maya Chen',role:'Flight engineer',medical:'Dr. Lina Torres',history:'Interrupted sleep during rotating shifts.',allergies:'None recorded in the simulation.'},
      auth: {salt:'93c248cb4bcb2fb5d5afe6768f384257',verifier:'e265354d30b0b375a042572ef1610d3282f2113338785e682ad861414125149a'}
    },
    'netin-demo-moon': {
      env: 'moon',
      profile: {name:'Mateo Ruiz',role:'Lunar mission specialist',medical:'Dr. Lina Torres',history:'Motion sensitivity during gravity-transition training.',allergies:'None recorded in the simulation.'},
      auth: {salt:'3a948a9d4c9b439ba1c8cdb2b25abe36',verifier:'0dba0972a005398de3c410b2d1d45347f644ea8537908876e56b93623b2204cc'}
    }
  };
  const isDemo = key => Object.hasOwn(demos,key);
  const hex = bytes => Array.from(bytes, byte => byte.toString(16).padStart(2,'0')).join('');

  async function verifier(password, salt) {
    const key = await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveBits']);
    const bytes = Uint8Array.from(salt.match(/../g), pair => parseInt(pair,16));
    const bits = await crypto.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt:bytes,iterations:600000},key,256);
    return hex(new Uint8Array(bits));
  }

  async function createPassword(password, confirmation) {
    if (password.length < 8 || password.length > 128 || !password.trim()) throw new Error('Use a password from 8 to 128 characters.');
    if (password !== confirmation) throw new Error('The passwords do not match.');
    const salt = hex(crypto.getRandomValues(new Uint8Array(16)));
    return {salt,verifier:await verifier(password,salt)};
  }

  async function verifyPassword(password, auth) {
    if (!password || password.length > 128 || !/^[a-f0-9]{32}$/.test(auth?.salt) || !/^[a-f0-9]{64}$/.test(auth?.verifier)) return false;
    const derived = await verifier(password,auth.salt);
    let mismatch = 0;
    for (let index = 0; index < derived.length; index++) mismatch |= derived.charCodeAt(index) ^ auth.verifier.charCodeAt(index);
    return mismatch === 0;
  }

  function demoState(key) {
    const {profile,env,auth} = demos[key];
    const lunar = env === 'moon';
    const records = AstraEngine.weekly([],env,30).map(({date},index) => {
      const event = index === 12 || index >= 26 && index <= 28;
      const values = {
        pulse: (lunar ? 67 : 69) + index * 5 % 9 + (event ? 8 : 0),
        pressure: [(lunar ? 114 : 116) + index * 3 % 9, (lunar ? 71 : 73) + index * 5 % 8],
        temp: (363 + index * 3 % 6 + Number(lunar)) / 10,
        glucose: (lunar ? 90 : 88) + index * 7 % 15,
        sleep: (73 + index * 7 % 12 - (event ? lunar ? 10 : 21 : 0)) / 10,
        mood: event ? (lunar ? 7 : 5 + index % 2) : 7 + index * 2 % 3,
        impact: event && lunar ? 'mild' : 'none',
        moodImpact: event && !lunar ? (index === 28 ? 'task' : 'some') : 'none',
        context: event ? (lunar ? 'Surface operations training.' : 'Rotating night shift.') : '',
        note: event ? (lunar ? 'Reported mild nausea and unsteadiness after surface training.' : 'Reported interrupted sleep and difficulty concentrating during maintenance.') : ''
      };
      return {date,env,values,sample:true,image:null,review:'',details:[]};
    });
    return {profile,env,auth,records,motorLogs:NetinMotor.demoHistory(records),drafts:{},transitions:[]};
  }

  return {demoKeys:Object.keys(demos),isDemo,demoState,createPassword,verifyPassword};
})();
