// 1. forEach()
//Cannot break, continue, or return values (always returns undefined)
const arr = [1, 2, 3];
arr.forEach((value, index) => {
  console.log(`Index ${index} = ${value}`);
});

//2. for...of
const arr1 = ['a', 'b', 'c'];
for (const item of arr1) {
  console.log(item);
}

//3. for...in ( Not recommended for arrays)
const obj = { name: 'Tez', age: 27 };
for (const key in obj) {
  console.log(key, obj[key]);
}

//4. Traditional for loop
const arr2 = [10, 20, 30];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// 5. map() — for transformation only
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]


