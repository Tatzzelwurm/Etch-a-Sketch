const grid = document.querySelector("#grid");
let gridSize = 16; // Grid dimensions (16x16)
let gridElementCount = 256; // Total cells = gridSize * gridSize
let array = [];
let color = "grey";
let isRandomMode = false;
createGrid(gridElementCount, gridSize);
addNewGrid();
draw();

function draw() {
  array.forEach((arr) => {
    arr.addEventListener(
      "mousedown",
      () => (arr.style.backgroundColor = color)
    );
  });
}

function drawRandom() {
  array.forEach((arr) => {
    arr.addEventListener(
      "mousedown",
      () => (arr.style.backgroundColor = getRandomColor())
    );
  });
}

function getNewGridSize() {
  const newGridSize = parseInt(
    prompt("Grid size (e.g., 16 for 16x16)\nmax 100, min 5:")
  );
  if (newGridSize <= 100 && newGridSize >= 5) {
    changeGridSize(newGridSize);
  } else {
    alert("Invalid input. Please enter a number from 5 to 100");
  }
}
const newGridSizeBtn = document.querySelector("#newGridSizeBtn");
newGridSizeBtn.addEventListener("click", () => getNewGridSize());

const clearGridBtn = document.querySelector("#clearGridBtn");
clearGridBtn.addEventListener("click", () => clearGrid());

const gridDefaultSizeBtn = document.querySelector("#gridDefaultSizeBtn");
gridDefaultSizeBtn.addEventListener("click", () => {
  removeGrid(), createGrid(gridElementCount, gridSize), addNewGrid(), draw();
});

const randomColorBtn = document.querySelector("#randomColorBtn");

randomColorBtn.addEventListener("click", () => {
  isRandomMode = !isRandomMode;
  randomColorBtn.textContent = isRandomMode
    ? "Random colors mode: ON"
    : "Random colors mode: OFF";
  if (isRandomMode) {
    drawRandom();
  } else {
    draw();
  }
});

randomColorBtn.addEventListener("mouseenter", () => {
  (randomColorBtn.style.color = "rgb(56, 231, 231)"),
    (randomColorBtn.style.backgroundColor = "rgba(9, 66, 68, 1)");
});
randomColorBtn.addEventListener("mouseleave", () => {
  (randomColorBtn.style.color = "white"),
    (randomColorBtn.style.backgroundColor = "rgb(7, 56, 58)");
});

clearGridBtn.addEventListener("mouseenter", () => {
  (clearGridBtn.style.color = "rgb(56, 231, 231)"),
    (clearGridBtn.style.backgroundColor = "rgba(9, 66, 68, 1)");
});
clearGridBtn.addEventListener("mouseleave", () => {
  (clearGridBtn.style.color = "white"),
    (clearGridBtn.style.backgroundColor = "rgb(7, 56, 58)");
});

newGridSizeBtn.addEventListener("mouseenter", () => {
  (newGridSizeBtn.style.color = "rgb(56, 231, 231)"),
    (newGridSizeBtn.style.backgroundColor = "rgba(9, 66, 68, 1)");
});
newGridSizeBtn.addEventListener("mouseleave", () => {
  (newGridSizeBtn.style.color = "white"),
    (newGridSizeBtn.style.backgroundColor = "rgb(7, 56, 58)");
});

gridDefaultSizeBtn.addEventListener("mouseenter", () => {
  (gridDefaultSizeBtn.style.color = "rgb(56, 231, 231)"),
    (gridDefaultSizeBtn.style.backgroundColor = "rgba(9, 66, 68, 1)");
});
gridDefaultSizeBtn.addEventListener("mouseleave", () => {
  (gridDefaultSizeBtn.style.color = "white"),
    (gridDefaultSizeBtn.style.backgroundColor = "rgb(7, 56, 58)");
});

function changeGridSize(newGridSize, newGridElementCount) {
  removeGrid();
  newGridElementCount = newGridSize ** 2;
  createGrid(newGridElementCount, newGridSize);
  addNewGrid();
  draw();
}

function clearGrid() {
  array.forEach((arr) => {
    clearGridBtn.addEventListener(
      "click",
      () => (arr.style.backgroundColor = "white")
    );
  });
}

function createGrid(newGridElementCount, newGridSize) {
  for (let i = 1; i <= newGridElementCount; i++) {
    const element = document.createElement("div");
    element.style.width = `calc(100% / ${newGridSize})`;
    element.style.height = `calc(100% / ${newGridSize})`;
    array.push(element);
  }
}

function addNewGrid() {
  array.forEach((arr) => {
    grid.appendChild(arr);
    arr.classList.add("divGrid");
  });
}

function removeGrid() {
  array.forEach((arr) => grid.removeChild(arr));
  array.length = 0;
}

function getRandomColor() {
  const x = Math.floor(Math.random() * 7);
  if (x == 0) {
    return "red";
  } else if (x == 1) {
    return "orange";
  } else if (x == 2) {
    return "yellow";
  } else if (x == 3) {
    return "green";
  } else if (x == 4) {
    return "cyan";
  } else if (x == 5) {
    return "blue";
  } else if (x == 6) {
    return "purple";
  }
}

const red = document.querySelector("#redColor");
const orange = document.querySelector("#orangeColor");
const yellow = document.querySelector("#yellowColor");
const green = document.querySelector("#greenColor");
const cyan = document.querySelector("#cyanColor");
const blue = document.querySelector("#blueColor");
const purple = document.querySelector("#purpleColor");
const pink = document.querySelector("#pinkColor");
const wheat = document.querySelector("#wheatColor");
const brown = document.querySelector("#brownColor");
const grey = document.querySelector("#greyColor");
const black = document.querySelector("#blackColor");
const white = document.querySelector("#whiteColor");

red.addEventListener("click", () => (color = "red"));
orange.addEventListener("click", () => (color = "orange"));
yellow.addEventListener("click", () => (color = "yellow"));
green.addEventListener("click", () => (color = "green"));
cyan.addEventListener("click", () => (color = "cyan"));
blue.addEventListener("click", () => (color = "blue"));
purple.addEventListener("click", () => (color = "purple"));
pink.addEventListener("click", () => (color = "pink"));
wheat.addEventListener("click", () => (color = "wheat"));
brown.addEventListener("click", () => (color = "brown"));
grey.addEventListener("click", () => (color = "grey"));
black.addEventListener("click", () => (color = "black"));
white.addEventListener("click", () => (color = "white"));
