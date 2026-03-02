// Theme Switcher for GB/DEV Unity Blog
// Manages 14 color themes with localStorage persistence

const themes = {
  p1:  { '--bg':'#3a3c48','--bg2':'#40424e','--bg3':'#494a58','--panel':'#56586c','--border':'rgba(189,147,249,0.3)','--accent':'#ff79c6','--accent2':'#bd93f9','--accent3':'#8be9fd','--text':'#f8f8f2','--muted':'#6272a4','--dim':'#56586c','--glow1':'rgba(255,121,198,0.1)','--glow2':'rgba(189,147,249,0.1)','--grid':'rgba(98,114,164,0.05)' },
  p2:  { '--bg':'#2c1e30','--bg2':'#34263a','--bg3':'#3c2e44','--panel':'#44364e','--border':'rgba(200,100,255,0.25)','--accent':'#e080ff','--accent2':'#60d0ff','--accent3':'#ff90d0','--text':'#f4e8ff','--muted':'#a888c8','--dim':'#443a4a','--glow1':'rgba(224,128,255,0.1)','--glow2':'rgba(96,208,255,0.1)','--grid':'rgba(160,100,200,0.05)' },
  p3:  { '--bg':'#202c2a','--bg2':'#26362e','--bg3':'#2c4038','--panel':'#324a42','--border':'rgba(100,255,200,0.25)','--accent':'#60ffb0','--accent2':'#ff7090','--accent3':'#80ffc0','--text':'#e8fff4','--muted':'#88c8b0','--dim':'#3a4a42','--glow1':'rgba(96,255,176,0.1)','--glow2':'rgba(255,112,144,0.1)','--grid':'rgba(80,200,160,0.05)' },
  p4:  { '--bg':'#28203a','--bg2':'#302446','--bg3':'#382e52','--panel':'#402b5e','--border':'rgba(180,60,240,0.22)','--accent':'#ffc840','--accent2':'#a030ea','--accent3':'#ffaa20','--text':'#fff8e8','--muted':'#b09868','--dim':'#4e3a3a','--glow1':'rgba(255,190,40,0.08)','--glow2':'rgba(160,50,234,0.08)','--grid':'rgba(160,50,234,0.04)' },
  p5:  { '--bg':'#2a2c20','--bg2':'#303426','--bg3':'#363c2c','--panel':'#3c4432','--border':'rgba(200,255,100,0.22)','--accent':'#c8ff64','--accent2':'#6040ff','--accent3':'#e0ff90','--text':'#f0ffe8','--muted':'#a8c888','--dim':'#4a4a3a','--glow1':'rgba(200,255,100,0.08)','--glow2':'rgba(96,64,255,0.08)','--grid':'rgba(160,200,80,0.04)' },
  p6:  { '--bg':'#302028','--bg2':'#3a2632','--bg3':'#442c3c','--panel':'#4e3246','--border':'rgba(255,100,160,0.25)','--accent':'#ff60a0','--accent2':'#40e0c0','--accent3':'#ff90c0','--text':'#ffe8f4','--muted':'#c888a8','--dim':'#4a3a42','--glow1':'rgba(255,96,160,0.1)','--glow2':'rgba(64,224,192,0.1)','--grid':'rgba(200,80,140,0.05)' },
  p7:  { '--bg':'#2c2038','--bg2':'#362644','--bg3':'#403250','--panel':'#4a325c','--border':'rgba(180,60,240,0.22)','--accent':'#ff9040','--accent2':'#8040ff','--accent3':'#ffb070','--text':'#fff0e8','--muted':'#c89878','--dim':'#4e3a3a','--glow1':'rgba(255,140,60,0.08)','--glow2':'rgba(128,64,255,0.08)','--grid':'rgba(128,64,255,0.04)' },
  p8:  { '--bg':'#202a2c','--bg2':'#26363c','--bg3':'#2c4248','--panel':'#324e58','--border':'rgba(100,200,255,0.25)','--accent':'#60c8ff','--accent2':'#ffb040','--accent3':'#80d0ff','--text':'#e8f4ff','--muted':'#88b0c8','--dim':'#3a4a52','--glow1':'rgba(96,200,255,0.1)','--glow2':'rgba(255,176,64,0.1)','--grid':'rgba(80,160,200,0.05)' },
  p9:  { '--bg':'#2c2420','--bg2':'#362a28','--bg3':'#403028','--panel':'#4a362e','--border':'rgba(240,120,60,0.22)','--accent':'#ffb860','--accent2':'#6050d0','--accent3':'#ffd090','--text':'#fff4e8','--muted':'#c8a888','--dim':'#4e3e3a','--glow1':'rgba(255,180,90,0.08)','--glow2':'rgba(96,80,208,0.08)','--grid':'rgba(96,80,208,0.04)' },
  p10: { '--bg':'#282a20','--bg2':'#2e3026','--bg3':'#34362c','--panel':'#3a3c32','--border':'rgba(220,255,80,0.22)','--accent':'#e0ff50','--accent2':'#7050ff','--accent3':'#f0ff80','--text':'#f4ffe8','--muted':'#b0c890','--dim':'#4a4a3a','--glow1':'rgba(220,255,80,0.08)','--glow2':'rgba(112,80,255,0.08)','--grid':'rgba(112,80,255,0.04)' },
  p11: { '--bg':'#202c2c','--bg2':'#263434','--bg3':'#2c3c3c','--panel':'#324444','--border':'rgba(80,240,240,0.22)','--accent':'#50f0f0','--accent2':'#ff60a0','--accent3':'#80ffff','--text':'#e8fff8','--muted':'#88c8c0','--dim':'#3a4a4a','--glow1':'rgba(80,240,240,0.08)','--glow2':'rgba(255,96,160,0.08)','--grid':'rgba(80,200,200,0.04)' },
  p12: { '--bg':'#2c202c','--bg2':'#362644','--bg3':'#402c50','--panel':'#4a325c','--border':'rgba(240,80,240,0.22)','--accent':'#ff80ff','--accent2':'#40d0d0','--accent3':'#ffb0ff','--text':'#ffe8ff','--muted':'#c090c8','--dim':'#4a3a4a','--glow1':'rgba(255,128,255,0.08)','--glow2':'rgba(64,208,208,0.08)','--grid':'rgba(180,80,180,0.04)' },
  p13: { '--bg':'#2a2620','--bg2':'#342c24','--bg3':'#3e322a','--panel':'#483830','--border':'rgba(255,160,80,0.22)','--accent':'#ffa850','--accent2':'#50a0ff','--accent3':'#ffc080','--text':'#ffece8','--muted':'#c8a898','--dim':'#4e423a','--glow1':'rgba(255,168,80,0.08)','--glow2':'rgba(80,160,255,0.08)','--grid':'rgba(80,160,255,0.04)' },
  p14: { '--bg':'#26202c','--bg2':'#2e2638','--bg3':'#362c44','--panel':'#3e3250','--border':'rgba(200,100,255,0.22)','--accent':'#d080ff','--accent2':'#50f090','--accent3':'#e0a0ff','--text':'#f0e8ff','--muted':'#b090c8','--dim':'#423a4a','--glow1':'rgba(208,128,255,0.08)','--glow2':'rgba(80,240,144,0.08)','--grid':'rgba(160,80,200,0.04)' }
};

