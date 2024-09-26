const homeTab = document.getElementById('home-tab'); //推薦文章
const profileTab = document.getElementById('profile-tab'); //線上醫生

function resetTabs() {
  // 移除所有的 active 
  homeTab.classList.remove('active', 'active-home');
  profileTab.classList.remove('active', 'active-profile');
}

homeTab.addEventListener('click', function () {
  resetTabs(); 
  homeTab.classList.add('active-home', 'active');  // 推薦文章的樣式和翻轉效果
});

profileTab.addEventListener('click', function () {
  resetTabs(); 
  profileTab.classList.add('active-profile', 'active');  // 線上醫生的樣式和翻轉效果
});

// 監聽翻轉
homeTab.addEventListener('transitionend', function () {
  if (homeTab.classList.contains('active-home')) {
    document.querySelector('#home-tab-pane').classList.add('show', 'active'); // 切換推薦文章的樣式和翻轉效果
    document.querySelector('#profile-tab-pane').classList.remove('show', 'active'); // 移除線上醫生的樣式和翻轉效果
  }
});

profileTab.addEventListener('transitionend', function () {
  if (profileTab.classList.contains('active-profile')) {
    document.querySelector('#profile-tab-pane').classList.add('show', 'active'); // 切換線上醫生的樣式和翻轉效果
    document.querySelector('#home-tab-pane').classList.remove('show', 'active'); // 移除推薦文章的樣式和翻轉效果
  }
});

