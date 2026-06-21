// Nav scroll state
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const navLinks = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  navLinks.classList.toggle('open', !open);
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
  });
});

// Respect reduced motion
const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
const applyMotion = () => {
  const state = mq.matches ? 'paused' : 'running';
  document.querySelectorAll(
    '.ticker__track, .ring, .fcard, .glitch::before, .glitch::after'
  ).forEach(el => (el.style.animationPlayState = state));
};
mq.addEventListener('change', applyMotion);
applyMotion();
