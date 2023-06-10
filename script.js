const container = document.querySelector('.container');
const containerHeight = 480;
const containerWidth = 480;
const sizeButton = document.querySelector('.size');

let pixelHeight;
let pixelWidth;
let originalSize = 16;

createCanvas(originalSize);

function createCanvas(dimension) {
pixelHeight = containerHeight/dimension;
pixelWidth = containerWidth/dimension;

for (i=0; i<(dimension**2); i++) {
    let div = document.createElement('div')
    div.classList.add(`${i}`);
    div.style.cssText = `height: ${pixelHeight}px; width: ${pixelWidth}px;`;
    div.addEventListener('mouseover', color);
    container.appendChild(div);
}
}

let pixels = document.querySelectorAll('div');

function color () {
    this.classList.add('hovered');
}



container.style.cssText = `height: ${containerHeight}px; width: ${containerWidth}px;`; 

sizeButton.addEventListener('click', changeSize);

function changeSize() {
    let size = prompt('Select a dimension of pixels.');
    while (size > 100 || size < 1) {
        size = prompt('Invalid pixel dimension. Select another value.');
    }
    pixels.forEach(pixel => pixel.remove());
    createCanvas(size);
    pixels = document.querySelectorAll('div');
}