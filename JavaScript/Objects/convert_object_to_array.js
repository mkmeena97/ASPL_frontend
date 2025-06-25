//1. Object.values()
const user = {
  name: "Tez",
  age: 27,
  city: "Jaipur"
};

const valuesArray = Object.values(user);

console.log(valuesArray); 
// ["Tez", 27, "Jaipur"]

//2. Reduce on values only
const scores = {
  math: 80,
  sci: 70,
  eng: 90
};

const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
console.log(total); // 240

