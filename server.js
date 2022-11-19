const http = require("http");
const fs = require("fs");

const ProductsData = fs.readFileSync("./data/products.json");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  // data path
  if (pathName === "/data") {
    // solve cors policy bug and specify type of response data
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    });
    res.end(ProductsData);
  }

  // not found path
  else {
    res.end("not found path");
  }
});

// listen to server
server.listen(5000, () => {
  console.log("listening on port 5000");
});
