import { initCalculator } from "./core.js";
import { initTheme } from "./theme.js";

const keyboardBtns = document.querySelector(".calculator__btns");
const btnMore = document.querySelector("#more");

// const renderKeyboard = () => {
//   return `<button type="button" class="btn btn--light" id="clear">AC</button>
//           <button type="button" class="btn btn--light" id="backspace">
//             <img
//               width="32"
//               height="32"
//               src="./assets/images/icons/backspace-black.svg"
//               alt="Backspace Icon"
//             />
//           </button>
//           <button type="button" class="btn btn--light" data-value="%">%</button>
//           <button
//             type="button"
//             class="btn btn--accent"
//             id="divide"
//             data-value="/"
//           >
//             <img
//               width="32"
//               height="32"
//               src="./assets/images/icons/division.svg"
//               alt="Division Icon"
//             />
//           </button>

//           <button type="button" class="btn" data-value="7">7</button>
//           <button type="button" class="btn" data-value="8">8</button>
//           <button type="button" class="btn" data-value="9">9</button>
//           <button
//             type="button"
//             class="btn btn--accent"
//             id="multiply"
//             data-value="*"
//           >
//             <img
//               width="32"
//               height="32"
//               src="./assets/images/icons/multiplication.svg"
//               alt="Multiplication Icon"
//             />
//           </button>

//           <button type="button" class="btn" data-value="4">4</button>
//           <button type="button" class="btn" data-value="5">5</button>
//           <button type="button" class="btn" data-value="6">6</button>
//           <button
//             type="button"
//             class="btn btn--accent"
//             id="subtract"
//             data-value="-"
//           >
//             <img
//               width="32"
//               height="32"
//               src="./assets/images/icons/subtraction.svg"
//               alt="Subtraction Icon"
//             />
//           </button>

//           <button type="button" class="btn" data-value="1">1</button>
//           <button type="button" class="btn" data-value="2">2</button>
//           <button type="button" class="btn" data-value="3">3</button>
//           <button type="button" class="btn btn--accent" id="add" data-value="+">
//             <img
//               width="32"
//               height="32"
//               src="./assets/images/icons/addition.svg"
//               alt="Addition Icon"
//             />
//           </button>

//           <button type="button" class="btn btn--light" id="more">
//             <img
//               width="32"
//               height="32"
//               src="./assets/images/icons/more-black.svg"
//               alt="More Icon"
//             />
//           </button>
//           <button type="button" class="btn" data-value="0">0</button>
//           <button type="button" class="btn" data-value="." id="point">.</button>
//           <button type="button" class="btn btn--gradient" id="equal">
//             <img
//               width="32"
//               height="32"
//               src="./assets/images/icons/equal.svg"
//               alt="Equal Icon"
//             />
//           </button>`;
// };

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
