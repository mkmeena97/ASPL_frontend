// generatorDelegation.js

function* inner() {
  yield "Inner 1";
  yield "Inner 2";
}

function* outer() {
  yield "Outer start";
  yield* inner(); // delegate
  yield "Outer end";
}

for (const val of outer()) {
  console.log(val);
}
// Output:
// Outer start
// Inner 1
// Inner 2
// Outer end    