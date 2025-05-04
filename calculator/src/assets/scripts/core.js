import * as Display from "./display.js";
// import * as Parser from "./parser.js";
// import * as Operations from "./operations.js";
import * as History from "./history.js";

const keyMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "+": "+",
  "-": "-",
  "*": "*",
  "/": "/",
  "%": "%",
  "(": "(",
  ")": ")",
  ".": ".",
  Enter: "equal",
  Backspace: "backspace",
  Delete: "clear",
};

export const initCalculator = () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });

  document.addEventListener("keydown", handleKeyPress);
};

const handleKeyPress = (event) => {
  const key = event.key;

  const action = keyMap[key];

  if (action) {
    if (["equal", "backspace", "clear"].includes(action)) {
      const button = document.querySelector(`#${action}`);

      if (button) button.click();
    } else {
      const button = document.querySelector(`[data-value="${action}"]`);

      if (button) button.click();
    }
  }
};

const handleButtonClick = (event) => {
  const button = event.target.closest(".btn");
  if (!button) return;

  const { value } = button.dataset;
  const { id } = button;

  if (id) return switchBtn(id);

  Display.appendToDisplay(value);
};

const calculateResult = () => {
  // const tokens = Parser.parseExpression(expression);
  // const result = Operations.count(tokens);
  if (Display.getDisplayValue() === "") return;

  if (["+", "-", "*", "/"].includes(Display.getLastSymbol()))
    Display.setLastSymbol("");

  console.info(History.history);

  const rawResult = eval(Display.getDisplayValue());
  const result = Number(rawResult.toFixed(10));

  History.history.push(`${Display.getDisplayValue()}=${result}`);
  History.writeLastHistoryItem(History.history[History.history.length - 1]);

  Display.setDisplayValue(result);
};

const switchBtn = (id) => {
  switch (id) {
    case "clear":
      return Display.handleClear();
    case "backspace":
      return Display.handleBackspace();
    case "point":
      return Display.handlePoint();
    case "divide":
      return Display.handleDivide();
    case "multiply":
      return Display.handleMultiply();
    case "subtract":
      return Display.handleSubtract();
    case "add":
      return Display.handleAdd();
    case "equal":
      return calculateResult();
    default:
      return;
  }
};
