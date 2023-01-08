import { Clock } from '../../../node_modules/three/src/Three.js';

class Loop {
  #camera
  #scene
  #renderer
  constructor(scene, camera, renderer) {
    this.#camera = camera;
    this.#scene = scene;
    this.#renderer = renderer;
  }

  start() {
    this.#renderer.setAnimationLoop(() => {
      this.#renderer.render(this.#scene, this.#camera);

      this.#tick();
    });
  }

  stop() {
    this.#renderer.setAnimationLoop(null);
  }

  #tick() {

  }
}

export { Loop };