const http = require("http");
const PORT = 8082;
const serverInfo = {
  serverName: "Crio Server",
  version: "1.0.0",
  currentDate: new Date().toDateString(),
  currentTime: new Date().toTimeString(),
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(serverInfo));
    res.end();
    return;
  }
  res.statusCode = 200;
  res.writeHead(200, { "content-type": "application/xml" });
  res.write(JSON.stringify(serverInfo));
  res.end();
});
server.listen(PORT, () => {
  console.log("Server is running at port " + PORT);
});
