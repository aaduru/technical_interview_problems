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
// store the board as array in the game
// use binary pattern to identify the win patterns



// let tttboard = [
//                   0,0,0,
//                   0,0,0,
//                   0,0,0,
// ];
let tttboard = [
                  1,0,0,
                  0,0,-1,
                  -1,0,1,
];

let winPattern = [
                  0b111000000, 0b000111000, 0b000000111, //rows
                  0b100100100, 0b010010010, 0b001001001, //columns
                  0b100010001, 0b001010100, //diagonals
];

let BLANK = 0, X = 1, O = -1;

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawBoard();
  fillBoard();

  function drawBoard(){
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5;

    //draw vertical lines
    ctx.beginPath();
    ctx.moveTo(cell, 0);
    ctx.lineTo(cell, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cell * 2 , 0);
    ctx.lineTo(cell * 2, canvas.height);
    ctx.stroke();

    // draw horizontal lines
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

    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    for( let i = 0; i < tttboard.length; i++){
      let coords = getCellCoords(i);

      ctx.save();
      ctx.translate(coords.x + cell / 2 , coords.y + cell / 2);
      // origin of the canvas is at the center of the current cell

      if (tttboard[i] == X){
        drawX();
      } else if (tttboard[i] == O){
        drawO();
      }
      ctx.restore();

    }

  }

  function drawX(){
    // draws x
    ctx.beginPath();
    ctx.moveTo( -cell / 3, -cell / 3);
    ctx.lineTo(cell / 3, cell / 3);
    ctx.moveTo( cell / 3, -cell / 3);
    ctx.lineTo(-cell / 3, cell / 3);
    ctx.stroke();

  }

  function drawO(){

    //draws 0
    ctx.beginPath();
    ctx.arc(0,0,cell/3,0,Math.PI * 2);
    ctx.stroke();
  }

  requestAnimationFrame(draw);
}


// function to get x y cooridantes of each cell
function getCellCoords(c){

  let x = (c % 3) * cell;
  let y = Math.floor(c / 3) * cell

  return {
    'x': x,
    'y': y,
  };
}

draw();
