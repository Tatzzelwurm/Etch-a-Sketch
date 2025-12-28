const grid = document.querySelector("#grid")
let gridSize = 16 // Grid dimensions (16x16)
let gridElementCount = 256  // Total cells = gridSize * gridSize
let array = []
let color = "grey"
createGrid(gridElementCount,gridSize)
addNewGrid()
draw()

function draw() {
array.forEach(arr => {
     arr.addEventListener("mousedown",() => arr.style.backgroundColor = color)
})
}

function getNewGridSize() {
     const newGridSize = parseInt(prompt("Grid size (e.g., 16 for 16x16)\nmax 100, min 5:"))
     if (newGridSize <= 100 && newGridSize >= 5) {
          changeGridSize(newGridSize)
     
     }
     else {
          alert("Invalid input. Please enter a number from 5 to 100")
     }
}
const gridSizeBtn = document.querySelector("#gridSizeBtn")
gridSizeBtn.addEventListener("click", () => getNewGridSize())

const clearGridBtn = document.querySelector("#clearGridBtn")
clearGridBtn.addEventListener("click", () => clearGrid())

const red = document.querySelector("#redColor")
const orange = document.querySelector("#orangeColor")
const yellow = document.querySelector("#yellowColor")
const green = document.querySelector("#greenColor")
const cyan = document.querySelector("#cyanColor")
const blue = document.querySelector("#blueColor")
const purple = document.querySelector("#purpleColor")
const pink = document.querySelector("#pinkColor")
const wheat = document.querySelector("#wheatColor")
const brown = document.querySelector("#brownColor")
const grey = document.querySelector("#greyColor")
const black = document.querySelector("#blackColor")

red.addEventListener("click", () => color = "red")
orange.addEventListener("click", () => color = "orange")
yellow.addEventListener("click", () => color = "yellow")
green.addEventListener("click", () => color = "green")
cyan.addEventListener("click", () => color = "cyan")
blue.addEventListener("click", () => color = "blue")
purple.addEventListener("click", () => color = "purple")
pink.addEventListener("click", () => color = "pink")
wheat.addEventListener("click", () => color = "wheat")
brown.addEventListener("click", () => color = "brown")
grey.addEventListener("click", () => color = "grey")
black.addEventListener("click", () => color = "black")



function changeGridSize(newGridSize, newGridElementCount) {
     removeGrid()
     newGridElementCount = newGridSize ** 2
     createGrid(newGridElementCount, newGridSize)
     addNewGrid()
     draw()
}


function createGrid(newGridElementCount,newGridSize) {
  for (let i = 1; i <= newGridElementCount; i++) {
    const element = document.createElement("div");
    element.style.width = `calc(100% / ${newGridSize})`;
    element.style.height = `calc(100% / ${newGridSize})`;
    array.push(element);
  }

}

function addNewGrid() {
array.forEach(arr => {
     grid.appendChild(arr)
     arr.classList.add("divGrid")
})
}

function removeGrid() {
array.forEach(arr => (
     grid.removeChild(arr)
))
array.length = 0
}

function clearGrid() {
array.forEach(arr => {
clearGridBtn.addEventListener("click",() => arr.style.backgroundColor = "white")
})
}

