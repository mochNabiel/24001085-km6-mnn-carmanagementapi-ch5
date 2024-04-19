const express = require("express");
const router = express.Router();

const optionController = require("../controller/option");
const { authMiddleware } = require("../middleware/auth");

router
  .route("/")
  .get(authMiddleware(["admin", "superadmin"]), optionController.getOptions)
  .post(authMiddleware(["admin", "superadmin"]), optionController.createOption);

router
  .route("/:id")
  .get(authMiddleware(["admin", "superadmin"]), optionController.getOptionById)
  .put(authMiddleware(["admin", "superadmin"]), optionController.updateOption)
  .delete(
    authMiddleware(["admin", "superadmin"]),
    optionController.deleteOption
  );

module.exports = router;