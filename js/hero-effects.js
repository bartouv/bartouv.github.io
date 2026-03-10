// Hero page dynamic effects

// "Dev Blog" role text — all letters flicker off and back on together
function initRoleGlitch() {
  const role = document.querySelector('.hero h1 .role');
  if (!role) return;

  // Wrap each non-space character in a span
  const text = role.textContent; // "Dev Blog"
  role.innerHTML = text.split('').map(char =>
    char === ' ' ? ' ' : `<span class="role-char">${char}</span>`
  ).join('');

  // Spans: [D, e, v, B, l, o, g] — pick "e" (1) and "o" (5)
  const all = role.querySelectorAll('.role-char');
  const chars = [all[1], all[5]];
  if (!chars[0] || !chars[1]) return;

  function glitch() {
    chars.forEach(char => char.classList.add('glitching'));


    setTimeout(() => {
      chars.forEach(char => char.classList.remove('glitching'));
      schedule(); // only schedule the next cycle after this one fully completes
    }, 7100);
  }

  function schedule() {
    const delay = 2000 + Math.random() * 4000;
    setTimeout(glitch, delay);
  }

  // Trigger on page show, then cycle randomly
  setTimeout(glitch, 2000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRoleGlitch);
} else {
  initRoleGlitch();
}
