// promiseChaining.js

function doubleAsync(num) {
  return new Promise(resolve => {
    setTimeout(() => resolve(num * 2), 500);
  });
}

doubleAsync(2)
  .then(result => doubleAsync(result))
  .then(result => doubleAsync(result))
  .then(final => console.log(`Final: ${final}`)); // Final: 16
