const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/events") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    });

    const timer = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      res.write(`data: ${now}\n\n`);
    }, 1000);

    req.on("close", () => {
      clearInterval(timer);
    });
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(3000, () => {
  console.log("✅ SSE server running at http://localhost:3000/events");
});
