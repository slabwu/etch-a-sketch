const container = document.querySelector('.container');
const containerHeight = 480;
const containerWidth = 480;
let pixelHeight;
let pixelWidth;

let size = prompt('Select a dimension of pixels.');
while (size > 100) {
    prompt('Invalid pixel dimension. Select another value.');
}
pixelHeight = containerHeight/size;
pixelWidth = containerWidth/size;


for (i=0; i<(size**2); i++) {
    let div = document.createElement('div')
    div.classList.add(`${i}`);
    div.style.cssText = `height: ${pixelHeight}px; width: ${pixelWidth}px;`; 
    container.appendChild(div);
}

const pixels = document.querySelectorAll('div');

pixels.forEach(pixel => pixel.addEventListener('mouseover', color));

function color () {
    this.classList.add('hovered');
}
//container.style.backgroundColor="pink";
container.style.cssText = `height: ${containerHeight}px; width: ${containerWidth}px;`; 