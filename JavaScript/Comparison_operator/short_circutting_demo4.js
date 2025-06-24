//Calling optional callback functions safely
function greet(message, callback) {
  console.log("Message:", message);

  // Call callback only if it exists
  callback && callback();
}

greet("Welcome, Tez!", () => console.log("Callback executed!"));
greet("No callback here");
