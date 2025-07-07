const WebSocket = require('ws');
const fs = require('fs');

const wss = new WebSocket.Server({ port: 8081 });
console.log('🟢 Binary WebSocket server listening on ws://localhost:8081');

wss.on('connection', ws => {
  console.log('✅ Client connected (binary)');

  ws.on('message', (data, isBinary) => {
    console.log(`📥 Received ${isBinary ? 'binary' : 'text'} data`);

    if (isBinary) {
      fs.writeFile('received.bin', data, err => {
        if (err) return console.error('❌ Error saving binary:', err);
        console.log('💾 Saved binary as received.bin');
        ws.send('✅ Binary received and saved!');
      });
    } else {
      ws.send('Please send binary data 😅');
    }
  });
});
