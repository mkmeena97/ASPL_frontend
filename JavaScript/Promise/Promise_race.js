function fetchFromServer(name, delay, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(`${name}  failed`);
      } else {
        resolve(`${name}  responded`);
      }
    }, delay);
  });
}

const mirror1 = fetchFromServer("Server A", 1000);
const mirror2 = fetchFromServer("Server B", 700);
const mirror3 = fetchFromServer("Server C", 1500);

Promise.race([mirror1, mirror2, mirror3])
  .then(result => console.log(" Fastest server:", result))
  .catch(err => console.error(" First failure:", err));
