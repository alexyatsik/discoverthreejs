import { MeshStandardMaterial } from '../../../../node_modules/three/src/Three.js';

function createMaterials() {
  const body = new MeshStandardMaterial({
    color: 'firebrick',
    flatShading: true
  });
  const detail = new MeshStandardMaterial({
    color: 'darkslategrey',
    flatShading: true
  });

  return { body, detail };
}

export { createMaterials };