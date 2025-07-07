// varVsLet.js
function demo() {
  if (true) {
    var a = 10;
    let b = 20;
  }
  console.log(a); // 10
  // console.log(b); // ❌ ReferenceError
}
demo();
