const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const donateLinks = document.querySelectorAll('[data-placeholder="donate"]');
donateLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    alert('The donation page will be added soon. Thank you for your interest in supporting CEHI.');
  });
});
