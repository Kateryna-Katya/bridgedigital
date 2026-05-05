import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

let gallerySwiper;
let reviewsSwiper;

function initSwipers() {
  const isDesktop = window.innerWidth >= 1440;

  //  Gallery — завжди працює
  if (!gallerySwiper) {
    gallerySwiper = new Swiper('.gallery-swiper', {
      modules: [Navigation, Autoplay],
slidesPerView: 1.7,
      loop: true,
      spaceBetween: 16,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
      },

      breakpoints: {
        1440: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      }
    });
  }

  //  Reviews — тільки до 1440
  if (!isDesktop) {
    if (!reviewsSwiper) {
      reviewsSwiper = new Swiper('.reviews-swiper', {
        modules: [Autoplay],

        loop: true,
        slidesPerView: 1.0,
        spaceBetween: 16,

        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
    }
  } else {
    // 🔥 destroy після 1440
    if (reviewsSwiper) {
      reviewsSwiper.destroy(true, true);
      reviewsSwiper = null;
    }
  }
}

// запуск
initSwipers();

// 🔁 при ресайзі
window.addEventListener('resize', () => {
  initSwipers();
});