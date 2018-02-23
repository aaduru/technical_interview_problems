const canvas = document.getElementById("myCanvas")
const context = canvas.getContext("2d")

//create your shape data in a Path2D object
const path = new Path2D()
path.rect(250, 350, 200, 100)
path.rect(25,72,32,32)
path.closePath()

//draw your shape data to the context
context.fillStyle = "#FFFFFF"
context.fillStyle = "rgba(225,225,225,0.5)"
context.fill(path)
context.lineWidth = 2
context.strokeStyle = "#000000"
context.stroke(path)

function getXY(canvas, event){ //adjust mouse click to canvas coordinates
  const rect = canvas.getBoundingClientRect()
  const y = event.clientY - rect.top
  const x = event.clientX - rect.left
  return {x:x, y:y}
}

document.addEventListener("click",  function (e) {
  const XY = getXY(canvas, e)
  //use the shape data to determine if there is a collision
  if(context.isPointInPath(path, XY.x, XY.y)) {
    // Do Something with the click
    alert("clicked in rectangle")
  }
}, false)
