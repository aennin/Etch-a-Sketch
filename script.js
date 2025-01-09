//select container from the html file
const container = document.querySelector("#container");

//A button to reset the grid
const resetButton = document.createElement("button");
resetButton.textContent = "Create New Grid";
resetButton.style.margin = "10px 20px";
resetButton.style.padding = "10px";
resetButton.style.backgroundColor = "black";
resetButton.style.color = "white";
resetButton.style.borderRadius = "10px";

resetButton.addEventListener("click", () => {
let squaresPerSide = parseInt(prompt("Enter the number of squares per side (max: 100):"));

if(isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
}

createGrid(squaresPerSide);

});

document.body.appendChild(resetButton)
 
//function to create the grid
function createGrid (squaresPerSide) {
    if (container) container.innerHTML = "";

    const gridSize = 640;

    const cellSize = gridSize / squaresPerSide;

//generate the cells
 for(let i = 0; i < squaresPerSide *squaresPerSide; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.style.boxSizing = "border-box";
    cell.style.border = "1px solid lightgray";

    //Hover effect
    cell.addEventListener("mouseover", () => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
            cell.style.backgroundColor = randomColor;
    })
    container.appendChild(cell);
    document.body.appendChild(container);

 }
}

//default 16x16 grid-size
createGrid(16)