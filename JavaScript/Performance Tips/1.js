// ❌ Slower
function compute() {
  try {
    // Some tight-loop logic
  } catch (e) {
    console.error(e);
  }
}

// ✅ Faster
function compute() {
  if (!data) return;
  // Fast path logic here
}
