// Degree to Radians 
// Degrees to Radians
let degrees = 90;
let radians = degrees * (Math.PI / 180); // π/2

console.log(radians);

// Calculate coordinates of a point on a circle
let radius = 10;
let angleDeg = 60;
let radian = angleDeg * (Math.PI / 180);

let x = radius * Math.cos(radian);
let y = radius * Math.sin(radian);

console.log(`x: ${x.toFixed(2)}, y: ${y.toFixed(2)}`);
// → x: 5.00, y: 8.66
