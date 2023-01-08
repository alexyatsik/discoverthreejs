import { Mesh, BoxGeometry, MeshStandardMaterial } from '../../../node_modules/three/src/Three.js';

function createCube(size = 2, color = 'green') {
  const geometry = new BoxGeometry(size, size,size);
  const material = new MeshStandardMaterial({color: color});
  const cube = new Mesh(geometry, material);
  cube.rotation.set(-0.5, -0.1, 0.8);

  return cube;
}

export { createCube };