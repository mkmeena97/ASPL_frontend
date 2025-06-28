/*
 Math.hypot(x, y)
    - Ye x aur y components ke beech direct distance deta hai — jaise vector ka length ya point A to B ka distance
 Formula:
    - Math.hypot(x, y) = √(x² + y²)
*/

console.log(Math.hypot(3, 4));  // 5  (classic 3-4-5 triangle)
console.log(Math.hypot(5, 12)); // 13
console.log(Math.hypot(0, 0));  // 0
Math.hypot(1, 2, 2); // √(1² + 2² + 2²) = √9 = 3   3D


//Distance between two 2D points
function getDistance(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

console.log(getDistance(0, 0, 3, 4)); // 5


//Player to Enemy distance
const player = { x: 5, y: 5 };
const enemy = { x: 10, y: 12 };

const dist = Math.hypot(enemy.x - player.x, enemy.y - player.y);
console.log("Enemy is", dist, "units away");

