// Hero page dynamic effects

// "Dev Blog" role text — the "o" in "Blog" occasionally loses its neon and flickers back on
function initRoleGlitch() {
  const role = document.querySelector('.hero h1 .role');
  if (!role) return;

  // Wrap each non-space character in a span
  const text = role.textContent; // "Dev Blog"
  role.innerHTML = text.split('').map(char =>
    char === ' ' ? ' ' : `<span class="role-char">${char}</span>`
  ).join('');

  // Spans: [D, e, v, B, l, o, g] — "o" is index 5 (space is not wrapped)
  const bChar = role.querySelectorAll('.role-char')[5];
  if (!bChar) return;

  // o lives in the bright state by default
  bChar.style.opacity = '1';

  function glitch() {
    bChar.classList.add('glitching');
    setTimeout(() => {
      bChar.classList.remove('glitching');
      bChar.style.opacity = '1';
      schedule(); // only schedule the next cycle after this one fully completes
    }, 7100);
  }

  function schedule() {
    const delay = 2000 + Math.random() * 4000;
    setTimeout(glitch, delay);
  }

  // Start after the hero has fully animated in
  setTimeout(schedule, 2500);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRoleGlitch);
} else {
  initRoleGlitch();
}
