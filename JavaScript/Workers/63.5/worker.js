onmessage = (e) => {
  if (e.data === "start") {
    let count = 0;
    setInterval(() => {
      postMessage(`Count: ${++count}`);
    }, 1000);
  }
};
