const express = require("express");
const { todoController } = require("../controller");

const todoRoutes = express.Router();

//GET all  todo
todoRoutes.get("/", todoController.fetchAllTodo);

//GET a single todo
todoRoutes.get("/:id", todoController.getTodo);

//POST a new todo
todoRoutes.post("/", todoController.createTodo);

//DELETE a single todo
todoRoutes.delete("/:id", todoController.deleteTodo);

//UPDATE a single todo
todoRoutes.put("/:id", todoController.updateTodo);

module.exports = todoRoutes;
