// Ручной подсчёт выражения на базе массива токенов

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "%": (a, b) => a % b,
};

export const count = (tokens) => {
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === "*" || token === "/") {
      const result = operations[token](tokens[i - 1], tokens[i + 1]);
      tokens.splice(i - 1, 3, result);
      i -= 2;
    }
  }

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === "+" || token === "-") {
      const result = operations[token](tokens[i - 1], tokens[i + 1]);
      tokens.splice(i - 1, 3, result);
      i -= 2;
    }
  }

  return tokens[0];
};
