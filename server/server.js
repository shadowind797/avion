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
          const secondWord = text.split(" ")[1];
          if (secondWord.includes(" ")) {
            const firstWord = text.split(" ")[0];
            const secondWord = text.split(" ")[1];
            const thirdWord = secondWord.split(" ")[1];

            const firstSearch = items.filter((item) =>
              item.name.toLowerCase().includes(firstWord)
            );
            if (firstSearch.length > 0) {
              const secondSearch = firstSearch.filter((item) =>
                item.name.toLowerCase().includes(secondWord)
              );
              if (secondSearch.length > 0) {
                const thirdSearch = secondSearch.filter((item) =>
                  item.name.toLowerCase().includes(thirdWord)
                );
                if (thirdSearch.length > 0) {
                  res.status(200).json(thirdSearch);
                } else {
                  const search9 = firstSearch.filter((item) =>
                    item.name.toLowerCase().includes(thirdWord)
                  );
                  if (search9.length > 0) {
                    res.status(200).json([...secondSearch, ...search9]);
                  } else {
                    res.status(200).json(secondSearch);
                  }
                }
              } else {
                const search8 = firstSearch.filter((item) =>
                  item.name.toLowerCase().includes(thirdWord)
                );
                if (search8.length > 0) {
                  res.status(200).json(search8);
                } else {
                  res.status(200).json(firstSearch);
                }
              }
            } else {
              const search4 = items.filter((item) =>
                item.name.toLowerCase().includes(secondWord)
              );
              if (search4.length > 0) {
                const search5 = search4.filter((item) =>
                  item.name.toLowerCase().includes(thirdWord)
                );
                if (search5.length > 0) {
                  res.status(200).json(search5);
                } else {
                  res.status(200).json(search4);
                }
              } else {
                const search7 = items.filter((item) =>
                  item.name.toLowerCase().includes(thirdWord)
                );
                if (search7.length > 0) {
                  res.status(200).json(search7);
                } else {
                  res.status(200).json([]);
                }
              }
            }
          } else {
            const firstWord = text.split(" ")[0];
            const secondWord = text.split(" ")[1];

            const search10 = items.filter((item) =>
              item.name.toLowerCase().includes(firstWord)
            );
            if (search10.length > 0) {
              const search11 = search10.filter((item) =>
                item.name.toLowerCase().includes(secondWord)
              );
              if (search11.length > 0) {
                res.status(200).json(search11);
              } else {
                res.status(200).json(search10);
              }
            } else {
              const search12 = items.filter((item) =>
                item.name.toLowerCase().includes(secondWord)
              );
              if (search12.length > 0) {
                res.status(200).json(search12);
              } else {
                res.status(200).json([]);
              }
            }
          }
        } else {
          const search = items.filter((item) =>
            item.name.toLowerCase().includes(text)
          );
          res.status(200).json(search);
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
