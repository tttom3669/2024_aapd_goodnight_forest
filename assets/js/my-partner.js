changeData();
function changeData() {
  const partnerBtn = document.querySelectorAll(`[data-type="btn-partner"]`);
  const partnerData = [
    {
      title: '露米娜',
      category: '冥想夥伴',
      time: '30',
      content:
        '露米娜是一位引導冥想的獨角獸導師，用光輝與智慧帶領大家進入平靜和諧的境界',
    },
    {
      title: '輕語鳥',
      category: '音樂夥伴',
      time: '50',
      content:
        '輕語鳥輕聲說著魔法森林裡發生的有趣故事，提供寧靜的聲音背景，讓你安然入睡。',
    },
    {
      title: '星蘑蘑夜曲',
      category: '呼吸夥伴',
      time: '10',
      content:
        '星蘑蘑在帶領呼吸法時，傘狀部分會隨呼吸節奏收縮擴張，以這樣的方式幫助大家放鬆，進入甜美夢鄉。',
    },
    {
      title: '幻紫花',
      category: '冥想夥伴',
      time: '20',
      content:
        '幻紫花釋放神秘香氣，讓人進入美麗幻境，放鬆心情。只在魔法森林特定區域生長，用於冥想治療。',
    },
    {
      title: '晨曦兔',
      category: '故事夥伴',
      time: '20',
      content:
        '曦光是一隻喜歡發光花的兔子，擁有與發光花共鳴的能力，喜歡說故事能引導人進入安穩的睡眠。',
    },
  ];
  const content = document.querySelector(`[data-id="partner-content"]`);
  const contentBg = document.querySelector(`.my-partner__bg`);

  const template = (key) => {
    console.log(key);

    return `<div class="d-flex flex-column  px-8 text-white">
              <div class="d-flex flex-column gap-3 align-items-start mb-2">
                <h3 class="fs-h4 fw-bold">${partnerData[key].title}</h3>
                <div class="d-flex align-items-center gap-2">
                  <p class="py-1 px-3 bg-white rounded-sm fs-xs fw-medium" style="--bs-bg-opacity: 0.4;">${partnerData[key].category}</p>
                  <p class="fs-xs">${partnerData[key].time}分鐘</p>
                </div>
              </div>

              <p class="fs-xs mb-4">${partnerData[key].content}</p>
              <a href="./sleep-partner-single.html"
                class="btn btn-primary w-100 py-3 fw-bold text-darkBlue-1 rounded-md mb-2">開始</a>
            </div>`;
  };

  const resetBtnStyle = () => {
    partnerBtn.forEach((btn) => {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
      }
    });
  };

  partnerBtn.forEach((btn) => {
    btn.addEventListener('click', function () {
      resetBtnStyle();
      btn.classList.add('active');
      const key = Number(this.dataset.id.match(/-(.+)/)[1]) - 1;
      content.innerHTML = template(key);
      const bgStyleClass = Array.from(contentBg.classList).filter((item) =>
        item.match(/my-partner__bg--(.+)/)
      );
      contentBg.classList.remove(bgStyleClass[0]);
      contentBg.classList.add(`my-partner__bg--${key + 1}`);
    });
  });
}
