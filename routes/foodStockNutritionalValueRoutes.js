const express = require("express");
const FoodStockNutritionalValueControllers = require("../controllers/foodStockNutritionalValueControllers");

const auth = require("../middleware/auth");

const router = express.Router();

// Route for display all contracts
router.get(
  "/",
  auth,
  FoodStockNutritionalValueControllers.getAllFoodNutritionalValue
);

router.get(
  "/one",
  auth,
  FoodStockNutritionalValueControllers.getSpecificFoodNutritionalValue
);

// Route for display all contracts
router.post(
  "/",
  auth,
  FoodStockNutritionalValueControllers.createOneFoodNutritionalValue
);

router.delete(
  "/:id",
  auth,
  FoodStockNutritionalValueControllers.deleteOneFoodNutritionalValue
);

module.exports = router;
