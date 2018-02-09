function loadImage(url) {
  return new Promise(resolve => {
    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.src = url;
  });
}


const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

context.fillRect(0,0,50,50);

// loads the tile set
loadImage('/img/tiles.png')
.then(image => {
  // draws the entire image if give image,0,0
  // draws the image in smaller size if we give coordinates like image,0,0,16,16
  // draws only tile if give image,0,0,16,16,32,32,0,0
  context.drawImage(image,0,0);
});
