const express = require("express");
const updateUsersRoute = express.Router();
const { updateUser } = require("../controllers/updateUsersControllers");
const { verifyToken } = require("../utils/jwt");

updateUsersRoute.put("/updateUsers",verifyToken, updateUser);

module.exports = updateUsersRoute;
