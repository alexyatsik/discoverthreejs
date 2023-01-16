import {
  Group,
  Mesh
} from '../../../../node_modules/three/src/Three.js';
import {createGeometries} from "./geometries.js";
import {createMaterials} from "./materials.js";

class Cabin extends Group {
  #geometries = createGeometries();
  #materials = createMaterials();

  constructor() {
    super();

    this.add(this.#createFloorMesh());

    const pillar = this.#createPillarMesh();
    pillar.position.set(-0.88, 1.10, 0.63);
    this.add(pillar);

    const pillar2 = pillar.clone();
    pillar2.position.set(0.88, 1.10, 0.63);
    this.add(pillar2);

    const pillar3 = pillar.clone();
    pillar3.position.set(0.88, 1.10, -0.63);
    this.add(pillar3);

    const pillar4 = pillar.clone();
    pillar4.position.set(-0.88, 1.10, -0.63);
    this.add(pillar4);

    const roof = this.#createRoofMesh();
    roof.position.set(0, 1.58, 0);
    this.add(roof);
  }

  #createFloorMesh() {
    return new Mesh(this.#geometries.cabinFloor, this.#materials.body);
  }

  #createRoofMesh() {
    return new Mesh(this.#geometries.cabinRoof, this.#materials.body);
  }

  #createPillarMesh() {
    return new Mesh(this.#geometries.cabinPillar, this.#materials.body);
  }
}

export { Cabin };