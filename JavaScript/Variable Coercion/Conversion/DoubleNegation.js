console.log(!!0);       // false
console.log(!!"hello"); // true
console.log(!!null);    // false
console.log(!!undefined); // false
console.log(!!{});      // true
console.log(!![]);      // true 

//!!value forces any value into a boolean.