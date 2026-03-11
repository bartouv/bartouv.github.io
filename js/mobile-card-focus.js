// On mobile, highlight whichever post card is most visible in the viewport
function initMobileCardFocus() {
  if (window.innerWidth > 768) return;

  const cards = document.querySelectorAll('.post-card');
  if (!cards.length) return;

  // rootMargin shrinks the top and bottom edges inward, creating a horizontal
  // strip in the middle of the screen — card highlights when it enters that zone
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
