// Scroll reveal + nav-on-scroll polish for GB/DEV Unity Blog
// Progressive enhancement: if JS is off (or reduced-motion), the head gate
// never adds `.js-reveal`, so [data-reveal] elements stay fully visible.
(function () {
  // --- Nav solidify on scroll ---
  function onScroll() {
    var nav = document.querySelector('nav');
    if (nav) nav.classList.toggle('nav-scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  // nav is injected asynchronously by shared-components.js — re-check shortly after load
  onScroll();
  setTimeout(onScroll, 60);
  setTimeout(onScroll, 300);

  // --- Articles horizontal scroller: edge fades + arrow buttons ---
  function initScroller() {
    var wrap = document.querySelector('.scroller-wrap');
    if (!wrap) return;
    var sc = wrap.querySelector('.posts-scroller');
    var prev = wrap.querySelector('.scroller-btn.prev');
    var next = wrap.querySelector('.scroller-btn.next');
    if (!sc) return;

    function update() {
      var max = sc.scrollWidth - sc.clientWidth;
      wrap.classList.toggle('can-prev', sc.scrollLeft > 4);
      wrap.classList.toggle('can-next', sc.scrollLeft < max - 4);
    }
    function step(dir) {
      var card = sc.querySelector('.post-card:not([hidden])');
      var amt = card ? card.getBoundingClientRect().width + 18 : sc.clientWidth * 0.8;
      sc.scrollBy({ left: dir * amt, behavior: 'smooth' });
    }
    if (prev) prev.addEventListener('click', function () { step(-1); });
    if (next) next.addEventListener('click', function () { step(1); });
    sc.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    setTimeout(update, 200);
  }
  initScroller();

  // --- Scroll reveal ---
  var docEl = document.documentElement;
  if (!docEl.classList.contains('js-reveal')) return;

  var els = [].slice.call(document.querySelectorAll('[data-reveal]'));
  if (!els.length) return;

  // Stagger siblings within the same parent for a graceful cascade
  var counts = new Map();
  els.forEach(function (el) {
    var p = el.parentElement;
    var n = counts.get(p) || 0;
    el.style.setProperty('--reveal-delay', Math.min(n, 6) * 70 + 'ms');
    counts.set(p, n + 1);
  });

  if (!('IntersectionObserver' in window)) {
    els.forEach(function (e) { e.classList.add('revealed'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('revealed');
        io.unobserve(en.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  els.forEach(function (e) { io.observe(e); });
})();
