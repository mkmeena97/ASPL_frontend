// secure-ws-client.js
const WebSocket = require('ws');

const ws = new WebSocket('wss://localhost:8081', {
  rejectUnauthorized: false  // ⛔ For dev only; don’t do this in production!
});

ws.on('open', () => {
  console.log('🔗 Connected to secure WebSocket');
  ws.send('Hello secure server!');
});

ws.on('message', message => {
  console.log('📩 Received:', message.toString());
});

ws.on('error', err => {
  console.error('💥 WebSocket error:', err);
});

ws.on('close', () => {
  console.log('❌ Connection closed');
});
