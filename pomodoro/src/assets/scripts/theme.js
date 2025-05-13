export const changeTheme = (theme) => {
  document.body.dataset.theme = theme;
  updateBrowserThemeColor(theme);
};

const updateBrowserThemeColor = (theme) => {
  const metaThemeColor = document.querySelector("#theme-color");

  switch (theme) {
    case "pomodoro":
      metaThemeColor.setAttribute("content", "#b94646");
      break;
    case "short":
      metaThemeColor.setAttribute("content", "#386e94");
      break;
    case "long":
      metaThemeColor.setAttribute("content", "#3fa6a6");
      break;
  }
};
