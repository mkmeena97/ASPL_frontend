//1. Math.floor() – Floor below
console.log(Math.floor(4.7));   // 4
console.log(Math.floor(-4.7));  // -5

//2. Math.ceil() – Ceiling above
console.log(Math.ceil(4.2));   // 5
console.log(Math.ceil(-4.2));  // -4

//3. Math.round() – Normal rounding
console.log(Math.round(4.4));   // 4
console.log(Math.round(4.5));   // 5
console.log(Math.round(-4.5));  // -4

//4. Math.trunc()
//Ye decimal ke baad ka hissa kaat deta hai, bina rounding ke
console.log(Math.trunc(4.9));   // 4
console.log(Math.trunc(-4.9));  // -4


//Real Life Example:
const bill = 465.78;
const paid = Math.ceil(bill);  // Customer pays 466
const change = paid - bill;
console.log(`Paid: ₹${paid}, Change: ₹${change.toFixed(2)}`);


//EMI Calculator
const emi = 7425.33;
const payable = Math.ceil(emi); // 7426
console.log("Pay this amount:", payable);
