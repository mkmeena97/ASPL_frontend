/*
 - Suppose Ek direction (angle in radians) given hai,
 - ab us direction me move karna hai — fixed ya variable distance se.
Formula:
 - x = Math.cos(angle) * distance;
 - y = Math.sin(angle) * distance;

*/

//2D Object Movement
const angle = Math.PI / 4; // 45 degrees
const distance = 10;

const dx = Math.cos(angle) * distance;
const dy = Math.sin(angle) * distance;

console.log("Move by x:", dx, "and y:", dy);
// ~ x: 7.07, y: 7.07  Iska matlab: object ko 10 units move karo in 45° direction.


//Circular Movement
//Ye trick spinner, loader, or clock banane me use hoti hai
const radius = 30;
const time = Date.now() / 1000;

const x = Math.cos(time) * radius;
const y = Math.sin(time) * radius;

console.log("Circle pos:", x, y);
