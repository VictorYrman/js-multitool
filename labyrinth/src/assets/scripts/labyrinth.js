export const generateMap = (width, height, wallCount) => {
  let map = Array(height)
    .fill()
    .map(() => Array(width).fill("empty"));

  map[0][0] = "start";
  map[height - 1][width - 1] = "finish";

  let wallsAdded = 0;
  while (wallsAdded < wallCount) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);

    if (map[y][x] === "empty") {
      map[y][x] = "wall";

      if (pathExists(map)) {
        wallsAdded++;
      } else {
        map[y][x] = "empty";
      }
    }
  }

  return map;
};

const pathExists = (map) => {
  let start, finish;
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === "start") start = { x, y };
      if (map[y][x] === "finish") finish = { x, y };
    }
  }

  if (!start || !finish) return false;

  const queue = [start];
  const visited = new Set();
  visited.add(`${start.x},${start.y}`);

  const directions = [
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },
  ];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.x === finish.x && current.y === finish.y) {
      return true;
    }

    for (const dir of directions) {
      const nx = current.x + dir.dx;
      const ny = current.y + dir.dy;

      if (nx < 0 || ny < 0 || nx >= map[0].length || ny >= map.length) {
        continue;
      }

      const cell = map[ny][nx];
      const key = `${nx},${ny}`;

      if (cell !== "wall" && !visited.has(key)) {
        visited.add(key);
        queue.push({ x: nx, y: ny });
      }
    }
  }

  return false;
};
