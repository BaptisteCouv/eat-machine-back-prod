const { default: mongoose } = require("mongoose");

const category = mongoose.Schema({
  name: { type: String, require: true },
  mealTime: { type: String, require: false },
});

module.exports = mongoose.model("Category", category);
