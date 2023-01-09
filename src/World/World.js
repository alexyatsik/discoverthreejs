import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createCube } from "./components/cube.js";
import { createSphere } from "./components/sphere.js";
import { createLights } from "./components/lights.js";
import { createRenderer } from "./systems/renderer.js";
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

    const cube = createCube();
    cube.position.set(2,2,-10);
    const cube2 = createCube();
    cube2.position.set(-2,2, -10);
    const cube3 = createCube();
    cube3.position.set(0, -2, -10);
    const light = createLights();

    this.#loop.addUpdatable(cube);
    this.#loop.addUpdatable(cube2);
    this.#loop.addUpdatable(cube3);
    this.#scene.add(
      cube,
      cube2,
      cube3,
      light
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