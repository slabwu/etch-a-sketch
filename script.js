const container = document.querySelector('.container');
const containerHeight = 480;
const containerWidth = 480;
const sizeButton = document.querySelector('.size');
container.style.cssText = `height: ${containerHeight}px; width: ${containerWidth}px;`; 

let pixelHeight;
let pixelWidth;
let colour = 'pink';





function createCanvas(dimension) {
    pixelHeight = containerHeight/dimension;
    pixelWidth = containerWidth/dimension;

    for (i=0; i<(dimension**2); i++) {
        let div = document.createElement('div')
        div.classList.add(`${i}`);
        div.style.cssText = `height: ${pixelHeight}px; width: ${pixelWidth}px;`;
        div.addEventListener('mouseover', changeColour);
        container.appendChild(div);
    }
}

function changeColour () {
    this.style.backgroundColor = `${colour}`;
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





createCanvas(16);
let pixels = document.querySelectorAll('div');
sizeButton.addEventListener('click', changeSize);