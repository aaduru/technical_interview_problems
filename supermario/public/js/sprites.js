import {loadImage} from './loaders.js';
import SpriteSheet from './SpriteSheet.js';

export function loadMarioSprite(){
  return loadImage('/img/characters.gif')
  .then(image => {
  //  console.log('image loaded',image);
      const sprites = new SpriteSheet(image);
      sprites.define('idle', 276, 44, 16, 16);
      return sprites;
    });
}
export function loadBackgroundSprites(){
  return loadImage('/img/tiles.png')
  .then(image => {
  //  console.log('image loaded',image);
      const sprites = new SpriteSheet(image);
      sprites.defineTile('ground', 0, 0);
      sprites.defineTile('sky', 3, 23);
      return sprites;
    });
}
