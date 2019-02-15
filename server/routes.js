const fs = require('fs');
const path = require('path');
const express = require("express");
const uuid = require('uuid');
const router = express.Router();
const dbFilename = 'db.json';
const dbPath = path.resolve(__dirname, dbFilename);
const getTodos = () => JSON.parse(fs.readFileSync(dbPath)).todos;
const setTodos = todos => fs.writeFileSync(dbPath, JSON.stringify({ todos }, null, 2), 'utf-8');

(router => {
  router.get('/todos/:id', (req, res, next) => {
    const { id } = req.params;
    const todo = getTodos().find(todo => todo.id === parseInt(id));
    const code = !todo ? 404 : 200;
    if (!todo) return res.status(code).send({
      code,
      message: `No todo found with the id ${id}`
    });
    res.status(code).send({
      code,
      data: todo
    });
  })

  router.put('/todos/:id', (req, res, next) => {
    const { id } = req.params;
    const todo = req.body.todo;
    const todoIndex = getTodos().findIndex(todo => todo.id === parseInt(id));
    const code = todoIndex < 0 ? 404 : 200;
    if (todoIndex < 0) return res.status(code).send({
      code,
      message: `No todo found with the id ${id}`
    });
    const todos = [ ...todos.slice(0, todoIndex), todo, ...todos.slice(todoIndex) ];
    setTodos(todos);
    res.status(code).send({
      code,
      data: todos[todoIndex]
    });
  });

  router.delete('/todos/:id', (req, res, next) => {
    const { id } = req.params;
    const todos = getTodos().filter(todo => todo.id !== parseInt(id));
    setTodos(todos);
    res.status(200).send({ code: 200, data: todos });
  });

  router.get("/todos", (req, res, next) => {
    res.status(200).send({ code: 200, data: getTodos()});
  });

  router.post("/todos", (req, res, next) => {
    const todos = getTodos();
    const { content } = req.body;
    const todo = { id: uuid.v4(), content, completed: false };
    const newTodos = [ ...todos, todo ];
    setTodos(newTodos);
    res.status(200).send({ code: 200, data: todo });
  });
})(router);

module.exports = router;