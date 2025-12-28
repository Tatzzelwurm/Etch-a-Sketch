const container = document.querySelector("#container")
let gridSize = 16 // Grid dimensions (16x16)
let gridElementCount = 256  // Total cells = gridSize * gridSize
let array = []

createGrid(gridElementCount,gridSize)
addNewGrid()
draw()

function draw() {
array.forEach(arr => {
     arr.addEventListener("mouseenter",() => arr.style.backgroundColor = "rgba(0, 0, 0, 0.788)")
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

function changeGridSize(newGridSize, newGridElementCount) {
     clearGrid()
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
     container.appendChild(arr)
     arr.classList.add("divGrid")
})
}

function clearGrid() {
array.forEach(arr => (
     container.removeChild(arr)
))
array.length = 0
}