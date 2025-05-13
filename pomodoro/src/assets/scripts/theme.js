export const changeTheme = (theme) => {
  document.body.dataset.theme = theme;
  updateBrowserThemeColor(theme);
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
