// Smooth-scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Optional: add a tiny fade-in animation on load
window.addEventListener('load', () => document.body.classList.add('loaded'));
