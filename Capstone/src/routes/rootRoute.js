const express = require("express");

const rootRoute = express.Router();
const userRoute = require("./userRoute");
const updateUsersRoute = require("./updateUsersRoute");
const homeRoute = require("./homeRoute");
const addImageRoute = require("./addImageRoute");
const managerIMGRoute = require("./managerIMGRoute");
const detailRoute = require("./detailRoute");

rootRoute.use("/user", userRoute);
rootRoute.use("/home", homeRoute);
rootRoute.use("/detail", detailRoute);
rootRoute.use("/managerIMG", managerIMGRoute);
rootRoute.use("/addImage", addImageRoute);
rootRoute.use("/updateUsers", updateUsersRoute);
module.exports = rootRoute;
