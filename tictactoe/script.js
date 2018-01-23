// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World!";
// }
//
// myFunction();

let canvas = document.getElementById("tictactoe");
let ctx = canvas.getContext('2d');
let msg = document.getElementById("message");
let cell = 100;

// store the board as array in the game

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
// use binary pattern to identify the win patterns
let winPattern = [
                  0b111000000, 0b000111000, 0b000000111, //rows
                  0b100100100, 0b010010010, 0b001001001, //columns
                  0b100010001, 0b001010100, //diagonals
];

let BLANK = 0, X = 1, O = -1;

// Mouse functionalities

let mouse = {
  x: -1,
  y: -1,
}

let currentPlayer = X;
let gameOver = false;


canvas.width = canvas.height = 3 * cell;

canvas.addEventListener('mouseout', function () {
  mouse.x = mouse.y = -1;
});

canvas.addEventListener('mousemove', function (e) {
  let x = e.pageX - canvas.offsetLeft,
      y = e.pageY - canvas.offsetTop;

  mouse.x = x;
  mouse.y = y;

  //console.log(x,y);
  //gives the position of the mouse
  //console.log(getCellByCoords(x,y));
});
canvas.addEventListener('click', function (e) {

  play(getCellByCoords(mouse.x,mouse.y));
});

function play(c) {
  //console.log(tttboard[c]);

  if (gameOver) return; 
  if (tttboard[c] != BLANK) {
    msg.textContent = 'Position Taken';
    return;
  }
  tttboard[c] = currentPlayer;


  let winCheck = checkWin(currentPlayer);

  if (winCheck != 0){
    gameOver = true;
    msg.textContent = ((currentPlayer == X)? 'X' : 'O') + 'wins';
  }

  currentPlayer *= -1
  //console.log('success');
}

function checkWin(player) {
  let playerMapBitMask = 0;
  for(let i = 0; i < tttboard.length; i++){
    playerMapBitMask <<= 1;
    if (tttboard[i] == player ){
      playerMapBitMask += 1;
    }
    //console.log(playerMapBitMask);
  }

  for(let i = 0 ; i < winPattern.length; i++){
    if ((playerMapBitMask & winPattern[i]) == winPattern[i]){
      return winPattern[i];
    }
  }
  return 0;
}
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

function getCellByCoords(x,y){

  return (Math.floor(x / cell) % 3) + (Math.floor(y / cell) * 3)

  // return {
  //   'x': Math.floor(x / cell),
  //   'y': Math.floor(y / cell),
  // };
}

draw();
