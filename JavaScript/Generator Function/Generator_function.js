/**
 * A generator function is a special type of function that can be
 *  pause, resume, and control mid-execution using the yield keyword.
 */

function* countdown(from) {
  while (from > 0) {
    yield from;
    from--;
  }
  yield "Time’s up!";
}

const timer = countdown(3);

console.log(timer.next().value); // 3
console.log(timer.next().value); // 2
console.log(timer.next().value); // 1
console.log(timer.next().value); // "Time’s up!"
console.log(timer.next().done);  // true
