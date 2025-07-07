// client.js
const WebSocket = require('ws');

const socket = new WebSocket('ws://localhost:8080');

socket.on('open', () => {
  console.log('✅ Connected to server');
  socket.send('Hello Server!');
});

socket.on('message', message => {
  console.log(`📨 Message from server: ${message}`);
});

socket.on('close', () => {
  console.log('🔒 Connection closed');
});
socket.on('error', error => {
  console.error('❌ WebSocket error:', error);
});
