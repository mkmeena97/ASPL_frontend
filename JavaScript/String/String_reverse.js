// 1. Simple .split('').reverse().join('') Method
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('string')); // "gnirts"


//2. Spread Operator (Better for ES6+)(Emoji Safe)
function reverseString(str) {
  return [...String(str)].reverse().join('');
}

console.log(reverseString('I 💖 You'));  // "wolfrevokcats"
console.log(reverseString(1337));             // "7331"
console.log(reverseString([1, 2, 3]));         // "3,2,1"

//3. Old-School for Loop (Manual Way)
function reverse(string) {
  var strRev = "";
  for (var i = string.length - 1; i >= 0; i--) {
    strRev += string[i];
  }
  return strRev;
}

console.log(reverse("zebra")); // "arbez"
