// ❌ Recreates object every loop
for (let i = 0; i < 1000; i++) {
  const obj = { value: i };
}

// ✅ Reuse single object if possible
const obj = {};
for (let i = 0; i < 1000; i++) {
  obj.value = i;
  // Do something with obj
}
