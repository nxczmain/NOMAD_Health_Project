'use strict';

globalThis.hamPoseFor = function hamPoseFor({model,busy,urgent,typing,speaking} = {}) {
  if (urgent) return 'serio';
  if (['offline','missing','unchecked','checking'].includes(model)) return 'dormido';
  if (busy) return 'pensando';
  if (typing && !speaking) return 'escuchando';
  return 'neutral';
};
