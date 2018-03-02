var canvas = document.createElement("CANVAS");
canvas.id = 'canvas';
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

ctx.font = 'bold 10pt Calibri';
ctx.fillStyle = "yellow";
ctx.fillText('Hello World!', 150, 100);


//
// canvas.onclick = function(){
//   alert("mouse was clicked");
// }
var count = 0;

canvas.onclick = function(){
  alert("mouse was clicked");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = 'bold 10pt Calibri';
  ctx.fillStyle = "red";
  ctx.fillText('mouse clicked', 150, 100);
  console.log(count);
  count += 1;
  if (count == 2) {
    console.log("here");
    document.body.removeChild(canvas);
    alert("canvas removed");
  }
}

if (count == 2) {
  document.getElementById("canvas").disabled = true;
}

function openWin() {
    window.open("https://www.google.com", "_blank");
}
function openWin2() {
    window.open("test.html", "_blank");
}

ctx.lineWidth = 4;
ctx.strokeStyle = "#00ffff";
ctx.fillStyle = "#abc";
roundRect(ctx, 10, 10, 100, 50, 10, true);
ctx.font="10px Georgia";
ctx.textAlign="center";
ctx.textBaseline = "middle";
ctx.fillStyle = "#00ffff";
var rectHeight = 50;
var rectWidth = 100;
var rectX = 10;
var rectY = 10;
ctx.fillText("text inside rectangle",rectX+(rectWidth/2),rectY+(rectHeight/2));




function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == "undefined" ) {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (stroke) {
    ctx.stroke();
  }
  if (fill) {
    ctx.fill();
  }
}
















// button using path//




// const canvas = document.getElementById("myCanvas")
// const context = canvas.getContext("2d")
//
// //create your shape data in a Path2D object
// const path = new Path2D()
// path.rect(250, 350, 200, 100)
// path.rect(25,72,32,32)
// path.closePath()
//
// //draw your shape data to the context
// context.fillStyle = "#FFFFFF"
// context.fillStyle = "rgba(225,225,225,0.5)"
// context.fill(path)
// context.lineWidth = 2
// context.strokeStyle = "#000000"
// context.stroke(path)
//
// function getXY(canvas, event){ //adjust mouse click to canvas coordinates
//   const rect = canvas.getBoundingClientRect()
//   const y = event.clientY - rect.top
//   const x = event.clientX - rect.left
//   return {x:x, y:y}
// }
//
// document.addEventListener("click",  function (e) {
//   const XY = getXY(canvas, e)
//   //use the shape data to determine if there is a collision
//   if(context.isPointInPath(path, XY.x, XY.y)) {
//     // Do Something with the click
//     alert("clicked in rectangle")
//   }
// }, false)
