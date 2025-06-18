export const generateMapHTML = (map) => {
  const mapContainer = document.querySelector(".map");
  mapContainer.innerHTML = "";

  for (let y = 0; y < map.length; y++) {
    const row = document.createElement("div");
    row.className = "row";

    for (let x = 0; x < map[0].length; x++) {
      const cell = document.createElement("div");
      cell.className = "cell";

      switch (map[y][x]) {
        case "start":
          cell.classList.add("cell--start", "cell--sticker");
          cell.textContent = "😀";
          break;
        case "finish":
          cell.classList.add("cell--finish");
          cell.textContent = "🏁";
          break;
        case "wall":
          cell.classList.add("cell--wall");
          break;
        default:
          cell.classList.add("cell--empty");
      }

      row.appendChild(cell);
    }

    mapContainer.appendChild(row);
  }
};
