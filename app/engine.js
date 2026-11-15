'use strict';

(function (root) {
  const environments = {
    earth: { name: 'Earth', mission: 'Ground', location: 'Ground or training facility', context: 'Earth gravity', question: 'Did your activity or surroundings change during your shift on Earth?' },
    orbit: { name: 'Earth orbit', mission: 'Horizon', location: 'Orbital station', context: 'Microgravity', question: 'Did you notice dizziness, disorientation, or changes in vision during your shift?' },
    transit: { name: 'Deep space', mission: 'Odyssey', location: 'Transit vehicle', context: 'Interplanetary transit', question: 'Did your sleep schedule, concentration, or sense of isolation change during transit?' },
    moon: { name: 'Lunar surface', mission: 'Selene', location: 'Lunar habitat', context: 'Partial gravity', question: 'After working on the surface, did you notice changes in balance, irritation, or dust exposure?' },
    mars: { name: 'Martian surface', mission: 'Ares', location: 'Martian habitat', context: 'Partial gravity', question: 'After your surface duties, did you notice fatigue, changes in mobility, or difficulty communicating with the crew?' }
  };
  const metrics = [
    { key: 'pulse', label: 'Heart rate', short: 'Pulse', unit: 'bpm', base: 70, deviation: 12, min: 1, max: 300, step: 1, prompt: 'What was your resting pulse in bpm?' },
    { key: 'pressure', label: 'Blood pressure', short: 'Pressure', unit: 'mmHg', base: [117, 75], deviation: [15, 10], prompt: 'What were your blood pressure readings in mmHg, for example 118/76?' },
    { key: 'temp', label: 'Temperature', short: 'Temp.', unit: '°C', base: 36.6, deviation: 0.6, min: 25, max: 50, step: 0.1, prompt: 'What was your temperature in °C? Use the same method when comparing readings.' },
    { key: 'glucose', label: 'Blood glucose', short: 'Glucose', unit: 'mg/dL', base: 94, deviation: 18, min: 1, max: 1000, step: 1, prompt: 'If you checked your blood glucose, what was the result in mg/dL?' },
    { key: 'sleep', label: 'Sleep duration', short: 'Sleep', unit: 'h', base: 7.5, deviation: 1, min: 0, max: 24, step: 0.1, prompt: 'How many hours did you sleep in the last 24 hours?' },
    { key: 'mood', label: 'Mood', short: 'Mood', unit: '/ 10', base: 8, deviation: 2, min: 1, max: 10, step: 1, prompt: 'How was your mood from 1 to 10?' }
  ];
  const steps = [
    { key: 'impact', title: 'Physical condition', prompt: 'How do you feel physically, and does it affect your duties?',
      options: { none: 'No discomfort', mild: 'Some discomfort', task: 'It affects my duties', urgent: 'I need help on board' } },
    { key: 'sleep', title: 'Sleep' }, { key: 'mood', title: 'Mood' },
    { key: 'pulse', title: 'Heart rate' }, { key: 'pressure', title: 'Blood pressure' },
    { key: 'temp', title: 'Temperature' }, { key: 'glucose', title: 'Blood glucose' },
    { key: 'context', title: 'Mission environment' },
    { key: 'note', title: 'Observations', prompt: 'Add notes about symptoms, when they started, shift changes, or a photo for review.' }
  ];
  const labels = { empty: 'No reading', close: 'Near baseline', review: 'Review' };
  const dutyImpact = {none: 'No impact reported', some: 'Some difficulty concentrating or working', task: 'It affected mission duties'};
  const format = (value) => Array.isArray(value) ? value.join('/') : value ?? '–';
  const metricByKey = (key) => metrics.find((metric) => metric.key === key);
  const medicalHelp = 'Contact the crew medical officer promptly using the mission procedure.';
  const lowTemperatureSource = 'https://www.cdc.gov/winter-weather/prevention/index.html';

  function hasLowBodyTemperature(entry) {
    const temperature = entry?.values?.temp;
    return !!entry && !entry.sample && Number.isFinite(temperature) && temperature < 35;
  }

  function detectEnvironmentChange(input) {
    const text = String(input).toLowerCase().replace(/[’‘]/g, "'").trim();
    if (/[?]/.test(text) || /\b(?:not|never|if|when|whether|tomorrow|yesterday|last night|last week|planning|will|might|could|en route|on our way|on my way|hypothetically|before|wish)\b/.test(text)) return null;
    const report = /^(?:(?:hey|update|mission update)[,:]\s*)?(?:we(?:'re| are|'ve| have)?|i(?:'m| am|'ve| have)?)\s+(?:(?:just|already|now)\s+)?(?:(?:arrived|landed|entered|reached|returned|moved|switched|transferred|am|are|currently|now|back)\s+)*/.exec(text);
    const command = /^(?:please\s+)?(?:switch|change|set)\s+(?:(?:the|my|our)\s+)?(?:environment\s+)?to\s+/.exec(text);
    if (!report && !command) return null;
    let destination = text.slice((report || command)[0].length).replace(/^from\s+.+?\s+(?=to\s)/, '');
    destination = destination.replace(/^(?:(?:at|in|to|on|the|a|an|our|now|back)\s+)+/, '');
    if (/^(?:(?:lunar|martian|mars|moon)\s+orbit|orbit(?:ing)?\s+(?:around\s+)?(?:the\s+)?(?:moon|mars))\b/.test(destination)) return 'transit';
    if (/^(?:moon|lunar\s+(?:surface|habitat|base))\b/.test(destination)) return 'moon';
    if (/^(?:mars|martian\s+(?:surface|habitat|base))\b/.test(destination)) return 'mars';
    if (/^(?:(?:low\s+)?earth\s+orbit|leo|iss|international space station|orbital station|orbit)\b/.test(destination)) return 'orbit';
    if (/^(?:deep space|interplanetary(?: space| transit)?|space transit)\b/.test(destination)) return 'transit';
    return null;
  }

  function dateKey(date = new Date()) {
    return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
  }
  function daysAgo(days) {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return dateKey(date);
  }

  function status(metric, value) {
    if (value == null) return 'empty';
    const different = Array.isArray(value)
      ? value.some((part, index) => Math.abs(part - metric.base[index]) >= metric.deviation[index])
      : (['sleep', 'mood'].includes(metric.key) ? metric.base - value : Math.abs(metric.base - value)) >= metric.deviation - 0.00001;
    return different ? 'review' : 'close';
  }

  function parseMetric(metric, input) {
    const value = input.trim().replace(',', '.');
    if (metric.key === 'pressure') {
      const match = /^(\d{2,3})\s*\/\s*(\d{2,3})$/.exec(value);
      if (match && +match[1] > +match[2] && +match[1] <= 320 && +match[2] >= 10) return [+match[1], +match[2]];
      throw new Error('Enter two readings, higher value first, for example 118/76.');
    }
    const number = Number(value);
    const decimals = metric.step === 1 ? /^\d+$/ : /^\d+(?:\.\d)?$/;
    if (!decimals.test(value) || number < metric.min || number > metric.max) {
      throw new Error('Enter a value from ' + metric.min + ' to ' + metric.max + (metric.step === 1 ? ' without decimals.' : ' with at most one decimal.'));
    }
    return number;
  }

  function evaluate(entry, profile) {
    const flags = metrics.filter((metric) => status(metric, entry.values[metric.key]) === 'review')
      .map((metric) => metric.label + ' ' + format(entry.values[metric.key]) + ' ' + metric.unit + ' (demo baseline ' + format(metric.base) + ')');
    const impact = entry.values.impact;
    const coverage = metrics.filter((metric) => entry.values[metric.key] != null).length;
    const hasObservation = Boolean(entry.values.context || entry.values.note || entry.image);
    let attention = 'log';
    const lowTemperature = hasLowBodyTemperature(entry);
    if (impact === 'urgent' || lowTemperature) attention = 'urgent';
    else if (impact === 'task' || impact === 'mild' || entry.values.moodImpact === 'task' || flags.length || hasObservation) attention = 'review';
    else if (coverage < metrics.length || impact !== 'none') attention = 'incomplete';
    if (entry.values.moodImpact === 'task') flags.push('Emotional state affected mission duties (crew report)');
    return {
      flags, attention, coverage,
      title: { urgent: 'Request help on board', review: 'Crew medical review', incomplete: 'Partial check-in', log: 'Routine log' }[attention],
      action: { urgent: lowTemperature ? 'Contact the crew medical officer now and report the low temperature reading.' : medicalHelp,
        review: 'Share the recorded observations and readings with the crew medical officer.',
        incomplete: 'You can edit the check-in to add missing readings.', log: 'Keep recording your readings and observations.' }[attention],
      history: ['review', 'urgent'].includes(attention) ? profile.history.trim() : ''
    };
  }

  function weekly(records, env, length = 7) {
    return Array.from({ length }, (_, index) => {
      const date = daysAgo(length - 1 - index);
      return { date, entry: records.find((entry) => entry.env === env && entry.date === date) };
    });
  }

  function initialState() {
    const sleeps = [7.4, 7.7, 7.2, 7.5, 6.8, 6.2];
    const moods = [8, 8, 9, 8, 7, 7];
    return {
      env: 'moon',
      profile: { name: 'Alex Vega', role: 'Mission specialist', history: 'Dizziness during a gravity transition in training.', allergies: 'No allergies recorded in this simulation.', medical: 'Dr. Lina Torres' },
      records: sleeps.map((sleep, index) => ({
        env: 'moon', date: daysAgo(6 - index), sample: true, image: null, review: '',
        values: { pulse: [69, 71, 73, 69, 71, 72][index], pressure: [118, 76], temp: 36.6, glucose: 94, sleep, mood: moods[index], impact: 'none', context: '', note: '' }
      })),
      drafts: {}, transitions: []
    };
  }

  const engine = { environments, metrics, steps, labels, dutyImpact, format, metricByKey, medicalHelp, lowTemperatureSource, hasLowBodyTemperature,
    detectEnvironmentChange, dateKey, status, parseMetric, evaluate, weekly, initialState };
  root.AstraEngine = engine;
  if (typeof module !== 'undefined') module.exports = engine;
})(globalThis);
