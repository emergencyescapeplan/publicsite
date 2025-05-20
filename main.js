// Smooth-scroll for anchor links & auto-close mobile menu
const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const icon = btn.querySelector('i');
const header = document.querySelector('header');

function toggleIcon() {
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
}

document.querySelectorAll('a[href^="#"]').forEach(link =>
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });

    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggleIcon();
    }
  })
);

// Mobile menu toggle + icon swap
btn.addEventListener('click', () => {
  nav.classList.toggle('open');
  toggleIcon();
});

// Hide header on scroll down, show (beige) on scroll up
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.pageYOffset || document.documentElement.scrollTop;

  if (current > lastScroll && current > 100) {
    // scrolling down
    header.classList.add('hidden');
  } else {
    // scrolling up
    header.classList.remove('hidden');
    header.classList.remove('scrolled'); // ensure beige bg returns
  }

  lastScroll = current <= 0 ? 0 : current;
});

// Contact form AJAX submit
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = new FormData(form);
    try {
      await fetch(form.action || '#', {
        method: form.method || 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      alert('Thanks for your message!');
      form.reset();
    } catch {
      alert('Oops! There was a problem submitting your form');
    }
  });
}
