const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const DEFAULT_PORT = 3001;

const UPDATE_JSON_FILE = path.join(__dirname, "./json/cart.json");
const UPDATE_JSON_ENDPOINT = "/api/update_cart_items";

const ITEMS_JSON_FILE = path.join(__dirname, "./json/items.json");
const ITEMS_ENDPOINT = "/api/items";

const server = express();

server.use(cors());
server.use(express.json({ limit: "500mb" }));

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

server.get(ITEMS_ENDPOINT, (req, res) => {
  const { text } = req.query;
  fs.readFile(ITEMS_JSON_FILE, "utf8", (err, content) => {
    if (!err) {
      const items = JSON.parse(content);
      if (text) {
        if (text.includes(" ")) {
          const searched = items.filter((item) =>
            item.name.toLowerCase().includes(text.split(" ")[0])
          );
          const moreSearched = searched.filter((item) =>
            item.name.toLowerCase().includes(text.split(" ")[1])
          );
          const thirdSearched = items.filter((item) =>
            item.name.toLowerCase().includes(text.split(" ")[1])
          );
          const searchLVL1 = text.split(" ")[1];
          if (searched.length === 0 && !searchLVL1.includes(" ")) {
            const afterSearch = thirdSearched;
            res.status(200).json(afterSearch);
          } else if (moreSearched.length === 0 && thirdSearched.length === 0) {
            const searchLVL1 = text.split(" ")[1];
            if (searchLVL1.includes(" ")) {
              const searchedLVL1 = items.filter((item) =>
                item.name.toLowerCase().includes(searchLVL1.split(" ")[0])
              );
              const moreSearchedLVL1 = searchedLVL1.filter((item) =>
                item.name.toLowerCase().includes(searchLVL1.split(" ")[1])
              );
              const thirdSearchedLVL1 = items.filter((item) =>
                item.name.toLowerCase().includes(searchLVL1.split(" ")[1])
              );
              if (searchedLVL1.length === 0 && thirdSearchedLVL1.length === 0) {
                if (moreSearched.length === 0) {
                  const afterSearch = searched;
                  res.status(200).json(afterSearch);
                } else {
                  const afterSearch = moreSearched;
                  res.status(200).json(afterSearch);
                }
              } else if (moreSearchedLVL1.length === 0) {
                const afterSearch = searchedLVL1;
                res.status(200).json(afterSearch);
              } else {
                const afterSearch = moreSearchedLVL1;
                res.status(200).json(afterSearch);
              }
            } else {
              const afterSearch = searched;
              res.status(200).json(afterSearch);
            }
          } else if (moreSearched.length === 0) {
            const afterSearch = searched;
            res.status(200).json(afterSearch);
          } else {
            const afterSearch = moreSearched;
            res.status(200).json(afterSearch);
          }
        } else {
          const searched = items.filter((item) =>
            item.name.toLowerCase().includes(text)
          );
          const afterSearch = searched;
          res.status(200).json(afterSearch);
        }
      } else {
        res.status(200).json(items);
      }
    } else {
      console.log(err.toString());
      res.status(500).send(err.toString());
    }
  });
});

const port = process.env.PORT || DEFAULT_PORT;
console.log(`Listening on port ${port}`);
server.listen(port);
