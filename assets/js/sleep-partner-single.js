(function () {
  changeBg();
  offcanvasPlayListHandler();
  cusInputRange();
  voiceHandler();
})();

/**
 * 更換內頁背景
 * @returns
 */
function changeBg() {
  // 解析 URL 中的查詢參數
  const urlParams = new URLSearchParams(window.location.search);
  // 檢驗特定的參數是否存在
  const bgParam = Number(urlParams.get('bg'));
  const data = [
    {
      title: '第一章 - 開始冥想',
      content:
        '您將學會放鬆身心，釋放壓力，快速進入深層睡眠。由專業導師引導，提供個性化建議，讓您享受更高品質的睡眠。',
    },
    {
      title: '輕語鳥',
      content:
        '輕語鳥輕聲說著魔法森林裡發生的有趣故事，提供寧靜的聲音背景，讓你安然入睡。',
    },
    {
      title: '星蘑蘑夜曲',
      content:
        '星蘑蘑在帶領呼吸法時，傘狀部分會隨呼吸節奏收縮擴張，以這樣的方式幫助大家放鬆，進入甜美夢鄉。',
    },
    {
      title: '第一章 - 開始冥想',
      content:
        '您將學會放鬆身心，釋放壓力，快速進入深層睡眠。由專業導師引導，提供個性化建議，讓您享受更高品質的睡眠。',
    },
    {
      title: '幻紫花',
      content:
        '幻紫花釋放神秘香氣，讓人進入美麗幻境，放鬆心情。只在魔法森林特定區域生長，用於冥想治療。',
    },
    {
      title: '晨曦兔',
      content:
        '曦光是一隻喜歡發光花的兔子，擁有與發光花共鳴的能力，喜歡說故事能引導人進入安穩的睡眠。',
    },
  ];

  const bg = document.querySelector('.sleep-partner-single__bg');

  const bgStyleClass = Array.from(bg.classList).filter((item) =>
    item.match(/sleep-partner-single__bg--(.+)/)
  );

  bg.classList.remove(bgStyleClass[0]);
  bg.classList.add(`sleep-partner-single__bg--${bgParam + 1}`);

  const title = document.querySelector(`[data-id="partner-single-title"]`);
  const content = document.querySelector(`[data-id="partner-single-content"]`);

  title.innerHTML = data[bgParam].title;
  content.innerHTML = data[bgParam].content;

  if (bgParam) {
    const returnLink = document.querySelector(`[data-id="return-link"]`);
    if (!returnLink) {
      return;
    }
    returnLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'my-partner.html'; // 跳轉到 my-partner.html
    });
  }
}

/**
 * 播放清單點擊監控
 */
function offcanvasPlayListHandler() {
  const offcanvasPlayLists = document.querySelectorAll(
    '.offcanvasPlayList__item'
  );
  const resetStyle = () => {
    offcanvasPlayLists.forEach((list) => {
      if (list.classList.contains('offcanvasPlayList__item--active')) {
        list.classList.remove('offcanvasPlayList__item--active');
      }
    });
  };

  offcanvasPlayLists.forEach((list) => {
    list.addEventListener('click', () => {
      resetStyle();
      list.classList.add('offcanvasPlayList__item--active');
    });
  });
}

function cusInputRange() {
  const changeBg = (item) => {
    const value = ((item.value - item.min) / (item.max - item.min)) * 100;
    item.style.backgroundImage = ` linear-gradient(
      to right,
       rgba(116, 166, 255, 1) 0%,
       rgba(116, 166, 255, 1) ${value}%,
       #fff ${value}%,
       #fff 100%
     )`;
  };
  const rangeContainer = document.querySelectorAll(
    '.offcanvasVolume__range-container'
  );

  rangeContainer.forEach((container) => {
    const range = container.querySelector('.offcanvasVolume__range');
    const rangeClose = container.querySelector('.range-close');
    const rangeFull = container.querySelector('.range-full');
    changeBg(range);

    range.addEventListener('input', () => {
      changeBg(range);
    });

    rangeClose.addEventListener('click', () => {
      range.value = 0;
      changeBg(range);
    });
    rangeFull.addEventListener('click', () => {
      range.value = 100;
      changeBg(range);
    });
  });
}

function voiceHandler() {
  const voiceContainer = document.querySelector(
    `[data-id="offcanvasVolume-voice"]`
  );
  const voiceM = voiceContainer.querySelector(`[ data-id="voice-m"]`);
  const voiceW = voiceContainer.querySelector(`[ data-id="voice-w"]`);
  voiceM.addEventListener('click', () => {
    voiceM.classList.add('offcanvasVolume__btn--active');
    voiceW.classList.remove('offcanvasVolume__btn--active');
  });
  voiceW.addEventListener('click', () => {
    voiceW.classList.add('offcanvasVolume__btn--active');
    voiceM.classList.remove('offcanvasVolume__btn--active');
  });
}
