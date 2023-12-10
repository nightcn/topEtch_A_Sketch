const sliderSides = document.querySelector("#sides");
const outputEl = document.querySelector(".output-sides");
const divBoard = document.querySelector(".board");
const btnClearGrid = document.querySelector(".clear-grid");
const btnGridSize = document.querySelector(".grid-size");

function drawCell(size) {
  let cellHeightWidth = (1 / size) * 100 + "%";

  const gridCell = document.createElement("div");
  gridCell.style.setProperty("flex-basis", cellHeightWidth);

  divBoard.appendChild(gridCell);
}

function clearGrid(boardElement) {
  while (boardElement.firstChild) {
    divBoard.removeChild(boardElement.firstChild);
  }
  console.log("cleared");
}

function drawGrid(size) {
  for (let n = 0; n < size ** 2; n++) {
    drawCell(size);
  }
}

outputEl.textContent = sliderSides.value;
sliderSides.addEventListener("input", (e) => {
  outputEl.textContent = sliderSides.value;
});

btnClearGrid.addEventListener("click", (e) => {
  clearGrid(divBoard);
});

btnGridSize.addEventListener("click", function (e) {
  if (divBoard.firstChild) {
    clearGrid(divBoard);
  }

  let gridSize = +prompt("Enter grid size (1-100)");
  if (gridSize <= 100 && gridSize >= 1) {
    drawGrid(gridSize);
  } else {
    alert("Invalid size, try again");
  }
});
