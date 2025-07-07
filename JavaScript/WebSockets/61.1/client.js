// client.js
const socket = new WebSocket('wss://ws.ifelse.io');

socket.addEventListener('open', () => {
  console.log('✅ Connection opened');
  socket.send('Hello WebSocket Server!');
});

socket.addEventListener('message', event => {
  console.log(`📨 Received: ${event.data}`);
});

socket.addEventListener('error', error => {
  console.error('❌ WebSocket Error:', error);
});

socket.addEventListener('close', () => {
  console.log('🔒 Connection closed');
});


//Note:
//Use in browser console or with ws package via Node.js (but for public servers, browsers are better due to CORS)
