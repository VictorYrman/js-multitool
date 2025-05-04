import { initTheme } from "./assets/scripts/theme.js";
import { initCalculator } from "./assets/scripts/core.js";
import { initKeyboard } from "./assets/scripts/keyboard.js";
import { initHistory } from "./assets/scripts/history.js";

document.addEventListener("DOMContentLoaded", () => {
  initHistory();
  initKeyboard();
  initTheme();
  initCalculator();
});
