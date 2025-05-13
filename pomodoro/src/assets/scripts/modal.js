import * as Timer from "./timer.js";

const modal = document.querySelector(".modal");

export const initModal = () => {
  openModal();
  initModalBtns();
};

export const initModalBtns = () => {
  const pomodoroInput = document.querySelector("#pomodoroInput");
  const shortBreakInput = document.querySelector("#shortBreakInput");
  const longBreakInput = document.querySelector("#longBreakInput");
  const breakAutostartCheckbox = document.querySelector("#breakAutostart");
  const pomodoroAutostartCheckbox =
    document.querySelector("#pomodoroAutostart");

  pomodoroInput.value = Timer.getPomodoroTimer().getMinutes();
  shortBreakInput.value = Timer.getShortBreakTimer().getMinutes();
  longBreakInput.value = Timer.getLongBreakTimer().getMinutes();
  breakAutostartCheckbox.checked = Timer.getBreakAutostart();
  pomodoroAutostartCheckbox.checked = Timer.getPomodoroAutostart();

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("modal") ||
      event.target.closest(".close")
    ) {
      closeModal();
    } else if (event.target.classList.contains("modal__btn--ok")) {
      saveSettings();
      closeModal();
      document
        .querySelector(`.timer__btn--${document.body.dataset.theme}`)
        .click();
    }
  });
};

const saveSettings = () => {
  const pomodoroInput = document.querySelector("#pomodoroInput");
  const shortBreakInput = document.querySelector("#shortBreakInput");
  const longBreakInput = document.querySelector("#longBreakInput");
  const breakAutostartCheckbox = document.querySelector("#breakAutostart");
  const pomodoroAutostartCheckbox =
    document.querySelector("#pomodoroAutostart");

  Timer.setPomodoroTimer(`${pomodoroInput.value}:00`);
  Timer.setShortBreakTimer(`${shortBreakInput.value}:00`);
  Timer.setLongBreakTimer(`${longBreakInput.value}:00`);
  Timer.setBreakAutostart(breakAutostartCheckbox.checked);
  Timer.setPomodoroAutostart(pomodoroAutostartCheckbox.checked);
};

const openModal = () => {
  modal.style.display = "flex";
};

const closeModal = () => {
  modal.style.display = "none";
};
