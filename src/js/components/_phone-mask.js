import Inputmask from 'inputmask';

const phoneInputs = document.querySelectorAll('input[type="tel"]');

phoneInputs.forEach((input) => {
  Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnFocus: true,
    showMaskOnHover: false,
    clearIncomplete: true,
    placeholder: '_',
  }).mask(input);
});
