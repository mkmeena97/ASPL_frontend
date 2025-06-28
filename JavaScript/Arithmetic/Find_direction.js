/*
 Math.atan2(y, x)
  - Yeh function do points ke beech angle batata hai — specifically from the origin (0, 0) to a point (x, y), in radians
  - Formula: angle = Math.atan2(deltaY, deltaX)
 Different From Math.atan()
  - Math.atan(y / x);     //  Incorrect when x == 0 (division by zero risk)
  - Math.atan2(y, x);     //  Handles all quadrants + division safely


*/

console.log(Math.atan2(1, 1)); // ~0.785 radians ≈ 45 degrees
console.log(Math.atan2(0, 1)); // 0 radians → pointing right (x-axis)
console.log(Math.atan2(1, 0)); // ~1.57 radians → pointing up (y-axis)

//Convert to Degrees
function radToDeg(radians) {
  return radians * (180 / Math.PI);
}

const angle = Math.atan2(1, 1);
console.log(radToDeg(angle)); // 45°


//Real-Life Example
//1. Rotate towards Mouse (2D game)
const player = { x: 100, y: 100 };
const mouse = { x: 150, y: 120 };

const deltaY = mouse.y - player.y;
const deltaX = mouse.x - player.x;

const angle1 = Math.atan2(deltaY, deltaX);
console.log("Player should rotate to:", angle1, "radians");

//2. Directional Arrows Example
function getDirection(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.atan2(dy, dx);
}

console.log("Arrow Direction: ",getDirection(0, 0, 1, 1)); //// Diagonal 
