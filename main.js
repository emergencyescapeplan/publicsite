// Burger menu toggle logic with icon switch
const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const icon = btn.querySelector('i');
const header = document.querySelector('header');

function toggleIcon() {
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
}

function toggleMenu() {
  nav.classList.toggle('open');
  toggleIcon();
}

btn.addEventListener('click', toggleMenu);

// Close menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      toggleMenu();
    }
  });
});

// Hide header on scroll down, show on scroll up
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.pageYOffset || document.documentElement.scrollTop;

  if (current > lastScroll && current > 100) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
    header.classList.remove('scrolled');
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
