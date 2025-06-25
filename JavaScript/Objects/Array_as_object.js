/*
Arrays in JavaScript are just objects with numeric keys and some special methods.
internally arrays are like this 
const arr = ["A", "B"];
// is similar to
const obj = {
  0: "A",
  1: "B",
  length: 2
};

*/

//add custom properties (like objects)
const arr = ["Tez", "Coder", "JS"];
arr.customProp = "Hello";

console.log(arr.customProp); // "Hello"

