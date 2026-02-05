const express = require("express");
const router = express.Router();

const schemeController = require("../controllers/scheme.controller");

// Public routes
router.get("/", schemeController.getAllSchemes);
router.get("/recommend", schemeController.getRecommendations);

module.exports = router;
