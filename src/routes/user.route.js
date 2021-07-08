module.exports = (app) => {
  const controller = require("../controllers/user.controller");

  const router = require("express").Router();

  router.get("/", controller.findAll);

  router.get("/:id", controller.findByID);

  app.use("/api/user", router);
};
