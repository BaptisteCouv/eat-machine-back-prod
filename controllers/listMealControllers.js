const Meals = require("../models/mealModel");

// Display all meal
exports.getAllMeals = async (req, res, next) => {
  Meals.find()
    .then(async (contracts) => {
      console.log('-----------------');
      console.log(contracts);
      var dateActuelle = new Date();

      var anneeActuelle = dateActuelle.getFullYear();
      var moisActuel = dateActuelle.getMonth();
      var jourActuel = dateActuelle.getDate();

      await contracts.forEach(async (element) => {
        if (element.dateSelect != null || element.recurrence) {
          if (!element.recurrence) {
            var anneeAComparer = element.dateSelect.getFullYear();
            var moisAComparer = element.dateSelect.getMonth();
            var jourAComparer = element.dateSelect.getDate();

            if (
              anneeAComparer === anneeActuelle &&
              moisAComparer === moisActuel &&
              jourAComparer === jourActuel
            ) {
              element.isActive = true;
              await this.changeActiveMeal(element._id, true);
            } else if (element.dateSelect > dateActuelle) {
              element.isActive = false;
              await this.changeActiveMeal(element._id, false);
            } else {
              element.isActive = false;
              await this.changeActiveMeal(element._id, false);
            }
          } else {
            element.isActive = true;
          }
        } else {
          element.isActive = false;
        }
      });
      return res.status(200).json(contracts);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Create one meal
exports.createMeal = (req, res, next) => {
  delete req.body._id;
  const thing = new Meals({
    ...req.body,
  });
  thing
    .save()
    .then(() => {
      res.status(201).json({
        message: "Contrat et paidAcquired correctement enregistrés !",
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ error });
    });
};

// Display One ---- NAME ---- Meal
exports.getOneMealName = (req, res, next) => {
  const ids = req.params.id;

  if (!ids) {
    return res.status(400).json({ message: "Aucun ID spécifié." });
  }

  const idArray = Array.isArray(ids) ? ids : [ids];

  Meals.findOne({ _id: { $in: idArray } })
    .then((contracts) => {
      if (contracts.length === 0) {
        return res.status(404).json({ message: "Meal name found." });
      }
      res.status(200).json(contracts.name);
    })
    .catch((error) => res.status(400).json({ error }));
};

// get all meal activate
exports.getAllMealActivate = (req, res, next) => {
  const ids = req.params.id;

  if (!ids) {
    return res.status(400).json({ message: "Aucun ID spécifié." });
  }

  const idArray = Array.isArray(ids) ? ids : [ids];

  Meals.findOne({ _id: { $in: idArray } })
    .then((contracts) => {
      if (contracts.length === 0) {
        return res.status(404).json({ message: "Meal name found." });
      }
      res.status(200).json(contracts.name);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Change if is activate meal or not
exports.changeActiveMeal = async (id, isActive) => {
  await Meals.updateOne({ _id: id }, { $set: { isActive: isActive } });
};

// Actualiser one FoodBind
exports.updateMealBind = (req, res, next) => {
  Meals.updateOne({ _id: req.params.id }, { $set: { ...req.body.mealBody } })
    .then(() => {
      res.status(201).json({
        message: "Meals correctement modifié !",
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ error });
    });
};

// delete one Meal
exports.deleteOneMeal = (req, res, next) => {
  Meals.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};
