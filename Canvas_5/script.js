let canvas = document.querySelector("canvas");
let brush = canvas.getContext("2d");
let radio = 10;
let randomX = drawPosition(600);
let randomY = drawPosition(400);

brush.fillStyle = "lightgrey";
brush.fillRect(0, 0, 600, 400);
let moveAlong = true;

function drawCircles(x, y, radio, color) {
    brush.fillStyle = color;
    brush.beginPath();
    brush.arc(x, y, radio, 0, 2 * Math.PI);
    brush.fill();
}

function cleanScreen() {
    brush.clearRect(0, 0, 600, 400);
};

function refreshScreen() {
    cleanScreen();
    randomX = drawPosition(600);
    randomY = drawPosition(400);
    drawAim(randomX, randomY);
};

function drawAim(x, y) {
    // x=Math.round(Math.random*600);
    // y=Math.round(Math.random*400);
    drawCircles(x, y, radio + 20, "red");
    drawCircles(x, y, radio + 10, "white");
    drawCircles(x, y, radio, "red");
};

function drawPosition(max) {
    return Math.floor(Math.random() * max);
};

function shoot(event) {
    console.log(event);
    let x = event.offsetX;
    let y = event.offsetY;
    if (x < randomX + radio && x > randomX - radio && y < randomY + radio && y > randomY - radio) {
        alert("Hit the target!");
    };

};

canvas.onclick = shoot;

setInterval(refreshScreen, 2000);




