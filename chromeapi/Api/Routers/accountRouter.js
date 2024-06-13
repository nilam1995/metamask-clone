const express = require("express");
const authController = require("../Controllers/authController");

const router = express.Router();

router.get("/allacoount", authController.allAccount);
router.post("/createaccount", authController.createAccount);

module.exports = router;