// services/todoService.js

const Todo = require("../Models/todo");

const todoService = {
  async getAllTodos() {
    return await Todo.findAll();
  },

  async createTodo(title, description) {
    return await Todo.create({ title, description });
  },

  async getTodo(todoId) {
    return await Todo.findByPk(todoId);
  },

  async updateTodo(todoId, newData) {
    const todo = await Todo.findByPk(todoId);
    if (!todo) {
      throw new Error("Todo not found");
    }
    return await todo.update(newData);
  },

  async deleteTodo(todoId) {
    const todo = await Todo.findByPk(todoId);
    if (!todo) {
      throw new Error("Todo not found");
    }
    await todo.destroy();
  },
};

module.exports = todoService;
