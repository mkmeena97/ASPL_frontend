// iterateBuffer.js
const buffer = new ArrayBuffer(4);
const view = new Uint8Array(buffer);

view.set([10, 20, 30, 40]);

for (let byte of view) {
  console.log(byte);
}
// Output: 10, 20, 30, 40
