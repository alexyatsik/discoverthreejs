import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";
import { createRenderer } from "./systems/renderer.js";
import { createControls } from "./systems/controls.js";
import { loadBirds } from './components/birds/birds.js';
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";
// import { AxesHelper } from '../../node_modules/three/src/helpers/AxesHelper.js';
// import { GridHelper } from '../../node_modules/three/src/helpers/GridHelper.js';



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

    // const axesHelper = new AxesHelper(5);
    // const gridHelper = new GridHelper(5);

    this.#loop.addUpdatable(controls);
    this.#scene.add(
      directionalLight,
      ambientLight,
    );

    const resizer = new Resizer(container, this.#camera, this.#renderer);
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();

    this.#scene.add(parrot, flamingo, stork);
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