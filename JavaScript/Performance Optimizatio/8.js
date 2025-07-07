let cached = localStorage.getItem("data");
if (cached) {
  show(JSON.parse(cached));
} else {
  fetch("/api/data")
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("data", JSON.stringify(data));
      show(data);
    });
}
