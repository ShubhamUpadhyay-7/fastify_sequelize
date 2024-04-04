// controllers/todoController.js

const TodoService = require("../services/todoservices");

// Controller for handling todo-related logic
const todoController = {
  async getAllTodos(request, reply) {
    try {
      const todos = await TodoService.getAllTodos();
      reply.send(todos);
    } catch (error) {
      reply.status(500).send({ error: "Internal Server Error" });
    }
  },

  async createTodo(request, reply) {
    try {
      const { title, description } = request.body;
      const newTodo = await TodoService.createTodo(title, description);
      reply.send(newTodo);
    } catch (error) {
      reply.status(500).send({ error: "Internal Server Error" });
    }
  },

  async getTodo(request, reply) {
    try {
      const todoId = request.params.id;
      const todo = await TodoService.getTodo(todoId);
      reply.send(todo);
    } catch (error) {
      reply.status(500).send({ error: "Internal Server Error" });
    }
  },

  async updateTodo(request, reply) {
    try {
      const todoId = request.params.id;
      const { title, description } = request.body;
      const updatedTodo = await TodoService.updateTodo(todoId, {
        title,
        description,
      });
      reply.send(updatedTodo);
    } catch (error) {
      reply.status(500).send({ error: "Internal Server Error" });
    }
  },

  async deleteTodo(request, reply) {
    try {
      const todoId = request.params.id;
      await TodoService.deleteTodo(todoId);
      reply.send({ message: "Todo deleted successfully" });
    } catch (error) {
      reply.status(500).send({ error: "Internal Server Error" });
    }
  },
};

module.exports = todoController;
