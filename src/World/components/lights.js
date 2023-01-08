import { DirectionalLight } from '../../../node_modules/three/src/Three.js';

function createLights() {
  const directionalLight = new DirectionalLight('white', 8);
  directionalLight.position.set(10, 10, 10);

  return directionalLight;
}

export { createLights };