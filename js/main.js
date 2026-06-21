// Nav scroll state
const nav = document.getElementById('nav');
const scrollHandler = () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
};
window.addEventListener('scroll', scrollHandler, { passive: true });
scrollHandler();

// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const navLinks = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('open', !expanded);
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
  });
});

// Reduce motion: pause marquee and orbits
const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
const applyMotion = () => {
  const paused = mq.matches ? 'paused' : 'running';
  document.querySelectorAll('.marquee-track, .orbit, .float-card, .glitch::before, .glitch::after')
    .forEach(el => { el.style.animationPlayState = paused; });
};
mq.addEventListener('change', applyMotion);
applyMotion();
