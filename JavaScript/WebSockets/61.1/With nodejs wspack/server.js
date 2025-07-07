// server.js
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', ws => {
  console.log('🟢 New client connected');

  ws.on('message', message => {
    console.log(`📩 Received: ${message}`);
    ws.send(`Echo: ${message}`);
  });

  ws.on('close', () => {
    console.log('🔒 Client disconnected');
  });
});

console.log('🚀 WebSocket server running on ws://localhost:8080');
