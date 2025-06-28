/*
 Math.sin()
    - Math.sin(angle) ek sine wave return karta hai between -1 and 1
    - Angle input in radians.
*/

// Basic Example:
console.log(Math.sin(0));            // 0
console.log(Math.sin(Math.PI / 2));  // 1
console.log(Math.sin(Math.PI));      // 0
console.log(Math.sin(3 * Math.PI / 2)); // -1


//Real-life Usage: 
//1. Periodic Animation
let t = 0;
setInterval(() => {
  const value = Math.sin(t);
  console.log(value);
  t += 0.1;
}, 100);
