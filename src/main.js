import { World } from './World/World';

function main() {
  const container = document.getElementById('scene-container');
  const world = new World(container);
  world.render();
}

main();