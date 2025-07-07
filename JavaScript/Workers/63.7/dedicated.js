const worker = new Worker('dedicated-worker.js');

worker.postMessage('👋 Hello from main thread');

worker.onmessage = (e) => {
  console.log('📨 From Worker:', e.data);
};
