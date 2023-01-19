

function toDrawSquare(x, y, color) {
    let canvas = document.querySelector("canvas");
    let brush = canvas.getContext("2d");
    brush.fillStyle = color;
    brush.fillRect(x, y, 50, 50);
    brush.strokeStyle = "black";
    brush.strokeRect(x, y, 50, 50);
};
let x=0;
while (x < 600) {
    toDrawSquare(x, 0, "red");
    toDrawSquare(x, 50, "yellow");
    toDrawSquare(x, 100, "green");
    x += 50;
};






