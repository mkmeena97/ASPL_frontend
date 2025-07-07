onmessage = function (e) {
  console.log("Main thread says:", e.data);
  postMessage("Hello back from worker!");
};
