const pad = document.querySelector("#pad");
let gridDimesion = 16;

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

initGrid(gridDimesion);