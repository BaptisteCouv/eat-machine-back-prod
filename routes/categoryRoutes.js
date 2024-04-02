const express = require("express");
const CategoryControllers = require("../controllers/categoryControllers");

const router = express.Router();

// Route for display all contracts
router.get("/", CategoryControllers.getAllCategory);

// Route for display all contracts
router.post("/", CategoryControllers.createOneCategory);

// Route for display all contracts
router.put("/:id", CategoryControllers.updateCategoryBind);
// Route for delete meal
router.delete("/:id", CategoryControllers.deleteOneCategory);

module.exports = router;
