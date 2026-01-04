const grid = document.querySelector("#grid");
let gridSize = 16; // Grid dimensions (16x16)
let gridElementCount = 256; // Total cells = gridSize * gridSize
let gridSquares = [];
let color = "grey";
let isRandomMode = false;
let isOpacityMode = false;

createGrid(gridElementCount, gridSize);
addNewGrid();
draw();

function draw() {
  gridSquares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      square.style.backgroundColor = color;
    });
  });
}

function drawRandom() {
  gridSquares.forEach((square) => {
    square.addEventListener(
      "mousedown",
      () => (square.style.backgroundColor = getRandomColor())
    );
  });
}
function drawOpacity() {
  gridSquares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      square.style.backgroundColor = color;
      const currentOpacity = parseFloat(square.style.opacity);
      square.style.opacity = currentOpacity + 0.1;
    });
  });
}

const opacityBtn = document.querySelector("#opacityModeBtn");

opacityBtn.addEventListener("click", () => {
  isOpacityMode = !isOpacityMode;
  opacityBtn.textContent = isOpacityMode
    ? "Opacity mode: ON"
    : "Opacity mode: OFF";
  if (isOpacityMode) {
    gridSquares.forEach((square) => (square.style.opacity = 0.1));
    randomColorBtn.disabled = true;
    updateDisabledButtonsStyles();
    drawOpacity();
  } else {
    gridSquares.forEach((square) => (square.style.opacity = 1));
    randomColorBtn.disabled = false;
    updateDisabledButtonsStyles();
    draw();
  }
});

const newGridSizeBtn = document.querySelector("#newGridSizeBtn");
newGridSizeBtn.addEventListener("click", () => getNewGridSize());

const clearGridBtn = document.querySelector("#clearGridBtn");
clearGridBtn.addEventListener("click", () => clearGrid());

const gridDefaultSizeBtn = document.querySelector("#gridDefaultSizeBtn");
gridDefaultSizeBtn.addEventListener("click", () => {
  removeGrid(), createGrid(gridElementCount, gridSize), addNewGrid(), draw();
});

const randomColorBtn = document.querySelector("#randomColorsModeBtn");

randomColorBtn.addEventListener("click", () => {
  isRandomMode = !isRandomMode;
  randomColorBtn.textContent = isRandomMode
    ? "Random colors mode: ON"
    : "Random colors mode: OFF";
  if (isRandomMode) {
    opacityBtn.disabled = true;
    updateDisabledButtonsStyles();
    drawRandom();
  } else {
    opacityBtn.disabled = false;
    updateDisabledButtonsStyles();
    draw();
  }
});

function updateDisabledButtonsStyles() {
  const disabledButtons = [opacityBtn, randomColorBtn];
  disabledButtons.forEach((button) => {
    button.style.color = button.disabled ? "grey" : "white";
  });
}

const buttons = [
  clearGridBtn,
  newGridSizeBtn,
  randomColorBtn,
  gridDefaultSizeBtn,
  opacityBtn,
];
buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    if (!button.disabled) {
      (button.style.color = "rgb(56, 231, 231)"),
        (button.style.backgroundColor = "rgba(9, 66, 68, 1)");
    }
  }),
    button.addEventListener("mouseleave", () => {
      if (!button.disabled) {
        (button.style.color = "white"),
          (button.style.backgroundColor = "rgb(7, 56, 58)");
      }
    });
});

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

function changeGridSize(newGridSize, newGridElementCount) {
  removeGrid();
  newGridElementCount = newGridSize ** 2;
  createGrid(newGridElementCount, newGridSize);
  addNewGrid();
  draw();
}

function clearGrid() {
  gridSquares.forEach((square) => (square.style.backgroundColor = "white"));
}

function createGrid(newGridElementCount, newGridSize) {
  for (let i = 1; i <= newGridElementCount; i++) {
    const square = document.createElement("div");
    square.style.width = `calc(100% / ${newGridSize})`;
    square.style.height = `calc(100% / ${newGridSize})`;
    gridSquares.push(square);
  }
}

function addNewGrid() {
  gridSquares.forEach((square) => {
    grid.appendChild(square);
    square.classList.add("divGrid");
  });
}

function removeGrid() {
  gridSquares.forEach((square) => grid.removeChild(square));
  gridSquares.length = 0;
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
