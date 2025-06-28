/*
 use of Math.sin()
*/

function getY(baseY, t) {
  return baseY + Math.sin(t) * 5; // bounce 5px up and down
}

let t = 0;
setInterval(() => {
  let y = getY(100, t);
  console.log("Y-pos:", y);
  t += 0.1;
}, 100);
