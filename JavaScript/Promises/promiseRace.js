// promiseRace.js

const p1 = new Promise(res => setTimeout(() => res("✅ First done"), 300));
const p2 = new Promise(res => setTimeout(() => res("⚠️ Too late"), 1000));

Promise.race([p1, p2]).then(result => console.log(result)); // ✅ First done
