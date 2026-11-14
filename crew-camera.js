'use strict';

const CrewCamera = (() => {
  const storeName = 'dailyPhotos';
  let database;

  function open() {
    if (!database) {
      database = new Promise((resolve, reject) => {
        const request = indexedDB.open('netin-crew', 1);
        request.onupgradeneeded = () => request.result.createObjectStore(storeName, {keyPath: ['crew', 'date']});
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      }).catch(error => { database = undefined; throw error; });
    }
    return database;
  }

  async function photos(crew, firstDate, lastDate) {
    const db = await open();
    const range = IDBKeyRange.bound([crew, firstDate], [crew, lastDate]);
    return new Promise((resolve, reject) => {
      const request = db.transaction(storeName).objectStore(storeName).getAll(range);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async function latest(crew) {
    const db = await open();
    const range = IDBKeyRange.bound([crew, ''], [crew, '\uffff']);
    return new Promise((resolve, reject) => {
      const request = db.transaction(storeName).objectStore(storeName).openCursor(range, 'prev');
      request.onsuccess = () => resolve(request.result?.value);
      request.onerror = () => reject(request.error);
    });
  }

  async function clearPhotos() {
    const db = await open();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readwrite');
      transaction.oncomplete = resolve;
      transaction.onabort = () => reject(transaction.error);
      transaction.objectStore(storeName).clear();
    });
  }

  async function save(photo, replace = false) {
    const db = await open();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      let saved;
      transaction.oncomplete = () => resolve(saved);
      transaction.onabort = () => reject(transaction.error);
      if (replace) {
        saved = photo;
        store.put(photo);
        return;
      }
      const existing = store.get([photo.crew, photo.date]);
      existing.onsuccess = () => {
        saved = existing.result || photo;
        if (!existing.result) store.add(photo);
      };
    });
  }

  async function capture(video, signal, countdown) {
    if (!navigator.mediaDevices?.getUserMedia) throw new Error('Camera access is unavailable. Open NETIN.exe to use the camera.');
    const camera = navigator.mediaDevices.getUserMedia({
      video: {facingMode: {ideal: 'user'}, width: {ideal: 720}, height: {ideal: 720}},
      audio: false
    });
    const stop = stream => stream?.getTracks().forEach(track => track.stop());
    let stream;
    let timeout;
    const deadline = AbortSignal.any([signal, AbortSignal.timeout(12000)]);
    const interrupted = new Promise((_, reject) => {
      deadline.addEventListener('abort', () => reject(deadline.reason), {once: true});
    });
    const wait = (ms, signal) => new Promise((resolve, reject) => {
      if (signal.aborted) return reject(signal.reason);
      const abort = () => { clearTimeout(timeout); reject(signal.reason); };
      signal.addEventListener('abort', abort, {once: true});
      timeout = setTimeout(() => { signal.removeEventListener('abort', abort); resolve(); }, ms);
    });

    try {
      stream = await Promise.race([camera, interrupted]);
      video.srcObject = stream;
      void video.play().catch(() => {});
      while (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || !video.videoWidth) await wait(60, deadline);
      for (let seconds = 3; seconds > 0; seconds--) {
        countdown(seconds);
        await wait(1000, signal);
      }
      if (stream.getVideoTracks()[0]?.readyState !== 'live') throw new Error('The camera disconnected. Reconnect it and try again.');
      const canvas = document.createElement('canvas');
      const scale = Math.min(1, 640 / Math.max(video.videoWidth, video.videoHeight));
      canvas.width = Math.round(video.videoWidth * scale);
      canvas.height = Math.round(video.videoHeight * scale);
      canvas.getContext('2d', {alpha: false}).drawImage(video, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL('image/jpeg', 0.78);
    } finally {
      if (stream) stop(stream);
      else void camera.then(stop, () => {});
      video.srcObject = null;
    }
  }

  function message(error) {
    if (error.name === 'NotAllowedError' || error.name === 'SecurityError') return 'Camera access was denied. Allow desktop apps to access the camera in Windows Settings and try again.';
    if (error.name === 'NotFoundError') return 'No camera was found. Connect a camera or open the camera shutter and try again.';
    if (error.name === 'NotReadableError' || error.name === 'AbortError') return 'The camera is unavailable. Close other apps using it and try again.';
    if (error.name === 'TimeoutError') return 'The camera took too long to start. Check it and try again.';
    return error.message || 'The camera could not take a photo.';
  }

  return {photos, latest, clearPhotos, save, capture, message};
})();
