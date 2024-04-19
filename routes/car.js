const express = require("express");
const router = express.Router();

const carController = require("../controller/car");
const { authMiddleware } = require("../middleware/auth");

router
  .route("/")
  .get(authMiddleware(["user", "admin", "superadmin"]), carController.getCars)
  .post(authMiddleware(["admin", "superadmin"]), carController.createCar);

router
  .route("/id/:id")
  .get(authMiddleware(["user", "admin", "superadmin"]), carController.getCarById)
  .put(authMiddleware(["admin", "superadmin"]), carController.updateCar)
  .delete(authMiddleware(["admin", "superadmin"]), carController.deleteCar);

module.exports = router;
