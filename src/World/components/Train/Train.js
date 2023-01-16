import { Group } from '../../../../node_modules/three/src/Three.js';
import { MathUtils } from '../../../../node_modules/three/src/Three.js';

import { createMeshes } from "./meshes.js";
import { createGeometries } from "./geometries.js";
import { createMaterials } from "./materials.js";

class Train extends Group {
  #meshes = createMeshes();
  #radiansPerSecondTrainRotation = MathUtils.degToRad(10);
  #radiansPerSecondWheelsRotation = MathUtils.degToRad(24);

  constructor() {
    super();

    this.add(this.#meshes.cabin);
    this.add(this.#meshes.nose);
    this.add(this.#meshes.chimney);
    this.add(this.#meshes.smallWheelRear);
    this.add(this.#meshes.smallWheelCenter);
    this.add(this.#meshes.smallWheelFront);
    this.add(this.#meshes.bigWheel);
  }

  tick(delta) {
    this.rotation.y += this.#radiansPerSecondTrainRotation * delta;

    this.#meshes.smallWheelRear.rotation.y += this.#radiansPerSecondWheelsRotation * delta;
    this.#meshes.smallWheelCenter.rotation.y += this.#radiansPerSecondWheelsRotation * delta;
    this.#meshes.smallWheelFront.rotation.y += this.#radiansPerSecondWheelsRotation * delta;
    this.#meshes.bigWheel.rotation.y += this.#radiansPerSecondWheelsRotation * delta;
  }
}

export { Train };