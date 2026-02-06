const express = require("express");
const router = express.Router();

const schemeController = require("../controllers/scheme.controller");

router.get("/", schemeController.getAllSchemes);

module.exports = router;
