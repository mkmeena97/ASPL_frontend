// asyncAwait.js

async function getData() {
  const res = await Promise.resolve("📬 Data ready");
  console.log(res);
}

getData();
