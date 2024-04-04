// models/Todo.js

const { DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");

const Todo = sequelize.define("Todo", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Todo;
