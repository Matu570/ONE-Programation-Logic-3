let canvas=document.querySelector("canvas");
let brush=canvas.getContext("2d");
brush.fillStyle="lightgrey";
brush.fillRect(0,0,600,400);

brush.fillStyle="green";
brush.fillRect(0,0,200,400);

brush.fillStyle="yellow";
brush.fillRect(200,0,200,400);

brush.fillStyle="red";
brush.fillRect(400,0,200,400);