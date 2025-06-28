/*
What is Endianness?
Endianness defines byte order — kaunsa byte pehle memory me store hoga.
| Type          | Description                        |
| --------------| ---------------------------------- |
| Big Endian    | Most significant byte (MSB) first  |
| Little Endian | Least significant byte (LSB) first |

Why does this matter?
Suppose you're reading binary data from:
-Network (e.g., image, sound)
-Files
-Buffer exchanged between systems
If one system is Big Endian and another is Little Endian, values will look wrong unless you adjust the byte order.
*/



//Example: Using DataView to check system endianness
function isLittleEndian() {
  const buffer = new ArrayBuffer(4);
  const uint32 = new Uint32Array(buffer);
  const uint8 = new Uint8Array(buffer);

  uint32[0] = 0x12345678;
  return uint8[0] === 0x78;
}

console.log(isLittleEndian()); // true on most modern systems

