import { initBtns } from "./assets/scripts/btns.js";
import { initTimer } from "./assets/scripts/timer.js";
import { registerServiceWorker } from "./assets/scripts/utils.js";

document.addEventListener("DOMContentLoaded", () => {
  initBtns();
  initTimer();
  setupResponsiveText();
  registerServiceWorker();
});

const setupResponsiveText = () => {
  const isMobile = window.innerWidth <= 750;

  document.querySelector(".logo").textContent = isMobile
    ? "Помодоро"
    : "Таймер Помодоро";

  document.querySelector(".timer__btn--long").textContent = isMobile
    ? "Длин. пер."
    : "Длинный перерыв";

  document.querySelector(".timer__btn--short").textContent = isMobile
    ? "Кор. пер."
    : "Короткий перерыв";
};
