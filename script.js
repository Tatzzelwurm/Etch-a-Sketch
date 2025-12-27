const container = document.querySelector("#container")
let array = []

for (let i = 1; i <= 256; i++) {
     const element = document.createElement("div")
     array.push(element)
}

array.forEach(arr => {
     container.appendChild(arr)
     arr.classList.add("divGrid")
})

array.forEach(arr => {
     arr.addEventListener("mouseenter",() => arr.style.backgroundColor = "lightblue")
})

const gridSizeBtn = document.querySelector("#gridSizeBtn")




function getNewGridSize() {
     const newGridSize = parseInt(prompt("Grid size (e.g., 16 for 16x16):"))
     if (newGridSize <= 100 && newGridSize > 5) {
          return newGridSize
     }
     else {
          return "ERROR"
     }
}



