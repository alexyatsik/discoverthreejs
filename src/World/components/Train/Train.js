import { Group } from '../../../../node_modules/three/src/Three.js';
import { MathUtils } from '../../../../node_modules/three/src/Three.js';

import { createMeshes } from "./meshes.js";
import { createGeometries } from "./geometries.js";
import { createMaterials } from "./materials.js";

class Train extends Group {
  #meshes = createMeshes();
  #radiansPerSecond = MathUtils.degToRad(30);

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
    this.rotation.y += this.#radiansPerSecond * delta;
  }
}

export { Train };