//Math.random()
//1. Random float deta hai 0 se 1 ke beech, kabhi bhi 1 nahi hota.
console.log(Math.random()); // 0.0 <= value < 1.0

//2. Convert to custom float range
let min = 1, max = 10;
let rand = Math.random() * (max - min) + min;
console.log(rand.toFixed(2)); // Example: 6.27

//3. Random Integer in a range:
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100)); // Random int between 1 and 100

//4. Random Float Between Min and Max
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}


//Example
// Random Dice Roll 
let dice = getRandomInt(1, 6);
console.log("Dice rolled:", dice);

//Random Password character picker
let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
let randomChar = chars[Math.floor(Math.random() * chars.length)];
console.log("Random character:", randomChar);
