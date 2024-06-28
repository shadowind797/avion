const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const DEFAULT_PORT = 3002;
const JSON_FILE = path.join(__dirname, "./json/items.json");
const ENDPOINT = "/api/items";

const server = express();
server.use(cors());

server.get(ENDPOINT, (req, res) => {
  const { text } = req.query;
  fs.readFile(JSON_FILE, "utf8", (err, content) => {
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

          if (moreSearched.length === 0) {
            const afterSearch = searched;
            res.status(200).json(afterSearch);
          }
          if (searched.length === 0) {
            const afterSearch = thirdSearched;
            res.status(200).json(afterSearch);
          }
        } else {
          const searched = items.filter((item) =>
            item.name.toLowerCase().includes(text)
          );
          const afterSearch = searched;
          res.status(200).json(afterSearch);
        }
      }
      else {
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
