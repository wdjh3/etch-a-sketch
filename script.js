const body = document.querySelector("body");
const container = document.querySelector("#container");
const button = document.querySelector("#btn");

let containerWidth = container.getBoundingClientRect().width;

let numberOfSquaresPerSide = 16;
addSquares(numberOfSquaresPerSide, container);

addHoverTurnBlack(container);

function addHoverTurnBlack(container) {
    container.addEventListener('mouseover',(event) => {
        if( event.target.classList.contains("square") ) {
            event.target.style.backgroundColor = "black";
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
    addHoverTurnBlack(newContainer);
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

for(let i = 0 ; i <= 100 ; i++) {
    let squareWidth = Math.floor(960/i)
    let leftOverSpace = 960 - i * squareWidth;
    let numberOfSquares = i;
    let leftOverMoreThanWidth = (leftOverSpace >= squareWidth);
    if (leftOverMoreThanWidth) {
        console.log( "leftover space = " + (leftOverSpace) + ", number of squares = " + numberOfSquares + ", leftover > width: " + leftOverMoreThanWidth);
    }
}