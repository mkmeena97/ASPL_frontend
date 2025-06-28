/*
 - kisi number ko ek range ke andar fix rakhna
 - slider, rating, volume, zoom level, etc.
*/

// Basic Concept:

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

console.log(clamp(10, 1, 100));   // 10 (within range)
console.log(clamp(-5, 0, 10));    // 0  (too low → clamp to min)
console.log(clamp(999, 0, 500));  // 500 (too high → clamp to max)


//Volume Range (0 to 100)
let volume = 110;
volume = clamp(volume, 0, 100);
console.log("Volume:", volume); // 100 ✅

//Player Speed
let speed = -10;
speed = clamp(speed, 0, 5); // Don't allow negative
console.log("Speed:", speed); // 0

//UI Example
function setZoom(zoom) {
  const clampedZoom = clamp(zoom, 0.5, 3);
  console.log("Zoom set to:", clampedZoom);
}

setZoom(5);   // → Zoom set to: 3
setZoom(0.1); // → Zoom set to: 0.5
