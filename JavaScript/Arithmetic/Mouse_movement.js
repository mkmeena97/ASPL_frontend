
//atan2()+ vactor
const player = { x: 0, y: 0 };
const target = { x: 20, y: 20 };

const angle = Math.atan2(target.y - player.y, target.x - player.x);
const distance = 5;

const dx = Math.cos(angle) * distance;
const dy = Math.sin(angle) * distance;

const newPos = { x: player.x + dx, y: player.y + dy };
console.log("New Position:", newPos);


