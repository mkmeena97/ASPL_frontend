
// delayCall.js

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(1000).then(() => console.log("⏱️ Delayed by 1s"));
delay(2000).then(() => console.log("⏱️ Delayed by 2s"));
delay(3000).then(() => console.log("⏱️ Delayed by 3s"));