function setTheme(name) {
  const t = themes[name] || themes['p1'];
  const root = document.documentElement;
  Object.entries(t).forEach(([k, v]) => {
    if (!k.startsWith('--glow') && !k.startsWith('--grid')) {
      root.style.setProperty(k, v);
    }
  });
  const style = document.getElementById('gridStyle') || (() => {
    const s = document.createElement('style');
    s.id = 'gridStyle';
    document.head.appendChild(s);
    return s;
  })();
  style.textContent = 'body::before{background-image:linear-gradient(' + t['--grid'] + ' 1px,transparent 1px),linear-gradient(90deg,' + t['--grid'] + ' 1px,transparent 1px);background-size:40px 40px;}';
  const g1 = document.querySelector('.bg-glow.g1');
  const g2 = document.querySelector('.bg-glow.g2');
  if (g1) g1.style.background = 'radial-gradient(circle,' + t['--glow1'] + ',transparent 70%)';
  if (g2) g2.style.background = 'radial-gradient(circle,' + t['--glow2'] + ',transparent 70%)';
  document.querySelectorAll('.theme-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === name);
  });
  localStorage.setItem('gb-theme', name);
  toggleThemePanel(false);
}

function toggleThemePanel(forceClose) {
  const panel = document.getElementById('themePanel');
  if (forceClose === false) { panel.classList.remove('open'); return; }
  panel.classList.toggle('open');
}

document.addEventListener('click', (e) => {
  if (!document.getElementById('themeSwitcher').contains(e.target)) {
    document.getElementById('themePanel').classList.remove('open');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('gb-theme') || 'p1';
  setTheme(saved);

  // Update article count dynamically
  const articleCount = document.querySelectorAll('.posts-grid .post-card:not([hidden])').length;
  const articleCountEl = document.getElementById('article-count');
  if (articleCountEl) {
    articleCountEl.textContent = `// ${articleCount} ARTICLE${articleCount !== 1 ? 'S' : ''}`;
  }
});
