const { Model, Op } = require("sequelize");
const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const model = initModel(sequelize);
const { successCode, failCode, errorCode } = require("../config/response");
const getImages = async (req, res) => {
  let data = await model.image.findAll();
  successCode(res, data, "Lay danh sach anh thanh cong");
};

const getImagesName = async (req, res) => {
  try {
    let { name } = req.body;
    let data = await model.image.findAll({
      where: {
        name_img: {
          [Op.like]: `%${name}%`,
        },
      },
    });
    if (data) {
      successCode(res, data, "Danh sach anh theo ten");
    } else {
      failCode(res, { data }, "Anh khong ton tai");
    }
  } catch (err) {
    errorCode(res, "Loi backEnd");
  }
};

module.exports = { getImages, getImagesName };
