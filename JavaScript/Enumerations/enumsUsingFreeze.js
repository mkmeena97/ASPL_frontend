// enumsUsingFreeze.js

const Color = Object.freeze({
  RED: 'RED',
  GREEN: 'GREEN',
  BLUE: 'BLUE'
});

console.log(Color.RED); // Output: RED
Color.RED = 'YELLOW';   // ❌ Won't change - it's frozen
console.log(Color.RED); // Still: RED

console.log(Object.keys(Color)); // Output: ['RED', 'GREEN', 'BLUE']