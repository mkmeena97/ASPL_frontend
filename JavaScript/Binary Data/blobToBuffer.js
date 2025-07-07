// blobToBuffer.js
const blob = new Blob(['Hello, world!'], { type: 'text/plain' });

blob.arrayBuffer().then(buffer => {
  const decoder = new TextDecoder();
  console.log(decoder.decode(buffer)); // Hello, world!
});
