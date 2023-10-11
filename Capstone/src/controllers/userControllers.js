const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const bcrypt = require("bcrypt");
const model = initModel(sequelize);
const { errorCode, failCode, successCode } = require("../config/response");
const { createToken } = require("../utils/jwt");
const login = async (req, res) => {
  // try {
  //truy cap database
  //get user ra đúng với email và password

  //kiểm tra 2 lần : checkemail mới check ra pass

  let { email, password } = req.body;
  if ({ email, password } == null) {
    failCode(res, "Vui long nhap email va password");
  } else {
    let checkUser = await model.users.findOne({
      where: {
        email: email,
      },
    });

    if (checkUser) {
      // kiem tra tiep password
      // pass : chua duoc ma hoa
      // user password da duoc ma hoa
      // let checkPass = bcrypt.compareSync(password, checkUser.password);
 
      if (checkPass) {
        let token = createToken(checkUser);
        successCode(res, token, "login Thanh Cong");
      } else {
        failCode(res, { email, password }, "sai mat khau");
      }
    } else {
      failCode(res, { email, password }, "email khong ton tai");
    }
  }
  // } catch (err) {
  //   errorCode(res, "Loi backend");
  // }
};

const signUp = async (req, res) => {
  try {
    let { full_name, email, password } = req.body;
    let newUser = {
      full_name: full_name,
      email: email,
      password: bcrypt.hashSync(password, 10),
    };
    let checkemail = await model.users.findOne({
      where: {
        email: email,
      },
    });
    if (!checkemail) {
      let data = await model.users.create(newUser);
      // console.log(data);
      if (data) {
        res.status(200).send("tao user thanh cong");
      }
    } else {
      res.status(400).send("email da ton tai");
    }
  } catch (err) {
    res.status(500).send("Loi back end");
  }
};

module.exports = {
  login,
  signUp,
};
