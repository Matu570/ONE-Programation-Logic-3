let canvas = document.querySelector("canvas");
let brush = canvas.getContext("2d");

brush.fillStyle = "grey";
brush.fillRect(0, 0, 600, 400);

let x;
let y;
let colorPosition=0;
let color=["blue", "red", "green"];
let pickedColor=color[colorPosition];
function showAlert(event) {
    x=event.offsetX;
    y=event.offsetY;
    console.log(event);
    alert("You clicked on the coordinates " + x + "/" + y)
};

function drawCircle(event){
    x=event.offsetX;
    y=event.offsetY;
    brush.fillStyle=pickedColor;
    brush.beginPath();
    brush.arc(x,y,10,0,2*3.14);
    brush.fill();
    console.log(x + "," + y);
    console.log(colorPosition)

};

// canvas.onclick=showAlert;
canvas.onclick=drawCircle;

function changeColor() {
    if(colorPosition<(color.length-1)){
        colorPosition++;
        pickedColor=color[colorPosition];
    }else{colorPosition=0;
    pickedColor=color[colorPosition]};
    return false;
};

canvas.oncontextmenu=changeColor;
