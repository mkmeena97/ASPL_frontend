let count = 0;
const id = setInterval(() => {
  console.log(`Count: ${count}`);
  count++;

  if (count >= 5) {
    clearInterval(id);
    console.log("Finished looping.");
  }
}, 1000);
