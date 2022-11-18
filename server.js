const http = require("http");
const fs = require("fs");

//get a string
const ProductsData = fs.readFileSync("./data/products.json");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  //console.log(url.parse(req.url));

  // overfiew path
  if (pathName === "/data") {
    // slove cors policy bug and specify type of response data
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    });
    res.end(ProductsData);
  }

  // not found page
  else {
    res.end("not found brudda");
  }
});

// listen to server
server.listen(5000, () => {
  console.log("listening on port 5000");
});
