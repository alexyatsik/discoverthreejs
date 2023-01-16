import { Group } from '../../../../node_modules/three/src/Three.js';
import { MathUtils } from '../../../../node_modules/three/src/Three.js';

import { createMeshes } from "./meshes.js";
import { Cabin } from './Cabin.js';

class Train extends Group {
  #meshes = createMeshes();
  #radiansPerSecondWheelsRotation = MathUtils.degToRad(24);

  constructor() {
    super();

    const cabin = new Cabin();
    cabin.position.set(1.5, 1, 0);

    this.add(cabin);
    this.add(this.#meshes.nose);
    this.add(this.#meshes.chimney);
    this.add(this.#meshes.smallWheelRear);
    this.add(this.#meshes.smallWheelCenter);
    this.add(this.#meshes.smallWheelFront);
    this.add(this.#meshes.bigWheel);
  }

  tick(delta) {
    this.#meshes.smallWheelRear.rotation.y += this.#radiansPerSecondWheelsRotation * delta;
    this.#meshes.smallWheelCenter.rotation.y += this.#radiansPerSecondWheelsRotation * delta;
    this.#meshes.smallWheelFront.rotation.y += this.#radiansPerSecondWheelsRotation * delta;
    this.#meshes.bigWheel.rotation.y += this.#radiansPerSecondWheelsRotation * delta;
  }
}

export { Train };