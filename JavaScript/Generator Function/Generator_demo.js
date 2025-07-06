//  Generator function
function* taskProcessor() {
  console.log(" Task queue started.");

  //  Send values into the generator
  const task1Result = yield* handleTask("Task 1");  // Delegating (41.3)
  console.log(" Task 1 completed with:", task1Result);

  const task2Result = yield* handleTask("Task 2");
  console.log(" Task 2 completed with:", task2Result);

  //  Simulate async API call
  const apiResponse = yield asyncCall("Fetching API...");
  console.log(" API Response:", apiResponse);

  console.log(" All tasks complete.");
  return "DONE";
}

//  Delegating to another generator
function* handleTask(name) {
  console.log(` Handling ${name}...`);
  const input = yield `Waiting for result of ${name}`;
  return `Result of ${name}: ${input}`;
}

//  Async flow
function asyncCall(msg) {
  return new Promise((resolve) => {
    console.log("promise " + msg);
    setTimeout(() => resolve("API Data OK ✅"), 1000);
  });
}

//  Iterator-Observer interface
async function runGenerator(genFunc) {
  const gen = genFunc();

  let nextVal = undefined;
  while (true) {
    const { value, done } = gen.next(nextVal);

    if (done) {
      console.log(" Generator done:", value);
      break;
    }

    // Check if the value is a Promise (async step)
    if (value instanceof Promise) {
      nextVal = await value;
    } else {
      console.log(" Generator yielded:", value);
      // Simulate observer/user input
      nextVal = prompt(` Enter result for: "${value}"`);
    }
  }
}

// Run it
runGenerator(taskProcessor);
