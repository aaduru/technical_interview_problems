const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.scale(20,20);



//t piece
const matrix = [
                 [0,0,0],
                 [1,1,1],
                 [0,1,0],
               ];

const player = {
                 pos: {x: 5, y: 5},
                 matrix: matrix,
               }


let lastTime = 0;
let dropCounter = 0;
let dropInterval = 1000;

function collide(gameBoard, player){
  const [m, o] = [player.matrix, player.pos];
  for (let y = 0; y < m.length; ++y){
    for (let x = 0; x < m[y].length; ++x){
      if (m[y][x] !== 0 &&
        (gameBoard[y + o.y] &&
        gameBoard[y + o.y][x + o.x]) !==0){
          return true;
        }
    }
  }
}

function createMatrix(w,h){
  const matrix = [];
  while (h--) {
    matrix.push(new Array(w).fill(0));
  }
  return matrix;
}

const gameBoard = createMatrix(12,20);
// console.log(gameBoard);
// console.table(gameBoard);

function draw() {
  context.fillStyle = "#000";
  context.fillRect(0,0,canvas.width,canvas.height);
  drawMatrix(gameBoard, {x: 0, y: 0 });
  drawMatrix(player.matrix, player.pos);
}
function drawMatrix(matrix, offset) {

  matrix.forEach((row,y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        context.fillStyle="red";
        context.fillRect(x + offset.x,
                         y + offset.y,
                         1,
                         1);
      }
    });
  });
}

function merge(gameBoard, player){

  player.matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        gameBoard[y + player.pos.y][x + player.pos.x] = value;
      }
    });
  });
}

function playerDrop(){

  player.pos.y++ ;
  if (collide(gameBoard, player)) {
    player.pos.y--;
    merge(gameBoard, player);
    player.pos.y = 0;
  }
  dropCounter = 0;
}

function playerMove(direction){
  player.pos.x += direction;
  if (collide(gameBoard, player)){
      player.pos.x -= direction;
  }
}

function playerRotate(dir) {
  let offset = 1;
  rotate(player.matrix, dir);

  while(collide(gameBoard, matrix)) {
    player.pos.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
  }
}

function rotate(matrix, dir) {
  for(let y =0; y < matrix.length; y++){
    for(let x = 0; x < y; x++){
      [
        matrix[x][y],
        matrix[y][x],
      ] = [
        matrix[y][x],
        matrix[x][y],
      ];

    }
  }
  if (dir > 0){
    matix.forEach(row => row.reverse());
  } else {
    matrix.reverse();
  }
}

function update(time = 0){
  const deltaTime = time - lastTime;
  lastTime = time;
  //console.log(deltaTime);
  dropCounter += deltaTime;
  if (dropCounter > dropInterval) {
    // player.pos.y++;
    // dropCounter = 0;
    playerDrop();
  }
  draw();
  requestAnimationFrame(update);
}

document.addEventListener('keydown', event => {
  //console.log(event);

  if (event.keyCode === 37) {
    // player.pos.x-- ;
    playerMove(-1);
  } else if (event.keyCode === 39) {
    // player.pos.x++ ;
    playerMove(1);
  } else if (event.keyCode === 40) {
      // player.pos.y++ ;
      // dropCounter = 0;
      playerDrop();
    }
    else if (event.keyCode === 38) {
      alert("you cannot use up arrow");
    }
    else if (event.keyCode === 81) {
      playerRotate(-1);
    }
    else if (event.keyCode === 87) {
      playerRotate(-1);
    }

});
// document.addEventListener('keydown', event => {
//   console.log(event);
// })
update();
