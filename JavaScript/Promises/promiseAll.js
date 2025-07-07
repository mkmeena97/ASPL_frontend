// promiseAll.js

const p1 = Promise.resolve("🚀 Fast");
const p2 = new Promise(res => setTimeout(() => res("🐢 Slow"), 1000));

Promise.all([p1, p2]).then(([a, b]) => {
  console.log(a); // 🚀 Fast
  console.log(b); // 🐢 Slow
});
