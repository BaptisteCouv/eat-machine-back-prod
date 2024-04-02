const FoodNutritionalValue = require("../models/foodStockNutritionalValueModel");

// Display all FoodNutritionalValue
exports.getAllFoodNutritionalValue = (req, res, next) => {
  FoodNutritionalValue.find()
    .then((contracts) => res.status(200).json(contracts))
    .catch((error) => res.status(400).json({ error }));
};

// exports.getSpecificFoodNutritionalValueT = (req, res, next) => {
//   const { ids } = req.body;

//   if (!ids) {
//     return res.status(400).json({ message: "Aucun ID spécifié." });
//   }

//   const idArray = Array.isArray(ids) ? ids : [ids];

//   FoodNutritionalValue.find({ _id: { $in: idArray } })
//     .then((contracts) => {
//       if (contracts.length === 0) {
//         return res
//           .status(404)
//           .json({ message: "Aliment trouvé avec cet ID spécifique." });
//       }
//       res.status(200).json(contracts);
//     })
//     .catch((error) => res.status(400).json({ error }));
// };

exports.getSpecificFoodNutritionalValueForMeals = (specificId) => {
  let allFoods = FoodNutritionalValue.find({ _id: { $in: [specificId] } });
  return allFoods;
};

exports.getSpecificFoodNutritionalValue = (req, res, next) => {
  const ids = req.query.ids;

  if (!ids) {
    return res.status(400).json({ message: "Aucun ID spécifié." });
  }

  const idArray = Array.isArray(ids) ? ids : [ids];

  FoodNutritionalValue.find({ _id: { $in: idArray } })
    .then((contracts) => {
      if (contracts.length === 0) {
        return res
          .status(404)
          .json({ message: "Aliment trouvé avec cet ID spécifique." });
      }
      res.status(200).json(contracts);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Create one FoodNutritionalValue
exports.createOneFoodNutritionalValue = (req, res, next) => {
  delete req.body._id;
  const thing = new FoodNutritionalValue({
    ...req.body,
  });
  thing
    .save()
    .then(() => {
      res.status(201).json({
        message: "FoodNutritionalValue correctement enregistrés !",
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ error });
    });
};

// delete one FoodNutritionalValue
exports.deleteOneFoodNutritionalValue = (req, res, next) => {
  FoodNutritionalValue.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};
