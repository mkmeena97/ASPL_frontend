typeof []        // 'object' 
typeof {}        // 'object' 

//Toh typeof se Array aur Object me farq samajh nahi aata.

// 1. Array.isArray()
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({ a: 1 }));  // false

//2. instanceof Array
const arr = [1, 2, 3];
console.log(arr instanceof Array); // true

//3. Object.prototype.toString.call()
const arr1 = [1, 2, 3];
console.log(Object.prototype.toString.call(arr1)); // [object Array]


//Real-Life Use Case:
if (Array.isArray(response.items)) {
  response.items.forEach(item => console.log(item));
} else {
  console.warn('Unexpected data format!');
}
