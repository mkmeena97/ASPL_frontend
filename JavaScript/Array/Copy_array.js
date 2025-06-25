//slice() does not mutate the original array
const arr = [100, 200, 300];
const newArr = arr.slice(1);
console.log(arr);     // [100, 200, 300]
console.log(newArr);  // [200, 300]

//Pagination (e.g., showing page 2 data)
const products = [101, 102, 103, 104, 105, 106];
const pageSize = 2;
const page2 = products.slice(2, 4);
console.log(page2); // [103, 104]


