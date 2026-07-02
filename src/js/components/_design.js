const selectWrap = document.querySelector('.design__selectWrap');
const selectBtn = document.querySelector('.design__select');
const selectOptions = document.querySelectorAll('.design__selectOption');

if (selectWrap && selectBtn) {
  selectBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    selectWrap.classList.toggle('active');
  });

  selectOptions.forEach((option) => {
    option.addEventListener('click', () => {
      selectOptions.forEach((o) => o.classList.remove('is-selected'));
      option.classList.add('is-selected');
      selectBtn.firstChild.textContent = `${option.textContent.trim()} `;
      selectWrap.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (selectWrap.contains(e.target)) return;
    selectWrap.classList.remove('active');
  });
}

const orderSubmit = document.querySelector('[data-order-submit]');
const orderModal = document.querySelector('[data-order-modal]');
const orderModalClose = document.querySelector('[data-order-modal-close]');

if (orderSubmit && orderModal) {
  orderSubmit.addEventListener('click', () => {
    orderModal.classList.add('active');
    document.body.classList.add('overflow');
  });

  const closeOrderModal = () => {
    orderModal.classList.remove('active');
    document.body.classList.remove('overflow');
  };

  orderModalClose?.addEventListener('click', closeOrderModal);
  orderModal.addEventListener('click', (e) => {
    if (e.target === orderModal) closeOrderModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeOrderModal();
  });
}
