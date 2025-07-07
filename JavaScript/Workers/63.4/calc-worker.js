// calc-worker.js
onmessage = function (e) {
  const num = e.data;
  console.log("[Worker] Received:", num);

  // Let's square it 🔢
  const result = num * num;

  // Send result back to main thread
  postMessage(`Square of ${num} is ${result}`);
};
