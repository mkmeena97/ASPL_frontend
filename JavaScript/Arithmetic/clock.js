const radius = 30;
const time = Date.now() / 1000;

const x = Math.cos(time) * radius;
const y = Math.sin(time) * radius;

console.log("Circle pos:", x, y);
