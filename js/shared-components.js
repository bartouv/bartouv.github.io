// Shared Components for GB/DEV Unity Blog
// Centralizes all duplicated HTML to make the codebase DRY

const SharedComponents = {
  // Reading Progress Indicator
  readingProgress: `<!-- Reading Progress Indicator -->
<div class="reading-progress" role="progressbar" aria-label="Reading progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
  <div class="reading-progress-bar"></div>
</div>`,

  // Skip Link for accessibility
  skipLink: `<a href="#main-content" class="skip-link">Skip to main content</a>`,

  // Background glow effects
  backgroundGlows: `<div class="bg-glow g1"></div>
<div class="bg-glow g2"></div>`,

  // Navigation with theme switcher
  navigation: `<!-- NAV -->
<nav role="navigation" aria-label="Main navigation">
  <div class="nav-logo">GB<span>/</span>DEV</div>
  <ul class="nav-links">
    <li><a href="../index.html#posts">Articles</a></li>
    <li><a href="../index.html#about">About</a></li>
  </ul>
    <button class="hamburger" aria-label="Toggle navigation menu" aria-expanded="false">
    <span></span>
    <span></span>
    <span></span>
  </button>
<div class="theme-switcher" id="themeSwitcher">
    <button class="theme-toggle-btn" aria-label="Open theme selector" onclick="toggleThemePanel()" title="Switch theme">
      <span class="theme-icon">◑</span>
      <span class="theme-label">Theme</span>
    </button>
        <div class="theme-panel" id="themePanel">
      <div class="theme-panel-title">// SELECT THEME</div>
      <button class="theme-option active" data-theme="p1" onclick="setTheme('p1')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#282a36,#ff79c6,#bd93f9)"></span>
        <span>Dracula</span>
      </button>
      <button class="theme-option" data-theme="p2" onclick="setTheme('p2')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#ffc840,#a030ea)"></span>
        <span>Gold & Violet</span>
      </button>
      <button class="theme-option" data-theme="p3" onclick="setTheme('p3')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#c8ff64,#6040ff)"></span>
        <span>Lime & Violet</span>
      </button>
      <button class="theme-option" data-theme="p4" onclick="setTheme('p4')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#ff9040,#8040ff)"></span>
        <span>Orange & Violet</span>
      </button>
      <button class="theme-option" data-theme="p5" onclick="setTheme('p5')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#ffb860,#6050d0)"></span>
        <span>Amber & Indigo</span>
      </button>
      <button class="theme-option" data-theme="p6" onclick="setTheme('p6')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#e0ff50,#7050ff)"></span>
        <span>Lemon & Violet</span>
      </button>
      <button class="theme-option" data-theme="p7" onclick="setTheme('p7')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#50f0f0,#ff60a0)"></span>
        <span>Cyan & Magenta</span>
      </button>
      <button class="theme-option" data-theme="p8" onclick="setTheme('p8')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#ff80ff,#40d0d0)"></span>
        <span>Magenta & Cyan</span>
      </button>
      <button class="theme-option" data-theme="p9" onclick="setTheme('p9')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#ffa850,#50a0ff)"></span>
        <span>Peach & Blue</span>
      </button>
      <button class="theme-option" data-theme="p10" onclick="setTheme('p10')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#d080ff,#50f090)"></span>
        <span>Purple & Mint</span>
      </button>
      <button class="theme-option" data-theme="p11" onclick="setTheme('p11')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#50f0f0,#ff60a0)"></span>
        <span>Cyan & Magenta</span>
      </button>
      <button class="theme-option" data-theme="p12" onclick="setTheme('p12')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#ff80ff,#40d0d0)"></span>
        <span>Magenta & Cyan</span>
      </button>
      <button class="theme-option" data-theme="p13" onclick="setTheme('p13')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#ffa850,#50a0ff)"></span>
        <span>Peach & Blue</span>
      </button>
      <button class="theme-option" data-theme="p14" onclick="setTheme('p14')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#d080ff,#50f090)"></span>
        <span>Purple & Mint</span>
      </button>
    </div>
</nav>`,

  // Social Share Buttons
  socialShare: `<!-- SOCIAL SHARE -->
<div class="article-share">
  <div class="share-label">// SHARE THIS ARTICLE</div>
  <div class="share-buttons">
    <a href="#" class="share-btn share-twitter" data-platform="twitter" aria-label="Share on Twitter">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
      <span>Twitter</span>
    </a>
    <a href="#" class="share-btn share-linkedin" data-platform="linkedin" aria-label="Share on LinkedIn">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
      <span>LinkedIn</span>
    </a>
    <a href="#" class="share-btn share-reddit" data-platform="reddit" aria-label="Share on Reddit">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
      <span>Reddit</span>
    </a>
    <a href="#" class="share-btn share-hackernews" data-platform="hackernews" aria-label="Share on Hacker News">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z"/>
      </svg>
      <span>HackerNews</span>
    </a>
    <button class="share-btn share-copy" aria-label="Copy link to clipboard">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
      </svg>
      <span>Copy Link</span>
    </button>
  </div>
</div>`,

  // Footer
  footer: `<!-- FOOTER -->
<footer role="contentinfo">
  <div class="footer-copy">© 2024 Gal Bartouv — Unity Dev Blog</div>
  <div class="footer-links">
    <a href="../index.html#posts">Articles</a>
    <a href="../index.html#about">About</a>
  </div>
</footer>`,

  // Navigation for index page (with all 5 links using local anchors)
  navigationIndex: `<!-- NAV -->
<nav role="navigation" aria-label="Main navigation">
  <div class="nav-logo">GB<span>/</span>DEV</div>
  <ul class="nav-links">
    <li><a href="#posts">Articles</a></li>
    <li><a href="#podcast">Podcast</a></li>
    <li><a href="#gamejam">Game Jam</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#about">About</a></li>
  </ul>
    <button class="hamburger" aria-label="Toggle navigation menu" aria-expanded="false">
    <span></span>
    <span></span>
    <span></span>
  </button>
<div class="theme-switcher" id="themeSwitcher">
    <button class="theme-toggle-btn" aria-label="Open theme selector" onclick="toggleThemePanel()" title="Switch theme">
      <span class="theme-icon">◑</span>
      <span class="theme-label">Theme</span>
    </button>
    <div class="theme-panel" id="themePanel">
      <div class="theme-panel-title">// SELECT THEME</div>
      <button class="theme-option active" data-theme="p1" onclick="setTheme('p1')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#282a36,#ff79c6,#bd93f9)"></span>
        <span>Dracula</span>
      </button>
      <button class="theme-option" data-theme="p2" onclick="setTheme('p2')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#1a0e1e,#e080ff,#60d0ff)"></span>
        <span>Purple & Cyan</span>
      </button>
      <button class="theme-option" data-theme="p3" onclick="setTheme('p3')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#0e1a18,#60ffb0,#ff7090)"></span>
        <span>Teal & Pink</span>
      </button>
      <button class="theme-option" data-theme="p4" onclick="setTheme('p4')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#ffc840,#a030ea)"></span>
        <span>Gold & Violet</span>
      </button>
      <button class="theme-option" data-theme="p5" onclick="setTheme('p5')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#c8ff64,#6040ff)"></span>
        <span>Lime & Violet</span>
      </button>
      <button class="theme-option" data-theme="p6" onclick="setTheme('p6')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#1e0e16,#ff60a0,#40e0c0)"></span>
        <span>Rose & Teal</span>
      </button>
      <button class="theme-option" data-theme="p7" onclick="setTheme('p7')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#ff9040,#8040ff)"></span>
        <span>Orange & Violet</span>
      </button>
      <button class="theme-option" data-theme="p8" onclick="setTheme('p8')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#0e181a,#60c8ff,#ffb040)"></span>
        <span>Sky & Orange</span>
      </button>
      <button class="theme-option" data-theme="p9" onclick="setTheme('p9')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#ffb860,#6050d0)"></span>
        <span>Amber & Indigo</span>
      </button>
      <button class="theme-option" data-theme="p10" onclick="setTheme('p10')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#e0ff50,#7050ff)"></span>
        <span>Lemon & Violet</span>
      </button>
      <button class="theme-option" data-theme="p11" onclick="setTheme('p11')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#50f0f0,#ff60a0)"></span>
        <span>Cyan & Magenta</span>
      </button>
      <button class="theme-option" data-theme="p12" onclick="setTheme('p12')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#ff80ff,#40d0d0)"></span>
        <span>Magenta & Cyan</span>
      </button>
      <button class="theme-option" data-theme="p13" onclick="setTheme('p13')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#ffa850,#50a0ff)"></span>
        <span>Peach & Blue</span>
      </button>
      <button class="theme-option" data-theme="p14" onclick="setTheme('p14')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#d080ff,#50f090)"></span>
        <span>Purple & Mint</span>
      </button>
    </div>
  </div>
</nav>`,

  // Footer for index page (with local anchors)
  footerIndex: `<!-- FOOTER -->
<footer role="contentinfo">
  <div class="footer-copy">© 2024 Gal Bartouv — Unity Dev Blog</div>
  <div class="footer-links">
    <a href="#posts">Articles</a>
    <a href="#about">About</a>
  </div>
</footer>`,

  // Inject all components
  inject() {
    // Detect if we're on index page or article page
    const isIndexPage = window.location.pathname.endsWith('index.html') ||
                        window.location.pathname.endsWith('/') ||
                        !window.location.pathname.includes('/articles/');

    // Select appropriate navigation and footer based on page type
    const navToUse = isIndexPage ? this.navigationIndex : this.navigation;
    const footerToUse = isIndexPage ? this.footerIndex : this.footer;

    // Inject reading progress
    const progressPlaceholder = document.getElementById('reading-progress-placeholder');
    if (progressPlaceholder) {
      progressPlaceholder.outerHTML = this.readingProgress;
    }

    // Inject skip link
    const skipLinkPlaceholder = document.getElementById('skip-link-placeholder');
    if (skipLinkPlaceholder) {
      skipLinkPlaceholder.outerHTML = this.skipLink;
    }

    // Inject background glows
    const glowsPlaceholder = document.getElementById('bg-glows-placeholder');
    if (glowsPlaceholder) {
      glowsPlaceholder.outerHTML = this.backgroundGlows;
    }

    // Inject navigation (index or article variant)
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
      navPlaceholder.outerHTML = navToUse;
    }

    // Inject social share
    const sharePlaceholder = document.getElementById('social-share-placeholder');
    if (sharePlaceholder) {
      sharePlaceholder.outerHTML = this.socialShare;
    }

    // Inject footer (index or article variant)
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = footerToUse;
    }
  }
};

// Auto-inject on page load (before other scripts that might depend on these elements)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => SharedComponents.inject());
} else {
  SharedComponents.inject();
}
