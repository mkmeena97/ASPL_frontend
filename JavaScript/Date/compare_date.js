
//1. using Value of
var date1 = new Date();
var date2 = new Date(date1.valueOf() + 10);
console.log(date1.valueOf() === date2.valueOf());  // false

//2. Using strict Equality Operator
//2.1 It is Not correct way because referencing to th difference object
var date1 = new Date();
var date2 = new Date();
console.log(date1 === date2);  // false

//2.2 It is correct way
var date1 = new Date();
var date2 = date1;
console.log(date1 === date2);  // true

//3. Auto-call .valueOf()
var date1 = new Date();
var date2 = new Date(date1.valueOf() + 10);
console.log(date1 < date2);    // true
console.log(date1 <= date2);   // true

