import {
  DirectionalLight,
  AmbientLight,
  HemisphereLight
} from '../../../node_modules/three/src/Three.js';

function createLights() {
  const ambientLight = new HemisphereLight('white', 'darkslategrey',5);
  const directionalLight = new DirectionalLight('white', 5);
  directionalLight.position.set(10, 10, 10);

  return { directionalLight, ambientLight };
}

export { createLights };