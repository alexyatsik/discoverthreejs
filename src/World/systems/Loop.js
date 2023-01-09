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
      this.#renderer.render(this.#scene, this.#camera);

      this.#tick();
    });
  }

  stop() {
    this.#renderer.setAnimationLoop(null);
  }

  addUpdatable(object) {
    this.#updatables.push(object);
  }

  #tick() {
    for (const object of this.#updatables) {
      const delta = this.#clock.getDelta();

      object.tick(delta);
    }
  }
}

export { Loop };