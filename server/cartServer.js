const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const DEFAULT_PORT = 3001;

const UPDATE_JSON_FILE = path.join(__dirname, "./json/cart.json");

const UPDATE_JSON_ENDPOINT = "/api/update_cart_items";

const server = express();

server.use(express.json({limit: '500mb'}));

const rawParser = bodyParser.raw({ type: "*/*" });
server.post(UPDATE_JSON_ENDPOINT, rawParser, (req, res) => {
  const data = req.body instanceof Buffer ? req.body : Buffer.alloc(0);
  fs.writeFile(UPDATE_JSON_FILE, data, (err) => {
    if (!err) {
      console.log(`Wrote ${Buffer.byteLength(data)} bytes`);
      res.status(200).send("Success!");
    } else {
      console.log(err.toString());
      res.status(500).send(err.toString());
    }
  });
});
server.get(UPDATE_JSON_ENDPOINT, (req, res) => {
  fs.readFile(UPDATE_JSON_FILE, "utf8", (err, content) => {
    if (!err) {
      res.status(200).send(content);
    } else {
      console.log(err.toString());
      res.status(500).send(err.toString());
    }
  });
});

const port = process.env.PORT || DEFAULT_PORT;
console.log(`Listening on port ${port}`);
server.listen(port);
