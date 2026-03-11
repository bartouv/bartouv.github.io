// On mobile, highlight the post card whose centre is closest to the viewport centre
function initMobileCardFocus() {
  if (window.innerWidth > 768) return;

  const cards = Array.from(document.querySelectorAll(
    '.post-card:not([hidden]), .podcast-card, .game-card, .project-card'
  ));
  if (!cards.length) return;

  function update() {
    const mid = window.innerHeight / 2;
    let closest = null;
    let closestDist = Infinity;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const dist = Math.abs((rect.top + rect.height / 2) - mid);
      if (dist < closestDist) {
        closestDist = dist;
        closest = card;
      }
    });

    cards.forEach(card => card.classList.remove('in-view'));
    if (closest) closest.classList.add('in-view');
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileCardFocus);
} else {
  initMobileCardFocus();
}
