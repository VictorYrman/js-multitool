import { initBtns } from "./assets/scripts/btns.js";
import { initTimer } from "./assets/scripts/timer.js";

document.addEventListener("DOMContentLoaded", () => {
  initBtns();
  initTimer();
});

if (window.innerWidth <= 750 && window.innerWidth >= 0) {
  document.querySelector(".timer__btn--short").textContent = "Кор. пер.";
  document.querySelector(".timer__btn--long").textContent = "Длин. пер.";
  document.querySelector(".logo").textContent = "Помодоро";
}
