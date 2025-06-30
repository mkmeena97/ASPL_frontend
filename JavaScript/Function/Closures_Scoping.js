/*
    - Whenever you write a loop + async code (like setTimeout, fetch, etc.) — always prefer let
*/
//Example 1: Using var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 
// 3
// 3
// 3

//Example 2: Using let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output:
// 0
// 1
// 2

