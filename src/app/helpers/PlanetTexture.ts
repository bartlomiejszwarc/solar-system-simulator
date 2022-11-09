import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils';

//Textures
export const backgroundTexture: string = 'assets/textures/background.jpg';
const loader = new THREE.CubeTextureLoader();
export const backgroundTextureMap = loader.load([
  backgroundTexture,
  backgroundTexture,
  backgroundTexture,
  backgroundTexture,
  backgroundTexture,
  backgroundTexture,
]);

export const sunTextureMap = new THREE.TextureLoader().load(
  'assets/textures/sun-texture.jpg'
);
export const mercuryTextureMap = new THREE.TextureLoader().load(
  'assets/textures/mercury-texture.webp'
);
export const venusTextureMap = new THREE.TextureLoader().load(
  'assets/textures/venus-texture.jpg'
);
export const earthTextureMap = new THREE.TextureLoader().load(
  'assets/textures/earth-texture.jpg'
);

export const marsTextureMap = new THREE.TextureLoader().load(
  'assets/textures/mars-texture.jpg'
);
export const jupiterTextureMap = new THREE.TextureLoader().load(
  'assets/textures/jupiter-texture.jpg'
);
export const moonTextureMap = new THREE.TextureLoader().load(
  'assets/textures/moon-texture.jpg'
);

export const saturnTextureMap = new THREE.TextureLoader().load(
  'assets/textures/saturn-texture.jpg'
);
export const saturnRingsTextureMap = new THREE.TextureLoader().load(
  'assets/textures/saturn-ring-texture.png'
);
export const uranusTextureMap = new THREE.TextureLoader().load(
  'assets/textures/uranus-texture.jpg'
);
export const neptuneTextureMap = new THREE.TextureLoader().load(
  'assets/textures/neptune-texture.jpg'
);
