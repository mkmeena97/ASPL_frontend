//  Method 1: JSON.parse(JSON.stringify(obj))
//Loses Date, Map, Set, undefined, functions, symbols
const original = { x: 10, nested: { y: 20 } };
const deepClone = JSON.parse(JSON.stringify(original));

deepClone.nested.y = 99;
console.log(original.nested.y); // 20 

//Method 2: structuredClone() (modern & clean)
// Handles nested, Date, Blob, ArrayBuffer, etc.
const org = { x: 1, y: { z: 2 } };
const deepClone1 = structuredClone(org);

deepClone1.y.z = 999;
console.log(org.y.z); // 2 

//Method 3: Recursive Deep Clone Function
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  const result = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    result[key] = deepClone(obj[key]);
  }

  return result;
}

