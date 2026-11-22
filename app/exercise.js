'use strict';

const exerciseDevices = {
  ared:'ARED · resistance',
  squat:'ARED · squat',
  heel:'ARED · heel raise',
  deadlift:'ARED · deadlift',
  cycle:'CEVIS · cycling',
  treadmill:'T2 · treadmill',
  other:'Other approved exercise'
};

const exerciseGuides = {
  squat:{name:'ARED squat',device:'Resistance',caption:'The bar moves with a controlled squat and return to standing.'},
  heel:{name:'ARED heel raise',device:'Resistance',caption:'The heels rise and lower while the forefeet stay on the platform.'},
  deadlift:{name:'ARED deadlift',device:'Resistance',caption:'The hips hinge, then the astronaut returns to standing as the bar rises.'},
  cycle:{name:'CEVIS cycling',device:'Aerobic',caption:'The pedals turn in a smooth, continuous cycle with the rider secured.'},
  tread:{name:'T2 treadmill',device:'Aerobic',caption:'The runner alternates steps while the harness applies the assigned loading.'}
};
let exerciseMotion;
const exercisePlays = () => exerciseMotion ?? !matchMedia('(prefers-reduced-motion: reduce)').matches;

function exerciseGuideMarkup() {
  const playing = exercisePlays();
  return card('Exercise demonstrations','<div class="exercise-guides">'+Object.entries(exerciseGuides).map(([key,item]) =>
    '<figure><canvas width="340" height="175" role="img" aria-label="'+item.name+' demonstration" data-exercise-guide="'+key+'">'+
    escape(item.caption)+'</canvas><figcaption><strong>'+item.name+'</strong><small>'+item.device+'</small><p>'+item.caption+'</p></figcaption></figure>').join('')+
    '</div><p class="micro">Use your crew’s approved equipment setup and exercise plan.</p>'+
    '<div class="actions"><a href="#guias" data-action="open-exercise-references">Exercise research in Documents</a>'+
    '<a href="https://www.nasa.gov/ochmo-tb-031-exercise-overview-2/">NASA exercise overview</a></div>',
    button(playing ? 'Pause animations' : 'Play animations','exercise-motion','compact','aria-pressed="'+playing+'"'));
}

function animateExerciseGuides() {
  const canvases = [...document.querySelectorAll('[data-exercise-guide]')];
  if (!canvases.length) return;
  const playing = exercisePlays();
  let last = -100;
  const started = performance.now();
  function renderFrame(now) {
    if (!canvases[0].isConnected) return;
    if (!playing || now-last >= 34) {
      const phase = playing ? (now-started)/430 : 1.1;
      for (const canvas of canvases) drawExerciseGuide(canvas,phase);
      last = now;
    }
    if (playing) requestAnimationFrame(renderFrame);
  }
  renderFrame(started);
}

