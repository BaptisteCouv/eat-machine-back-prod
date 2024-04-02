const express = require("express");
const MealsControllers = require('../controllers/listMealControllers')

const router = express.Router();

// Route for display all contracts
router.get("/", MealsControllers.getAllMeals);

// Route for display all contracts
router.post("/", MealsControllers.createMeal);

// Route for display all contracts
router.get("/:id", MealsControllers.getOneMealName);

// Route for display all contracts
router.put("/:id", MealsControllers.updateMealBind);

// Route for delete meal
router.delete("/:id", MealsControllers.deleteOneMeal);

module.exports = router;