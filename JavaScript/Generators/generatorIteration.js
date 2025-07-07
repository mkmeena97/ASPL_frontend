// generatorIteration.js

function* idMaker() {
  let id = 1;
  while (id <= 3) {
    yield id++;
  }
}

for (const id of idMaker()) {
  console.log(`Generated ID: ${id}`);
}
