// closureExample.js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(`You've called me ${count} times!`);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
