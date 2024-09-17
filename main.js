import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

if (document.querySelector('.mySwiper')) {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
  });
}
