/*
    - .exec() is a method on a RegExp object that:
    - Searches a string for a match.
    - Returns an array with match details if found.
    - Returns null if no match is found.
  Result:
    - [0] = The full match
    - index = Position where the match starts
    - input = The original string
    - groups = Named capturing groups (if any)
*/

const regex = /tez/;
const result = regex.exec("hello tez bhai");

console.log(result); // [ 'tez', index: 6, input: 'hello tez bhai', groups: undefined ]


//Example 1
const regex1 = /\d+/g;
const str = "Price: ₹1200, Discount: ₹300";
let match;

while ((match = regex1.exec(str)) !== null) {
  console.log(match[0]); // 1200, then 300
}
