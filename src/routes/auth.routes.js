const express = require("express");
const router = express.Router();

// ❌ REMOVE DUPLICATE IMPORTS
const authController = require("../controllers/auth.controller");

// Routes
router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;
