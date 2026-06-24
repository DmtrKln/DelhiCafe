document.addEventListener("click", (e) => {
  const tab = e.target.closest("[data-tab]");
  if (!tab) return;

  const cls = [...tab.classList].find((c) => c.endsWith("__tab"));
  if (!cls) return;

  const block = cls.replace("__tab", "");
  const target = tab.dataset.tab;

  document
    .querySelectorAll(`.${block}__tab`)
    .forEach((t) => t.classList.toggle("active", t === tab));
  document
    .querySelectorAll(`.${block}__panel`)
    .forEach((p) => p.classList.toggle("active", p.dataset.panel === target));
});

document.addEventListener("click", (e) => {
  const tab = e.target.closest("[data-tab]");
  if (!tab) return;

  const cls = [...tab.classList].find((c) => c.endsWith("__tabMobile"));
  if (!cls) return;

  const block = cls.replace("__tabMobile", "");
  const target = tab.dataset.tab;

  document
    .querySelectorAll(`.${block}__tabMobile`)
    .forEach((t) => t.classList.toggle("active", t.dataset.tab === target));
  document
    .querySelectorAll(`.${block}__swiperMobile, .${block}__panel`)
    .forEach((p) => p.classList.toggle("active", p.dataset.panel === target));
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".goods__moreBtn, .menu__moreBtn");
  if (!btn) return;

  const block = [...btn.classList]
    .find((c) => c.endsWith("__moreBtn"))
    .replace("__moreBtn", "");
  const activeGrid = document.querySelector(
    `.${block}__panel.active .${block}__grid`
  );
  if (!activeGrid) return;

  activeGrid.querySelectorAll(`.${block}__card`).forEach((card) => {
    activeGrid.appendChild(card.cloneNode(true));
  });
});

const cartCount = document.querySelector(".header__cartCount");
let cartItems = cartCount ? parseInt(cartCount.textContent, 10) || 0 : 0;

document.addEventListener("click", (e) => {
  const addBtn = e.target.closest(".goods__add, .menu__add");
  if (!addBtn) return;

  cartItems += 1;
  if (cartCount) cartCount.textContent = cartItems;
});

const swiper = new Swiper(".delivery-slider", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  loopedSlides: 4,
  spaceBetween: 30,

  breakpoints: {
    768: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 30,
    },
    1260: {
      slidesPerView: 3,
      spaceBetween: 60,
      centeredSlides: true,
    },
  },

  pagination: {
    el: ".delivery__pagination",
    clickable: true,
  },
});

const atmosphereSlider = new Swiper(".atmosphere__slider", {
  spaceBetween: 24,
  speed: 700,
  loop: true,
  navigation: {
    prevEl: ".atmosphere__prev",
    nextEl: ".atmosphere__next",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
    },
  },

  pagination: {
    el: ".atmosphere__pagination",
    clickable: true,
  },
});

const reviewsSlider = new Swiper(".reviews__slider", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: ".reviews__pagination",
    type: "progressbar",
  },
  breakpoints: {
    768: {
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

//point

const point1 = document.querySelector(".bunnert__point1");
const point2 = document.querySelector(".bunnert__point2");
const titlePoint1 = document.querySelector(".bunnert__wrappPoint1");
const titlePoint2 = document.querySelector(".bunnert__wrappPoint2");

const pairs = [
  [point1, titlePoint1],
  [point2, titlePoint2],
];

pairs.forEach(([point, title]) => {
  if (!point || !title) return;
  point.addEventListener("mouseenter", () => title.classList.add("active"));
  point.addEventListener("mouseleave", () => title.classList.remove("active"));
});

// swiper mobile goooooods

let goods = [];
const goodsMedia = window.matchMedia("(max-width: 576px)");

function initGoodsSwiper(e) {
  if (e.matches) {
    if (!goods.length) {
      document.querySelectorAll(".goods-slider").forEach((el) => {
        goods.push(
          new Swiper(el, {
            slidesPerView: 1,
            loop: true,
            loopedSlides: 3,
            spaceBetween: 30,
            observer: true,
            observeParents: true,
            pagination: {
              el: el.querySelector(".goods__pagination"),
              clickable: true,
              dynamicBullets: true,
            },
          })
        );
      });
    }
  } else if (goods.length) {
    goods.forEach((s) => s.destroy(true, true));
    goods = [];
  }
}

goodsMedia.addEventListener("change", initGoodsSwiper);
initGoodsSwiper(goodsMedia);


document.querySelectorAll(".goods__slider, .menu__slider").forEach((el) => {
  new Swiper(el, {
    spaceBetween: 10,
    speed: 700,
    slidesPerView: 2.1,
  });
});


//aboutGoods

const totalEl = document.querySelector('.aboutGoods__priceMobile'); // счётчик «0 ₽»
let total = 0;

document.querySelector('.aboutGoods').addEventListener('click', (e) => {
  const btn = e.target.closest('.aboutGoods__add');
  if (!btn) return;

  const priceText = document.querySelector('.aboutGoods__price').textContent; // «360 ₽»
  const price = parseInt(priceText.replace(/\D/g, ''), 10);

  total += price;
  totalEl.textContent = total + ' ₽';
});