const express = require("express");
const userRoute = express.Router();
const { login, signUp } = require("../controllers/userControllers");

userRoute.post("/login", login);
userRoute.post("/signUp", signUp);

module.exports = userRoute;
