//import packages
// step 1 http package used to create basic web server

const http = require("http");

//step 2 create server
const web = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "content-type": "text/plain" });
    response.end("Welcome to the homepage");
  } else if (request.url === "/contact-us") {
    response.writeHead(200, { "content-type": "text/plain" });
    response.end("Contact us page");
  } else {
    response.writeHead(404, { "content-type": "text/plain" });
    response.end("page not found!");
  }
});

// declare a port variable
const port = 4000;

// launch this server
web.listen(port, () => {
  console.log("server is runing on port: 4000");
});
