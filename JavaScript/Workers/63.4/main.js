// main.js
const worker = new Worker("calc-worker.js");

// Send a number to the worker
worker.postMessage(7);

worker.onmessage = function (e) {
  console.log("[Main] Message from worker:", e.data);
};
