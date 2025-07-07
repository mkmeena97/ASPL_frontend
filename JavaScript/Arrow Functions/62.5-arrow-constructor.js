// 62.5-arrow-constructor.js
const Arrow = () => {
  this.name = "Test"; // ❌ Won't work
};

try {
  const a = new Arrow(); // TypeError: Arrow is not a constructor
} catch (err) {
  console.log("❌ Arrow functions can't be used as constructors.");
}
// Output: ❌ Arrow functions can't be used as constructors.    
// Note: Arrow functions do not have a `[[Construct]]` method, so they cannot be used with the `new` keyword.       
// If you need a constructor, use a regular function instead