// On mobile: highlight the card closest to screen centre
function initMobileCardFocus() {
  if (window.innerWidth > 768) return;

  const cards = Array.from(document.querySelectorAll(
    '.post-card:not([hidden]), .podcast-card, .game-card, .project-card'
  ));
  if (!cards.length) return;

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

  window.addEventListener('scroll', updateHighlight, { passive: true });
  updateHighlight();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileCardFocus);
} else {
  initMobileCardFocus();
}
