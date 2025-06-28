// With Arrays 
const nums = [4, 2, 9, 1];

console.log(Math.min(nums)); // NaN input is a single array, not numbers
//Use Spread Operator
console.log(Math.min(...nums)); // 1 
console.log(Math.max(...nums)); // 9 

//With Mixed Types:
console.log(Math.min("5", 3));    // 3 ("5" coerced to 5)
console.log(Math.max(null, 2));   // 2 (null → 0)
console.log(Math.min(undefined, 2)); // NaN (undefined → NaN)

//Highest Price Listing
const prices = [8999, 12999, 7599, 9999];
const highest = Math.max(...prices);
console.log("Highest price:", highest);

//Fastest time in race
const times = [12.3, 11.7, 13.2, 10.9];
const fastest = Math.min(...times);
console.log("Fastest time:", fastest + "s");
