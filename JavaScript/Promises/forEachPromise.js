// forEachPromise.js

const items = [1, 2, 3];

items.forEach(async item => {
  const res = await Promise.resolve(item * 10);
  console.log(res);
});

