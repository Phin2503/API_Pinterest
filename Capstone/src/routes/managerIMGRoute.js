const express = require("express");
const { Model } = require("sequelize");
const managerIMGRoute = express.Router();
const {
  getUsers,
  listIMGOfUser,
  listIMGCreated,
  deleteImg,
} = require("../controllers/managerIMGControllers");
const { checkToken, verifyToken } = require("../utils/jwt");

managerIMGRoute.get("/getUsers",verifyToken, getUsers);
managerIMGRoute.get("/listIMGOfUser/:id",verifyToken, listIMGOfUser);
managerIMGRoute.get("/listIMGCreated/:id",verifyToken, listIMGCreated);
managerIMGRoute.get("/deleteImg/:id",verifyToken, deleteImg);

module.exports = managerIMGRoute;
