/*
    - An Identity Monad is the simplest possible monad: it wraps a value, and allows chaining transformations.
*/

const Identity = value => ({
  map: fn => Identity(fn(value)),
  valueOf: () => value
});

const result = Identity(5)
  .map(x => x + 1)
  .map(x => x * 2)
  .valueOf();

console.log(result); // 12
