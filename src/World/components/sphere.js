import { Mesh, SphereBufferGeometry, MeshBasicMaterial } from '../../../node_modules/three/src/Three.js';

function createSphere() {
  const geometry = new SphereBufferGeometry(2);
  const material = new MeshBasicMaterial();
  const sphere = new Mesh(geometry, material);

  return sphere;
}

export { createSphere };