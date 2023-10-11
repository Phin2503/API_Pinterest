const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("Capstone", `root`, `1234`, {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
});
try {
  sequelize.authenticate();
  console.log("thanhcong");
} catch {
  console.log("That bai");
}

module.exports = sequelize;
