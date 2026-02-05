const express = require("express");
const router = express.Router();

// ✅ IMPORT ONCE
const authController = require("../controllers/auth.controller");

// ✅ FUNCTION NAMES MUST MATCH EXACTLY
router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;
