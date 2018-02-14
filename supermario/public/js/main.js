
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

class Compositor {
    constructor() {
        this.layers = [];
    }

    draw(context) {
        this.layers.forEach(layer => {
            layer(context);
        });
    }
}

function createBackgroundLayer(backgrounds, sprites) {
    const buffer = document.createElement('canvas');
    buffer.width = 256;
    buffer.height = 240;

    backgrounds.forEach(background => {
        drawBackground(background, buffer.getContext('2d'), sprites);
    });

    return function drawBackgroundLayer(context) {
        context.drawImage(buffer, 0, 0);
    };
}

function createSpriteLayer(sprite, pos) {
  return function drawSpriteLayer(context){
    sprite.draw('idle', context, pos.x , pos.y);
  }
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
  // const backgroundBuffer = document.createElement('canvas');
  // backgroundBuffer.width = 256;
  // backgroundBuffer.height = 240;
  //
  // level.backgrounds.forEach(bg => {
  //   drawBackground(bg, backgroundBuffer.getContext('2d'), sprites);
  // });
  const comp = new Compositor();
  const backgroundLayer = createBackgroundLayer(level.backgrounds, sprites);
  comp.layers.push(backgroundLayer);

  const pos = {
    x: 64,
    y: 64,
  };

// update function helps to move mario around using the requestAnimationFrame function
// when that function is called the background has to be constantly updated along with the mario to avoid trail

  const spriteLayer = createSpriteLayer(marioSprite, pos);
  comp.layers.push(spriteLayer);
  
  function update() {
    //context.drawImage(backgroundBuffer, 0 , 0);
    comp.draw(context);
    //marioSprite.draw('idle',context,pos.x,pos.y);
    pos.x += 2;
    pos.y += 2;
    requestAnimationFrame(update);
  }
  update();
});

// Image and level loads in parallel
