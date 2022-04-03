const squareMain = document.querySelector('.squaresContainer');
let divs;

makeGrid(16);
addEvents();

function makeGrid(gridLimit) {

    for (let i = 0; i < gridLimit; i++) {
        for (let j = 0; j < gridLimit; j++) {
            divs = document.createElement('div');
            divs.setAttribute('class', 'divStyles');
            squareMain.appendChild(divs);
        }
    }
}

function removeChild() {

    while (squareMain.firstChild) {
        squareMain.removeChild(squareMain.firstChild);
    }

}

function addEvents() {

    const individualDiv = document.querySelectorAll('.divStyles');
    individualDiv.forEach(div => div.addEventListener('mouseover', addBckColor));

    function addBckColor(e) {

        e.target.style.cssText=`background-color:${randomRGB()}`;
    }
}

function promptMe() {

    gridLimit = +prompt("No. of square you desired? Min : 1, Max=100");

    while(gridLimit>100){
        alert(`Input ${gridLimit} exceeded from maximum value of 100`);
        gridLimit = +prompt("No. of square you desired? Min : 1, Max=100", "Min:1, Max:100");
    }
    
    removeChild();
    squareMain.style.cssText = `grid-template-columns: repeat(${gridLimit}, minmax(auto, auto));
    grid-template-rows: repeat(${gridLimit}, minmax(auto, auto));`
    makeGrid(gridLimit);
    addEvents();
}

function randomRGB(){
    return `rgb(${Math.floor(Math.random()*255+1)},${Math.floor(Math.random()*255+1)},${Math.floor(Math.random()*255+1)})`;
}