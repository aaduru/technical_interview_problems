let startTime, endTime, time;

// function myFunction(){
// alert("Hello world!");
// }

// function myClock() {
//     document.getElementById("Clock").innerHTML =
//     new Date().toLocaleTimeString();
// }

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

//myFunction();
