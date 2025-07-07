// promisify.js

function oldStyle(callback) {
  setTimeout(() => callback(null, "📦 Done"), 500);
}

function promisified() {
  return new Promise((resolve, reject) => {
    oldStyle((err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

promisified().then(console.log); // 📦 Done
