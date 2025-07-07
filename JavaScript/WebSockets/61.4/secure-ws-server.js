// secure-ws-server.js
const fs = require('fs');
const https = require('https');
const WebSocket = require('ws');

const server = https.createServer({
  cert: fs.readFileSync('./ssl/cert.pem'),
  key: fs.readFileSync('./ssl/key.pem'),
});

const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  console.log('🔐 Secure WebSocket connected');
  ws.on('message', msg => {
    console.log(`📨 Message received: ${msg}`);
    ws.send(`Echo: ${msg}`);
  });
});

server.listen(8081, () => {
  console.log('🚀 Secure WebSocket server running on https://localhost:8081');
});
