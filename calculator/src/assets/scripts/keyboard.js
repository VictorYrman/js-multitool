import { initCalculator } from "./core.js";
import { initTheme } from "./theme.js";

const keyboardBtns = document.querySelector(".calculator__btns");
const btnMore = document.querySelector("#more");

const renderExtraKeyboard = () => {
  return `
          <button type="button" class="btn btn--light" data-value="">lg</button>
          <button type="button" class="btn btn--light" data-value="">ln</button>
          <button type="button" class="btn btn--light" data-value="(">(</button>
          <button type="button" class="btn btn--light" data-value=")">)</button>
`;
};

let isExtra = false;
export const initKeyboard = () => {
  btnMore.addEventListener("click", () => {
    if (isExtra) {
      const extraButtons = keyboardBtns.querySelectorAll(
        '[data-value=""], [data-value="("], [data-value=")"]'
      );
      extraButtons.forEach((btn) => btn.remove());
      isExtra = false;
    } else {
      keyboardBtns.insertAdjacentHTML("afterbegin", renderExtraKeyboard());
      isExtra = true;
    }

    initTheme();
    initCalculator();
  });
};
