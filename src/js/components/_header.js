const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.header__mobile');
const menuLinks = document.querySelectorAll('.header__mobile a');
const SCROLLED_CLASS = 'scrolled';
const ACTIVE_CLASS = 'active';

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle(SCROLLED_CLASS, window.scrollY >= 10);
  });
}

const closeMenu = () => {
  burger?.classList.remove(ACTIVE_CLASS);
  mobileMenu?.classList.remove(ACTIVE_CLASS);
  document.body.classList.remove('overflow');
};

burger?.addEventListener('click', (e) => {
  e.stopPropagation();
  burger.classList.toggle(ACTIVE_CLASS);
  mobileMenu?.classList.toggle(ACTIVE_CLASS);
  document.body.classList.toggle('overflow');
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

const openModal = (modal) => {
  if (!modal) return;
  modals.forEach((m) => m.classList.remove(ACTIVE_CLASS));
  modal.classList.add(ACTIVE_CLASS);
  document.body.classList.add('overflow');
};

const closeModal = () => {
  modals.forEach((m) => m.classList.remove(ACTIVE_CLASS));
  document.body.classList.remove('overflow');
};

connectBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  closeMenu();
  openModal(formModal);
});

mobileContactBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  closeMenu();
  openModal(formModal);
});

modals.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('[data-modal-close]')) {
      closeModal();
    }
  });
});

modalForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  modalForm.reset();
  openModal(successModal);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
