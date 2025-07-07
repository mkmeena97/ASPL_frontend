// generatorObserver.js

function* numbers() {
  let i = 0;
  while (true) {
    const reset = yield i++;
    if (reset) i = 0;
  }
}

const it = numbers();

console.log(it.next().value);  // 0
console.log(it.next().value);  // 1
console.log(it.next(true).value); // 0 (reset)
