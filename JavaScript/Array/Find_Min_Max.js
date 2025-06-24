// Find Minimum:
const nums = [45, 21, 78, 9];
const min = Math.min(...nums);
console.log(min); // 9

// Find Maximum:
const nums1 = [45, 21, 78, 9];
const max = Math.max(...nums1);
console.log(max); // 78

//  Agar array bohot bada ho (avoid spread):
const nums4 = [12, 5, 9, 1, 100];

let minimun = nums4[0];
let maximum = nums4[0];

for (let i = 1; i < nums4.length; i++) {
  if (nums4[i] < minimun) minimun = nums4[i];
  if (nums4[i] > maximum) maximum = nums4[i];
}

console.log("Minimum:", minimun); // 1
console.log("Maximum:", maximum); // 100
