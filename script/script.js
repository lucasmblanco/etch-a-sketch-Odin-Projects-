
const body = document.querySelector('body');

const container = document.createElement('div');
container.setAttribute('id', 'container');
body.appendChild(container);

let divs;
let finalNumber = 256;
let numUser = 0;

for(let i = 0; i < finalNumber; i++) {
    divs = document.createElement('div');
    container.appendChild(divs);
    divs.classList.add('grid');
}


let grid = document.querySelectorAll('.grid');

grid.forEach(item => item.addEventListener('mouseover', function (e) {
    e.target.setAttribute("style", "background-color:black;");
}))



const buttonColor = document.createElement('button');
body.appendChild(buttonColor);
buttonColor.textContent = "Change Color";

function newColor () {
    generateRandomColor();
    grid.forEach(item => item.addEventListener('mouseover',newColorWhenMouseOver/* function (e) {
        e.target.setAttribute("style", `background-color:${randomColor};`);
    } */))
    
}

function newColorWhenMouseOver(e) {
    generateRandomColor();
    e.target.setAttribute("style", `background-color:${randomColor};`);
}

let randomColor;
function generateRandomColor() {
    randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}



buttonColor.addEventListener('click', newColor);

const button = document.createElement('button');
body.appendChild(button);
button.textContent = "RESET";

button.addEventListener('click',changeAll);

function changeColor() {
    grid.forEach(item => item.style.backgroundColor = "white");

}



function newNumber() {
    numUser = prompt("Put a number", "");
    finalNumber = parseInt(numUser * numUser); 
}


function changeAll() {
    changeColor();
    removeNodes();
    newNumber();
    newNodes();
    again();
}

let deleteDivs = document.getElementsByTagName('div');
let fatherOfAll = document.getElementById('container');

function removeNodes() {
    for(let i = 0; i < finalNumber; i++) {
        fatherOfAll.removeChild(grid[i]);
    }
}


function newNodes(){
    for(let i = 0; i < finalNumber; i++) {
        divs = document.createElement('div');
        container.appendChild(divs);
        divs.classList.add('grid');
    }
    container.style.setProperty('grid-template-columns', `repeat(${numUser}, 1fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${numUser}, 1fr)`);
}

function again() {
    grid = document.querySelectorAll('.grid');
    grid.forEach(item => item.addEventListener('mouseover', function (e) {
    e.target.setAttribute("style", "background-color:black;");
    }))
}