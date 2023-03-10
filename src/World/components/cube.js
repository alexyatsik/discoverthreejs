import {
  Mesh,
  BoxGeometry,
  MeshStandardMaterial,
  MathUtils,
  TextureLoader
} from '../../../node_modules/three/src/Three.js';

function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load('/assets/textures/uv-test-bw.png');
  const material = new MeshStandardMaterial({
    map: texture
  });

  return material;
}

function createCube(size = 2) {
  const geometry = new BoxGeometry(size, size, size);
  const material = createMaterial();
  const cube = new Mesh(geometry, material);
  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(90);
  cube.tick = (delta) => {
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
    cube.rotation.z += radiansPerSecond * delta;
  }

  return cube;
}

export { createCube };