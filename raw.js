const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("This is Home Page");
    res.end();
  } else if (req.url === "/about" && req.method === "GET") {
    res.write("This is About Page");
    res.end();
  } else {
    res.write("Not found");
    res.end();
  }
});

server.listen(3000);
console.log("listening on Port 3000");
