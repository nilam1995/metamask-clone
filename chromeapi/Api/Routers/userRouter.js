const express = require("express");
const authController = require("../Controllers/authController");

const router = express.Router();

router.get("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;