import { World } from './World/World.js';

async function main() {
  const container = document.getElementById('scene-container');
  const world = new World(container);
  await world.init();
  world.start();

  createControlPanel();
  const nextBirdButton = document.getElementById('nextBirdButton');
  nextBirdButton.addEventListener('click', () => {
    world.nextBird();
  });
}

function createControlPanel() {
  const panel = document.createElement('div');
  panel.classList.add('control-panel');
  document.body.append(panel);

  const nextBirdButton = createButton(panel, 'Next bird');
  nextBirdButton.id = 'nextBirdButton';

  return panel;
}

function createButton(parent, buttonText) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.innerText = buttonText;
  parent.append(button);

  return button;
}

main().catch((err) => {
  console.error(err);
});