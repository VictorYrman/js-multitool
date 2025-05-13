import * as Theme from "./theme.js";
import * as Timer from "./timer.js";
import * as Progress from "./progress.js";
import * as Modal from "./modal.js";

window.timerInterval = null;

export const initBtns = () => {
  loadBtns();
  loadTimerBtns();
  loadStartBtn();
};

const loadBtns = () => {
  document
    .querySelector(".timer__btn--next")
    .addEventListener("click", handleNextClick);

  document
    .querySelector(".header__btn")
    .addEventListener("click", Modal.initModal);
};

const handleNextClick = () => {
  if (document.body.dataset.theme === "pomodoro") {
    document.querySelector(".timer__btn--short").click();
  } else if (["short", "long"].includes(document.body.dataset.theme)) {
    document.querySelector(".timer__btn--pomodoro").click();
  }
};

const loadTimerBtns = () => {
  document.querySelector(".timer__btns").addEventListener("click", (event) => {
    if (event.target.classList.contains("btn")) {
      handleBtn(event.target);
      Progress.clearProgress();
      resetBtn();

      if (event.target.classList.contains("timer__btn--pomodoro")) {
        const { minutes, seconds } = convertTimerToTime(
          Timer.getPomodoroTimer()
        );
        setTimerType(`${minutes}:${seconds}`, "pomodoro");

        if (Timer.getPomodoroAutostart())
          document.querySelector(".timer__btn--start").click();
      }

      if (event.target.classList.contains("timer__btn--short")) {
        const { minutes, seconds } = convertTimerToTime(
          Timer.getShortBreakTimer()
        );
        setTimerType(`${minutes}:${seconds}`, "short");

        if (Timer.getBreakAutostart())
          document.querySelector(".timer__btn--start").click();
      }

      if (event.target.classList.contains("timer__btn--long")) {
        const { minutes, seconds } = convertTimerToTime(
          Timer.getLongBreakTimer()
        );
        setTimerType(`${minutes}:${seconds}`, "long");

        if (Timer.getBreakAutostart())
          document.querySelector(".timer__btn--start").click();
      }
    }
  });
};

const loadStartBtn = () => {
  const manageBtn = document.querySelector(".timer__btn--start");

  manageBtn.addEventListener("click", (event) => {
    const btn = event.target;

    if (btn.classList.contains("timer__btn--start")) {
      if (window.timerInterval) {
        clearInterval(window.timerInterval);
      }

      Timer.initTimer();
      const timer = Timer.getTimer();

      Progress.initProgress(timer);

      window.timerInterval = setInterval(() => {
        Progress.updateProgress();

        convertTimerToTime(timer);

        const { minutes, seconds } = convertTimerToTime(timer);

        document.querySelector(".time").textContent = `${minutes}:${seconds}`;

        if (minutes === "00" && seconds === "00") {
          playSound("./assets/audio/notification.mp3");
          Progress.clearProgress();
          clearInterval(timerInterval);
          resetBtn();

          if (document.body.dataset.theme === "pomodoro")
            return document.querySelector(".timer__btn--short").click();

          if (
            document.body.dataset.theme === "short" ||
            document.body.dataset.theme === "long"
          )
            return document.querySelector(".timer__btn--pomodoro").click();

          return;
        }

        timer.setSeconds(timer.getSeconds() - 1);
      }, 1000);

      playSound("./assets/audio/btn-tap.mp3");

      btn.textContent = "Pause";

      btn.style.top = "0.5rem";
      btn.classList.remove("timer__btn--start");
      btn.classList.add("timer__btn--pause");

      document.querySelector(".timer__btn--next").style.visibility = "visible";
      document.querySelector(".timer__btn--next").style.opacity = "1";
    } else {
      clearInterval(window.timerInterval);
      resetBtn();
    }
  });
};

const resetBtn = () => {
  const btn = document.querySelector(".btn-wrapper > .btn");

  btn.textContent = "Start";

  btn.style.top = "0rem";
  btn.classList.remove("timer__btn--pause");
  btn.classList.add("timer__btn--start");

  document.querySelector(".timer__btn--next").style.visibility = "hidden";
  document.querySelector(".timer__btn--next").style.opacity = "0";
};

const resetTimer = () => {
  if (window.timerInterval) {
    clearInterval(window.timerInterval);
    window.timerInterval = null;
  }
};

const handleBtn = (element) => {
  document.querySelectorAll(".timer__btns .btn").forEach((btn) => {
    if (btn.classList.contains("btn--active"))
      btn.classList.remove("btn--active");
  });

  element.classList.add("btn--active");
  resetTimer();
};

const setTimerType = (timerTime, type) => {
  document.querySelector(".time").textContent = `${timerTime}`;
  Theme.changeTheme(`${type}`);
};

const playSound = (audio) => {
  const sound = new Audio(audio);

  sound.play();
};

const convertTimerToTime = (timer) => {
  return {
    minutes: timer.getMinutes().toString().padStart(2, "0"),
    seconds: timer.getSeconds().toString().padStart(2, "0"),
  };
};
