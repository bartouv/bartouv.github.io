// Scroll-spy: highlights the nav link matching the current section
function initScrollSpy() {
  const ids = ['posts', 'podcast', 'gamejam', 'projects', 'about'];
  const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
  const links = document.querySelectorAll('.nav-links a[href^="#"]');

  let paused = false;
  let resumeTimer = null;

  function update() {
    if (paused) return;
    const scrollY = window.scrollY + 80;
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50;

    let current = null;
    if (atBottom) {
      current = sections[sections.length - 1]?.id;
    } else {
      for (const section of sections) {
        if (section.offsetTop <= scrollY) current = section.id;
      }
    }

    links.forEach(link => {
      const id = link.getAttribute('href').replace('#', '');
      link.classList.toggle('nav-active', id === current);
    });
  }

  // On click: immediately activate the clicked link and pause spy until scroll settles
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('nav-active'));
      link.classList.add('nav-active');
      paused = true;
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        paused = false;
        update();
      }, 1000);
    });
  });

  window.addEventListener('scroll', update, { passive: true });
  update();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollSpy);
} else {
  initScrollSpy();
}
