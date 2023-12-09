const sliderSides = document.querySelector("#sides");
const outputEl = document.querySelector(".output-sides");

outputEl.textContent = sliderSides.value;
sliderSides.addEventListener("input", (e) => {
  outputEl.textContent = sliderSides.value;
});
