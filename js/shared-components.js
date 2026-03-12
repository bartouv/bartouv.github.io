// Shared Components for GB/DEV Unity Blog
// Centralizes all duplicated HTML to make the codebase DRY

const themeButtons = `
      <button class="theme-option" data-theme="p14" onclick="setTheme('p14')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#d080ff,#50f090)"></span>
        <span>Purple & Mint</span>
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
      <button class="theme-option" data-theme="p15" onclick="setTheme('p15')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#182030,#4898ff,#40e0cc)"></span>
        <span>Cobalt</span>
      </button>
      <button class="theme-option" data-theme="p16" onclick="setTheme('p16')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#1a2c2a,#38d0b4,#ffb840)"></span>
        <span>Teal & Gold</span>
      </button>
      <button class="theme-option" data-theme="p17" onclick="setTheme('p17')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#141c2c,#38c0f0,#7050f0)"></span>
        <span>Deep Ocean</span>
      </button>
      <button class="theme-option" data-theme="p18" onclick="setTheme('p18')">
        <span class="theme-swatch" style="background:linear-gradient(135deg,#1c2630,#70d0ff,#ff7060)"></span>
        <span>Arctic</span>
      </button>`;

const SharedComponents = {
  // Reading Progress Indicator
  readingProgress: `<!-- Reading Progress Indicator -->
<div class="reading-progress" role="progressbar" aria-label="Reading progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
  <div class="reading-progress-bar"></div>
</div>`,

  // Skip Link for accessibility
  skipLink: `<a href="#main-content" class="skip-link">Skip to main content</a>`,

  // Background glow effects
  backgroundGlows: `<canvas id="bg-canvas" aria-hidden="true" style="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;"></canvas>`,

  // Navigation with theme switcher
  get navigation() { return `<!-- NAV -->
<nav role="navigation" aria-label="Main navigation">
  <div class="nav-logo">Gal Bartouv</div>
  <ul class="nav-links">
    <li><a href="../index.html#posts"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/></svg>Articles</a></li>
    <li><a href="../index.html#about"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-5.33 0-8 2.67-8 4v1h16v-1c0-1.33-2.67-4-8-4z"/></svg>About</a></li>
    <li><a href="../feed.xml" aria-label="RSS Feed" class="nav-rss"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/></svg></a></li>
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
      ${themeButtons}
    </div>
  </div>
</nav>`; },

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
    <a href="../feed.xml" class="footer-rss" aria-label="RSS Feed">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/></svg>
      RSS
    </a>
  </div>
</footer>`,

  // Navigation for index page (with all 5 links using local anchors)
  get navigationIndex() { return `<!-- NAV -->
<nav role="navigation" aria-label="Main navigation">
  <div class="nav-logo">Gal Bartouv</div>
  <ul class="nav-links">
    <li><a href="#posts"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/></svg>Articles</a></li>
    <li><a href="#podcast"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm-6 9a6 6 0 0 0 12 0h2a8 8 0 0 1-7 7.93V21h2v2H9v-2h2v-3.07A8 8 0 0 1 4 10h2z"/></svg>Podcast</a></li>
    <li><a href="#gamejam"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11 15H7v4h10v-4h-4v-4.17A4 4 0 0 0 16 7V5h1V3H7v2h1v2a4 4 0 0 0 3 3.83V15z"/></svg>Game Jam</a></li>
    <li><a href="#projects"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zm10-10h8v8h-8V3zm0 10h8v8h-8v-8z"/></svg>Projects</a></li>
    <li><a href="#about"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-5.33 0-8 2.67-8 4v1h16v-1c0-1.33-2.67-4-8-4z"/></svg>About</a></li>
    <li><a href="feed.xml" aria-label="RSS Feed" class="nav-rss"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/></svg></a></li>
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
      ${themeButtons}
    </div>
  </div>
</nav>`; },

  // Footer for index page (with local anchors)
  footerIndex: `<!-- FOOTER -->
<footer role="contentinfo">
  <div class="footer-copy">© 2024 Gal Bartouv — Unity Dev Blog</div>
  <div class="footer-links">
    <a href="#posts">Articles</a>
    <a href="#about">About</a>
    <a href="feed.xml" class="footer-rss" aria-label="RSS Feed">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/></svg>
      RSS
    </a>
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
  document.addEventListener('DOMContentLoaded', () => { SharedComponents.inject(); initBgCanvas(); });
} else {
  SharedComponents.inject();
  initBgCanvas();
}

function initBgCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const TILE = 200;
  const SPEED = TILE / (60 * 60) * 0.7;
  let offset = 0;

  // Cached theme colors — recomputed once on init and on theme change
  let cachedAccentRgb = '56,192,240';
  let cachedBgColors  = { center: 'rgb(31,52,73)', dark: 'rgb(12,17,26)' };

  function recomputeColors() {
    const s   = getComputedStyle(document.documentElement);
    const hex = (s.getPropertyValue('--accent').trim() || '#38c0f0').replace('#', '');
    cachedAccentRgb = `${parseInt(hex.slice(0,2),16)},${parseInt(hex.slice(2,4),16)},${parseInt(hex.slice(4,6),16)}`;
    const bg     = s.getPropertyValue('--bg').trim()     || '#141c2c';
    const accent = s.getPropertyValue('--accent').trim() || '#38c0f0';
    const parse  = h => [parseInt(h.slice(1,3),16), parseInt(h.slice(3,5),16), parseInt(h.slice(5,7),16)];
    const [bgR,bgG,bgB] = parse(bg);
    const [acR,acG,acB] = parse(accent);
    const t = 0.22;
    cachedBgColors = {
      center: `rgb(${Math.round(bgR+(acR-bgR)*t)},${Math.round(bgG+(acG-bgG)*t)},${Math.round(bgB+(acB-bgB)*t)})`,
      dark:   `rgb(${Math.round(bgR*0.6)},${Math.round(bgG*0.6)},${Math.round(bgB*0.6)})`,
    };
  }

  document.addEventListener('themechange', recomputeColors);

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function drawBrackets(ctx, x, y, scale, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.scale(scale, scale);
    ctx.font = '400 26px "Share Tech Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('{ }', 0, 0);
    ctx.restore();
  }

  function drawDiamond(ctx, x, y, scale, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.scale(scale, scale);
    ctx.beginPath();
    ctx.moveTo(0, -20);
    ctx.lineTo(13, 0);
    ctx.lineTo(0, 20);
    ctx.lineTo(-13, 0);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const { center, dark } = cachedBgColors;
    const cx = canvas.width / 2, cy = canvas.height * 0.45;
    const bgGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.hypot(canvas.width, canvas.height) * 0.6);
    bgGrad.addColorStop(0,    center);
    bgGrad.addColorStop(0.12, center);
    bgGrad.addColorStop(1,    dark);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    offset = (offset + SPEED) % TILE;
    const ox = offset, oy = -offset;
    const halfW = canvas.width / 2;
    for (let tx = -TILE + ox; tx < canvas.width + TILE; tx += TILE) {
      const dist = Math.min(Math.abs(tx + TILE / 2 - halfW) / halfW, 1);
      ctx.fillStyle = `rgba(${cachedAccentRgb},${(0.02 + dist * 0.03).toFixed(4)})`;
      for (let ty = oy % TILE - TILE; ty < canvas.height + TILE; ty += TILE) {
        drawBrackets(ctx, tx+50,  ty+55,  1.0, -12*Math.PI/180);
        drawDiamond( ctx, tx+155, ty+42,  1.2,  10*Math.PI/180);
        drawBrackets(ctx, tx+158, ty+155, 0.85, 18*Math.PI/180);
        drawDiamond( ctx, tx+42,  ty+158, 1.1, -18*Math.PI/180);
      }
    }
    requestAnimationFrame(drawFrame);
  }

  window.addEventListener('resize', resize);
  resize();
  recomputeColors();
  drawFrame();
}
