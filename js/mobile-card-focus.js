// On mobile: highlight the card closest to screen centre,
// and snap to the nearest card when scrolling fully stops.
function initMobileCardFocus() {
  if (window.innerWidth > 768) return;

  const cards = Array.from(document.querySelectorAll(
    '.post-card:not([hidden]), .podcast-card, .game-card, .project-card'
  ));
  if (!cards.length) return;

  const NAV_H = 64;

  // ── Highlight ────────────────────────────────────────────────
  function updateHighlight() {
    const mid = window.innerHeight / 2;
    let closest = null;
    let closestDist = Infinity;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const dist = Math.abs((rect.top + rect.height / 2) - mid);
      if (dist < closestDist) { closestDist = dist; closest = card; }
    });

    cards.forEach(card => card.classList.remove('in-view'));
    if (closest) closest.classList.add('in-view');
  }

  // ── Snap ─────────────────────────────────────────────────────
  let isSnapping = false;

  function snapToNearest() {
    if (isSnapping) return;

    let closest = null;
    let closestDist = Infinity;

    cards.forEach(card => {
      const dist = Math.abs(card.getBoundingClientRect().top - NAV_H);
      if (dist < closestDist) { closestDist = dist; closest = card; }
    });

    if (closest && closestDist > 8) {
      isSnapping = true;
      const targetY = window.scrollY + closest.getBoundingClientRect().top - NAV_H;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
      setTimeout(() => { isSnapping = false; }, 800);
    }
  }

  // ── Listeners ────────────────────────────────────────────────
  window.addEventListener('scroll', updateHighlight, { passive: true });

  // scrollend fires after inertia completes — much more reliable than debounce
  if ('onscrollend' in window) {
    window.addEventListener('scrollend', snapToNearest, { passive: true });
  } else {
    // fallback: wait longer than typical inertia duration
    let snapTimer = null;
    window.addEventListener('scroll', () => {
      clearTimeout(snapTimer);
      snapTimer = setTimeout(snapToNearest, 400);
    }, { passive: true });
  }

  updateHighlight();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileCardFocus);
} else {
  initMobileCardFocus();
}
