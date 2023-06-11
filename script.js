const container = document.querySelector('.container');
const sizeButton = document.querySelector('.size');
const resetButton = document.querySelector('.reset');
const randomButton = document.querySelector('.random');

const red = document.querySelector('.crimson');
const orange = document.querySelector('.coral');
const yellow = document.querySelector('.gold');
const green = document.querySelector('.limegreen');
const blue = document.querySelector('.royalblue');
const purple = document.querySelector('.darkviolet');
const pink = document.querySelector('.deeppink');
const black = document.querySelector('.black');
const white = document.querySelector('.white');
const colours = document.querySelectorAll('.colour');
colours.forEach(colour => colour.style.backgroundColor = colour.className.substring(7));
console.log(colours)

const containerHeight = 480;
const containerWidth = 480;
container.style.cssText = `height: ${containerHeight}px; width: ${containerWidth}px;`; 

let pixelHeight;
let pixelWidth;
let chosenColour = 'black';





function createCanvas(dimension) {
    pixelHeight = containerHeight/dimension;
    pixelWidth = containerWidth/dimension;

    for (i=0; i<(dimension**2); i++) {
        let div = document.createElement('div')
        div.classList.add(`${i}`);
        div.style.cssText = `height: ${pixelHeight}px; width: ${pixelWidth}px;`;
        div.addEventListener('mouseover', paint);
        container.appendChild(div);
    }
}

function resetCanvas() {
    pixels.forEach(pixel => pixel.style.backgroundColor = 'white');
} 

function paint () {
    if (chosenColour === 'random') {
        switch (Math.floor(Math.random()*3)+1) {
            case 1:
                r = 256;
                g = Math.floor(Math.random()*256);
                b = Math.floor(Math.random()*256);
                break;
            case 2:
                r = Math.floor(Math.random()*256);
                g = 256;
                b = Math.floor(Math.random()*256);
                break;
            case 3:
                r = Math.floor(Math.random()*256);
                g = Math.floor(Math.random()*256);
                b = 256;                    
                break;
        }
        this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else {
        this.style.backgroundColor = `${chosenColour}`;
    }
    console.log(this.style.backgroundColor);
}

function changeSize() {
    let size = prompt('Select a dimension of pixels.');
    while (size > 100 || size < 1) {
        if (size === null) {
            size = 16;
            break;
        }
        size = prompt('Invalid pixel dimension. Select another value.');
    }
    pixels.forEach(pixel => pixel.remove());
    createCanvas(size);
    pixels = document.querySelectorAll('div');
}

function changeColour () {
    chosenColour = this.className.substring(7);
}





createCanvas(16);
let pixels = document.querySelectorAll('div');
sizeButton.addEventListener('click', changeSize);
resetButton.addEventListener('click', resetCanvas);
randomButton.addEventListener('click', () => {chosenColour = 'random'});
colours.forEach(colour => colour.addEventListener('click', changeColour))