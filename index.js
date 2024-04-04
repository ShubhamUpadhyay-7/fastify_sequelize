// index.js

const fastify = require("fastify")();
const todoRoutes = require("./routes/todoRoutes");
const sequelize = require("./sequelize");

fastify.register(todoRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }

  try {
    await fastify.listen(3000);
    console.log("Server listening on http://localhost:3000");
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
})();
