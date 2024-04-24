const express = require("express");
const FoudBindsControllers = require("../controllers/foodBindControllers");

const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, FoudBindsControllers.getAllFoodBind);

router.get("/:id", auth, FoudBindsControllers.getSpecificFoodBind);

router.post("/", auth, FoudBindsControllers.createOneFoodBind);

router.put("/:id", auth, FoudBindsControllers.updateFoodBind);

router.delete("/:id", auth, FoudBindsControllers.deleteFoodBind);

module.exports = router;
