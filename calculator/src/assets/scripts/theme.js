const themeToggle = document.querySelector(".btn--toggle");
const textToggle = document.querySelector(".text--toggle");
const backspaceImg = document.querySelector("#backspace > img");
const moreImg = document.querySelector("#more > img");

export const initTheme = () => {
  loadTheme();
  themeToggle.addEventListener("click", toggleTheme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.dataset.theme = savedTheme;
  updateThemeElements(savedTheme === "light");
};

const toggleTheme = () => {
  const isLight = document.body.dataset.theme === "light";
  const newTheme = isLight ? "dark" : "light";

  document.body.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
  updateThemeElements(!isLight);
};

const updateThemeElements = (isLight) => {
  textToggle.textContent = isLight
    ? "Переключить на тёмную тему"
    : "Переключить на светлую тему";

  backspaceImg.src = isLight
    ? "./assets/images/icons/backspace-black.svg"
    : "./assets/images/icons/backspace-white.svg";

  moreImg.src = isLight
    ? "./assets/images/icons/more-black.svg"
    : "./assets/images/icons/more-white.svg";
};
