const fs = require("fs");
const http = require("http");
const url = require("url");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, response) => {
  // var path = url.parse(request.url).pathname;
  console.log(req.url);
  if (/^\/[a-zA-Z0-9\/]*.css$/.test(request.url.toString())) {
    sendFileContent(response, request.url.toString().substring(1), "text/css");
  } else if (request.url === "/index") {
    fs.readFile("index.html", function (err, data) {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  }
});

function sendFileContent(response, fileName, contentType) {
  fs.readFile(fileName, function (err, data) {
    if (err) {
      response.writeHead(404);
      response.write("Not Found!");
    } else {
      response.writeHead(200, { "Content-Type": contentType });
      response.write(data);
    }
    response.end();
  });
}
// fs.readFile("index.html", function (err, data) {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(data);
//     response.end();
//   });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
