// Screen-only helper for published notes: scales the fixed A4 sheets down to the viewport width
// (phones, the in-lesson iframe). Printing ignores it, so PDFs keep true A4 size.
(function () {
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
