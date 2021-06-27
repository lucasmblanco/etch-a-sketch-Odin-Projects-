
const body = document.querySelector('body');
// -- CONTAINER CREATION --
const container = document.createElement('div');
container.setAttribute('id', 'container');
body.appendChild(container);

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttonContainer');
body.insertBefore(buttonContainer, container);




//-- GLOBAL VARIBLES --
let divs;
let finalNumber = 256;
let numUser = 0;

//-- GRID CREATION -- 
for(let i = 0; i < finalNumber; i++) {
    divs = document.createElement('div');
    container.appendChild(divs);
    divs.classList.add('grid');
}

// -- VARIABLE CONTAINING ALL ELEMENTS WITH CLASS "GRID" --
let grid = document.querySelectorAll('.grid');

// -- EVENT LISTENER FOR "PAINTING" THE ELEMENTS WITH BLACK
grid.forEach(item => item.addEventListener('mouseover', function (e) {
    e.target.setAttribute("style", "background-color:black;");
}))


// -- creates a button called reset -- 
const button = document.createElement('button');
buttonContainer.appendChild(button);
button.textContent = "RESIZE GRID";

// -- adds an event listener to the button executing "changeAll" -- 
button.addEventListener('click',changeAll);

// -- function to "wipe" the grids -- 
function eraseAll() {
    grid.forEach(item => item.style.backgroundColor = "#e4e4e4");
}

// -- propmt to let the user select the size of the grid
function newGridSize() {
    numUser = prompt("Choose a number to change the size of the board", "");
    if(numUser > 100) {
        alert("Number is too big!");
        newGridSize();
    } else {
    finalNumber = parseInt(numUser * numUser); 
    }
}

let deleteDivs = document.getElementsByTagName('div');
let fatherOfAll = document.getElementById('container');



function removeNodes() {
    for(let i = 0; i < finalNumber; i++) {
        fatherOfAll.removeChild(grid[i]);
    }
}

// -- Listen to the prompt of the users and modify the property of the grid -- 
function newNodes(){
    for(let i = 0; i < finalNumber; i++) {
        divs = document.createElement('div');
        container.appendChild(divs);
        divs.classList.add('grid');
    }
    container.style.setProperty('grid-template-columns', `repeat(${numUser}, 1fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${numUser}, 1fr)`);
}

// -- re enables all the functionality of the grid -- 
function again() {
    grid = document.querySelectorAll('.grid');
    grid.forEach(item => item.addEventListener('mouseover', function (e) {
    e.target.setAttribute("style", "background-color:black;");
    }))
}

// -- allow us to execute all the function for the functionality of the button "RESET" -- 
function changeAll() {
    eraseAll();
    removeNodes();
    newGridSize();
    newNodes();
    again();
}

//-- ALLOW US TO "PAINT" ELEMENTS WITH RANDOM COLORS -- 
const buttonColor = document.createElement('button');
buttonContainer.appendChild(buttonColor);
buttonColor.textContent = "MAGIC PEN";

// -- ADD A EVENT LISTENER "mouseover" FOR EACH ELEMENT OF THE GRID and executes "newColorWhenMouseOver" --
function newColor () {
    grid.forEach(item => item.addEventListener('mouseover',newColorWhenMouseOver))
    
}





// -- EXECUTES "generateRandomColor" and target the event to change the background of the elements -- 
function newColorWhenMouseOver(e) {
    generateRandomColor();
    e.target.setAttribute("style", `background-color:${randomColor};`);
}

// -- Generate a random color and saves in the variable --
let randomColor;
function generateRandomColor() {
    randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

// -- Add an event listener to execute the new color function
buttonColor.addEventListener('click', newColor);





// -- MY STYLING --

const title = document.createElement('h1');
title.textContent = "ETCH-A-SKETCH";
title.setAttribute('id', 'title');
body.insertBefore(title, buttonContainer);


const resetButton = buttonContainer.firstElementChild

resetButton.setAttribute('id', 'resetButton');

const buttonBlack = document.createElement('button');
buttonContainer.appendChild(buttonBlack);
buttonBlack.textContent = "BLACK";

buttonBlack.addEventListener('click', colorBlack);

function colorBlack() {
        grid.forEach(item => item.addEventListener('mouseover', function (e) {
        e.target.setAttribute("style", "background-color:black;");
    }))
}

const buttonEraser = document.createElement('button');
buttonContainer.appendChild(buttonEraser);
buttonEraser.textContent = "ERASER";

buttonEraser.addEventListener('click', whiteBoard);

function whiteBoard() {
        grid.forEach(item => item.addEventListener('mouseover', function (e) {
        e.target.setAttribute("style", "background-color:#e4e4e4;");
    }))
}

