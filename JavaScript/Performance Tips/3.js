console.time("loop");
for (let i = 0; i < 1000000; i++) {
  // heavy logic
}
console.timeEnd("loop");
console.log("Loop completed!");