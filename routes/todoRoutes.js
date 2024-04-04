// routes/todoRoutes.js

const todoController = require("../Controller/todoController");

function todoRoutes(fastify, done) {
  // Get all todos
  fastify.get("/todos", todoController.getAllTodos);

  // Create a new todo
  fastify.post("/todos", todoController.createTodo);

  // Get a single todo
  fastify.get("/todos/:id", todoController.getTodo);

  // Update a todo
  fastify.put("/todos/:id", todoController.updateTodo);

  // Delete a todo
  fastify.delete("/todos/:id", todoController.deleteTodo);

  done();
}

module.exports = todoRoutes;
