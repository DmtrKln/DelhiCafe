const goodsTabs = document.querySelectorAll(".goods__tab");
const goodsPanels = document.querySelectorAll(".goods__panel");

goodsTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    goodsTabs.forEach((t) => t.classList.toggle("active", t === tab));
    goodsPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.panel === target);
    });
  });
});

const moreBtn = document.querySelector(".goods__moreBtn");

moreBtn?.addEventListener("click", () => {
  const activeGrid = document.querySelector(
    ".goods__panel.active .goods__grid"
  );
  if (!activeGrid) return;

  activeGrid.querySelectorAll(".goods__card").forEach((card) => {
    activeGrid.appendChild(card.cloneNode(true));
  });
});

const goodsSection = document.querySelector(".goods");
const cartCount = document.querySelector(".header__cartCount");
let cartItems = cartCount ? parseInt(cartCount.textContent, 10) || 0 : 0;

goodsSection?.addEventListener("click", (e) => {
  const addBtn = e.target.closest(".goods__add");
  if (!addBtn) return;

  cartItems += 1;
  if (cartCount) cartCount.textContent = cartItems;
});

const swiper = new Swiper(".delivery-slider", {
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
    el: ".delivery__pagination",
    clickable: true,
  },
});

const atmosphereSlider = new Swiper(".atmosphere__slider", {
  slidesPerView: 1.1,
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
  point.addEventListener("mouseenter", () => title.classList.add("active"));
  point.addEventListener("mouseleave", () => title.classList.remove("active"));
});

let goods;
const goodsMedia = window.matchMedia("(max-width: 576px)");

function initGoodsSwiper(e) {
  if (e.matches) {
    if (!goods) {
      goods = new Swiper(".goods-slider", {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        pagination: {
          el: ".goods__pagination",   // ← и селектор поправь (был .goods__pagination)
          clickable: true,
          dynamicBullets: true,
        },
      });
    }
  } else if (goods) {
    goods.destroy(true, true);
    goods = undefined;
  }
}

goodsMedia.addEventListener("change", initGoodsSwiper);
initGoodsSwiper(goodsMedia);
