import * as Timer from "./timer.js";
import * as Counter from "./counter.js";

export const changeTheme = (theme) => {
  document.body.dataset.theme = theme;
  updateBrowserThemeColor(theme);

  if (document.body.dataset.theme === "pomodoro") {
    const minutes = Timer.getPomodoroTimer()
      .getMinutes()
      .toString()
      .padStart(2, "0");
    const seconds = Timer.getPomodoroTimer()
      .getSeconds()
      .toString()
      .padStart(2, "0");

    changeTitle({ minutes, seconds });
    document.querySelector(
      ".timer-counter__count"
    ).textContent = `#${Counter.getPomodoroCounter()}`;
  } else if (document.body.dataset.theme === "short") {
    const minutes = Timer.getShortBreakTimer()
      .getMinutes()
      .toString()
      .padStart(2, "0");
    const seconds = Timer.getShortBreakTimer()
      .getSeconds()
      .toString()
      .padStart(2, "0");

    changeTitle({ minutes, seconds });
    document.querySelector(
      ".timer-counter__count"
    ).textContent = `#${Counter.getBreakCounter()}`;
  } else if (document.body.dataset.theme === "long") {
    const minutes = Timer.getLongBreakTimer()
      .getMinutes()
      .toString()
      .padStart(2, "0");
    const seconds = Timer.getLongBreakTimer()
      .getSeconds()
      .toString()
      .padStart(2, "0");

    changeTitle({ minutes, seconds });
    document.querySelector(
      ".timer-counter__count"
    ).textContent = `#${Counter.getBreakCounter()}`;
  }
};

export const changeTitle = ({ minutes, seconds }) => {
  if (document.body.dataset.theme === "pomodoro") {
    document.title = `${minutes}:${seconds} - Время концентрации!`;
  } else {
    document.title = `${minutes}:${seconds} - Время отдыха!`;
  }
};

const updateBrowserThemeColor = (theme) => {
  const colors = {
    pomodoro: { top: "#ffffff", bottom: "#b94646" },
    short: { top: "#ffffff", bottom: "#386e94" },
    long: { top: "#ffffff", bottom: "#3fa6a6" },
  };

  const { top, bottom } = colors[theme] || colors.pomodoro;

  document.querySelector('meta[name="theme-color"]').content = top;

  if (window.chrome && window.chrome.webview) {
    window.chrome.webview.postMessage({
      type: "navigationBarColor",
      color: bottom,
    });
  }

  if ("virtualKeyboard" in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;
    document.documentElement.style.setProperty("--keyboard-color", bottom);
  }
};
