const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const model = initModel(sequelize);
const { successCode, failCode, errorCode } = require("../config/response");

const addImg = async (req, res) => {
  let { name_img, path, desc, user_id } = req.body;
  if ({ name_img, path } == null) {
    failCode(res, "vui long nhap ten va duong dan");
  }

  let checkIMG = await model.image.findOne({
    where: {
      name_img: name_img,
      path: path,
    },
  });

  if (!checkIMG) {
    let data = model.image.create({
      name_img: name_img,
      path: path,
      desc: desc,
      user_id: user_id,
    });
    if (data) {
      successCode(res, data, "them anh thanh cong");
    } else {
      failCode(res, data, "them anh that bai");
    }
  } else {
    console.log(checkIMG);
    failCode(res, "anh da ton tai");
  }
};

module.exports = {
  addImg,
};
