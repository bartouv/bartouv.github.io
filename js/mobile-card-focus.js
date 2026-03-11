// On mobile, highlight whichever post card is most visible in the viewport
function initMobileCardFocus() {
  if (window.innerWidth > 768) return;

  const cards = document.querySelectorAll('.post-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('in-view', entry.isIntersecting);
    });
  }, { threshold: 0.5 });

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
