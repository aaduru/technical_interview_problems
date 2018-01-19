// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World!";
// }
//
// myFunction();

let canvas = document.getElementById("tictactoe");
let ctx = canvas.getContext('2d');
let msg = document.getElementById("message");
let cell = 100;
canvas.width = canvas.height = 3 * cell;

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawBoard();

  function drawBoard(){
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(cell, 0);
    ctx.lineTo(cell, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cell * 2 , 0);
    ctx.lineTo(cell * 2, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, cell);
    ctx.lineTo(canvas.width, cell);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, cell * 2);
    ctx.lineTo(canvas.width, cell * 2);
    ctx.stroke();

  }
  function fillBoard(){

  }
  requestAnimationFrame(draw);
}

draw();
