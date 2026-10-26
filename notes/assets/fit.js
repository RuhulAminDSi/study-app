// Screen-only helper for published notes.
// ?view=web → simple flowing web page (no A4 sheets), used as the default view inside lessons.
// otherwise → scales the fixed A4 sheets down to narrow viewports. Printing is never affected.
(function () {
  // The sources have no viewport meta, so phones laid the page out 980px wide: the web view's
  // narrow-screen rules (one column, High-yield list unfloated) never applied and text was tiny.
  if (!document.querySelector('meta[name="viewport"]')) {
    var vp = document.createElement('meta');
    vp.name = 'viewport';
    vp.content = 'width=device-width, initial-scale=1';
    document.head.appendChild(vp);
  }
  if (/[?&]view=web\b/.test(location.search)) {
    document.documentElement.classList.add('web');
    return;
  }
  var PAGE_PX = 210 * 96 / 25.4 + 24; // A4 width in CSS px plus a small gutter
  var printing = window.matchMedia ? window.matchMedia('print') : null;
  function fit() {
    if (printing && printing.matches) { document.body.style.zoom = ''; return; }
    var scale = Math.min(1, document.documentElement.clientWidth / PAGE_PX);
    document.body.style.zoom = scale < 1 ? String(scale) : '';
  }
  window.addEventListener('resize', fit);
  window.addEventListener('beforeprint', function () { document.body.style.zoom = ''; });
  window.addEventListener('afterprint', fit);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fit); else fit();
})();
