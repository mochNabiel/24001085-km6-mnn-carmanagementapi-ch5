const express = require("express");
const router = express.Router();
const { register, login, profile } = require("../controller/authUser");
const { authMiddleware } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/google-login", googleLogin);
router.get(
  "/profile",
  authMiddleware(["user", "admin", "superadmin"]),
  profile
);

module.exports = router;