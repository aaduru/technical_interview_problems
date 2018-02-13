import SpriteSheet from './SpriteSheet.js';
import {loadImage,loadLevel} from './loaders.js';

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

function loadMarioSprite(){
  return loadImage('/img/characters.gif')
  .then(image => {
  //  console.log('image loaded',image);
      const sprites = new SpriteSheet(image);
      sprites.define('idle', 276, 44, 16, 16);
      return sprites;
    });
}
function loadBackgroundSprites(){
  return loadImage('/img/tiles.png')
  .then(image => {
  //  console.log('image loaded',image);
      const sprites = new SpriteSheet(image);
      sprites.defineTile('ground', 0, 0);
      sprites.defineTile('sky', 3, 23);
      return sprites;
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
  level.backgrounds.forEach(bg => {
    drawBackground(bg, context, sprites);
  });
  marioSprite.draw('idle',context,64,64);
});

// Image and level loads in parallel
