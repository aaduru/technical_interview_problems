
var canvas = document.createElement("CANVAS");
canvas.id = 'myCanvas';
var context = canvas.getContext('2d');
document.body.appendChild(canvas);


function getMousePos(canvas, event) {
	var rect = canvas.getBoundingClientRect();
  console.log(rect);
	return {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};
}

var rect = {
	x:250,
	y:350,
	width:200,
	heigth:100
};

function isInside(pos, rect){

	return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.heigth && pos.y > rect.y
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
context.fillStyle = '#000000';
context.fillText('Start', 345, 415);
