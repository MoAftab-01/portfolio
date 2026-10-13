/**
 * Portfolio JavaScript - Modular & Performant
 * Handles scroll animations, navigation, and interactions
 */

// ========== DOM CACHING ==========
const nav = document.querySelector('.nav');
const revealItems = document.querySelectorAll('.reveal');
const sections = document.querySelectorAll('.observe-section');
const navLinks = document.querySelectorAll('.nav-links a');
const railLinks = document.querySelectorAll('.section-rail a');
const progressBar = document.querySelector('.progress span');
const mouseGlow = document.querySelector('.mouse-glow');
const bgPhoto = document.querySelector('.bg-photo');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mobileMenuButton = document.querySelector('.mobile-menu-button');

// Cache DOM elements for better performance
const domCache = { nav, progressBar, mouseGlow, bgPhoto };

// ========== UTILITIES ==========
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const prefersFinePointer = window.matchMedia('(pointer:fine)').matches;

// Throttle function for scroll events
function throttle(fn, limit = 16) {
  let inThrottle = false;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Debounce function for resize events
function debounce(fn, delay = 150) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// ========== REVEAL ANIMATIONS ==========
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: prefersReducedMotion ? 0 : 0.12,
  rootMargin: '0px 0px -50px 0px'
});

revealItems.forEach((item) => {
  if (!item.classList.contains('visible')) revealObserver.observe(item);
});

// ========== SECTION TRACKING ==========
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
    railLinks.forEach((link) => link.classList.toggle('active', link.dataset.section === id));
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

sections.forEach((section) => sectionObserver.observe(section));

// ========== SCROLL HANDLING ==========
function updateScrollUI() {
  const scrollTop = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;

  nav.classList.toggle('scrolled', scrollTop > 30);
  progressBar.style.width = `${Math.min(progress, 100)}%`;
}

// Throttled scroll handler for performance
const throttledScrollHandler = throttle(updateScrollUI, 16);
window.addEventListener('scroll', throttledScrollHandler, { passive: true });
updateScrollUI();

// ========== MOUSE PARALLAX ==========
if (prefersFinePointer && !prefersReducedMotion) {
  window.addEventListener('pointermove', (event) => {
    mouseGlow.style.left = `${event.clientX}px`;
    mouseGlow.style.top = `${event.clientY}px`;

    const x = (event.clientX / window.innerWidth - 0.5) * -8;
    const y = (event.clientY / window.innerHeight - 0.5) * -5;
    bgPhoto.style.setProperty('--bg-x', `${x}px`);
    bgPhoto.style.setProperty('--bg-y', `${y}px`);
  }, { passive: true });
}

// ========== MOBILE NAV ==========
if (mobileNavToggle && mobileMenuButton) {
  mobileNavToggle.addEventListener('change', () => {
    document.body.classList.toggle('mobile-nav-open', mobileNavToggle.checked);
  });

  // Close mobile nav on link click
  document.querySelectorAll('.mobile-nav-panel a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNavToggle.checked = false;
      document.body.classList.remove('mobile-nav-open');
    });
  });
}

// ========== KEYBOARD NAVIGATION ==========
document.addEventListener('keydown', (e) => {
  // Escape closes mobile nav
  if (e.key === 'Escape' && mobileNavToggle?.checked) {
    mobileNavToggle.checked = false;
    document.body.classList.remove('mobile-nav-open');
  }
});

// ========== SMOOTH SCROLL FALLBACK ==========
if (!('scrollBehavior' in document.documentElement.style)) {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ========== CLEANUP ON UNLOAD ==========
window.addEventListener('beforeunload', () => {
  revealObserver.disconnect();
  sectionObserver.disconnect();
  window.removeEventListener('scroll', throttledScrollHandler);
});
