import { WebGLRenderer } from '../../../node_modules/three/src/Three.js';

function createRenderer() {
  const renderer = new WebGLRenderer();

  return renderer;
}

export { createRenderer };