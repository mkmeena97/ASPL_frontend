// printEnum.js

const Direction = Object.freeze({
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
});

let current = Direction.UP;
console.log(`Current Direction: ${current}`); // Output: Current Direction: UP
current = Direction.DOWN;
console.log(`Current Direction: ${current}`); // Output: Current Direction: DOWN
console.log(Object.keys(Direction)); // Output: ['UP', 'DOWN', 'LEFT', 'RIGHT']
console.log(Object.values(Direction)); // Output: ['UP', 'DOWN', 'LEFT', 'RIGHT']
console.log(Object.entries(Direction)); // Output: [['UP', 'UP'], ['DOWN', 'DOWN'], ['LEFT', 'LEFT'], ['RIGHT', 'RIGHT']]   
console.log(Direction.LEFT); // Output: LEFT
console.log(Direction.RIGHT); // Output: RIGHT
console.log(Direction.UP); // Output: UP
console.log(Direction.DOWN); // Output: DOWN
console.log(Direction); // Output: { UP: 'UP', DOWN: 'DOWN', LEFT: 'LEFT', RIGHT: 'RIGHT' }
console.log(Object.getOwnPropertyNames(Direction)); // Output: ['UP', 'DOWN', 'LEFT', 'RIGHT']
console.log(Object.getOwnPropertySymbols(Direction)); // Output: []
console.log(Object.getOwnPropertyDescriptors(Direction)); // Output: { UP: { value: 'UP', writable: false, enumerable: true, configurable: false }, DOWN: { value: 'DOWN', writable: false, enumerable: true, configurable: false }, LEFT: { value: 'LEFT', writable: false, enumerable: true, configurable: false }, RIGHT: { value: 'RIGHT', writable: false, enumerable: true, configurable: false } }   
console.log(Object.isFrozen(Direction)); // Output: true
console.log(Object.isSealed(Direction)); // Output: true
console.log(Object.isExtensible(Direction)); // Output: false
console.log(Object.getPrototypeOf(Direction)); // Output: {}
console.log(Object.keys(Object.getPrototypeOf(Direction))); // Output: []
console.log(Object.values(Object.getPrototypeOf(Direction))); // Output: []
console.log(Object.entries(Object.getPrototypeOf(Direction))); // Output: []
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Direction))); // Output: []
console.log(Object.getOwnPropertySymbols(Object.getPrototypeOf(Direction))); // Output: []
console.log(Object.getOwnPropertyDescriptors(Object.getPrototypeOf(Direction))); // Output: {}
console.log(Object.isFrozen(Object.getPrototypeOf(Direction))); // Output: true
console.log(Object.isSealed(Object.getPrototypeOf(Direction))); // Output: true
console.log(Object.isExtensible(Object.getPrototypeOf(Direction))); // Output: false
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Direction))); // Output: null
