import { Mesh, BoxBufferGeometry, MeshStandardMaterial } from '../../../node_modules/three/src/Three.js';

function createCube() {
  const geometry = new BoxBufferGeometry(2, 2,2);
  const material = new MeshStandardMaterial({color: 'green'});
  const cube = new Mesh(geometry, material);
  cube.rotation.set(-0.5, -0.1, 0.8);

  return cube;
}

export { createCube };