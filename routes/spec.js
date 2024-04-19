const express = require("express");
const router = express.Router();

const specController = require("../controller/spec");
const { authMiddleware } = require("../middleware/auth");

router
  .route("/")
  .get(authMiddleware(["admin", "superadmin"]), specController.getSpecs)
  .post(authMiddleware(["admin", "superadmin"]), specController.createSpec);

router
  .route("/:id")
  .get(authMiddleware(["admin", "superadmin"]), specController.getSpecById)
  .put(authMiddleware(["admin", "superadmin"]), specController.updateSpec)
  .delete(authMiddleware(["admin", "superadmin"]), specController.deleteSpec);

module.exports = router;