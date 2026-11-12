/** Shared interactions for the homepage and project archive. */
(() => {
  const nav = document.querySelector('.nav');
  const progressBar = document.querySelector('.progress span');
  const sections = [...document.querySelectorAll('.observe-section')];
  const trackingLinks = document.querySelectorAll('.nav-links a, .section-rail a, .mobile-nav-panel nav a');
  const toggle = document.querySelector('.mobile-nav-toggle');
  const menuButton = document.querySelector('.mobile-menu-button');
  const panel = document.querySelector('.mobile-nav-panel');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = window.matchMedia('(max-width: 1180px)');

  // Visible by default; opt into reveal animations only when supported.
  if ('IntersectionObserver' in window && !motion.matches) {
    document.documentElement.classList.add('reveal-enabled');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
    motion.addEventListener('change', () => {
      if (motion.matches) {
        document.documentElement.classList.remove('reveal-enabled');
        observer.disconnect();
      }
    });
  }

  function setMenu(open, restoreFocus = false) {
    if (!toggle || !menuButton || !panel) return;
    toggle.checked = open;
    document.body.classList.toggle('mobile-nav-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    panel.inert = !open;
    panel.setAttribute('aria-hidden', String(!open));
    if (open) requestAnimationFrame(() => {
      if (toggle.checked) panel.querySelector('a')?.focus();
    });
    else if (restoreFocus) menuButton.focus();
  }
  setMenu(false);
  menuButton?.addEventListener('click', () => setMenu(!toggle.checked));
  document.querySelectorAll('.mobile-nav-panel a').forEach(link => {
    link.addEventListener('click', () => {
      setMenu(false);
      const url = new URL(link.href);
      if (url.pathname === location.pathname && url.hash) {
        const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      }
    });
  });
  document.addEventListener('keydown', event => {
    if (!toggle?.checked) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      setMenu(false, true);
    } else if (event.key === 'Tab') {
      const focusable = [menuButton, ...panel.querySelectorAll('a[href]')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  mobile.addEventListener('change', () => setMenu(false));
  window.addEventListener('pageshow', () => setMenu(false));

  function updateScrollUI() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    nav?.classList.toggle('scrolled', window.scrollY > 30);
    if (progressBar) progressBar.style.width = `${scrollable > 0 ? Math.min(100, window.scrollY / scrollable * 100) : 0}%`;
    // Track the last section above the reading line, including long cards.
    const readingLine = Math.min(180, window.innerHeight * 0.25);
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= readingLine) current = section;
    }
    if (!current) return;
    trackingLinks.forEach(link => {
      const url = new URL(link.href);
      const active = url.pathname === location.pathname && url.hash === `#${current.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  let scrollPending = false;
  window.addEventListener('scroll', () => {
    if (scrollPending) return;
    scrollPending = true;
    requestAnimationFrame(() => {
      updateScrollUI();
      scrollPending = false;
    });
  }, { passive: true });
  window.addEventListener('resize', updateScrollUI, { passive: true });
  updateScrollUI();

  const glow = document.querySelector('.mouse-glow');
  const photo = document.querySelector('.bg-photo');
  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', event => {
      if (motion.matches) return;
      requestAnimationFrame(() => {
        if (glow) {
          glow.style.left = `${event.clientX}px`;
          glow.style.top = `${event.clientY}px`;
        }
        photo?.style.setProperty('--bg-x', `${(event.clientX / window.innerWidth - 0.5) * -8}px`);
        photo?.style.setProperty('--bg-y', `${(event.clientY / window.innerHeight - 0.5) * -5}px`);
      });
    }, { passive: true });
  }
})();
