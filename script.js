const body = document.querySelector("body");
const container = document.querySelector("#container");
const button = document.querySelector("#btn");

let numberOfSquaresPerSide = 16;
addSquares(numberOfSquaresPerSide);

container.addEventListener('mouseover',(event) => {
    if( event.target.classList.contains("square") ) {
        event.target.style.backgroundColor = "black";
    };
})

btn.addEventListener('click', () => {
    numberOfSquaresPerSide = prompt("Number of squares per side?");
    // container.remove();
    // let newContainer = document.createElement("div");
    // newContainer.id = "container";
    // body.appendChild(newContainer);
})

function addSquares(numberOfSquaresPerSide) {
    for ( let i = 0 ; i < numberOfSquaresPerSide * numberOfSquaresPerSide ; i++ ) {
        let square = document.createElement("div");
        square.classList.add("square");

        container.appendChild(square);
    }
}