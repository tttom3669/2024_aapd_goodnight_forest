import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

if (document.querySelector('.mySwiper')) {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
  });
}

const playBtnGroup = document.querySelectorAll(`[data-id="play-btn"]`);
playBtnGroup.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.querySelector(`[data-id="icon-stop"]`).classList.toggle('d-none');
    btn.querySelector(`[data-id="icon-play"]`).classList.toggle('d-none');
  });
});
