const http = require("http");
const fs = require("fs");

const ProductsData = fs.readFileSync("./data/products.json");
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/data") {
    fs.readFile(`./data/products.json`, "utf-8", (err, data) => {
      res.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      });
      res.end(data);
    });
  } else {
    res.end("not found brudda");
  }
});

// listen to server
server.listen(5000, () => {
  console.log("listening on port 5000");
});
