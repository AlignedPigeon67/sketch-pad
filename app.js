const pad = document.querySelector("#pad");
const clearButton = document.querySelector("#clear");

let gridDimesion = 50;

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

initGrid(gridDimesion);

  clearButton.addEventListener("click", clearGrid);