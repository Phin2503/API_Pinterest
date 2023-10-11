const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const bcrypt = require("bcrypt");
const model = initModel(sequelize);
const { successCode, failCode, errorCode } = require("../config/response");
const { where } = require("sequelize");

const updateUser = async (req, res) => {
  let { email, password, full_name, age, avatar } = req.body;
  let checkUser = await model.users.findOne({
    where: {
      email: email,
    },
  });
  if (!checkUser) {
    failCode(res, "tai khoan khong ton tai");
  } else {
    let update = await model.users.update(
      {
        email: email,
        password: bcrypt.hashSync(password, 10),
        full_name: full_name,
        age: age,
        avatar: avatar,
      },
      {
        where: {
          email: email,
        },
      }
    );
    if (update) { 
      successCode(res, update, "update user thanh cong");
    } else {
      failCode(res, "update user that bai");
    }
  }
};

module.exports = { updateUser };
