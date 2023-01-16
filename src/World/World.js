import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";
import { createRenderer } from "./systems/renderer.js";
import { createControls } from "./systems/controls.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";
import { Train } from "./components/Train/Train.js";

class World {
  #camera
  #scene
  #renderer
  #loop
  constructor(container) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    this.#loop = new Loop(this.#scene, this.#camera, this.#renderer);
    container.append(this.#renderer.domElement);

    const controls = createControls(this.#camera, this.#renderer.domElement);
    const { directionalLight, ambientLight } = createLights();
    const train = new Train();

    this.#loop.addUpdatable(controls, train);
    this.#scene.add(
      directionalLight,
      ambientLight,
      train
    );

    const resizer = new Resizer(container, this.#camera, this.#renderer);
  }

  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }

  start() {
    this.#loop.start();
  }

  stop() {
    this.#loop.stop();
  }
}

export { World };