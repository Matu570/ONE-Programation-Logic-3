let canvas = document.querySelector("canvas");
let brush = canvas.getContext("2d");

brush.fillStyle = "lightgrey";
brush.fillRect(0, 0, 600, 400);

function drawCircles(x, y, radio) {
    brush.fillStyle = "blue";
    brush.beginPath();
    brush.arc(x, y, radio, 0, 2 * Math.PI);
    brush.fill();
};

for (let index = 20; index < 600; index++) {
    brush.clearRect(0, 0, 600, 400)
    drawCircles(index, 20, 10);
};