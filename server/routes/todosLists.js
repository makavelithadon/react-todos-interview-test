const fs = require("fs");
const path = require("path");
const uuid = require("uuid");
const dbFilename = "../db.json";
const dbPath = path.resolve(__dirname, dbFilename);
const getDB = () => JSON.parse(fs.readFileSync(dbPath));
const getTodosLists = () => getDB().todosLists;
const setTodosLists = todosLists => {
  const { todosLists: _, ...rest } = getDB();
  fs.writeFileSync(dbPath, JSON.stringify({ ...rest, todosLists }, null, 2), "utf-8");
};

module.exports = function(router) {
  router.get("/todosLists", (req, res, next) => {
    res.status(200).send({ code: 200, data: getTodosLists() });
  });
};