function drawExerciseGuide(canvas, phase) {
  const ctx = canvas.getContext('2d');
  const move = canvas.dataset.exerciseGuide;
  const sway = (1-Math.cos(phase))/2;
  const navy = '#203a53', slate = '#637f9a', blue = '#258f9b', gold = '#bb622a';
  const p = (x,y) => [x,y];
  function line(points,color = navy, width = 4) {
    ctx.strokeStyle = color; ctx.lineWidth = width; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.beginPath();
    points.forEach(([x,y],i)=>i ? ctx.lineTo(x,y) : ctx.moveTo(x,y));
    ctx.stroke();
  }
  function dot([x,y],radius,color) {
    ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x,y,radius,0,2*Math.PI); ctx.fill();
  }
  function leg(hip,knee,ankle,toe,color) {
    line([hip,knee,ankle],color,11); line([ankle,toe],color,8); dot(knee,5,color);
  }
  ctx.fillStyle = '#edf5f8'; ctx.fillRect(0,0,340,175);
  line([p(45,150),p(295,150)],'#a2b7c9',2);
  let hip,shoulder,hand;
  if (move === 'cycle') {
    hip = p(148,79); shoulder = p(163,47); hand = p(209,63);
    line([p(118,146),p(145,87),p(198,124),p(215,66),p(223,66)],slate,6);
    line([p(141,87),p(158,87)],navy,5);
    dot(p(198,124),18,'#c7d8e4'); dot(p(198,124),5,slate);
    [phase+Math.PI,phase].forEach((angle,index)=>{
      const pedal=p(198+Math.cos(angle)*19,124+Math.sin(angle)*12);
      line([p(198,124),pedal],slate,3);
      leg(hip,p(178+Math.cos(angle)*11,94+Math.sin(angle)*8),pedal,p(pedal[0]+10,pedal[1]),index ? blue : '#7095a7');
    });
  } else if (move === 'tread') {
    hip = p(164,91+Math.sin(phase*2)*3); shoulder = p(177,55); hand = p(194+Math.cos(phase)*10,69);
    line([p(92,145),p(243,145),p(258,131),p(258,75)],slate,5);
    line([p(258,75),p(231,75)],slate,5);
    line([p(129,143),hip,p(207,143)],gold,2);
    [phase+Math.PI,phase].forEach((angle,index)=>{
      const ankle=p(167+Math.cos(angle)*39,138-Math.max(0,Math.sin(angle))*22);
      leg(hip,p(174+Math.cos(angle+.45)*22,113-Math.max(0,Math.sin(angle))*12),ankle,p(ankle[0]+13,ankle[1]+3),index ? blue : '#7095a7');
    });
  } else {
    const squat = move === 'squat';
    const hinge = move === 'deadlift';
    const lift = move === 'heel' ? sway*10 : 0;
    hip = p(169-(squat || hinge ? sway*21 : 0),91+(squat ? sway*20 : hinge ? sway*7 : -lift));
    shoulder = p(173+(hinge ? sway*22 : 0),53+(squat ? sway*17 : hinge ? sway*28 : -lift));
    hand = hinge ? p(191,92+sway*35) : p(196,shoulder[1]+4);
    line([p(104,147),p(104,30),p(236,30),p(236,147)],slate,5);
    line([p(104,146),p(236,146)],slate,7);
    line([p(112,hinge ? hand[1] : shoulder[1]),p(229,hinge ? hand[1] : shoulder[1])],gold,5);
    leg(p(hip[0]-5,hip[1]),p(160+(squat ? sway*22 : 0),114-lift*.5),p(158,136-lift),p(174,142),'#7095a7');
    leg(hip,p(174+(squat ? sway*21 : 0),119-lift*.5),p(172,136-lift),p(188,142),blue);
  }
  line([hip,shoulder],navy,16);
  line([shoulder,p((shoulder[0]+hand[0])/2,shoulder[1]+15),hand],blue,8);
  dot(p(shoulder[0]+2,shoulder[1]-17),11,navy);
  dot(p(shoulder[0]+5,shoulder[1]-17),5,'#c0dce5');
}

