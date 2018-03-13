// var canvas = document.createElement("CANVAS");
// canvas.id = 'canvas';
// var ctx = canvas.getContext("2d");
// document.body.appendChild(canvas);
//
// ctx.font = 'bold 10pt Calibri';
// ctx.fillStyle = "yellow";
// ctx.fillText('Hello World!', 150, 100);
//
// function openWin() {
//     window.open("https://www.google.com", "_blank");
// }
// function openWin2() {
//     window.open("test.html", "_blank");
// }
//
//
// // var canvas = document.createElement("CANVAS");
// // canvas.id = 'canvas';
// // var ctx = canvas.getContext("2d");
// // //console.log(document.getElementById('canvas'));
// // //canvas.appendChild(canvas);
// // document.body.appendChild(canvas);
// // // document.getElementById('canvas').appendChild(canvas);
// // // console.log(document.getElementById('canvas').appendChild(canvas));
//
// const path = new Path2D();
// //path.rect(250, 350, 200, 100);
// path.rect(25,72,32,32);
// path.closePath();
//
// //ctx.fillStyle = "#FFFFFF"
// ctx.fillStyle = "pink";
// ctx.fill(path);
// ctx.lineWidth = 2;
// ctx.strokeStyle = "green";
// ctx.stroke(path);
//
// function getXY(canvas, event){
//   const rect = canvas.getBoundingClientRect();
//   const y = event.clientY - rect.top;
//   const x = event.clientX - rect.left;
//   console.log(rect);
//   console.log(y);
//   console.log(x);
//   console.log({x:x, y:y});
//   return {x:x, y:y};
//
// }
//
// document.addEventListener("click",  function (e) {
//   const XY = getXY(canvas, e);
//   console.log("xy");
//   console.log(XY);
//   if(ctx.isPointInPath(path, XY.x, XY.y)) {
//     // Do Something with the click
//     alert("button clicked");
//   }
// }, false)

var canvas = document.createElement("CANVAS");
canvas.id = 'canvas';
//const canvas = document.getElementById("myCanvas")
const context = canvas.getContext("2d")
document.body.appendChild(canvas);

const path = new Path2D()
//path.rect(250, 350, 200, 100)
path.rect(25,72,32,32)
path.closePath()

context.fillStyle = "#FFFFFF"
context.fillStyle = "rgba(225,225,225,0.5)"
context.fill(path)
context.lineWidth = 2
context.strokeStyle = "#000000"
context.stroke(path)

function getXY(canvas, event){
  const rect = canvas.getBoundingClientRect()
  const y = event.clientY - rect.top
  const x = event.clientX - rect.left
  return {x:x, y:y}
}

document.addEventListener("click",  function (e) {
  const XY = getXY(canvas, e)
  if(context.isPointInPath(path, XY.x, XY.y)) {
    // Do Something with the click
    alert("clicked in rectangle")
  }
}, false)
