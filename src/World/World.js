import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createCube } from "./components/cube.js";
import { createSphere } from "./components/sphere.js";
import { createMeshGroup } from "./components/meshGroup.js";
import { createLights } from "./components/lights.js";
import { createRenderer } from "./systems/renderer.js";
import { createControls } from "./systems/controls.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";
import { MathUtils } from '../../node_modules/three/src/Three.js'

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

    const meshGroup = createMeshGroup();

    const { directionalLight, ambientLight } = createLights();

    this.#loop.addUpdatable(controls, meshGroup);
    this.#scene.add(
      meshGroup,
      directionalLight,
      ambientLight
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