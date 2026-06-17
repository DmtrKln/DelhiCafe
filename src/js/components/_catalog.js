const categories = document.querySelector('.catalog__categories');
const button = document.querySelector('.catalog__toggle');
const catalogSvg = document.querySelector('.catalog__svg');
const overlay = document.querySelector('.catalog__overlayCategory')

if (categories && button) {
  button.addEventListener('click', (e) => {
    e.stopPropagation();              
    categories.classList.toggle('active');
    catalogSvg?.classList.toggle('active')
    overlay?.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    
    if (categories.contains(e.target) || button.contains(e.target)) {
      return;
    }
    categories.classList.remove('active');
    overlay?.classList.remove('active');
  });
}