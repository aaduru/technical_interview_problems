//confirm("I understand confirm!");


var canvas = document.createElement("CANVAS");
canvas.id = 'canvas';
var ctx = canvas.getContext("2d");
//document.body.appendChild(canvas);



const canvaspath = new Path2D();


function imageLoad(text,path,color) {

  document.body.appendChild(canvas);
  var img = new Image();

  img.src = path ;
  //console.log(img);

  img.onload = function(){       // /*or*/  img.addEventListener("load", function(){
    //img.width = 600;
    //img.height = 500;
    canvas.width  = img.width ;
    canvas.height = img.height ;
    ctx.drawImage(img,0,0);       //          ctx.drawImage(img,0,0);

    ctx.font = 'bold 10pt Calibri';
    ctx.fillStyle = color;
    ctx.fillText(text, 150, 100);
    //ctx.fillText('Hello World!', 150, 100);


    //const canvaspath = new Path2D();
    canvaspath.rect(30,100,30,30);
    canvaspath.closePath();

    ctx.fillStyle = "#FFFFFF";
    ctx.fillStyle = "rgba(225,225,225,0.5)";
    ctx.fill(canvaspath);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.stroke(canvaspath);
  };                                //      };
}

function displayCanvas() {

    imageLoad('Hello World','./img/pic5.jpg','yellow');
    document.getElementById("clickme").disabled = true;

    var count = 0;


    function getXY(canvas, event){
      const rect = canvas.getBoundingClientRect()
      console.log(rect);
      const y = (event.clientY - rect.top) - 45
      const x = (event.clientX - rect.left) - 15
      console.log(event.clientY);
      console.log(event.clientX);
      console.log(x);
      console.log(y);
      return {x:x, y:y}
    }

    canvas.onclick = function(e){
      //alert("mouse was clicked");
      console.log("mouse was clicked");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      imageLoad('Mouse was Clicked','./img/grandma.jpg','red' );
      // ctx.font = 'bold 10pt Calibri';
      // ctx.fillStyle = "red";
      // ctx.fillText('mouse clicked', 150, 100);


      console.log(count);

      const XY = getXY(canvas, e)
      console.log(XY);
      console.log(canvaspath.rect);
      if(ctx.isPointInPath(canvaspath, XY.x, XY.y)) {
          console.log("here");
          console.log("clicked in rectangle");
        } else {
          console.log("clicked outside rectangle");
        }

      count += 1;
      if (count == 5) {
        //console.log("here");
        document.body.removeChild(canvas);
        alert("canvas removed");
        document.getElementById("clickme").disabled = false;

      }
      // count += 1;
      // if (count == 2) {
      //   //console.log("here");
      //   document.body.removeChild(canvas);
      //   alert("canvas removed");
      //   document.getElementById("clickme").disabled = false;
      // }
    }


    // if (count == 2) {
    //   console.log("in here");
    //   document.getElementById("canvas").disabled = true;
    //   document.getElementById("clickme").disabled = false;
    //
    //   var x = document.getElementById("clickme").disabled = false;
    //   document.getElementById("clickme").innerHTML = x;
    // }
		//alert("Button has been disabled.");

    // let msg = document.createElement("P");
    // let butt = document.createElement("button");
    // canvas.appendChild(msg);
    // canvas.appendChild(butt);
    //
    // console.log(msg);
    // console.log(butt);
    // msg.textContent = 'Welcome';
    // console.log(msg.textContent);

}

function imageCredits() {
    window.open("credits.html", "_blank");
}

// var age = prompt("What's your age");
// if (age < 13) {
//     console.log("you are not allowed to play");
//     alert("you cannot play");
// } else {
//    console.log("you can play");
//    alert("you can play");
// }


// document.body.style.backgroundImage = "url('./img/pic1.jpg')";
//     document.body.style.backgroundSize = "600px 400px";
//     document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundImage = "url('./img/pic2.jpg')";
// //document.body.style.backgroundSize = "100% auto";
// document.body.style.backgroundRepeat = "no-repeat";
// //document.body.style.backgroundPosition = "top center";
// document.body.style.backgroundPosition = "absolute";

// var el = document.getElementById("main");
// el.style.background = "url('./img/pic2.jpg') no-repeat center center";
// el.style.backgroundSize="100% 100%";
//
//
// console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
//
// console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
//
// var userAnswer = "";
//
// userAnswer = prompt("Do you want to race Bieber on stage?");







// var canvas = document.getElementById('canvas'); //finds Original Canvas
//     img = document.createElement('img');
//     img.src = 'images/a.jpg'; //stores image src
//
//     var canv = document.createElement('canvas'); // creates new canvas element
//     canv.id = 'canvasdummy'; // gives canvas id
//     canv.height = canvas.height; //get original canvas height
//     canv.width = canvas.width; // get original canvas width
//     document.body.appendChild(canv); // adds the canvas to the body element
//
//     var canvas1 = document.getElementById('canvasdummy'); //find new canvas we created
//     var context = canvas1.getContext('2d');
//
//     context.drawImage(img, 0, 0, canvas.width, canvas.height); //draws background image
//     context.drawImage(canvas, 0, 0); //draws original canvas on top of background
//     cscreen = canvas1.toDataURL(); //generates PNG of newly created canvas
//     document.body.removeChild(canv); // removes new canvas
