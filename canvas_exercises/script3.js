
var canvas = document.createElement("CANVAS");
canvas.id = 'myCanvas';
var context = canvas.getContext('2d');
document.body.appendChild(canvas);


function getMousePos(canvas, event) {
	var can = canvas.getBoundingClientRect();
  var x = event.clientX - can.left;
   var y = event.clientY - can.top;

  console.log(can);
  console.log("mouse coords");
  console.log(event.clientX);
  console.log(event.clientY);
  console.log("page");
  console.log(event.pageX);
  console.log(event.pageY);
  console.log("x: " + x + " y: " + y);
  console.log(rect);
	return {
		x: event.clientX,
		y: event.clientY
	};
	// return {
	// 	x: event.clientX - can.left,
	// 	y: event.clientY - can.top
	// };


}

var rect = {
	x:100,
	y:100,
	width:200,
	heigth:100
};
// var rect = {
// 	x:250,
// 	y:350,
// 	width:200,
// 	heigth:100
// };

function isInside(pos, rect){
  console.log("inside rect");
  console.log(pos.x);
  console.log(rect.x);
  console.log(pos.x > rect.x);
  console.log(pos.y);
  console.log(rect.y);
  console.log(pos.y < rect.y);

	return (pos.x >= rect.x && pos.x <= rect.x+rect.width && pos.y <= rect.y+rect.heigth && pos.y >= rect.y)
}

//var canvas = document.getElementById('myCanvas');

canvas.addEventListener('click', function(evt) {
	var mousePos = getMousePos(canvas, evt);
    //debugger;
	if (isInside(mousePos,rect)) {
		alert('clicked inside rect');
    }else{
        alert('clicked outside rect');
    }
}, false);

context.beginPath();
context.rect(250, 350, 200, 100);
context.fillStyle = '#FFFFFF';
context.fillStyle = 'rgba(225,225,225,0.5)';
context.fillRect(25,72,32,32);
context.fill();
context.lineWidth = 2;
context.strokeStyle = '#000000';
context.stroke();
context.closePath();
context.font = '40pt Kremlin Pro Web';
context.fillStyle = "white";
context.fillText('Start', 250, 200);
