const express = require("express");
const router = express.Router();

const car = require("./car");
const option = require("./option");
const spec = require("./spec");

router.use("/car", car);
router.use("/option", option);
router.use("/spec", spec);

const authUser = require("./authUser");
const authAdmin = require("./authAdmin");
const authSuperAdmin = require("./authSuperAdmin");

router.use("/authUser", authUser);
router.use("/authAdmin", authAdmin);
router.use("/authSuperAdmin", authSuperAdmin);


module.exports = router;