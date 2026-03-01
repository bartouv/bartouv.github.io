// Reading Progress Indicator for GB/DEV Unity Blog
// Shows scroll progress through article content

document.addEventListener('DOMContentLoaded', () => {
  // Only run on article pages
  const articleBody = document.querySelector('.article-body');
  if (!articleBody) return;

  const progressBar = document.querySelector('.reading-progress-bar');
  const progressContainer = document.querySelector('.reading-progress');

  if (!progressBar || !progressContainer) return;

  let ticking = false;

  // Calculate and update progress
  const updateProgress = () => {
    // Get scroll position
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Get article hero height (we want progress to start after hero)
    const articleHero = document.querySelector('.article-hero');
    const heroHeight = articleHero ? articleHero.offsetHeight : 0;

    // Calculate total scrollable height (excluding footer area)
    const articleNav = document.querySelector('.article-nav');
    const articleNavTop = articleNav ? articleNav.offsetTop : document.documentElement.scrollHeight;

    const scrollableHeight = articleNavTop - heroHeight;
    const windowHeight = window.innerHeight;

    // Calculate progress percentage
    const scrolled = scrollTop - heroHeight;
    const maxScroll = scrollableHeight - windowHeight;
    const progress = Math.max(0, Math.min(100, (scrolled / maxScroll) * 100));

    // Update progress bar width
    progressBar.style.width = `${progress}%`;

    // Update ARIA attribute for accessibility
    progressContainer.setAttribute('aria-valuenow', Math.round(progress));

    // Show/hide progress bar
    if (scrollTop > heroHeight) {
      progressContainer.classList.add('visible');
    } else {
      progressContainer.classList.remove('visible');
    }

    ticking = false;
  };

  // Throttled scroll handler using requestAnimationFrame
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateProgress();
      });
      ticking = true;
    }
  };

  // Initialize
  updateProgress();

  // Listen to scroll events
  window.addEventListener('scroll', onScroll, { passive: true });

  // Update on window resize
  window.addEventListener('resize', updateProgress, { passive: true });
});
