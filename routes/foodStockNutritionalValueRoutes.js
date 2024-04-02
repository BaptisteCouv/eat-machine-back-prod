const express = require("express");
const FoodStockNutritionalValueControllers = require("../controllers/foodStockNutritionalValueControllers");

const router = express.Router();

// Route for display all contracts
router.get(
  "/",
  FoodStockNutritionalValueControllers.getAllFoodNutritionalValue
);

router.get(
  "/one",
  FoodStockNutritionalValueControllers.getSpecificFoodNutritionalValue
);

// Route for display all contracts
router.post(
  "/",
  FoodStockNutritionalValueControllers.createOneFoodNutritionalValue
);

router.delete(
  "/:id",
  FoodStockNutritionalValueControllers.deleteOneFoodNutritionalValue
);

module.exports = router;
