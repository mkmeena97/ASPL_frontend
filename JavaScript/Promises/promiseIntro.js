// promiseIntro.js

const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("🎉 Success!");
  } else {
    reject("❌ Failure.");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));
