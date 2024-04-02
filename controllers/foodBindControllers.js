const FoodBind = require("../models/foodBindModel");
const {
  getSpecificFoodNutritionalValueForMeals,
} = require("./foodStockNutritionalValueControllers");

// Display all FoodBind
exports.getAllFoodBind = (req, res, next) => {
  FoodBind.find()
    .then((contracts) => res.status(200).json(contracts))
    .catch((error) => res.status(400).json({ error }));
};

exports.getSpecificFoodBind = (req, res, next) => {
  const specificId = req.params.id;
  FoodBind.find({ idMeals: specificId })
    .then((alimentLiee) => {
      const promises = alimentLiee.map((element) => {
        return getSpecificFoodNutritionalValueForMeals(element.idFood).then(
          (foods) => {
            let foodBindValue = foods.find(
              (e) => e._id.toString() === element.idFood[0]
            );
            let NewFoodBind = {
              foodBindValue,
              idFoodBind: element._id.toString(),
              quantity: element.quantity,
            };
            return NewFoodBind;
          }
        );
      });

      Promise.all(promises)
        .then((results) => {
          res.status(200).json(results);
        })
        .catch((error) => {
          console.error("Error in Promise.all:", error);
          res.status(400).json({ error });
        });
    })
    .catch((error) => res.status(400).json({ error }));
};

// Create one FoodBind
exports.createOneFoodBind = (req, res, next) => {
  delete req.body._id;
  const thing = new FoodBind({
    ...req.body,
  });
  thing
    .save()
    .then((createdThing) => {
      res.status(201).json({
        message: "FoodBind correctement enregistrés !",
        id: createdThing._id,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ error });
    });
};

// Actualiser one FoodBind
exports.updateFoodBind = (req, res, next) => {
  FoodBind.updateOne({ _id: req.params.id }, { $set: { ...req.body } })
    .then(() => {
      res.status(201).json({
        message: "FoodBind correctement modifié !",
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ error });
    });
};

// delete one FoodBind
exports.deleteFoodBind = (req, res, next) => {
  FoodBind.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};
