let memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
let memory_values = [];
let memory_tile_ids = [];
let tiles_flipped = 0;

// for time
let startTime, endTime, time;

Array.prototype.memory_tile_shuffle = function() {
  let i = this.length, j , temp;
  while(--i > 0){
    j = Math.floor(Math.random() * (i + 1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
}

function newBoard() {
  tiles_flipped = 0;
  let output = '';
  memory_array.memory_tile_shuffle();
  for(let i = 0; i < memory_array.length; i++) {
    output += '<div id="tile_'+i+'" onclick="memoryFlipThis(this,\''+memory_array[i]+'\')"></div>';
  }
  document.getElementById('memory_board').innerHTML = output;
}


function memoryFlipThis(tile,val){
  // code will not run if the below if condition does not match
  // the tile inner html should be empty and the memory values array length should be less than 2
  // when the user clicks on any of the card and if returns true then the below code gets executed.
  if (tile.innerHTML == "" && memory_values.length < 2){
    // the tile's background is set to white and the value is displayed
    tile.style.background = '#FFF';
    tile.innerHTML = val;
    // check the memory values array which is 0 by default and the values are pushed into the arrays
    if (memory_values.length == 0) {
      memory_values.push(val);
      memory_tile_ids.push(tile.id);
    // if the memory values array already has one value in it then the else condition gets executed
    // one card is already clicked
    } else if (memory_values.length == 1) {
      // values are pushed into the arrays

      memory_values.push(val);
      memory_tile_ids.push(tile.id);
      // condition to check if both cards are a match
      // if they are match then they remain flipped over
      if (memory_values[0] == memory_values[1]) {
        tiles_flipped += 2;
        //clear both arrays
        memory_values =[];
        memory_tile_ids = [];
        // check to see if the whole board is cleared
        if (tiles_flipped == memory_array.length) {
          alert("Congratulations you have Won!!!");
          document.getElementById('memory_board').innerHTML = "";
          newBoard();
        }
        // if the two cards are not a match
        // the cards are flipped back after 700 ms
        // clear the arrays

      } else {
        function flip2Back() {
          let tile_1 = document.getElementById(memory_tile_ids[0]);
          let tile_2 = document.getElementById(memory_tile_ids[1]);
          tile_1.style.background = 'url(tile_bg.jpg) no-repeat';
          tile_1.innerHTML = "";
          tile_2.style.background = 'url(tile_bg.jpg) no-repeat';
          tile_2.innerHTML = "";
          //clear both arrays
          memory_values =[];
          memory_tile_ids = [];
        }
        setTimeout(flip2Back, 700);
      }
    }
  }
}

newBoard();


// for time
function myClock() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('Clock').innerHTML =
    h + ":" + m + ":" + s;
    time = setTimeout(myClock, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function gameStart() {
  myClock();
  startTime = new Date();
  console.log("time started");
};

function myGameOver() {
  endTime = new Date();
  var timeDiff = endTime - startTime;
  let seconds = Math.round(timeDiff/1000);
  clearTimeout(time);
  console.log("game over");
  console.log("calculating Time");
  console.log("start time  " + startTime);
  console.log("end Time" + endTime);
  console.log("it took  " + seconds + " seconds to play the game" )

  alert("game over!!! you took " + seconds + " seconds to play the game");
}


//next to work on
// 3d flip cards
// button to start a timer and when the game gets over display the timer
