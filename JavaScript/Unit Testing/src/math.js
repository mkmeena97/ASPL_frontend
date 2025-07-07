// 📄 src/math.js
export function add(a, b) {
  return a + b;
}

export function promiseAdd(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a + b), 500);
  });
}
