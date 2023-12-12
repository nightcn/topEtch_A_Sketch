const sliderSides = document.querySelector("#sides");
const outputEl = document.querySelector(".output-sides");
const divBoard = document.querySelector(".board");
const btnClearGrid = document.querySelector(".clear-grid");
const btnGridSize = document.querySelector(".grid-size");
const btnResetBoard = document.querySelector(".reset-board");
const sketchMode = document.querySelectorAll("[name='tool']");

function sketchTool() {
  return Array.from(sketchMode).filter((el) => el.checked)[0].value;
}

// console.log(sketchTool());

function randomRGBval() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`; // function to return random css rgb value e.g rgb(115, 20, 255)
}

function drawCell(size) {
  let cellHeightWidth = (1 / size) * 100 + "%";
  let isPainted = [false, false, false]; // Boolean array to check if cell is painted by any of the drawing tools (pen, eraser, rainbow)

  const gridCell = document.createElement("div");
  gridCell.style.setProperty("flex-basis", cellHeightWidth);

  gridCell.addEventListener("mouseover", function (e) {
    switch (sketchTool()) {
      case "pen":
        if (isPainted[0] === false) {
          e.target.style.setProperty("background-color", "green");
          isPainted[0] = true;
          isPainted[1] = false;
          isPainted[2] = false;
          break;
        } else break;
      case "eraser":
        if (isPainted[1] === false) {
          e.target.style.setProperty("background-color", "#b8b8ff");
          isPainted[0] = false;
          isPainted[1] = true;
          isPainted[2] = false;
          break;
        } else break;
      case "rainbow":
        if (isPainted[2] === false) {
          e.target.style.setProperty("background-color", randomRGBval());
          isPainted[0] = false;
          isPainted[1] = false;
          isPainted[2] = true;
          break;
        } else break;
    }
  });

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
  return size;
}

let sizeOfGrid;

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
    sizeOfGrid = drawGrid(gridSize);
  } else {
    alert("Invalid size, try again");
  }
});

btnResetBoard.addEventListener("click", function (e) {
  clearGrid(divBoard);
  drawGrid(sizeOfGrid);
});

sizeOfGrid = drawGrid(12);
