const { default: mongoose } = require("mongoose");

const foodsBind = mongoose.Schema({
  quantity: { type: Number, require: true },
  idMeals: [
    {
      type: String,
      ref: "Meals",
    },
  ],
  idFood: [
    {
      type: String,
      ref: "FoodNutritionalValue",
    },
  ],
  foodDetails: [],
});

module.exports = mongoose.model("FoodsBind", foodsBind);
