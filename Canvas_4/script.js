let canvas = document.querySelector("canvas");
let brush = canvas.getContext("2d");

brush.fillStyle = "lightgrey";
brush.fillRect(0, 0, 600, 400);
let x = 20;
let moveAlong = true;

function drawCircles(x, y, radio) {
    brush.fillStyle = "blue";
    brush.beginPath();
    brush.arc(x, y, radio, 0, 2 * Math.PI);
    brush.fill();
    // if (moveAlong) {
    //     if (x < 580) {
    //         x+=20;
    //     }else{moveAlong=false;}
    // }else if (moveAlong==false) {
    //     if (x>20){
    //         x-=20;
    //     }else{moveAlong=true};
    // };
}

function cleanScreen() {
    brush.clearRect(0, 0, 600, 400);
};

function refreshScreen() {
    cleanScreen();
    drawCircles(x, 20, 20);
    if(x<580 && moveAlong){
        x++;
    }else{moveAlong=false};
    if(moveAlong==false && x>20){
        x--;
    }else{moveAlong=true;}
};

setInterval(refreshScreen, 2);