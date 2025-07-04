
//1. .match(regexp) = Returns array of matches
const str = "tez, tEz, TeZ";
const result = str.match(/tez/gi);
console.log(result); // [ 'tez', 'tEz', 'TeZ' ]

// 2. .matchAll(regexp) = Returns iterator with detailed match info also gives access to index, groups, etc.
const str1 = "User1: Tez, User2: Tez bhai";
const matches = str1.matchAll(/Tez/gi);

for (const match of matches) {
  console.log(`Found ${match[0]} at index ${match.index}`);
}


//3. .replace(regexp, replacement)
const str2 = "tez bhai is pro coder";
const result1 = str2.replace(/pro/, "legendary");
console.log(result1); // tez bhai is legendary coder

// 4. .replace() with callback function
const str3 = "₹100, ₹200";

const updated = str3.replace(/₹(\d+)/g, (match, amount) => {
  return `INR${Number(amount) * 2}`;
});

console.log(updated); // INR200, INR400

//5. .search(regex) = Returns index of the first match or -1 if not found.
"tez bhai".search(/bhai/); // 4
"tez bhai".search(/guru/); // -1


// 6. .split(regex)
const str4 = "one, two; three  four";
const parts = str4.split(/[,\s;]+/); // split on comma, space, or semicolon
console.log(parts); // [ 'one', 'two', 'three', 'four' ]

