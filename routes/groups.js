const router = require("express").Router();

const groupController = require("../controllers/groupController");

// funções
router.route("/groups").post((req, res) => groupController.create(req, res));
router.route("/groups").get((req, res) => groupController.getAll(req, res));
router
  .route("/groups/:id")
  .get((req, res) => groupController.getById(req, res));
router
  .route("/groups/:id")
  .delete((req, res) => groupController.deleteById(req, res));
router.route("/groups/:id").put((req, res) => groupController.update(req, res));

module.exports = router;
