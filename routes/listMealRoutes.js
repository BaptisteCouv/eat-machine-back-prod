const express = require("express");
const MealsControllers = require("../controllers/listMealControllers");

const auth = require("../middleware/auth");

const router = express.Router();

// Route for display all contracts
router.get("/", auth, MealsControllers.getAllMeals);

// Route for display all contracts
router.post("/", auth, MealsControllers.createMeal);

// Route for display all contracts
router.get("/:id", auth, MealsControllers.getOneMealName);

// Route for display all contracts
router.put("/:id", auth, MealsControllers.updateMealBind);

// Route for delete meal
router.delete("/:id", auth, MealsControllers.deleteOneMeal);

module.exports = router;
