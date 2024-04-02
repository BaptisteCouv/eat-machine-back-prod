const express = require("express");
const FoudBindsControllers = require('../controllers/foodBindControllers')

const router = express.Router();

router.get("/", FoudBindsControllers.getAllFoodBind);

router.get("/:id", FoudBindsControllers.getSpecificFoodBind);

router.post("/", FoudBindsControllers.createOneFoodBind);

router.put("/:id", FoudBindsControllers.updateFoodBind);

router.delete("/:id", FoudBindsControllers.deleteFoodBind);



module.exports = router;