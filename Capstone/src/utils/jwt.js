const jwt = require("jsonwebtoken");
const { Model } = require("sequelize");

// create token
const createToken = (data) => {
  let token = jwt.sign({ data }, "finns", {
    algorithm: "HS256",
    expiresIn: "5m",
  });
  return token;
};

// kiem tra token

const checkToken = (token) => {
  let check = jwt.verify(token, "finns");
  return check;
};

const verifyToken = (req, res, next) => {
  try {
    let { tokencapstone } = req.headers;
    let kiemtraToken = checkToken(tokencapstone);
    if (kiemtraToken) {
      next();
    }
  } catch (err) {
    res.status(401).send("Khong co quyen truy cap");
  }
};
module.exports = {
  createToken,
  verifyToken,
};
