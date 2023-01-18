import { DirectionalLight, HemisphereLight } from 'https://cdn.skypack.dev/three@0.132.2';

function createLights() {
  const ambientLight = new HemisphereLight(
    'white',
    'darkslategrey',
    3
  );
  const directionalLight = new DirectionalLight(
    'white',
    2
  );
  directionalLight.position.set(10, 10, 10);

  return { directionalLight, ambientLight };
}

export { createLights };