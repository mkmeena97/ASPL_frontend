// dataView.js
const buffer = new ArrayBuffer(8);
const view = new DataView(buffer);
view.setUint8(0, 255); // Set first byte
view.setInt16(1, 32000); // Set next 2 bytes

console.log(view.getUint8(0));   // 255
console.log(view.getInt16(1));   // 32000
console.log(view.getUint8(2));   // 0 (default value for uninitialized bytes)
console.log(view.getInt16(1, true)); // 32000 (little-endian format)
console.log(view.getInt16(1, false)); // 32000 (big-endian format)      
