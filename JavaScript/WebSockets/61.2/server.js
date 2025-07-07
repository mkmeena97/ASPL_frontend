// server.js
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

console.log("✅ WebSocket server running at ws://localhost:8080");

wss.on('connection', ws => {
  console.log("🟢 Client connected");

  ws.send("👋 Hello from server!");

  ws.on('message', message => {
    console.log(`📩 Received from client: ${message}`);
    ws.send(`You said: "${message}"`);
  });

  ws.on('close', () => {
    console.log("🔴 Client disconnected");
  });
});
