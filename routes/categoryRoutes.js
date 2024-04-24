const express = require("express");
const CategoryControllers = require("../controllers/categoryControllers");

const auth = require("../middleware/auth");

const router = express.Router();

// Route for display all contracts
router.get("/", auth, CategoryControllers.getAllCategory);

// Route for display all contracts
router.post("/", auth, CategoryControllers.createOneCategory);

// Route for display all contracts
router.put("/:id", auth, CategoryControllers.updateCategoryBind);
// Route for delete meal
router.delete("/:id", auth, CategoryControllers.deleteOneCategory);

module.exports = router;
