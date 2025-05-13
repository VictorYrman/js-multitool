import { initBtns } from "./assets/scripts/btns.js";
import { initTimer } from "./assets/scripts/timer.js";

document.addEventListener("DOMContentLoaded", () => {
  initBtns();
  initTimer();

  if (window.innerWidth <= 750 && window.innerWidth >= 0) {
    document.querySelector(".timer__btn--short").textContent = "Кор. пер.";
    document.querySelector(".timer__btn--long").textContent = "Длин. пер.";
    document.querySelector(".logo").textContent = "Помодоро";
  } else {
    document.querySelector(".timer__btn--short").textContent =
      "Короткий перерыв";
    document.querySelector(".timer__btn--long").textContent = "Длинный перерыв";
    document.querySelector(".logo").textContent = "Таймер Помодоро";
  }
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.js")
    .then((reg) => {
      reg.onupdatefound = () => {
        const installingWorker = reg.installing;

        installingWorker.onstatechange = () => {
          if (
            installingWorker.state === "installed" &&
            navigator.serviceWorker.controller
          ) {
            console.log("New service worker version available.");
            showUpdateNotification();
          }
        };
      };
    })
    .catch((err) => console.log("service worker not registered", err));
}
