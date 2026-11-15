'use strict';

const Ultrasound = (() => {
  let revision = 0;
  let image;
  let result;
  let status = '';
  let busy = false;
  let confirmed = false;

  function reset() {
    revision++;
    image = result = undefined;
    status = '';
    busy = confirmed = false;
  }

  const visible = () => !!session && view() === 'health' && healthTab === 'physical' && physicalTab === 'ultrasound';
  function refresh() {
    if (visible()) render();
  }

  async function select(file) {
    reset();
    const selected = revision;
    if (!file) return refresh();
    if (!['image/png','image/jpeg','image/webp'].includes(file.type) || file.size > 12 * 1024 * 1024) {
      status = 'Choose a PNG, JPEG or WebP file under 12 MB.';
      return refresh();
    }
    busy = true;
    status = 'Preparing your preview…';
    refresh();
    try {
      const preview = await compressImage(file);
      const src = validPhoto(preview);
      if (!src || src.length > 180000) throw new Error('This image is too large after resizing. Try a smaller image.');
      if (selected !== revision) return;
      image = {src,name:file.name};
      status = 'Review the preview and confirm it is a simulation.';
    } catch (error) {
      if (selected === revision) status = error.message;
    } finally {
      if (selected === revision) { busy = false; refresh(); }
    }
  }

  function setConfirmed(value) {
    confirmed = value;
    const submit = $('ultrasound-form')?.querySelector('button[type="submit"]');
    if (submit) submit.disabled = busy || !image || !confirmed;
  }

  async function analyze() {
    if (!image || !confirmed || busy) return;
    const selected = revision;
    busy = true;
    result = undefined;
    status = 'Ham is examining the training image…';
    refresh();
    try {
      const analysis = await AI.readUltrasound(image.src.split(',')[1]);
      if (selected !== revision) return;
      result = analysis;
      status = 'Analysis completed locally.';
    } catch (error) {
      if (selected === revision) status = error.message;
    } finally {
      if (selected === revision) { busy = false; refresh(); }
    }
  }

  function workspace() {
    const preview = image ? '<figure class="scan-preview"><img src="'+image.src+'" alt="Uploaded simulated ultrasound preview"><figcaption>'+escape(image.name)+'</figcaption></figure>' :
      '<div class="scan-empty">'+UI.icon('pulse')+'<span>Choose an image to preview it here.</span></div>';
    const output = result ? (result.view === 'unclear' ? empty('Ham could not identify a clear ultrasound view in this image.') :
      '<h3>Visible patterns</h3><ul class="plain-list">'+result.observations.map(value => '<li>'+escape(value)+'</li>').join('')+'</ul>')+
      (result.limitations ? '<h3>Limits of this view</h3><p>'+escape(result.limitations)+'</p>' : '') :
      empty('Ham will describe the shapes, brightness and textures visible in the uploaded simulation.');
    return '<div class="workspace-grid scan-layout">'+card('Upload a simulated ultrasound',
      '<p class="muted">Choose a training image from the <strong>Ultrasound Samples</strong> folder next to NOMAD, or upload your own synthetic image.</p>'+
      '<form id="ultrasound-form"><label class="scan-picker"><input id="ultrasound-file" class="scan-file" type="file" accept="image/png,image/jpeg,image/webp"'+(busy ? ' disabled' : '')+'>'+
      '<span class="button compact">'+(image ? 'Choose another image' : 'Choose ultrasound image')+'</span></label>'+
      preview+'<label class="scan-confirm"><input id="ultrasound-confirm" type="checkbox"'+(confirmed ? ' checked' : '')+(!image || busy ? ' disabled' : '')+
      '> I confirm this is a simulated image with no patient data.</label>'+
      '<div class="actions"><button class="button primary" type="submit"'+(!image || busy || !confirmed ? ' disabled' : '')+'>Analyze with Ham</button>'+
      (image ? button('Clear image','clear-ultrasound','compact') : '')+'</div></form>'+
      '<p class="micro" role="status">'+escape(status)+'</p>')+
      card('Simulation analysis','<p class="state-pill">Training only · processed on this computer</p>'+output)+ '</div>';
  }

  return {reset,select,setConfirmed,analyze,workspace};
})();
