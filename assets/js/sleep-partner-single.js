(function () {
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
    console.log(window.location);

    const returnLink = document.querySelector(`[data-id="return-link"]`);
    returnLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'my-partner.html'; // 跳轉到 my-partner.html
    });
  }
})();
