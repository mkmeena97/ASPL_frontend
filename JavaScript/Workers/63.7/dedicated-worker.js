onmessage = (e) => {
  console.log('🛠️ Worker received:', e.data);
  postMessage('👋 Hello back from Dedicated Worker');
};
