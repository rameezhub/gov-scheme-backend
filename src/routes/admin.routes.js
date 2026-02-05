const router = require("express").Router();
const adminCtrl = require("../controllers/admin.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

router.use(auth, role("ADMIN"));

router.post("/scheme", adminCtrl.addScheme);
router.put("/scheme/:id", adminCtrl.updateScheme);
router.delete("/scheme/:id", adminCtrl.deleteScheme);
router.get("/schemes", adminCtrl.getAllSchemes);

module.exports = router; // 🔴 REQUIRED
