// On mobile: highlight the card closest to screen centre,
// and snap to the nearest card when scrolling stops.
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
  let snapTimer = null;
  let isSnapping = false;

  function snapToNearest() {
    let closest = null;
    let closestDist = Infinity;

    cards.forEach(card => {
      const dist = Math.abs(card.getBoundingClientRect().top - NAV_H);
      if (dist < closestDist) { closestDist = dist; closest = card; }
    });

    if (closest && closestDist > 5) {
      isSnapping = true;
      const targetY = window.scrollY + closest.getBoundingClientRect().top - NAV_H;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
      setTimeout(() => { isSnapping = false; }, 600);
    }
  }

  // ── Scroll listener ──────────────────────────────────────────
  window.addEventListener('scroll', () => {
    updateHighlight();
    if (isSnapping) return;
    clearTimeout(snapTimer);
    snapTimer = setTimeout(snapToNearest, 150);
  }, { passive: true });

  updateHighlight();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileCardFocus);
} else {
  initMobileCardFocus();
}
