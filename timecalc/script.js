let startTime, endTime;

function start() {
  startTime = new Date();
  console.log("time started");
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  //timeDiff /= 1000;

  // get seconds
  let seconds = Math.round(timeDiff/1000);
  console.log(seconds + " seconds");
}

start();
end();
