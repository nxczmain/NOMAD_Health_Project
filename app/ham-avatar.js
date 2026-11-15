/*!
 * ham-avatar.js — Ham, el mono doctor en pixel art, animado.
 * Sin dependencias. Se dibuja en <canvas> a partir de una cuadrícula de 24×24
 * copiada del sprite original.
 *
 * Ham se queda quieto (su imagen normal) hasta que habla. Mientras habla:
 *   - mueve la boca según las vocales del texto,
 *   - se balancea según la expresión,
 *   - cambia de expresión oración por oración.
 *
 * La expresión de cada oración sale de una etiqueta como [[feliz]] que la IA
 * escribe al inicio de la oración. Si el texto no trae etiquetas, se adivina
 * por palabras clave (español e inglés).
 *
 * Uso:
 *   const ham = HamAvatar.crear(document.querySelector('#ham'), { escala: 2 });
 *   ham.decir(textoConEtiquetas);                    // sin audio: tiempo estimado
 *   ham.decir(textoConEtiquetas, { audio: miAudio }); // sincronizado con <audio>
 *   ham.decir(textoConEtiquetas, { utterance: u });   // sincronizado con speechSynthesis
 *   ham.decir(textoConEtiquetas, { voz: 'navegador', idioma: 'es-MX' }); // Ham lee solo
 *   ham.detener();
 *   HamAvatar.limpiar(texto)  // quita las etiquetas para mostrar o leer el texto
 */
