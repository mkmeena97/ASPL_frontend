// generatorInput.js

function* greet() {
  const name = yield "What's your name?";
  yield `Hello, ${name}!`;
}

const gen = greet();

console.log(gen.next().value);         // "What's your name?"
console.log(gen.next("Mahendra").value); // "Hello, Mahendra!"
console.log(gen.next().done);          // true (generator is done)
