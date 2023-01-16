import { Clock } from '../../../node_modules/three/src/Three.js';

class Loop {
  #camera
  #scene
  #renderer
  #updatables
  #clock
  constructor(scene, camera, renderer) {
    this.#camera = camera;
    this.#scene = scene;
    this.#renderer = renderer;
    this.#updatables = [];
    this.#clock = new Clock();
  }

  start() {
    this.#renderer.setAnimationLoop(() => {
      this.#tick();

      this.#renderer.render(this.#scene, this.#camera);
    });
  }

  stop() {
    this.#renderer.setAnimationLoop(null);
  }

  addUpdatable(...objects) {
    this.#updatables.push(...objects);
  }

  #tick() {
    const delta = this.#clock.getDelta();
    for (let object of this.#updatables) {
      object.tick(delta);
    }
  }
}

export { Loop };