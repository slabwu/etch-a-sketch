const container = document.querySelector('.container');
const maxWidth = 1000
const maxHeight = 1000

for (i=0; i<(16*16); i++) {
    let div = document.createElement('div')
    div.classList.add(`${i}`);
    container.appendChild(div);
}

const pixels = document.querySelectorAll('div');

pixels.forEach(pixel => pixel.addEventListener('mouseover', color));

function color () {
    this.classList.add('hovered');
}

