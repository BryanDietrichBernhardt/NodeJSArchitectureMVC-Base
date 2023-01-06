const router = require("express").Router();

const userController = require("../controllers/userController");

// funções
router.route("/users").post((req, res) => userController.create(req, res));
router.route("/users").get((req, res) => userController.getAll(req, res));
router.route("/users/:id").get((req, res) => userController.getById(req, res));
router
  .route("/users/:id")
  .delete((req, res) => userController.deleteById(req, res));
router.route("/users/:id").put((req, res) => userController.update(req, res));

module.exports = router;
