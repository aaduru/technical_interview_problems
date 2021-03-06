import Compositor from './Compositor.js';
import {loadImage,loadLevel} from './loaders.js';
import {loadMarioSprite, loadBackgroundSprites} from './sprites.js';
import {createBackgroundLayer} from './layers.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');


function createSpriteLayer(sprite, pos) {
  return function drawSpriteLayer(context){
    for (let i = 0; i < 20; i++) {
      sprite.draw('idle', context, pos.x + i * 16 , pos.y);
    }
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
.then(([marioSprite, backgroundSprites,level]) => {
  //console.log('level loaded',level);
  // const backgroundBuffer = document.createElement('canvas');
  // backgroundBuffer.width = 256;
  // backgroundBuffer.height = 240;
  //
  // level.backgrounds.forEach(bg => {
  //   drawBackground(bg, backgroundBuffer.getContext('2d'), backgroundSprites);
  // });
  const comp = new Compositor();
  const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
  comp.layers.push(backgroundLayer);

  const pos = {
    x: 0,
    y: 0,
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
