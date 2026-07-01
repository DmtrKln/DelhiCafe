const header = document.querySelector('.header');
const burger = document.querySelector('.header__burgerIcon');
const mobileMenu = document.querySelector('.header__mobile');
const menuLinks = document.querySelectorAll('.header__mobile a');
const headerWrapp = document.querySelector('.header__wrapp')

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY >= 10);
  });
}

const closeMenu = () => {
  burger?.classList.remove('active');
  mobileMenu?.classList.remove('active');
  document.body.classList.remove('overflow');

  headerWrapp.classList.remove('active');
};

burger?.addEventListener('click', (e) => {
  e.stopPropagation();
  burger.classList.toggle('active');
  mobileMenu?.classList.toggle('active');
  document.body.classList.toggle('overflow');

    headerWrapp.classList.toggle('active');

});

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

const modals = document.querySelectorAll('.header__modal');
const formModal = document.querySelector('.header__modal[data-modal="form"]');
const successModal = document.querySelector('.header__modal[data-modal="success"]');
const modalForm = document.querySelector('[data-modal-form]');
const connectBtn = document.querySelector('.header__connect');
const mobileContactBtn = document.querySelector('.header__btnMobile');

// const openModal = (modal) => {
//   if (!modal) return;
//   modals.forEach((m) => m.classList.remove('active'));
//   modal.classList.add('active');
//   document.body.classList.add('overflow');
// };

// const closeModal = () => {
//   modals.forEach((m) => m.classList.remove('active'));
//   document.body.classList.remove('overflow');
// };

// connectBtn?.addEventListener('click', (e) => {
//   e.preventDefault();
//   closeMenu();
//   openModal(formModal);
// });

// mobileContactBtn?.addEventListener('click', (e) => {
//   e.preventDefault();
//   closeMenu();
//   openModal(formModal);
// });

// modals.forEach((modal) => {
//   modal.addEventListener('click', (e) => {
//     if (e.target === modal || e.target.closest('[data-modal-close]')) {
//       closeModal();
//     }
//   });
// });

// modalForm?.addEventListener('submit', (e) => {
//   e.preventDefault();
//   modalForm.reset();
//   openModal(successModal);
// });

// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') closeModal();
// });

const contactUs = document.querySelector('.contactUs');
const contactUsOverlay = document.querySelector('.contactUs__overlay');
const cross = document.querySelector('.contactUs__cross');

function updateScrollLock() {
  const anyOpen =
    mobileMenu?.classList.contains('active') ||
    contactUs?.classList.contains('active');
  document.body.classList.toggle('overflow', anyOpen);
}

// --- модалка ---
function openModal() {
  contactUs?.classList.add('active');
  contactUsOverlay?.classList.add('active');
  updateScrollLock();
}
function closeModal() {
  contactUs?.classList.remove('active');
  contactUsOverlay?.classList.remove('active');
  updateScrollLock();
}

[connectBtn, mobileContactBtn].forEach(btn => {
  btn?.addEventListener('click', openModal);
});

cross?.addEventListener('click', closeModal);
contactUsOverlay?.addEventListener('click', (e) => {
  if (e.target === contactUsOverlay) closeModal();
});