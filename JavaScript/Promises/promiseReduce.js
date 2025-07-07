// promiseReduce.js

const items = [1, 2, 3, 4];

items.reduce((prevPromise, currentItem) => {
  return prevPromise.then(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Processing", currentItem);
        resolve();
      }, 500);
    });
  });
}, Promise.resolve());
