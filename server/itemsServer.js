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
      let afterSearch = JSON.parse(content);
      if (text) {
        if (value.includes(" ")) {
          const searched = content.filter((item) =>
            item.name.toLowerCase().includes(value.split(" ")[0])
          );
          const moreSearched = searched.filter((item) =>
            item.name.toLowerCase().includes(value.split(" ")[1])
          );
          const thirdSearched = content.filter((item) =>
            item.name.toLowerCase().includes(value.split(" ")[1])
          );

          if (moreSearched.length === 0) {
            afterSearch = searched;
          }
          if (searched.length === 0) {
            afterSearch = thirdSearched;
          }
        } else {
          const searched = content.filter((item) =>
            item.name.toLowerCase().includes(value)
          );
          afterSearch = searched;
        }
      }
      console.log(afterSearch);
      res.status(200).send(afterSearch);
    } else {
      console.log(err.toString());
      res.status(500).send(err.toString());
    }
  });
});

const port = process.env.PORT || DEFAULT_PORT;
console.log(`Listening on port ${port}`);
server.listen(port);
