import {
  Group,
  Mesh,
  SphereGeometry,
  MeshStandardMaterial,
  MathUtils
} from '../../../node_modules/three/src/Three.js';

function createMeshGroup() {
  const radiansPerSecond = MathUtils.degToRad(30);
  const group = new Group();
  group.tick = (delta) => {
    group.rotation.z -= delta * radiansPerSecond;
  }

  const geometry = new SphereGeometry(0.25, 16, 16);
  const material = new MeshStandardMaterial({color: 'indigo'});
  const protoSphere = new Mesh(geometry, material);
  group.add(protoSphere);
  group.scale.multiplyScalar(2);

  for (let i = 0; i < 1; i += 0.05) {
    const clonedSphere = protoSphere.clone();

    clonedSphere.position.x = Math.cos(2 * Math.PI * i);
    clonedSphere.position.y = Math.sin(2 * Math.PI * i);

    clonedSphere.scale.multiplyScalar(0.01 + i);

    group.add(clonedSphere);
  }

  return group;
}

export { createMeshGroup };