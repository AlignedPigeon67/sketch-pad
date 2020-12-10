const root = document.documentElement;
const pad = document.querySelector("#pad");
const resizeInput = document.querySelector("#grid-input")
const resizeButton = document.querySelector("#grid-size");
const clearButton = document.querySelector("#clear");

let gridDimension = 32;

function initGrid(dim) {
    for (let i = 0; i < dim; i++) {
        for (let j = 0; j < dim; j++) {
            let newDiv = document.createElement("div");
            newDiv.addEventListener("mouseover", () => {
                newDiv.classList.add("draw-div");
            });
            pad.appendChild(newDiv);
        }
    }
}

function clearGrid() {
    let drawnDivs = document.querySelectorAll(".draw-div");
    drawnDivs.forEach(e => {
        e.classList.remove("draw-div");
    });
}

function getUserGridInput() {
    gridDimension = parseInt(resizeInput.value);
    if (!Number.isInteger(gridDimension)) gridDimension = 16;
    if (gridDimension < 4 || gridDimension > 100) {
        alert("Grid input size must be between 4 and 100 inclusive.");
        return;
    }

    clearGrid();
    root.style.setProperty("--grid-cell-dim", gridDimension);
    initGrid(gridDimension);
}

initGrid(gridDimension);

resizeButton.addEventListener("click", getUserGridInput);
clearButton.addEventListener("click", clearGrid);