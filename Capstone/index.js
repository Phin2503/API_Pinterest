const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const rootRouter = require("./src/routes/rootRoute");

app.use(cors());
app.use(express.json());
app.use(express.static("."));
app.listen(3500);

app.use("/api", rootRouter);
