// syncAsync.js

function maybeAsync(value) {
  if (typeof value === "string") return Promise.resolve(value);
  return value;
}

maybeAsync("Immediate").then(console.log); // Immediate
maybeAsync(Promise.resolve("Async")).then(console.log); // Async
