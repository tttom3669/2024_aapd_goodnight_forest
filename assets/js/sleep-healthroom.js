const homeTab = document.getElementById('home-tab'); //推薦文章
const profileTab = document.getElementById('profile-tab'); //線上醫生

homeTab.addEventListener('click', function () {
  homeTab.classList.add('active-home');  // 推薦文章樣式
  profileTab.classList.remove('active-profile');  // 點選推薦文章，取消線上醫生樣式
  homeTab.classList.add('active');  // 水平翻转
  profileTab.classList.remove('active');
});

profileTab.addEventListener('click', function () {
  profileTab.classList.add('active-profile');  // 線上醫生樣式
  homeTab.classList.remove('active-home');  // 點選線上醫生，取消推薦文章樣式
  profileTab.classList.add('active');  // 水平翻转
  homeTab.classList.remove('active');
});
