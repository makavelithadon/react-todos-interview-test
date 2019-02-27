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
  router.get("/todosLists/:id", (req, res, next) => {
    const todosLists = getTodosLists();
    const foundTodosList = todosLists.find(todosList => parseInt(todosList.id) === parseInt(req.params.id));
    if (foundTodosList) return res.status(200).send({ code: 200, data: foundTodosList });
    return res.status(404).send({ code: 404, message: "Not found." });
  });
};
