const sliderSides = document.querySelector("#sides");
const outputEl = document.querySelector(".output-sides");
const divBoard = document.querySelector(".board");

function drawCell(size) {
  let cellHeightWidth = 600 / size + "px";
  const gridCell = document.createElement("div");
  gridCell.classList.add("cell");
  gridCell.style.width = cellHeightWidth;
  gridCell.style.height = cellHeightWidth;
  divBoard.appendChild(gridCell);
}

function drawGrid(size) {
  if (document.querySelector(".cell")) {
    while (divBoard.firstChild) {
      divBoard.removeChild(divBoard.firstChild);
    }
    // console.log("cells after: " + document.querySelectorAll(".cell").length);
  }
  for (let n = 0; n < size ** 2; n++) {
    drawCell(size);
    console.log("cells: " + document.querySelectorAll(".cell").length);
  }
}

outputEl.textContent = sliderSides.value;
sliderSides.addEventListener("input", (e) => {
  outputEl.textContent = sliderSides.value;
});

//  {
//   drawGrid();
// }

drawGrid(6);