(function (global) {
  'use strict';

  var TAM = 24;

  var COLORES = {
    K: '#402B2A', // contorno
    H: '#845438', // pelo
    S: '#EEB373', // piel
    E: '#263849', // ojos
    M: '#A75D47', // boca
    C: '#6A99A3', // sombra de la bata
    W: '#ECF5F3', // bata
    G: '#438273', // camisa
    L: '#9DE3CB', // brillo de la camisa
    D: '#4A2320', // interior de la boca
    T: '#D9707A', // lengua
    R: '#E8907E', // rubor
    B: '#FFFFFF', // brillo de los ojos
    A: '#7CC7E8'  // gota de sudor
  };
  var FONDO = '#DAEAE9';

  // Sprite base sin ojos ni boca (se pegan encima según la expresión).
  var BASE = [
    '........................',
    '........................',
    '.........KKKKKK.........',
    '.......KKHHHHHHKK.......',
    '......KHHHHHHHHHHK......',
    '.....KHHHHHHHHHHHHK.....',
    '...KKHHHSSSSSSSSHHHKK...',
    '..KHHKSSSSSSSSSSSSKHHK..',
    '..KHSKSSSSSSSSSSSSKSHK..',
    '...KKSSSSSSSSSSSSSSKK...',
    '....KSSSSSSSSSSSSSSK....',
    '.....KSSSSSSSSSSSSK.....',
    '......KSSSSSSSSSSK......',
    '.......KSSSSSSSSK.......',
    '......CCKKKKKKKKCC......',
    '.....CWWWCGGGGCWWWC.....',
    '....CWWWWCGLLGCWWWWC....',
    '...CWWWWCCGGGGCCWWWWC...',
    '...CWWCWWWCGGCWWWCWWC...',
    '....CCWWWWCCCCWWWWCC....',
    '....CCWWWWWCCWWWWWCC....',
    '.....CCCCCCCCCCCCCC.....',
    '........................',
    '........................'
  ];

  // Ojos y cejas: 8×4, se pegan en x=8, y=6.
  var POS_OJOS = { x: 8, y: 6 };
  var OJOS = {
    normal:      ['SSSSSSSS', 'SSSSSSSS', 'SEESSEES', 'SEESSEES'],
    feliz:       ['SSSSSSSS', 'SSSSSSSS', 'SEESSEES', 'ESSEESSE'],
    preocupado:  ['SSKSSKSS', 'SKSSSSKS', 'SEESSEES', 'SEESSEES'],
    serio:       ['SSSSSSSS', 'SKKSSKKS', 'SEESSEES', 'SEESSEES'],
    pensando:    ['SSSSSKKS', 'SSEESSEE', 'SSEESSEE', 'SSSSSSSS'],
    sorprendido: ['SKKSSKKS', 'SSSSSSSS', 'SBESSBES', 'SEESSEES'],
    guino:       ['SSSSSSSS', 'SSSSSSSS', 'SSSSSEES', 'SEESSEES']
  };
  var PARPADO = ['SSSSSSSS', 'SEESSEES'];

  // Bocas: 6×3, se pegan en x=9, y=11.
  var POS_BOCA = { x: 9, y: 11 };
  var BOCAS = {
    original:       ['SMMMMS', 'SMMSMS', 'SSSSSS'],
    cerrada:        ['SSSSSS', 'SMMMMS', 'SSSSSS'],
    media:          ['SMMMMS', 'SMDDMS', 'SSSSSS'],
    abierta:        ['SMMMMS', 'MDDDDM', 'SMTTMS'],
    o:              ['SSMMSS', 'SMDDMS', 'SSMMSS'],
    sonrisa:        ['MSSSSM', 'SMMMMS', 'SSSSSS'],
    sonrisaMedia:   ['MMMMMM', 'SMDDMS', 'SSMMSS'],
    sonrisaAbierta: ['MMMMMM', 'MDDDDM', 'SMTTMS'],
    triste:         ['SSMMSS', 'SMSSMS', 'SSSSSS'],
    tristeMedia:    ['SSMMSS', 'SMDDMS', 'SMSSMS'],
    pequena:        ['SSSSSS', 'SSSMMS', 'SSSSSS'],
    pequenaMedia:   ['SSSSSS', 'SSMDMS', 'SSSMSS']
  };

  var EXTRAS = {
    rubor:       [[6, 10, 'R'], [7, 10, 'R'], [16, 10, 'R'], [17, 10, 'R']],
    gota:        [[4, 2, 'A'], [3, 3, 'A'], [4, 3, 'A'], [3, 4, 'A'], [4, 4, 'A']],
    burbuja:     [[20, 5, 'C'], [20, 3, 'C'], [21, 3, 'C'], [21, 0, 'C'], [22, 0, 'C'], [21, 1, 'C'], [22, 1, 'C']],
    exclamacion: [[21, 0, 'M'], [21, 1, 'M'], [21, 2, 'M'], [21, 4, 'M']]
  };

  // habla: [boca cerrada, media, abierta] mientras habla.
  // mov: amp = cuánto se balancea (px del sprite), periodo en ms, lado = vaivén lateral.
  // salto: brinco al entrar en la expresión.
  var EXPRESIONES = {
    neutral:     { ojos: 'normal',      reposo: 'original', habla: ['cerrada', 'media', 'abierta'],               mov: { amp: 1,   periodo: 700 } },
    feliz:       { ojos: 'feliz',       reposo: 'sonrisa',  habla: ['sonrisa', 'sonrisaMedia', 'sonrisaAbierta'], mov: { amp: 1.4, periodo: 380 }, rubor: true, salto: 1 },
    preocupado:  { ojos: 'preocupado',  reposo: 'triste',   habla: ['triste', 'tristeMedia', 'media'],            mov: { amp: 0.8, periodo: 1100 }, extra: 'gota' },
    serio:       { ojos: 'serio',       reposo: 'cerrada',  habla: ['cerrada', 'media', 'media'],                 mov: { amp: 0.6, periodo: 900 } },
    pensando:    { ojos: 'pensando',    reposo: 'pequena',  habla: ['pequena', 'pequenaMedia', 'media'],          mov: { amp: 1,   periodo: 1400, lado: true }, extra: 'burbuja', sinParpadeo: true },
    sorprendido: { ojos: 'sorprendido', reposo: 'o',        habla: ['o', 'media', 'abierta'],                     mov: { amp: 1,   periodo: 500 }, extra: 'exclamacion', salto: 2 },
    guino:       { ojos: 'guino',       reposo: 'sonrisa',  habla: ['sonrisa', 'sonrisaMedia', 'sonrisaAbierta'], mov: { amp: 1,   periodo: 450 }, rubor: true, salto: 1, sinParpadeo: true }
  };
  EXPRESIONES.feliz.sinParpadeo = true;

  var SINONIMOS = {
    happy: 'feliz', alegre: 'feliz', contento: 'feliz', joy: 'feliz',
    worried: 'preocupado', concerned: 'preocupado', triste: 'preocupado', sad: 'preocupado', empatia: 'preocupado',
    serious: 'serio', importante: 'serio', alerta: 'serio',
    thinking: 'pensando', pensativo: 'pensando', duda: 'pensando',
    surprised: 'sorprendido', sorpresa: 'sorprendido', wow: 'sorprendido',
    wink: 'guino', saludo: 'guino', hola: 'guino',
    normal: 'neutral', calm: 'neutral', tranquilo: 'neutral'
  };

  // Orden = prioridad. Solo se usa cuando la IA no manda etiquetas.
  var REGLAS = [
    ['serio', /(oficial m[eé]dic|medical officer|flight surgeon|cirujano de vuelo|urgen|emergenc|inmediat|immediately|right away|seek (medical|help|care)|busca(r)? atenci[oó]n|evaluaci[oó]n|evaluat|severe|grave|danger|peligro|warning|advertencia|report it|rep[oó]rta)/i],
    ['preocupado', /(s[ií]ntoma|symptom|dolor|pain|hurt|headache|n[aá]usea|v[oó]mit|fatig|cansad|tired|mare[oa]|dizz|fiebre|fever|worse|empeor|lo siento|sorry|preocup|concern|unsteadi|inestab|insomn|estr[eé]s|stress|anxi|ansie)/i],
    ['sorprendido', /(\bwow\b|\bvaya\b|incre[ií]ble|amazing|whoa|qu[eé] sorpresa|surpris)/i],
    ['feliz', /(excelente|excellent|great|genial|bien hecho|well done|me alegra|glad|happy|felicidades|congrat|good news|buenas noticias|perfect|nice|keep it up|sigue as[ií]|improv)/i],
    ['guino', /^\s*(¡\s*)?(hola|hi|hello|hey|buen[oa]s)\b/i],
    ['pensando', /(\?|let me|let's see|veamos|d[eé]jame|consider|depend|maybe|perhaps|quiz[aá]|tal vez|might|podr[ií]a)/i]
  ];

  function normalizar(nombre) {
    var n = String(nombre || '').toLowerCase();
    if (n.normalize) n = n.normalize('NFD').replace(/[̀-ͯ]/g, '');
    n = n.trim();
    if (EXPRESIONES[n]) return n;
    return SINONIMOS[n] || 'neutral';
  }

  function detectarExpresion(texto) {
    for (var i = 0; i < REGLAS.length; i++) {
      if (REGLAS[i][1].test(texto)) return REGLAS[i][0];
    }
    return 'neutral';
  }

  function dividirOraciones(t) {
    var r = [], ini = 0, m, re = /[.!?…]+\s*|\n+/g;
    while ((m = re.exec(t))) {
      var fin = m.index + m[0].length;
      if (fin > ini) { r.push(t.slice(ini, fin)); ini = fin; }
    }
    if (ini < t.length) r.push(t.slice(ini));
    return r;
  }

  // Devuelve { limpio, segmentos: [{ texto, expresion }] }. Los textos de los
  // segmentos, unidos, son exactamente `limpio`.
  function separarEtiquetas(texto) {
    texto = String(texto == null ? '' : texto).replace(/\[\[[^\]]*\]?$/, ''); // etiqueta a medio llegar (streaming)
    var partes = [], ultimo = 0, exp = null, hay = false, m;
    var re = /\[\[\s*([^\]\s]+)\s*\]\]/g;
    while ((m = re.exec(texto))) {
      hay = true;
      partes.push({ texto: texto.slice(ultimo, m.index), expresion: exp });
      exp = normalizar(m[1]);
      ultimo = re.lastIndex;
    }
    partes.push({ texto: texto.slice(ultimo), expresion: exp });
    if (!hay) partes = dividirOraciones(texto).map(function (t) { return { texto: t, expresion: null }; });

    var salida = [];
    for (var i = 0; i < partes.length; i++) {
      var t = partes[i].texto.replace(/[ \t]{2,}/g, ' ');
      var prev = salida.length ? salida[salida.length - 1].texto : '';
      if (!salida.length || /\s$/.test(prev)) t = t.replace(/^[ \t]+/, '');
      if (!t) continue;
      salida.push({ texto: t, expresion: partes[i].expresion || detectarExpresion(t) });
    }
    if (salida.length) {
      var u = salida[salida.length - 1];
      u.texto = u.texto.replace(/\s+$/, '');
      if (!u.texto) salida.pop();
    }
    return { limpio: salida.map(function (s) { return s.texto; }).join(''), segmentos: salida };
  }

  function limpiar(texto) { return separarEtiquetas(texto).limpio; }

  function pegar(g, bloque, pos) {
    for (var y = 0; y < bloque.length; y++)
      for (var x = 0; x < bloque[y].length; x++) g[pos.y + y][pos.x + x] = bloque[y][x];
  }
  function puntos(g, lista) {
    for (var i = 0; i < lista.length; i++) g[lista[i][1]][lista[i][0]] = lista[i][2];
  }
  function limitar(v, a, b) { return Math.max(a, Math.min(b, v)); }

  // Fondo redondeado como el del avatar original.
  var MASCARA_FONDO = (function () {
    var r = 5, m = [];
    for (var y = 0; y < TAM; y++) {
      m.push([]);
      for (var x = 0; x < TAM; x++) {
        var cx = x < r ? r : x >= TAM - r ? TAM - r : x + 0.5;
        var cy = y < r ? r : y >= TAM - r ? TAM - r : y + 0.5;
        var dx = x + 0.5 - cx, dy = y + 0.5 - cy;
        m[y].push(dx * dx + dy * dy <= r * r);
      }
    }
    return m;
  })();

  var ahora = function () { return (global.performance || Date).now(); };
  var raf = global.requestAnimationFrame ? global.requestAnimationFrame.bind(global) : function (f) { return setTimeout(function () { f(ahora()); }, 16); };
  var cancelarRaf = global.cancelAnimationFrame ? global.cancelAnimationFrame.bind(global) : clearTimeout;

  function Ham(opciones) {
    this.op = Object.assign({ fondo: true, escala: 4, msPorCaracter: 65, volverNeutralMs: 1400, parpadeo: true }, opciones || {});
    this.lienzos = [];
    this.exp = 'neutral';
    this.boca = null;
    this.hablando = false;
    this.dx = 0; this.dy = 0;
    this.inicioExp = -1e9;
    this._caracter = '';
    this._clave = '';
    this._raf = 0;
    this._sesion = null;
    this._oyentes = {};
    this._ultimaBoca = 0;
    this._proxParpadeo = 0;
    this._finParpadeo = 0;
    this._timerNeutral = 0;
    this._tick = this._tick.bind(this);
    var mq = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)');
    this._movReducido = !!(mq && mq.matches);
  }

  Ham.prototype.agregarLienzo = function (destino, escala) {
    var lienzo = destino;
    if (!lienzo || lienzo.tagName !== 'CANVAS') {
      lienzo = document.createElement('canvas');
      destino.appendChild(lienzo);
    }
    escala = Math.max(1, Math.round(escala || Number(lienzo.dataset.escala) || this.op.escala));
    lienzo.width = TAM * escala;
    lienzo.height = TAM * escala;
    lienzo.style.imageRendering = 'pixelated';
    if (!lienzo.getAttribute('role')) lienzo.setAttribute('role', 'img');
    if (!lienzo.getAttribute('aria-label')) lienzo.setAttribute('aria-label', 'Ham, the doctor chimpanzee');
    var ctx = lienzo.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    this.lienzos.push({ lienzo: lienzo, ctx: ctx, escala: escala });
    this._clave = '';
    this._pintar(this._cuadricula());
    return lienzo;
  };

  Ham.prototype.quitarLienzo = function (lienzo) {
    this.lienzos = this.lienzos.filter(function (l) { return l.lienzo !== lienzo; });
  };

  Ham.prototype.on = function (evento, fn) {
    (this._oyentes[evento] = this._oyentes[evento] || []).push(fn);
    var self = this;
    return function () { self._oyentes[evento] = (self._oyentes[evento] || []).filter(function (f) { return f !== fn; }); };
  };
  Ham.prototype._emitir = function (evento, dato) {
    (this._oyentes[evento] || []).forEach(function (fn) { try { fn(dato); } catch (e) { console.error(e); } });
  };

  Ham.prototype._cuadricula = function (parpadeando) {
    var g = BASE.map(function (f) { return f.split(''); });
    var e = EXPRESIONES[this.exp];
    var ojos = OJOS[e.ojos];
    if (parpadeando && !e.sinParpadeo) ojos = [ojos[0], ojos[1], PARPADO[0], PARPADO[1]];
    pegar(g, ojos, POS_OJOS);
    pegar(g, BOCAS[this.boca || e.reposo], POS_BOCA);
    if (e.rubor) puntos(g, EXTRAS.rubor);
    if (e.extra) puntos(g, EXTRAS[e.extra]);
    return g;
  };

  Ham.prototype._pintar = function (g) {
    for (var i = 0; i < this.lienzos.length; i++) {
      var l = this.lienzos[i], ctx = l.ctx, s = l.escala;
      ctx.clearRect(0, 0, TAM * s, TAM * s);
      var x, y;
      if (this.op.fondo) {
        ctx.fillStyle = FONDO;
        for (y = 0; y < TAM; y++) for (x = 0; x < TAM; x++) if (MASCARA_FONDO[y][x]) ctx.fillRect(x * s, y * s, s, s);
      }
      for (y = 0; y < TAM; y++) {
        for (x = 0; x < TAM; x++) {
          var c = g[y][x];
          if (c === '.') continue;
          var px = x + this.dx, py = y + this.dy;
          if (px < 0 || py < 0 || px >= TAM || py >= TAM) continue;
          ctx.fillStyle = COLORES[c];
          ctx.fillRect(px * s, py * s, s, s);
        }
      }
    }
  };

  Ham.prototype._despertar = function () {
    if (!this._raf) this._raf = raf(this._tick);
  };

  Ham.prototype._ponerExp = function (nombre, conSalto) {
    nombre = normalizar(nombre);
    if (nombre === this.exp) return;
    this.exp = nombre;
    this.inicioExp = conSalto === false ? -1e9 : ahora();
    this._emitir('expresion', nombre);
  };

  Ham.prototype._bocaSiguiente = function (e) {
    var c = (this._caracter || '').toLowerCase();
    if (!c || /[\s.,;:!?¡¿…\-—()"'«»]/.test(c)) return e.habla[0];
    if (/[aáàoóòuú]/.test(c)) return e.habla[2];
    if (/[mbpf]/.test(c)) return e.habla[0];
    return e.habla[1];
  };

  Ham.prototype._tick = function (t) {
    this._raf = 0;
    t = t || ahora();
    var activo = false;

    var ses = this._sesion;
    if (ses) {
      ses.actualizar(t);
      if (this._sesion === ses) {
        this.hablando = ses.sonando;
        var pos = limitar(ses.pos, 0, ses.limpio.length - 1);
        var i = ses.segmentoEn(pos);
        if (i !== ses.actual) {
          ses.actual = i;
          this._ponerExp(ses.segmentos[i].expresion);
          this._emitir('segmento', { indice: i, segmento: ses.segmentos[i] });
        }
        this._caracter = ses.limpio.charAt(pos);
      }
    }

    var e = EXPRESIONES[this.exp];
    if (this.hablando) {
      activo = true;
      if (t - this._ultimaBoca > 95) { this.boca = this._bocaSiguiente(e); this._ultimaBoca = t; }
    } else {
      this.boca = null;
    }

    var dx = 0, dy = 0;
    if (!this._movReducido) {
      if (this.hablando && e.mov.amp) {
        dy = limitar(Math.round(Math.sin(t / e.mov.periodo * 2 * Math.PI) * e.mov.amp), -1, 1);
        if (e.mov.lado) dx = limitar(Math.round(Math.sin(t / (e.mov.periodo * 2) * 2 * Math.PI) * 1.2), -1, 1);
      }
      var dt = t - this.inicioExp;
      if (e.salto && dt >= 0 && dt < 280) {
        dy = -Math.round(e.salto * Math.sin(dt / 280 * Math.PI));
        activo = true;
      }
    }

    var parpadeando = false;
    if (this.hablando && this.op.parpadeo) {
      if (t > this._proxParpadeo) {
        if (this._proxParpadeo) this._finParpadeo = t + 130;
        this._proxParpadeo = t + 2200 + Math.random() * 2600;
      }
      parpadeando = t < this._finParpadeo;
    }

    this.dx = dx; this.dy = dy;
    var clave = [this.exp, this.boca, dx, dy, parpadeando].join('|');
    if (clave !== this._clave) {
      this._clave = clave;
      this._pintar(this._cuadricula(parpadeando));
    }
    if (activo) this._raf = raf(this._tick);
  };

  // Cambia la expresión a mano (sin hablar).
  Ham.prototype.expresion = function (nombre) {
    clearTimeout(this._timerNeutral);
    this._ponerExp(nombre);
    this._clave = '';
    this._despertar();
  };

  Ham.prototype.decir = function (texto, op) {
    op = op || {};
    var self = this;
    this.detener();
    var sep = separarEtiquetas(texto);
    if (!sep.limpio.length) return Promise.resolve();

    var inicios = [], acc = 0;
    sep.segmentos.forEach(function (s) { inicios.push(acc); acc += s.texto.length; });
    var msChar = op.duracionMs ? op.duracionMs / sep.limpio.length : this.op.msPorCaracter;

    var ses = {
      limpio: sep.limpio,
      segmentos: sep.segmentos,
      pos: 0,
      sonando: false,
      actual: -1,
      fin: false,
      limpieza: [],
      segmentoEn: function (p) { var i = 0; while (i + 1 < inicios.length && inicios[i + 1] <= p) i++; return i; },
      actualizar: function () {}
    };
    var escuchar = function (obj, ev, fn) {
      obj.addEventListener(ev, fn);
      ses.limpieza.push(function () { obj.removeEventListener(ev, fn); });
    };
    var terminar = function () { self._terminar(ses); };

    var promesa = new Promise(function (resolve) { ses.resolve = resolve; });
    clearTimeout(this._timerNeutral);
    this._sesion = ses;
    this._proxParpadeo = 0;
    this._emitir('inicio', { limpio: sep.limpio, segmentos: sep.segmentos });

    if (op.audio) {
      // <audio> o new Audio(): la posición sale de currentTime / duration.
      var a = op.audio;
      escuchar(a, 'play', function () { self._despertar(); });
      escuchar(a, 'playing', function () { self._despertar(); });
      escuchar(a, 'ended', terminar);
      escuchar(a, 'error', terminar);
      ses.actualizar = function () {
        var d = a.duration;
        ses.sonando = !a.paused && !a.ended;
        ses.pos = isFinite(d) && d > 0
          ? Math.floor(a.currentTime / d * ses.limpio.length)
          : Math.floor(a.currentTime * 1000 / msChar);
      };
    } else if (op.utterance) {
      // SpeechSynthesisUtterance creada por la app (su texto debe ser HamAvatar.limpiar(texto)).
      var u = op.utterance, tBorde = 0, posBorde = 0;
      escuchar(u, 'start', function () { ses.sonando = true; tBorde = ahora(); self._despertar(); });
      escuchar(u, 'boundary', function (ev) { posBorde = ev.charIndex; tBorde = ahora(); });
      escuchar(u, 'end', terminar);
      escuchar(u, 'error', terminar);
      ses.actualizar = function (t) {
        if (ses.sonando) ses.pos = posBorde + Math.min(14, Math.floor((t - tBorde) / msChar));
      };
    } else if (op.voz === 'navegador' && global.speechSynthesis) {
      // Ham lee solo, una oración por vez (así la expresión coincide exacto).
      var sintetizador = global.speechSynthesis, tB = 0, pB = 0;
      var hablarSegmento = function (i) {
        if (ses.fin) return;
        if (i >= sep.segmentos.length) return terminar();
        var ut = new global.SpeechSynthesisUtterance(sep.segmentos[i].texto);
        if (op.idioma) ut.lang = op.idioma;
        if (op.velocidad) ut.rate = op.velocidad;
        if (op.tono) ut.pitch = op.tono;
        ut.onstart = function () { pB = inicios[i]; tB = ahora(); ses.sonando = true; self._despertar(); };
        ut.onboundary = function (ev) { pB = inicios[i] + ev.charIndex; tB = ahora(); };
        ut.onend = function () { hablarSegmento(i + 1); };
        ut.onerror = terminar;
        sintetizador.speak(ut);
      };
      ses.limpieza.push(function () { sintetizador.cancel(); });
      ses.actualizar = function (t) {
        if (ses.sonando) ses.pos = pB + Math.min(14, Math.floor((t - tB) / msChar));
      };
      sintetizador.cancel();
      hablarSegmento(0);
    } else {
      // Sin audio: tiempo estimado según el largo del texto.
      var t0 = ahora();
      ses.sonando = true;
      ses.actualizar = function (t) {
        ses.pos = Math.floor((t - t0) / msChar);
        if (ses.pos >= ses.limpio.length) terminar();
      };
    }

    this._despertar();
    return promesa;
  };

  // Mover la boca sin texto (por ejemplo mientras llega la respuesta).
  Ham.prototype.hablar = function (si) {
    if (!si) return this.detener();
    this.detener();
    var self = this, t0 = ahora(), relleno = 'ha ma la ba o e ha a, ma o la e. ';
    var ses = {
      limpio: relleno, segmentos: [{ texto: relleno, expresion: this.exp }], pos: 0, sonando: true,
      actual: 0, fin: false, limpieza: [],
      segmentoEn: function () { return 0; },
      actualizar: function (t) { ses.pos = Math.floor((t - t0) / self.op.msPorCaracter) % relleno.length; }
    };
    ses.promesa = new Promise(function (r) { ses.resolve = r; });
    this._sesion = ses;
    this._despertar();
    return ses.promesa;
  };

  Ham.prototype._terminar = function (ses) {
    if (!ses || ses.fin) return;
    ses.fin = true;
    ses.limpieza.forEach(function (f) { try { f(); } catch (e) { /* nada */ } });
    if (this._sesion === ses) this._sesion = null;
    this.hablando = false;
    this._caracter = '';
    var self = this;
    clearTimeout(this._timerNeutral);
    this._timerNeutral = setTimeout(function () {
      if (!self._sesion) { self._ponerExp('neutral', false); self._despertar(); }
    }, this.op.volverNeutralMs);
    this._emitir('fin');
    this._despertar();
    if (ses.resolve) ses.resolve();
  };

  Ham.prototype.detener = function () {
    if (this._sesion) this._terminar(this._sesion);
  };

  Ham.prototype.destruir = function () {
    this.detener();
    clearTimeout(this._timerNeutral);
    if (this._raf) cancelarRaf(this._raf);
    this._raf = 0;
    this.lienzos = [];
    this._oyentes = {};
  };

  function crear(destinos, opciones) {
    var ham = new Ham(opciones);
    [].concat(destinos || []).forEach(function (d) { if (d) ham.agregarLienzo(d); });
    return ham;
  }

  // Dibuja a Ham quieto con una expresión (para avatares de mensajes viejos o miniaturas).
  function dibujarEstatico(lienzo, expresion, escala, opciones) {
    var ham = new Ham(opciones);
    ham.exp = normalizar(expresion);
    ham.agregarLienzo(lienzo, escala);
    return lienzo;
  }

  var api = {
    crear: crear,
    dibujarEstatico: dibujarEstatico,
    separarEtiquetas: separarEtiquetas,
    limpiar: limpiar,
    detectarExpresion: detectarExpresion,
    EXPRESIONES: Object.keys(EXPRESIONES),
    Ham: Ham
  };

  if (typeof module === 'object' && module.exports) module.exports = api;
  global.HamAvatar = api;
})(typeof window !== 'undefined' ? window : this);
