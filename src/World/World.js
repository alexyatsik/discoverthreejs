import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createCube } from "./components/cube.js";
import { createSphere } from "./components/sphere.js";
import { createLights } from "./components/lights.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";

import { MathUtils } from '../../node_modules/three/src/Three.js'

class World {
  #camera
  #scene
  #renderer
  constructor(container) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    container.append(this.#renderer.domElement);

    const cube = createCube();
    const light = createLights();

    this.#scene.add(
      cube,
      light
    );

    const resizer = new Resizer(container, this.#camera, this.#renderer);
    resizer.onResize = () => {
      this.render();
    }
  }

  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }
}

export { World };