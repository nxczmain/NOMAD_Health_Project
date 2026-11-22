'use strict';

const NetinMotor = (() => {
  const reactionTrials = 5;
  const targetPath = [1,4,10,2,13,5,9,0];
  const inputs = {mouse:'Mouse / trackpad',touch:'Touchscreen',pen:'Pen'};
  const hands = {left:'Left hand',right:'Right hand'};
  const games = {
    dock:{name:'Docking drill',description:'Tap the panda when it appears. After five signals, follow it across eight targets.',metrics:[['reaction','Reaction time','ms'],['aiming','Target time','ms'],['accuracy','Target accuracy','%']]},
    cargo:{name:'Cargo transfer',description:'Guide four turtles to the highlighted ponds. Keep the pointer held until you reach each pond.',metrics:[['movement','Transfer time','ms'],['accuracy','Drop accuracy','%']]},
    search:{name:'Visual search',description:'Find the fox among the other animals and select it. Its position changes across 12 boards.',metrics:[['searchTime','Search time','ms'],['accuracy','Accuracy','%']]},
    taps:{name:'Thruster taps',metrics:[['cadence','Time between taps','ms'],['accuracy','Tap accuracy','%']]}
  };
  const gameOf = result => result.game || 'dock';
  const goals = {dock:targetPath.length,cargo:4,search:12,taps:16};
  const median = values => {
    const sorted = [...values].sort((a,b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    return Math.round(sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2);
  };
  const accuracy = result => Math.round(100 * goals[gameOf(result)] / (goals[gameOf(result)] + result.misses));
  const value = (result,key) => key === 'accuracy' ? accuracy(result) : result[key];
  const layoutOf = board => Math.round(board.clientWidth)+'x'+Math.round(board.clientHeight)+'@'+devicePixelRatio;

  function baseline(result, history) {
    const days = history.filter(day => day.date < result.date && day.env === result.env &&
      day.input === result.input && day.hand === result.hand && day.layout === result.layout &&
      gameOf(day) === gameOf(result) && day.sample === result.sample && (day.cue || 'visual') === (result.cue || 'visual') && (day.scene || 'classic') === (result.scene || 'classic')).sort((a,b) => b.date.localeCompare(a.date)).slice(0,7);
    if (days.length < 3) return null;
    return {count:days.length,...Object.fromEntries(games[gameOf(result)].metrics.map(([key]) =>
      [key,median(days.map(day => value(day,key)))]))};
  }

  function watchFocus(signal, stop) {
    window.addEventListener('blur',() => stop('The round stopped when the app lost focus.'),{signal});
    window.addEventListener('resize',() => stop('The board resized. Start a new round at the current size.'),{signal});
    document.addEventListener('visibilitychange',() => {
      if (document.hidden) stop('The round stopped when the app became hidden.');
    },{signal});
  }

  function primaryPointer(event) {
    return event.isPrimary && event.button === 0 && Object.hasOwn(inputs,event.pointerType);
  }

  function demoHistory(records, includeToday = false) {
    const today = AstraEngine.dateKey();
    return records.filter(day => day.sample && (day.date < today || includeToday && day.date === today)).map((day,index) => {
      const lunar = day.env === 'moon';
      const slowed = day.values.impact === 'mild' || day.values.sleep < 6;
      return {date:day.date,env:day.env,input:'mouse',hand:'right',layout:'demo',sample:true,early:index % 9 === 0 ? 1 : 0,
        reaction: (lunar ? 280 : 254) + index * 13 % 35 + (slowed ? 65 : 0),
        aiming: (lunar ? 530 : 482) + index * 17 % 71 + (slowed ? 110 : 0),
        misses: slowed ? 2 : index % 3 === 0 ? 1 : 0};
    });
  }

  function drill(board, status, finish, stop, options = {}) {
    let audio;
    try {
      if (options.volume && typeof AudioContext !== 'undefined') {
        audio = new AudioContext();
        void audio.resume().catch(() => {});
      }
    } catch { audio = undefined; }
    let audible = false;
    function playCue() {
      if (audio?.state !== 'running') return;
      const start = audio.currentTime;
      const tone = audio.createOscillator();
      const gain = audio.createGain();
      tone.frequency.value = 720;
      gain.gain.setValueAtTime(.15 * options.volume / 100,start);
      gain.gain.exponentialRampToValueAtTime(.0001,start+.11);
      tone.connect(gain).connect(audio.destination);
      tone.start(start);
      tone.stop(start+.12);
      audible = true;
    }
    const controller = new AbortController();
    const {signal} = controller;
    const reactionTimes = [];
    const targetTimes = [];
    const targets = [...board.querySelectorAll('.motor-beacon')];
    const center = targets[7];
    // Keep the original outer-size signature for existing Docking drill logs.
    const bounds = board.getBoundingClientRect();
    const layout = Math.round(bounds.width)+'x'+Math.round(bounds.height)+'@'+devicePixelRatio;
    const mirror = Math.random() < .5;
    const path = mirror ? targetPath.map(index => index + 4 - 2 * (index % 5)) : targetPath;
    let phase = 'waiting';
    let cue;
    let timer;
    let frame;
    let input;
    let started;
    let early = 0;
    let misses = 0;

    function cancel() {
      if (audio && audio.state !== 'closed') void audio.close().catch(() => {});
      controller.abort();
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    }

    function abandon(message) {
      cancel();
      stop(message);
    }

    function light(target, label, next) {
      cue?.classList.remove('active');
      cue = target;
      cue.classList.add('active');
      status.textContent = label;
      phase = 'lighting';
      // Allow the display to paint the cue before starting the response clock.
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          if (signal.aborted) return;
          started = performance.now();
          phase = next;
          if (next === 'reaction') playCue();
          timer = setTimeout(() => abandon('The response window expired. Start a new round when ready.'),10000);
        });
      });
    }

    function reaction() {
      phase = 'waiting';
      cue?.classList.remove('active');
      status.textContent = 'Signal '+(reactionTimes.length + 1)+' of '+reactionTrials+' · Wait for the center beacon. Early taps: '+early+'.';
      timer = setTimeout(() => light(center,'Signal '+(reactionTimes.length + 1)+' of '+reactionTrials+' · Tap the panda! Early taps: '+early+'.','reaction'),
        900 + Math.random() * 1500);
    }

    function aim() {
      light(targets[path[targetTimes.length]],'Docking target '+(targetTimes.length + 1)+' of '+path.length,'aim');
    }

    function respond(event) {
      if (!primaryPointer(event)) return;
      event.preventDefault();
      if (input && event.pointerType !== input) return;
      const target = event.target.closest('.motor-beacon');
      if (phase === 'lighting') return;
      if (phase === 'waiting') {
        early++;
        input = event.pointerType;
        clearTimeout(timer);
        reaction();
        status.textContent = 'Early tap '+early+' · Wait until the center beacon lights up.';
        return;
      }
      if (phase === 'prepare') {
        if (target !== center) return;
        clearTimeout(timer);
        aim();
        return;
      }
      if (phase === 'reaction' && target !== cue) return;
      input = event.pointerType;
      if (target !== cue) {
        misses++;
        status.textContent = 'Docking target '+(targetTimes.length+1)+' of '+path.length+' · Misses: '+misses;
        return;
      }
      clearTimeout(timer);
      const elapsed = performance.now() - started;
      if (phase === 'reaction') {
        reactionTimes.push(elapsed);
        if (reactionTimes.length < reactionTrials) return reaction();
        phase = 'prepare';
        status.textContent = 'Docking stage · Tap the center beacon to begin.';
        timer = setTimeout(() => abandon('The response window expired. Start a new round when ready.'),10000);
        return;
      }
      targetTimes.push(elapsed);
      if (targetTimes.length < path.length) return aim();
      cancel();
      finish({reaction:median(reactionTimes),aiming:median(targetTimes),misses,early,input,layout,cue:audible ? 'sound-and-visual' : 'visual'});
    }

    board.addEventListener('pointerdown',respond,{signal});
    watchFocus(signal,abandon);
    reaction();
    return cancel;
  }

  function cargo(board,status,finish,stop) {
    const controller = new AbortController();
    const {signal} = controller;
    const layout = layoutOf(board);
    const cells = [...board.children];
    const token = document.createElement('span');
    token.className = 'motor-cargo-token';
    token.innerHTML = UI.animal('turtle');
    token.hidden = true;
    board.append(token);
    const lanes = [[5,9],[13,1],[0,14],[8,6]];
    const times = [];
    let drag;
    let input;
    let misses = 0;

    function illuminate() {
      for (const cell of cells) cell.className = 'motor-bay';
      const [from,to] = lanes[times.length].map(index => cells[index]);
      from.classList.add('cargo-source');
      to.classList.add('cargo-destination');
      status.textContent = 'Turtle '+(times.length + 1)+' of '+goals.cargo+' · Drag it to the outlined pond.';
    }
    function cancel() {
      controller.abort();
      if (drag && board.hasPointerCapture(drag.id)) board.releasePointerCapture(drag.id);
    }
    function move(event) {
      if (event.pointerId !== drag?.id) return;
      const bounds = board.getBoundingClientRect();
      token.style.left = (event.clientX - bounds.left)+'px';
      token.style.top = (event.clientY - bounds.top)+'px';
    }
    board.addEventListener('pointerdown',event => {
      if (drag || !primaryPointer(event) || (input && event.pointerType !== input) || !event.target.closest('.cargo-source')) return;
      event.preventDefault();
      input = event.pointerType;
      drag = {id:event.pointerId,started:performance.now()};
      token.hidden = false;
      board.setPointerCapture(event.pointerId);
      move(event);
    },{signal});
    board.addEventListener('pointermove',move,{signal});
    board.addEventListener('pointerup',event => {
      if (event.pointerId !== drag?.id) return;
      const elapsed = performance.now() - drag.started;
      drag = undefined;
      token.hidden = true;
      const destination = cells[lanes[times.length][1]];
      if (document.elementFromPoint(event.clientX,event.clientY)?.closest('.motor-bay') !== destination) {
        misses++;
        status.textContent = 'Missed the pond · Guide the same turtle and try again.';
        return;
      }
      times.push(elapsed);
      if (times.length < goals.cargo) return illuminate();
      cancel();
      finish({movement:median(times),misses,input,layout});
    },{signal});
    board.addEventListener('lostpointercapture',event => {
      if (event.pointerId !== drag?.id) return;
      drag = undefined;
      token.hidden = true;
      illuminate();
    },{signal});
    watchFocus(signal,message => { cancel(); stop(message); });
    illuminate();
    return cancel;
  }

  function visualSearch(board,status,finish,stop) {
    const controller = new AbortController();
    const {signal} = controller;
    const layout = layoutOf(board);
    const cells = [...board.children];
    const symbols = ['panda','turtle','fox'].map(name=>UI.animal(name));
    const times = [];
    let misses = 0;
    let target = -1;
    let started;
    let frame;
    let timer;
    let input;
    const cancel = () => { controller.abort(); cancelAnimationFrame(frame); clearTimeout(timer); };
    function nextBoard() {
      const previous = target;
      target = Math.floor(Math.random() * (cells.length - Number(previous >= 0)));
      if (previous >= 0 && target >= previous) target++;
      cells.forEach((cell,index) => {
        const symbol = index === target ? 2 : Math.floor(Math.random() * 2);
        cell.innerHTML = symbols[symbol];
      });
      status.textContent = 'Board '+(times.length+1)+' of '+goals.search+' · Find the fox.';
      started = undefined;
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          if (signal.aborted) return;
          started = performance.now();
          timer = setTimeout(() => { cancel(); stop('The response window expired. Start again when ready.'); },15000);
        });
      });
    }
    board.addEventListener('pointerdown',event => {
      if (started === undefined || !primaryPointer(event) || (input && input !== event.pointerType)) return;
      event.preventDefault();
      input = event.pointerType;
      if (event.target.closest('.motor-search-cell') !== cells[target]) {
        misses++;
        status.textContent = 'Board '+(times.length+1)+' of '+goals.search+' · Keep looking for the fox. Misses: '+misses+'.';
        return;
      }
      clearTimeout(timer);
      times.push(performance.now() - started);
      if (times.length < goals.search) return nextBoard();
      cancel();
      finish({searchTime:median(times),misses,input,layout,scene:'animals-v1'});
    },{signal});
    watchFocus(signal,message => { cancel(); stop(message); });
    nextBoard();
    return cancel;
  }

  return {inputs,hands,games,gameOf,value,accuracy,baseline,demoHistory,drill,watchFocus,
    play:{dock:drill,cargo,search:visualSearch}};
})();
