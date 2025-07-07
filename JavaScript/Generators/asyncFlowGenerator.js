// asyncFlowGenerator.js

function asyncOperation(value, delay) {
  return new Promise(resolve => setTimeout(() => resolve(value), delay));
}

function* fetchData() {
  const a = yield asyncOperation("Data A", 1000);
  console.log(a);
  const b = yield asyncOperation("Data B", 1000);
  console.log(b);
}

// Simple runner
function run(genFunc) {
  const gen = genFunc();

  function handle(result) {
    if (result.done) return;
    result.value.then(res => handle(gen.next(res)));
  }

  handle(gen.next());
}

run(fetchData);
