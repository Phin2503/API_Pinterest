const express = require("express");
const homeRoute = express.Router();
const { checkToken, verifyToken } = require("../utils/jwt");
const { getImages, getImagesName } = require("../controllers/homeControllers");

homeRoute.get("/getImages", verifyToken, getImages);
homeRoute.get("/getImagesName", verifyToken, getImagesName);

module.exports = homeRoute;
