const fs = require("fs");
const path = require("path");
const uuid = require("uuid");
const dbFilename = "../db.json";
const dbPath = path.resolve(__dirname, dbFilename);
const getDB = () => JSON.parse(fs.readFileSync(dbPath));
const getTodos = () => getDB().todos;
const setTodos = todos => {
  const { todos: _, ...rest } = getDB();
  fs.writeFileSync(dbPath, JSON.stringify({ ...rest, todos }, null, 2), "utf-8");
};

module.exports = function todos(router) {
  router.get("/todos/:id", (req, res, next) => {
    const { id } = req.params;
    const todo = getTodos().find(todo => todo.id === parseInt(id));
    const code = !todo ? 404 : 200;
    if (!todo)
      return res.status(code).send({
        code,
        message: `No todo found with the id ${id}`
      });
    res.status(code).send({
      code,
      data: todo
    });
  });

  router.put("/todos/:id", (req, res, next) => {
    const { id } = req.params;
    const { todo } = req.body;
    const todos = getTodos();
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const code = todoIndex < 0 ? 404 : 200;
    if (todoIndex < 0)
      return res.status(code).send({
        code,
        message: `No todo found with the id ${id}`
      });
    const newTodos = [...todos.slice(0, todoIndex), todo, ...todos.slice(todoIndex + 1)];
    setTodos(newTodos);
    res.status(code).send({
      code,
      data: todo
    });
  });

  router.delete("/todos/:id", (req, res, next) => {
    const { id } = req.params;
    const todos = getTodos().filter(todo => todo.id !== id);
    setTodos(todos);
    res.status(200).send({ code: 200, data: todos });
  });

  router.get("/todos", (req, res, next) => {
    res.status(200).send({ code: 200, data: getTodos() });
  });

  router.post("/todos", (req, res, next) => {
    const todos = getTodos();
    const { content } = req.body;
    const date = new Date();
    const localeDate = date.toLocaleDateString("fr-FR");
    const localeTime = date.toLocaleTimeString("fr-FR");
    const todo = { id: uuid.v4(), content, completed: false, date: `${localeDate} ${localeTime}` };
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    res.status(200).send({ code: 200, data: todo });
  });
};
