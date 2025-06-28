//Postfix: x++
//Pehle value return hoti hai, fir increase hota hai
let x = 5;
console.log(x++); // 5 
console.log(x);   // 6

// Prefix: ++x
//Pehle increase hota hai, fir value return hoti hai
let y = 5;
console.log(++y); // 6 
console.log(y);   // 6


//Real-World Example:
let counter = 0;

// Postfix in loop
while (counter++ < 3) {
  console.log("Postfix Count:", counter); // 1, 2, 3
}

let index = 0;

// Prefix in loop
while (++index < 3) {
  console.log("Prefix Count:", index); // 1, 2
}


