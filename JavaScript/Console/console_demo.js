// Basic logging
console.log("console.log: Normal log message");
console.info(" console.info: Informational message");
console.warn(" console.warn: Warning message");
console.error(" console.error: Error message");
console.debug(" console.debug: Debug message");

// Assertions
console.assert(1 === 1, "This won't show because it's true");
console.assert(1 === 2, " Assertion failed: 1 is not equal to 2");

// Counting
console.count("Loop Call");
console.count("Loop Call");
console.count("Loop Call");

// Grouping logs
console.group(" User Info");
console.log("Name: Tez");
console.log("Role: Full Stack Developer");
console.groupEnd();

// Timing a block of code
console.time("loop-timer");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("loop-timer");

// Tabular data
const users = [
  { id: 1, name: "Mahendra", role: "Backend" },
  { id: 2, name: "Tez", role: "Frontend" }
];
console.table(users);

// Directory listing of an object
console.dir(console); // Lists properties of console object

// Trace call stack
function first() {
  second();
}
function second() {
  third();
}
function third() {
  console.trace(" Stack trace from third()");
}
first();

// Clearing console (commented out so you can see previous logs)
// console.clear();
