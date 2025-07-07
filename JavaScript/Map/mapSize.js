// mapSize.js

const languages = new Map([
  ['JavaScript', 'Frontend'],
  ['Java', 'Backend'],
  ['Python', 'AI/ML']
]);

console.log(`We have ${languages.size} entries.`); // Output: We have 3 entries.
console.log(`Does the map have an entry for 'JavaScript'? ${languages.has('JavaScript')}`); // Output: true
console.log(`Does the map have an entry for 'C++'? ${languages.has('C++')}`); // Output: false
console.log(`The value for 'Java' is: ${languages.get('Java')}`); // Output: Backend
console.log(`The value for 'C++' is: ${languages.get('C++')}`); // Output: undefined