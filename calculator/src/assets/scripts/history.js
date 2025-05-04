export const history = [];

const historyContainer = document.querySelector(".history");
const historyList = document.querySelector(".history__list");

const renderHistoryItem = (item) => {
  return `<li class="history__item">${item}</li>`;
};

const renderHistoryList = () => {
  let list = ``;

  for (let i = history.length - 1; i >= 0; i--) {
    list += `${renderHistoryItem(history[i])}`;
  }

  return list;
};

let touchStartY = 0;
let touchEndY = 0;

const handleSwipe = () => {
  if (touchEndY < touchStartY) {
    document.querySelector(".history__btn").click();
  }
};

export const initHistory = () => {
  historyContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("history__item")) {
      historyContainer.classList.add("history--full");
      historyList.innerHTML = renderHistoryList();
      historyContainer.insertAdjacentHTML(
        "beforeend",
        `<button type="button" class="history__btn"><img src="./assets/images/icons/arrow-down.svg" alt="Иконка Стрелки Вниз"/></button>`
      );
    }

    if (event.target.closest(".history__btn")) {
      historyContainer.classList.remove("history--full");
      historyList.innerHTML = renderHistoryItem(history[history.length - 1]);
      document.querySelector(".history__btn").remove();
    }
  });

  historyContainer.addEventListener("touchstart", (event) => {
    touchStartY = event.changedTouches[0].screenY;
  });

  historyContainer.addEventListener("touchend", (event) => {
    touchEndY = event.changedTouches[0].screenY;
    handleSwipe();
  });
};

export const writeLastHistoryItem = (expression) => {
  document.querySelector(".history__item").textContent = expression;
};
