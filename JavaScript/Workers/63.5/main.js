const worker = new Worker("worker.js");

worker.postMessage("start");

worker.onmessage = (e) => {
  console.log("Worker says:", e.data);
};

document.getElementById("stop").addEventListener("click", () => {
  worker.terminate();
  console.log("❌ Worker terminated.");
});
