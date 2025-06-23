
// Method 1: charAt(index)
var string = "Hello, World!";
console.log(string.charAt(4));  //"o"

// If the index is out of range (too big), it returns an empty string
console.log(string.charAt(100)); // ""

// Method 2: Bracket Notation string[index]

console.log(string[4]); // "o"

// Method 3: Get UTF-16 Character Code at Index
console.log(string.charCodeAt(4)); // 111


