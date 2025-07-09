const worker = new SharedWorker('shared-worker.js');

worker.port.start();
worker.port.postMessage(' Hi from one tab');

worker.port.onmessage = (e) => {
  console.log('From Shared Worker:', e.data);
};
