'use strict';

const UI = (() => {
  const paths = {
    home:'M3 10l9-7 9 7v10H3z M9 20v-6h6v6',
    bot:'M4 4h16v12H9l-5 4z M8 8h8m-8 4h6',
    health:'M2 12h5l2-5 4 10 2-5h7',
    records:'M5 4h14v16H5z M8 8h8m-8 4h8m-8 4h5',
    guias:'M3 5h7l2 2h9v13H3z M7 12h10m-10 4h7',
    settings:'M4 6h16M4 12h16M4 18h16 M8 4v4m8 2v4m-7 2v4',
    earth:'M22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0z M2 12h20 M12 2a16 16 0 0 1 0 20 16 16 0 0 1 0-20z',
    orbit:'M15 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0z M21 4C18 1 1 18 4 21S24 7 21 4z',
    moon:'M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11z',
    mars:'M16 8l5-5m-6 0h6v6 M17 13a6 6 0 1 0-12 0 6 6 0 0 0 12 0z',
    transit:'M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2z',
    pulse:'M12 20S3 14 3 8c0-4 6-5 9 0 3-5 9-4 9 0 0 6-9 12-9 12z',
    pressure:'M4 15a8 8 0 1 1 16 0 M12 15l4-5 M4 18h16',
    temp:'M10 4a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0z M12 9v8',
    glucose:'M12 3c2 4 6 8 6 12a6 6 0 0 1-12 0c0-4 4-8 6-12z',
    sleep:'M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11z M16 4v4m-2-2h4',
    mood:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z M8 14q4 5 8 0 M9 9h.01m6 0h.01',
    sad:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z M8 16q4-5 8 0 M9 9h.01m6 0h.01',
    photo:'M3 7h5l2-3h4l2 3h5v13H3z M16 13a4 4 0 1 0-8 0 4 4 0 0 0 8 0z',
    check:'M5 4h14v17H5z M8 12l3 3 5-6',
    motor:'M6 8h12l3 3-1 6-4 1-3-3h-2l-3 3-4-1-1-6z M7 10v5m-2-2h4m7 0h.01m2-2h.01',
    journal:'M4 4h14v16H4z M8 4v16m3-10h4m-4 4h4',
    alert:'M12 3l10 17H2z M12 9v4m0 3h.01',
    done:'M4 12l5 5 11-11',
    arrow:'M4 12h15m-6-6l6 6-6 6',
    sound:'M3 9h4l5-4v14l-5-4H3z M16 8q4 4 0 8m2-10q6 6 0 12',
    bag:'M4 7h16v13H4z M9 7V4h6v3 M12 10v7m-3-3h6',
    pin:'M20 10c0 5-8 11-8 11s-8-6-8-11a8 8 0 1 1 16 0z M14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0z'
  };
  const icon = name => '<svg class="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="'+(paths[name] || paths.transit)+'"/></svg>';
  const ham = (size = '') => '<img class="ham-avatar '+size+'" alt="" src="assets/ham.svg">';
  return {icon,ham};
})();
