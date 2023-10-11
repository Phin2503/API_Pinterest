const express = require("express");
const addImageRoute = express.Router();
const { addImg } = require("../controllers/addImageControllers");
const { verifyToken } = require("../utils/jwt");
addImageRoute.post("/addImg",verifyToken, addImg);

module.exports = addImageRoute;