function exerciseView() {
  const date = E.dateKey();
  const sessions = (state.exerciseSessions || []).filter(item => item.env === state.env);
  const completed = sessions.filter(item => item.date === date);
  const plans = (state.exercisePlans || []).filter(item => item.env === state.env && item.date === date);
  const previousAerobic = sessions.find(item => item.date < date && ['cycle','treadmill'].includes(item.device));
  const demoPlan = simulation() && state.env === 'orbit' && !plans.length ? [
    {device:previousAerobic?.device === 'cycle' ? 'treadmill' : 'cycle', instructions:'Review the aerobic session in the crew exercise plan.'},
    {device:'squat',instructions:'Review the assigned resistance exercise and equipment setup.'}
  ] : [];
  const scheduled = plans.length ? plans : demoPlan;
  const options = '<select name="device">'+Object.entries(exerciseDevices).map(([key,label]) =>
    '<option value="'+key+'">'+label+'</option>').join('')+'</select>';
  const outcome = scheduled.length ? '<ul class="exercise-schedule">'+scheduled.map(item => {
    const logged = completed.filter(entry => entry.device === item.device).reduce((sum,entry) => sum+entry.minutes,0);
    return '<li><strong>'+exerciseDevices[item.device]+'</strong>'+
      '<span>'+escape(item.instructions)+(item.minutes ? ' · '+item.minutes+' min planned' : '')+'</span>'+
      (logged ? '<small>'+logged+' min logged today</small>' : '')+'</li>';
  }).join('')+'</ul>' : '<p>No exercise plan has been recorded for today.</p>';
  const nutrition = (state.exerciseNutrition || []).find(item => item.date === date && item.env === state.env);
  const expenditure = completed.filter(item => item.kcal != null);
  const burned = expenditure.reduce((sum,item) => sum+item.kcal,0);
  return pageHead('', 'Exercise', environment().name+' · '+formatDay(date))+
    '<div class="workspace-grid">'+
    card('Today’s routine',(demoPlan.length ? '<p class="muted">Simulation example. Use your assigned crew plan for training.</p>' : '')+
      outcome+(previousAerobic ? '<p class="micro">Last aerobic session · '+escape(exerciseDevices[previousAerobic.device])+
        ' · '+formatDay(previousAerobic.date)+'</p>' : '')+
      '<details><summary>Record the approved plan</summary><form id="exercise-plan-form">'+
      field('Activity',options)+field('Planned minutes (optional)','<input type="number" name="minutes" min="1" max="600">')+
      field('Assigned routine','<textarea name="instructions" rows="2" maxlength="360" required></textarea>')+
      '<button class="button primary">Save to today’s routine</button></form></details>')+
    card('Log a completed session','<form id="exercise-session-form">'+field('Activity',options)+
      field('Minutes completed','<input name="minutes" type="number" min="1" max="600" required>')+
      field('Exercise energy from equipment (kcal, optional)','<input name="kcal" type="number" min="0" max="5000">')+
      '<button class="button primary">Save session</button></form>'+
      '<p class="micro">'+(expenditure.length ? 'Exercise energy recorded today · '+burned+' kcal' : 'No exercise energy recorded today.')+'</p>')+
    card('Energy intake','<form id="exercise-nutrition-form">'+field('Today’s recorded intake (kcal)',
      '<input name="kcal" type="number" min="0" max="10000" required value="'+escape(nutrition?.kcal ?? '')+'">')+
      '<button class="button primary">Save intake</button></form>')+'</div>'+exerciseGuideMarkup()+
    card('Session history',sessions.length ? '<div class="table-scroll"><table><thead><tr><th>Date</th><th>Activity</th><th>Minutes</th><th>kcal</th></tr></thead><tbody>'+
      sessions.slice(0,25).map(item=>'<tr><th scope="row">'+formatDay(item.date)+'</th><td>'+exerciseDevices[item.device]+'</td><td>'+item.minutes+
        '</td><td>'+escape(item.kcal ?? '—')+'</td></tr>').join('')+'</tbody></table></div>' : '<p>No sessions logged for this mission stage.</p>');
}

function submitExercise(form) {
  const date = E.dateKey();
  const env = state.env;
  const values = Object.fromEntries(new FormData(form));
  const number = (value,min,max) => value !== '' && Number.isInteger(Number(value)) && Number(value) >= min && Number(value) <= max;
  let update;
  if (form.id === 'exercise-nutrition-form') {
    if (!number(values.kcal,0,10000)) return notify('Enter the recorded intake in kcal.');
    const others = (state.exerciseNutrition || []).filter(item=>item.date !== date || item.env !== env);
    update = {exerciseNutrition:[{date,env,kcal:Number(values.kcal)},...others]};
  } else if (!Object.hasOwn(exerciseDevices,values.device)) return;
  else if (form.id === 'exercise-plan-form') {
    const instructions = values.instructions.trim();
    if (!instructions || (values.minutes && !number(values.minutes,1,600))) return notify('Enter the assigned routine and valid minutes.');
    const others = (state.exercisePlans || []).filter(item=>item.date !== date || item.env !== env || item.device !== values.device);
    update = {exercisePlans:[{date,env,device:values.device,instructions,minutes:Number(values.minutes)||null},...others]};
  } else {
    if (!number(values.minutes,1,600) || (values.kcal && !number(values.kcal,0,5000))) return notify('Enter the completed minutes and recorded energy.');
    const entry = {date,env,device:values.device,minutes:Number(values.minutes),kcal:values.kcal === '' ? null : Number(values.kcal)};
    update = {exerciseSessions:[entry,...(state.exerciseSessions || [])]};
  }
  if (save({...state,...update})) { render(); notify('Exercise log saved.'); }
}
