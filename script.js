const container = document.querySelector("#container");

let amountOfSquaresPerSide = 16;
for ( let i = 0 ; i < amountOfSquaresPerSide * amountOfSquaresPerSide ; i++ ) {
    let square = document.createElement("div");
    square.classList.add("square");

    container.appendChild(square);
}

container.addEventListener('mouseover',(event) => {
    if( event.target.classList.contains("square") ) {
        event.target.style.backgroundColor = "black";
    };
})