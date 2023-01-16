import { PerspectiveCamera } from '../../../node_modules/three/src/Three.js';

function createCamera() {
  const camera = new PerspectiveCamera(
    35,
    1,
    0.1,
    100
  );
  camera.position.set(-5, 5, 7);

  return camera;
}

export { createCamera };