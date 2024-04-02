const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const mealsRoutes = require("./routes/listMealRoutes");
const foodStockNutritionalValueRoutes = require("./routes/foodStockNutritionalValueRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const foodBindRoutes = require("./routes/foodBindRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connexion à la base de données");
  })
  .catch((error) => {
    console.error("Erreur de connexion à la base de données:", error);
  });

app.use("/api/meals", mealsRoutes);
app.use("/api/foodsNutritional", foodStockNutritionalValueRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/foodBind", foodBindRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(" -------------------- API running ! -------------------- ")
);
