// Change background color on button click
document.getElementById('colorBtn').addEventListener('click', () => {
  const colors = ['#f44336', '#2196F3', '#4CAF50', '#FF9800', '#9C27B0'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// Create a new Worker for prime calculation
const worker = new Worker('workers.js');

// Start prime number calculation when button is clicked
document.getElementById('primeBtn').addEventListener('click', () => {
  const max = 1000;
  worker.postMessage(max);
});

// Receive result from Worker and show in alert
worker.onmessage = function (e) {
  alert(`Sum of Prime Numbers up to 1000:\n${e.data}`);
};