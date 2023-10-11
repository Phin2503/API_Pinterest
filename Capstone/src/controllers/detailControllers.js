const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const model = initModel(sequelize);
const { successCode, failCode, errorCode } = require("../config/response");
const { Model } = require("sequelize");

const getComments = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await model.image.findAll({
      where: {
        image_id: id,
      },
      include: ["comments"],
    });
    if (data) {
      successCode(res, data, "Lay comments anh thanh cong");
    } else {
      failCode(res, data, "lay comments anh that bai");
    }
  } catch (err) {
    errorCode(res, "loi backend");
  }
};

const getImagesAndUser = async (req, res) => {
  let { id } = req.params;
  let data = await model.image.findOne({
    where: {
      user_id: id,
    },
    include: ["user"],
  });
  if (data) {
    successCode(res, data, "Thanh cong");
  } else {
    failCode(res, data, "That bai");
  }
};

const CheckSave = async (req, res) => {
  // try {
  let { id } = req.params;
  let data = await model.save_image.findOne({
    where: {
      image_id: id,
    },
  });
  if (data) {
    successCode(res, data, "Hinh nay da duoc luu");
  } else {
    failCode(res, data, "Hinh nay chua duoc luu");
  }
  // } catch (err) {
  //   errorCode(res, "loi backend");
  // }
};

module.exports = {
  getComments,
  getImagesAndUser,
  CheckSave,
};
