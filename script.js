const nav = document.querySelector('.nav');
const revealItems = document.querySelectorAll('.reveal');
const sections = document.querySelectorAll('.observe-section');
const navLinks = document.querySelectorAll('.nav-links a');
const railLinks = document.querySelectorAll('.section-rail a');
const progressBar = document.querySelector('.progress span');
const mouseGlow = document.querySelector('.mouse-glow');
const bgPhoto = document.querySelector('.bg-photo');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => {
  if (!item.classList.contains('visible')) revealObserver.observe(item);
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
    railLinks.forEach((link) => link.classList.toggle('active', link.dataset.section === id));
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

sections.forEach((section) => sectionObserver.observe(section));

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
  nav.classList.toggle('scrolled', scrollTop > 30);
  progressBar.style.width = `${Math.min(progress, 100)}%`;
}

window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();

if (window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    mouseGlow.style.left = `${event.clientX}px`;
    mouseGlow.style.top = `${event.clientY}px`;

    const x = (event.clientX / window.innerWidth - 0.5) * -8;
    const y = (event.clientY / window.innerHeight - 0.5) * -5;
    bgPhoto.style.setProperty('--bg-x', `${x}px`);
    bgPhoto.style.setProperty('--bg-y', `${y}px`);
  }, { passive: true });
}
