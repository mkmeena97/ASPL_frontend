var x = 1;   // Function scoped
let y = 2;   // Block scoped
const z = 3; // Block scoped, read-only

{
  let y = 10;  // This y is separate
  console.log(y); // 10
}
console.log(y); // 2
