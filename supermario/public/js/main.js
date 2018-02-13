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

function loadBackgroundSprites(){
  return loadImage('/img/tiles.png')
  .then(image => {
  //  console.log('image loaded',image);
      const sprites = new SpriteSheet(image);
      sprites.define('ground', 0, 0);
      sprites.define('sky', 3, 23);
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
  loadBackgroundSprites(),
  loadLevel('1-1')
])
.then(([sprites,level]) => {
  //console.log('level loaded',level);
  level.backgrounds.forEach(bg => {
    drawBackground(bg, context, sprites);
  });
});

// Image and level loads in parallel
