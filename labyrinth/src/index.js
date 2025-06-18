import "./assets/styles/normalize.css";
import "./assets/styles/style.css";

import { generateMap } from "./assets/scripts/labyrinth.js";
import { generateMapHTML } from "./assets/scripts/renders.js";
import { getPositions, getMaxLevel } from "./assets/scripts/settings.js";

let mapArray = [];
let startPosition, finishPosition, userPosition;
let level = 1;
let width = Number(document.querySelector("#width").value);
let height = Number(document.querySelector("#height").value);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#level").textContent = level;

  const map = generateMap(width, height, level);
  generateMapHTML(map);

  const rows = document.querySelectorAll(".row");

  rows.forEach((element) => {
    mapArray.push(element.children);
  });

  [startPosition, finishPosition] = getPositions(mapArray);
  userPosition = { x: startPosition.x, y: startPosition.y };
});

const generateNewMap = (level) => {
  mapArray = [];
  document.querySelector("#level").textContent = level;

  const map = generateMap(width, height, level);
  generateMapHTML(map);

  const rows = document.querySelectorAll(".row");

  rows.forEach((element) => {
    mapArray.push(element.children);
  });

  [startPosition, finishPosition] = getPositions(mapArray);
  userPosition = { x: startPosition.x, y: startPosition.y };
};

const restartGame = () => {
  userPosition = { x: startPosition.x, y: startPosition.y };
  mapArray[userPosition.y][userPosition.x].textContent = "😀";
};

document.addEventListener("keydown", (event) => {
  const x = userPosition.x;
  const y = userPosition.y;

  try {
    switch (event.key) {
      case "ArrowLeft":
        mapArray[y][x].textContent = "";

        userPosition.x -= 1;

        if (
          mapArray[userPosition.y][userPosition.x].classList.contains(
            "cell--wall"
          )
        ) {
          level = 1;
          generateNewMap(level);
          restartGame();
          alert("Вы врезались в стену!");
          return;
        }

        if (
          mapArray[userPosition.y][userPosition.x].classList.contains(
            "cell--finish"
          )
        ) {
          const maxLevel = getMaxLevel();

          if (level === maxLevel) {
            level = 1;
            alert(
              "Вы прошли все уровни! Для повышения сложности рекомендую увеличить размерность поля!"
            );
          } else {
            level++;
            alert(`Уровень ${level - 1} пройден!`);
          }

          generateNewMap();
          restartGame();
          return;
        }

        mapArray[y][userPosition.x].textContent = "😀";

        break;
      case "ArrowRight":
        mapArray[y][x].textContent = "";

        userPosition.x += 1;

        if (
          mapArray[userPosition.y][userPosition.x].classList.contains(
            "cell--wall"
          )
        ) {
          level = 1;
          generateNewMap(level);
          restartGame();
          alert("Вы врезались в стену!");
          return;
        }

        if (
          mapArray[userPosition.y][userPosition.x].classList.contains(
            "cell--finish"
          )
        ) {
          const maxLevel = getMaxLevel();

          if (level === maxLevel) {
            level = 1;
            alert(
              "Вы прошли все уровни! Для повышения сложности рекомендую увеличить размерность поля!"
            );
          } else {
            level++;
            alert(`Уровень ${level - 1} пройден!`);
          }

          generateNewMap(level);
          restartGame();
          return;
        }

        mapArray[y][userPosition.x].textContent = "😀";
        break;
      case "ArrowUp":
        mapArray[y][x].textContent = "";

        userPosition.y -= 1;

        if (
          mapArray[userPosition.y][userPosition.x].classList.contains(
            "cell--wall"
          )
        ) {
          level = 1;
          generateNewMap(level);
          restartGame();
          alert("Вы врезались в стену!");
          return;
        }

        if (
          mapArray[userPosition.y][userPosition.x].classList.contains(
            "cell--finish"
          )
        ) {
          const maxLevel = getMaxLevel();

          if (level === maxLevel) {
            level = 1;
            alert(
              "Вы прошли все уровни! Для повышения сложности рекомендую увеличить размерность поля!"
            );
          } else {
            level++;
            alert(`Уровень ${level - 1} пройден!`);
          }

          generateNewMap(level);
          restartGame();
          return;
        }

        mapArray[userPosition.y][x].textContent = "😀";
        break;
      case "ArrowDown":
        mapArray[y][x].textContent = "";

        userPosition.y += 1;

        if (
          mapArray[userPosition.y][userPosition.x].classList.contains(
            "cell--wall"
          )
        ) {
          level = 1;
          generateNewMap(level);
          restartGame();
          alert("Вы врезались в стену!");
          return;
        }

        if (
          mapArray[userPosition.y][userPosition.x].classList.contains(
            "cell--finish"
          )
        ) {
          const maxLevel = getMaxLevel();

          if (level === maxLevel) {
            level = 1;
            alert(
              "Вы прошли все уровни! Для повышения сложности рекомендую увеличить размерность поля!"
            );
          } else {
            level++;
            alert(`Уровень ${level - 1} пройден!`);
          }

          generateNewMap(level);
          restartGame();
          return;
        }

        mapArray[userPosition.y][x].textContent = "😀";
        break;
    }
  } catch (error) {
    level = 1;
    generateNewMap(level);
    restartGame();
    alert("Вы вышли за пределы поля!");
    return;
  }
});

const restartBtn = document.querySelector("#restart");
const startBtn = document.querySelector("#start");

restartBtn.addEventListener("click", () => {
  level = 1;
  generateNewMap(level);
  restartGame();
});

startBtn.addEventListener("click", () => {
  if (
    Number(document.querySelector("#width").value) < 5 &&
    Number(document.querySelector("#height").value) < 5
  ) {
    alert("Ширина и высота не могут быть меньше 5! Введите числа больше 5!");
    return;
  } else if (Number(document.querySelector("#width").value) < 5) {
    alert("Ширина не может быть меньше 5! Введите число больше 5!");
    return;
  } else if (Number(document.querySelector("#height").value) < 5) {
    alert("Высота не может быть меньше 5! Введите число больше 5!");
    return;
  }

  width = Number(document.querySelector("#width").value);
  height = Number(document.querySelector("#height").value);

  level = 1;
  generateNewMap(level);
  restartGame();
});
