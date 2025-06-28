// Fake amplitude simulation use case of Math.sin()
let t = 0;
setInterval(() => {
  let volume = (Math.sin(t) + 1) / 2; // Normalize from -1~1 to 0~1
  console.log("Volume:", volume.toFixed(2));
  t += 0.05;
}, 100);
