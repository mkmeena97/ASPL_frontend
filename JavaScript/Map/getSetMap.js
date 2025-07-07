// getSetMap.js

const settings = new Map();
settings.set('theme', 'dark');
settings.set('fontSize', '16px');

console.log(settings.get('theme')); // Output: dark
console.log(settings.get('fontSize')); // Output: 16px
console.log(settings.get('language')); // Output: undefined (key does not exist)    
console.log(settings.has('theme')); // Output: true
console.log(settings.has('language')); // Output: false
console.log(settings.size); // Output: 2 (number of key-value pairs in the map)
