
import {loadImage,loadLevel} from './loaders.js';
import {loadMarioSprite, loadBackgroundSprites} from './sprites.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

function drawBackground(background, context, sprites) {
    background.ranges.forEach(([x1, x2, y1, y2]) => {
        for (let x = x1; x < x2; ++x) {
            for (let y = y1; y < y2; ++y) {
                sprites.drawTile(background.tile, context, x, y);
            }
        }
    });
}


// Promise.all([
//   promiseA,
//   promiseB
// ])
// .then(([
//   resultA,
//   resultB
// ]) => {});
Promise.all([
  loadMarioSprite(),
  loadBackgroundSprites(),
  loadLevel('1-1')
])
.then(([marioSprite, sprites,level]) => {
  //console.log('level loaded',level);

  const backgroundBuffer = document.createElement('canvas');
  backgroundBuffer.width = 256;
  backgroundBuffer.height = 240;

  level.backgrounds.forEach(bg => {
    drawBackground(bg, backgroundBuffer.getContext('2d'), sprites);
  });

  const pos = {
    x: 64,
    y: 64,
  };

// update function helps to move mario around using the requestAnimationFrame function
// when that function is called the background has to be constantly updated along with the mario to avoid trail

  function update() {
    context.drawImage(backgroundBuffer, 0 , 0);
    marioSprite.draw('idle',context,pos.x,pos.y);
    pos.x += 2;
    pos.y += 2;
    requestAnimationFrame(update);
  }
  update();
});

// Image and level loads in parallel
