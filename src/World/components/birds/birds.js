import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js';
import {setupModel} from "./setupModel.js";

async function loadBirds() {
  const loader = new GLTFLoader();

  const parrotData = await loader.loadAsync('../../../assets/models/Parrot.glb');
  const flamingoData = await loader.loadAsync('../../../assets/models/Flamingo.glb');
  const storkData = await loader.loadAsync('../../../assets/models/Stork.glb');

  const parrot = setupModel(parrotData);
  const flamingo = setupModel(flamingoData);
  const stork = setupModel(storkData);

  return {
    parrot,
    flamingo,
    stork
  };
}

export { loadBirds };