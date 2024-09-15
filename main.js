import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
console.log("Hello world!");

var swiper = new Swiper(".mySwiper", {
  effect: 'coverflow',
  slidesPerView: "auto",
  spaceBetween: 24,
  centeredSlides: true,
  loop: "infinite",
  coverflowEffect: {
    depth: 200,
    rotate: 30,
    stretch: 0,
    slideShadows: false,
},
});