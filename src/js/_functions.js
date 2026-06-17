// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from "./functions/throttle";
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/disable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });
// import Swiper from "swiper/bundle";
// const swiper = new Swiper(".mails__sliderr", {
//   slidesPerView: 3,
//   spaceBetween: 20,
//   speed: 1000,
//   loop: true,
//   navigation: {
//     nextEl: ".mails__btnNext",
//     prevEl: ".mails__btnPrev",
//   },
//   pagination: {
//     el: ".swiper-pag",
//     clickable: true,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 'auto',
//       spaceBetween: 10,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 15,
//     },
//     1024: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     1300: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//   },
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// validateForms('.form-1', rules1, afterForm);

// let posScroll = 0;
// let scrollPos = true
// window.addEventListener('scroll', function () {
//   var st = window.pageYOffset || document.documentElement.scrollTop;
//   if (st > posScroll) {
//     scrollPos = true
//   } else {
//     scrollPos = false
//   }
//   posScroll = st;
// });

// let funcHeader = () => {
//   if (posScroll != 0) {
//     document.querySelector('.header').classList.add("header--active")
//   } else {
//     document.querySelector('.header').classList.remove("header--active")
//   }
// };
// let throttleScroll = throttle(funcHeader);
// window.addEventListener('scroll', throttleScroll);

// $('[data-btn]').on('click', function (e) {
//     $('[data-btn]').removeClass("active")
//     $(`[data-btn=${$(this).attr('data-btn')}]`).addClass("active")
//     $('[data-cont]').removeClass("active")
//     $(`[data-cont=${$(this).attr('data-btn')}]`).addClass("active")
//   });

// const header = document.querySelector(".header");
// const headerTop = document.querySelector(".header__top");

// let lastScroll = 0;
// const topHeight = headerTop.offsetHeight;

// window.addEventListener("scroll", () => {
//   const current = window.scrollY;

//   if (current === 0) {
//     header.classList.remove("is-collapsed");
//     lastScroll = current;
//     return;
//   }

//   if (current > lastScroll && current > topHeight) {
//     header.classList.add("is-collapsed");
//   }

//   if (current < lastScroll) {
//     header.classList.remove("is-collapsed");
//   }

//   lastScroll = current;
// });
