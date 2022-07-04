const canvas = document.getElementById("canvas");
const marker = document.getElementById("marker");
const rgb = document.getElementById("rgb");
const eraser = document.getElementById("eraser");
const counter = document.getElementById("counter");
const slider = document.getElementById("slider");
let markerColor = "black";

marker.addEventListener('click', function(){ colorChanger('black'); });
rgb.addEventListener('click', function(){ colorChanger('rgb'); });
eraser.addEventListener('click', function(){ colorChanger('white'); });
slider.onmousemove = (e) => updateSizeValue(e.target.value);
slider.onchange = (e) => newCanvasSize(e.target.value);
updateSizeValue(16);

function newCanvasSize (e) {
    canvas.innerHTML = '';
    canvasSize(e);
}
function canvasSize (x) {
    for (let i = 0; i < x; i++ ) {
        const div = document.createElement("div");
        div.style.backgroundColor = "blue";
        for (let i = 0; i < x; i++) {
            const panel = document.createElement("div");
            panel.style.backgroundColor = "white";
            panel.classList.add('grid-element');
            panel.addEventListener('mouseover', color);
            div.appendChild(panel);
        }
        canvas.appendChild(div);
    }
    console.log('test');

}
function colorChanger(e) {
    if (e === 'black') {
        markerColor = 'black';
    } else if (e === 'rgb') {
        markerColor = 'rgb';
    } else if (e === 'white') {
        markerColor = 'white';
    }
}

function color (e) {
    if (markerColor === "black") {
        e.target.style.backgroundColor = "black";
    } else if (markerColor === "rgb")  {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else {
        e.target.style.backgroundColor = 'white';
    }
}
function updateSizeValue(e) {
    counter.textContent = `${e}x${e}`;
    console.log('test');

}

canvasSize(16);
