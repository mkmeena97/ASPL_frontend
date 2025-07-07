const workers = new Worker('workers.js');

workers.postMessage("Hi workers!");

workers.onmessage = function (event) {
  console.log("From workers:", event.data);
};
