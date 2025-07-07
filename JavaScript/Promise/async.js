const cache = {
  user: { id: 1, name: "Tez" }
};

function getUserData(useCache) {
  if (useCache && cache.user) {
    // return cached result synchronously — need to wrapped as a Promise
    return Promise.resolve(cache.user);
  } else {
    // simulate API(Asynchronous Call by default Return Promise)
    return new Promise((resolve) => {
      setTimeout(() => {
        const freshData = { id: 1, name: "Tez", fetched: true };
        resolve(freshData);
      }, 1000);
    });
  }
}

getUserData(true).then(console.log);  // works instantly
getUserData(false).then(console.log); // after delay
