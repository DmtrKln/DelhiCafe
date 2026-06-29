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

const swiper = new Swiper(".promoCards-slider", {
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
    el: ".promoCards__pagination",
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

const aboutGoods = document.querySelector(".aboutGoods");

if (aboutGoods) {

  const priceEl = aboutGoods.querySelector(".aboutGoods__titlePrice");
  const unitPrice = priceEl
    ? parseInt(priceEl.textContent.replace(/\D/g, ""), 10) || 0
    : 0;


  const totalEls = aboutGoods.querySelectorAll(
    ".aboutGoods__price"
  );
  let total = 0;

  aboutGoods.addEventListener("click", (e) => {
    if (!e.target.closest(".aboutGoods__add")) return;

    total += unitPrice;
    totalEls.forEach((el) => (el.textContent = total + " ₽"));
  });
}

const items = document.querySelectorAll('.faq__listItem');


items.forEach((item) => {
  const header = item.querySelector('.faq__listHeader');
  const content = item.querySelector('.faq__content');
  const plus = item.querySelector('.faq__plus')

  header.addEventListener('click', () => {
    header.classList.toggle('active');
    plus.classList.toggle('active')
    const isOpen = content.classList.toggle('active');

    if (isOpen) {
      content.style.maxHeight = content.scrollHeight + 24 + 'px';
    } else {
      content.style.maxHeight = '0';
    }
  });
});


let advantagesSwiper = null;
const advantagesMedia = window.matchMedia("(max-width: 576px)");

function initAdvantagesSwiper(e) {
  if (e.matches) {
    if (!advantagesSwiper) {
      advantagesSwiper = new Swiper(".advantages__swiper", {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        pagination: {
          el: ".advantages__paginationSwiper",
          type: "progressbar",
        },
      });
    }
  } else if (advantagesSwiper) {
    advantagesSwiper.destroy(true, true);
    advantagesSwiper = null;
  }
}

advantagesMedia.addEventListener("change", initAdvantagesSwiper);
initAdvantagesSwiper(advantagesMedia);

//delivery - mobile swipper

const deliverySwipper = new Swiper(".delivery__swiper", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 1.2,
  pagination: {
    el: ".delivery__pagination",
    type: "progressbar",
  },
})
