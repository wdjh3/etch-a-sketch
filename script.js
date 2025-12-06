const body = document.querySelector("body");
const container = document.querySelector("#container");
const button = document.querySelector("#btn");

let containerWidth = container.getBoundingClientRect().width;

let numberOfSquaresPerSide = 16;
addSquares(numberOfSquaresPerSide, container);

addHoverTurnBlacker(container);

function addHoverTurnBlacker(container) {
    container.addEventListener('mouseover',(event) => {
        if( event.target.classList.contains("square") ) {
            currentOpacity = parseFloat(window.getComputedStyle(event.target).opacity);
            event.target.style.opacity = currentOpacity + 0.1;
        };
    })
}

btn.addEventListener('click', () => {
    numberOfSquaresPerSide = prompt("Number of squares per side?");

    if (numberOfSquaresPerSide > 100) {
        alert("Please enter a number smaller than or equal to 100. I don't want to crash.");
        return;
    }

    const container = document.querySelector("#container");

    container.remove();

    let newContainer = document.createElement("div");
    newContainer.id = "container";

    body.appendChild(newContainer);

    addSquares(numberOfSquaresPerSide, newContainer);
    addHoverTurnBlacker(newContainer);
})

function addSquares(numberOfSquaresPerSide, container) {
    for ( let i = 0 ; i < numberOfSquaresPerSide * numberOfSquaresPerSide ; i++ ) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${(containerWidth / numberOfSquaresPerSide)}px`;
        square.style.height = `${(containerWidth / numberOfSquaresPerSide)}px`;

        container.appendChild(square);
    }
}