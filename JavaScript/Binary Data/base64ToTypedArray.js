// base64ToTypedArray.js
function base64ToUint8Array(base64) {
  const raw = atob(base64);
  const arr = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) {
    arr[i] = raw.charCodeAt(i);
  }
  return arr;
}

const base64 = btoa("BinaryData");
console.log(base64ToUint8Array(base64)); // Uint8Array [...]
