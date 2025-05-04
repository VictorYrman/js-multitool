const display = document.querySelector("#display");
const clearButton = document.querySelector("#clear");

export const getDisplayValue = () => display.value;
export const setDisplayValue = (value) => {
  display.value = value;
  updateClearButton();
};

export const appendToDisplay = (value) => {
  if (
    getDisplayValue() === "0" &&
    !["+", "-", "*", "/"].includes(value) &&
    value !== "."
  ) {
    setDisplayValue(value);
  } else {
    display.value += value;
  }
  updateClearButton();
};

export const handleClear = () => {
  setDisplayValue("");
};

export const handleBackspace = () => {
  const currentValue = getDisplayValue();
  setDisplayValue(currentValue.slice(0, -1) || "");
};

export const handlePoint = () => {
  if (getDisplayValue() === "") setDisplayValue("0.");

  if (isExtraPoint()) {
    return;
  } else {
    excludeExtraOperation(".");
  }
};

export const handleAdd = () => {
  excludeExtraOperation("+");
};

export const handleSubtract = () => {
  excludeExtraOperation("-");
};

export const handleMultiply = () => {
  excludeExtraOperation("*");
};

export const handleDivide = () => {
  excludeExtraOperation("/");
};

const updateClearButton = () => {
  clearButton.textContent = getDisplayValue() === "" ? "AC" : "C";
};

export const getLastSymbol = () => {
  const currentValue = getDisplayValue();
  const currentValueArray = currentValue.split("");
  return currentValueArray[currentValueArray.length - 1];
};

export const setLastSymbol = (symbol) => {
  const currentValue = getDisplayValue();
  const currentValueArray = currentValue.split("");
  currentValueArray[currentValueArray.length - 1] = symbol;
  setDisplayValue(currentValueArray.join(""));
};

const excludeExtraOperation = (symbol) => {
  if (getDisplayValue() === "") return;

  const lastSymbol = getLastSymbol();

  if (["+", "-", "*", "/"].includes(lastSymbol) || lastSymbol === `${symbol}`)
    return setLastSymbol(symbol);

  appendToDisplay(`${symbol}`);
};

const isExtraPoint = () => {
  const currentValue = getDisplayValue();
  const currentValueArray = currentValue.split("");

  for (let i = currentValueArray.length - 1; i >= 0; i--) {
    if (currentValueArray[i] === ".") return true;

    if (["+", "-", "*", "/"].includes(currentValueArray[i])) return false;
  }

  return false;
};
