const body = document.querySelector("body");
const container = document.querySelector("#container");
const button = document.querySelector("#btn");

let containerWidth = container.getBoundingClientRect().width;

let numberOfSquaresPerSide = 16;
addSquares(numberOfSquaresPerSide, container);

addHoverTurnRandomColour(container);

function addHoverTurnRandomColour(container) {
    container.addEventListener('mouseover',(event) => {
        if( event.target.classList.contains("square") ) {
            let redValue = Math.floor(Math.random() * 255);
            let greenValue = Math.floor(Math.random() * 255);
            let blueValue = Math.floor(Math.random() * 255);

            event.target.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

            //I'm gonna be honest, this look like vomit
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
    addHoverTurnRandomColour(newContainer);
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