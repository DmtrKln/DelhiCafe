const goodsTabs = document.querySelectorAll('.goods__tab');
const goodsPanels = document.querySelectorAll('.goods__panel');

goodsTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    goodsTabs.forEach((t) => t.classList.toggle('active', t === tab));
    goodsPanels.forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.panel === target);
    });
  });
});


const moreBtn = document.querySelector('.goods__moreBtn');

moreBtn?.addEventListener('click', () => {
  const activeGrid = document.querySelector('.goods__panel.is-active .goods__grid');
  if (!activeGrid) return;

  activeGrid.querySelectorAll('.goods__card').forEach((card) => {
    activeGrid.appendChild(card.cloneNode(true));
  });
});


const goodsSection = document.querySelector('.goods');
const cartCount = document.querySelector('.header__cartCount');
let cartItems = cartCount ? parseInt(cartCount.textContent, 10) || 0 : 0;

goodsSection?.addEventListener('click', (e) => {
  const addBtn = e.target.closest('.goods__add');
  if (!addBtn) return;

  cartItems += 1;
  if (cartCount) cartCount.textContent = cartItems;
});



const swiper = new Swiper('.reviews-slider', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  spaceBetween: 60,

  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },

  },

  pagination: {
    el: '.delivery__pagination',
    clickable: true,
  },


});

const atmosphereSlider = new Swiper('.atmosphere__slider', {
  slidesPerView: 1.1,
  spaceBetween: 24,
  speed: 700,
  loop: true,
  navigation: {
    prevEl: '.atmosphere__prev',
    nextEl: '.atmosphere__next',
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
    },
  },
});

const reviewsSlider = new Swiper('.reviews__slider', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: '.reviews__pagination',
    type: 'progressbar',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    },
  },
});