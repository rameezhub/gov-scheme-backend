const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const schemeCtrl = require("../controllers/scheme.controller");

// OPTIONAL debug (now correct)
// console.log("auth:", typeof auth);
// console.log("getRecommendations:", typeof schemeCtrl.getRecommendations);

router.get("/recommend", auth, schemeCtrl.getRecommendations);

module.exports = router;
