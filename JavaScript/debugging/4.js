console.log("📜 Basic log");
console.warn("⚠️ Warning");
console.error("❌ Error!");
console.table([{ name: "Rajeshwari", role: "Intern" }, { name: "Tabbu", role: "Dev" }]);
console.time("loop");
for (let i = 0; i < 1000; i++) {}
console.timeEnd("loop"); // ⏱️ Time how long it took
