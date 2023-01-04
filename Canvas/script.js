let canvas=document.querySelector("canvas");
let brush=canvas.getContext("2d");
brush.fillStyle="lightgrey";
brush.fillRect(0,0,600,400);
brush.strokeStyle = "#FF0000";

brush.fillStyle="green";
brush.fillRect(0,0,200,400);

brush.fillStyle="white";
brush.fillRect(200,0,200,400);

brush.fillStyle="red";
brush.fillRect(400,0,200,400);

brush.fillStyle="black";
brush.beginPath();
brush.moveTo(200, 150);
brush.lineTo(400, 250);
brush.lineTo(400, 260);
brush.lineTo(200, 160);
brush.lineTo(200, 150);
brush.fill();

brush.fillStyle="black";
brush.beginPath();
brush.moveTo(400, 150);
brush.lineTo(200, 250);
brush.lineTo(200, 260);
brush.lineTo(400, 160);
brush.lineTo(400, 150);
brush.fill();

brush.fillStyle="#FF00AA";
brush.beginPath();
brush.arc(300,100,65,0,2*3.14);
brush.fill();





