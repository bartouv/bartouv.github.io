// On mobile, highlight whichever post card is most visible in the viewport
function initMobileCardFocus() {
  if (window.innerWidth > 768) return;

  const cards = document.querySelectorAll('.post-card');
  if (!cards.length) return;

  // rootMargin shrinks the detection zone to the middle 40% of the screen,
  // so a card is "in view" when it passes through the centre of the viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('in-view', entry.isIntersecting);
    });
  }, { rootMargin: '-30% 0px -30% 0px', threshold: 0 });

  cards.forEach(card => observer.observe(card));

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      cards.forEach(card => card.classList.remove('in-view'));
    }
  }, { passive: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileCardFocus);
} else {
  initMobileCardFocus();
}
