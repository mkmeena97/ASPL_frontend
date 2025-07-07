// alternateEnum.js

const Status = {
  ACTIVE: 1,
  INACTIVE: 0,
  PENDING: -1
};

console.log(Status.ACTIVE); // Output: 1
console.log(Status.INACTIVE); // Output: 0
console.log(Status.PENDING); // Output: -1
console.log(Object.keys(Status)); // Output: ['ACTIVE', 'INACTIVE', 'PENDING']
console.log(Object.values(Status)); // Output: [1, 0, -1]
console.log(Object.entries(Status)); // Output: [['ACTIVE', 1], ['INACTIVE', 0], ['PENDING', -1]]
