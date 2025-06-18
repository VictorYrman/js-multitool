export const getPositions = (map) => {
  let startPosition, finishPosition;

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j].classList.contains("cell--start")) {
        startPosition = { x: j, y: i };
      } else if (map[i][j].classList.contains("cell--finish")) {
        finishPosition = { x: j, y: i };
      }
    }
  }

  return [startPosition, finishPosition];
};

export const getMaxLevel = () => {
  return width * height - (width + height - 1);
};
