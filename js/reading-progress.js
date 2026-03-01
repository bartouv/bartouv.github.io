// Reading Progress Indicator for GB/DEV Unity Blog
// Shows scroll progress through article content and index page

document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.querySelector('.reading-progress-bar');
  const progressContainer = document.querySelector('.reading-progress');

  if (!progressBar || !progressContainer) return;

  // Check if we're on an article page or index page
  const articleBody = document.querySelector('.article-body');
  const isArticlePage = !!articleBody;

  let ticking = false;

  // Calculate and update progress
  const updateProgress = () => {
    // Get scroll position
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    let progress, showThreshold;

    if (isArticlePage) {
      // Article page: Calculate based on article content
      const articleHero = document.querySelector('.article-hero');
      const heroHeight = articleHero ? articleHero.offsetHeight : 0;

      const articleNav = document.querySelector('.article-nav');
      const articleNavTop = articleNav ? articleNav.offsetTop : document.documentElement.scrollHeight;

      const scrollableHeight = articleNavTop - heroHeight;
      const windowHeight = window.innerHeight;

      const scrolled = scrollTop - heroHeight;
      const maxScroll = scrollableHeight - windowHeight;
      progress = Math.max(0, Math.min(100, (scrolled / maxScroll) * 100));
      showThreshold = heroHeight;
    } else {
      // Index page: Calculate based on total document height
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScroll = documentHeight - windowHeight;
      progress = Math.max(0, Math.min(100, (scrollTop / maxScroll) * 100));
      showThreshold = 100; // Show after scrolling 100px
    }

    // Update progress bar width
    progressBar.style.width = `${progress}%`;

    // Update ARIA attribute for accessibility
    progressContainer.setAttribute('aria-valuenow', Math.round(progress));

    // Show/hide progress bar
    if (scrollTop > showThreshold) {
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
