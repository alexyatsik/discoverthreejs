import {
  CylinderBufferGeometry,
  BoxBufferGeometry
} from '../../../../node_modules/three/src/Three.js';

function createGeometries() {
  const cabinFloor = new BoxBufferGeometry(2, 1.5, 1.5);
  const cabinPillar = new BoxBufferGeometry(0.25, 0.75, 0.25);
  const cabinRoof = new BoxBufferGeometry(2, 0.25, 1.5);
  const nose = new CylinderBufferGeometry(0.75, 0.75, 3, 12);
  const wheel = new CylinderBufferGeometry(0.4, 0.4, 1.75, 16);
  const chimney= new CylinderBufferGeometry(0.3, 0.1, 0.5);

  return {
    cabinRoof,
    cabinPillar,
    cabinFloor,
    nose,
    wheel,
    chimney
  };
}

export { createGeometries };