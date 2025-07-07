import { add, multiply } from './Defining.js';

console.log(add(2, 3));       // 5
console.log(multiply(4, 5));  // 20
import { subtract } from './Defining.js';

console.log(subtract(5, 3));  // 2      
// Importing a default export
import log from './Default_exports.js';  
log('Hello');   
// Importing named exports
import { warn } from './Default_exports.js';
warn('Warning!');   
// Importing everything from a module
  
