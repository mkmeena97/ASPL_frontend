function outer() {
  let outerVar = "I’m outside!";
  
  function inner() {
    console.log(outerVar); // "I’m outside!"
  }
  
  inner();
}
outer();
