// <!-- ❌ Too many accesses -->
const name = document.getElementById("username").value;
document.getElementById("output").textContent = name;

// <!-- ✅ Access once, reuse -->
const input = document.getElementById("username");
const output = document.getElementById("output");
output.textContent = input.value;
