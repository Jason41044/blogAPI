module.exports = (app) => {
  const router = require("express").Router();
  const controller = require("../controllers/todo.controller");

  router.get("/", controller.findAll);

  router.get("/:id", controller.findByID);

  app.use("/api/todos", router);
};
