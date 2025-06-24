//1. pop() — Remove from end
//Removes last item. Mutates original array.
const nums = [1, 2, 3];
nums.pop();
console.log(nums); // [1, 2]

//2. shift() — Remove from start
//Removes first item. Mutates original array.
const nums1 = [1, 2, 3];
nums1.shift();
console.log(nums1); // [2, 3]


//3. splice() — Remove from any index
// add, remove, replace — sab kuch karta hai.
const nums2 = [1, 2, 3, 4];
nums2.splice(1, 2); // index 1 se 2 items remove
console.log(nums2); // [1, 4]

//4. filter() — Remove by condition (non-mutating)
//Does not modify original array. Best for functional style.
const nums3 = [1, 2, 3, 4];
const filtered = nums3.filter(n => n !== 2);
console.log(filtered); // [1, 3, 4]

//5. delete operator (Not Recommended)
//Leaves holes in the array. Avoid unless really needed.
const arr = [1, 2, 3];
delete arr[1];
console.log(arr); // [1, <1 empty item>, 3]

// 6. Remove by index (immutable way)
const arr1 = [10, 20, 30];
const indexToRemove = 1;
const newArr = arr1.filter((_, i) => i !== indexToRemove);
console.log(newArr); // [10, 30]

// Remove All Elements of an Array
//1. length = 0  (Fastest & Mutates Original)
const arr3 = [1, 2, 3];
arr3.length = 0;
console.log(arr3); // []

//2. splice() – In-place removal
const arr4 = [1, 2, 3];
arr4.splice(0, arr4.length);
console.log(arr4); // []

//3. while loop with pop()
const arr5 = [1, 2, 3];
while (arr5.length > 0) {
  arr5.pop();
}
console.log(arr5); // []

//4. Reassign (won’t affect references)
//Yeh sirf local variable ko empty karta hai, kisi external reference pe effect nahi hoga.
let arr6 = [1, 2, 3];
arr6 = [];
console.log(arr6); // []
