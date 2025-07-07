// promisifyValue.js

Promise.resolve(123).then(val => {
  console.log("Resolved value:", val); // 123
});

Promise.resolve("abc").then(val => {
  console.log("Resolved value:", val); // abc
});

Promise.resolve({ key: "value" }).then(val => {
  console.log("Resolved value:", val); // { key: 'value' }
});

