// Перевод выражения в массив токенов. Пример: "23+3-32" -> ["23", "+", "3", "-", "32"]

export const parseExpression = (expression) => {
  const tokens = [];
  let currentToken = "";

  for (const char of expression) {
    if (isOperator(char)) {
      if (currentToken !== "") {
        tokens.push(parseNumber(currentToken));
        currentToken = "";
      }
      tokens.push(char);
    } else {
      currentToken += char;
    }
  }

  if (currentToken !== "") {
    tokens.push(parseNumber(currentToken));
  }

  return tokens;
};

const isOperator = (char) => ["+", "-", "*", "/", "%"].includes(char);

const parseNumber = (str) => {
  const num = parseFloat(str);
  return isNaN(num) ? 0 : num;
};
