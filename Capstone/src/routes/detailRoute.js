const express = require("express");
const detailRoute = express.Router();
const {
  getComments,
  getImagesAndUser,
  CheckSave,
} = require("../controllers/detailControllers");
const { verifyToken } = require("../utils/jwt");

detailRoute.get("/getImagesAndUser/:id", getImagesAndUser);
detailRoute.get("/getComments/:id", getComments);
detailRoute.get("/checkSave/:id", CheckSave);
module.exports = detailRoute;
