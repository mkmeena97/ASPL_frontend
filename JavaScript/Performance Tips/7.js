// ❌ Global access
function compute() {
  for (let i = 0; i < items.length; i++) {
    // do stuff
  }
}

// ✅ Local copy
function compute() {
  const localItems = items;
  for (let i = 0; i < localItems.length; i++) {
    // do stuff
  }
}
