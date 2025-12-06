const body = document.querySelector("body");
const container = document.querySelector("#container");
const button = document.querySelector("#btn");

let containerWidth = container.getBoundingClientRect().width;

let numberOfSquaresPerSide = 32;
addSquares(numberOfSquaresPerSide, container);

containerAddEventListener(container);

function containerAddEventListener(container) {
    container.addEventListener('mouseover',(event) => {
        if( event.target.classList.contains("square") ) {
            event.target.style.backgroundColor = "black";
        };
    })
}

btn.addEventListener('click', () => {
    numberOfSquaresPerSide = prompt("Number of squares per side?");

    container.remove();

    let newContainer = document.createElement("div");
    newContainer.id = "container";
    body.appendChild(newContainer);

    addSquares(numberOfSquaresPerSide, newContainer);
})

function addSquares(numberOfSquaresPerSide, container) {
    for ( let i = 0 ; i < numberOfSquaresPerSide * numberOfSquaresPerSide ; i++ ) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${Math.floor(containerWidth / numberOfSquaresPerSide)}px`;
        square.style.height = `${Math.floor(containerWidth / numberOfSquaresPerSide)}px`;

        container.appendChild(square);
    }
}