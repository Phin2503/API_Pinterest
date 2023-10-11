const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const model = initModel(sequelize);
const { successCode, failCode, errorCode } = require("../config/response");

const getUsers = async (req, res) => {
  try {
    let data = await model.users.findAll({});
    if (data) {
      successCode(res, data, "lay thong tin users thanh cong");
    } else {
      failCode(res, data, "Lay thong tin users that bai");
    }
  } catch (err) {
    errorCode(res, "loi backend");
  }
};

const listIMGOfUser = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await model.save_image.findAll({
      where: {
        user_id: id,
      },
      include: ["image"],
    });
    if (data) {
      successCode(res, data, "Lay danh sach anh da luu cua user thanh cong");
    } else {
      failCode(res, data, "lay danh sach anh da luu cua user that bai");
    }
  } catch (err) {
    errorCode(res, "lỗi backend");
  }
};

const listIMGCreated = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await model.image.findAll({
      where: {
        user_id: id,
      },
    });
    if (data) {
      successCode(res, data, "lay danh sach anh da tao thanh cong");
    } else {
      failCode(res, data, "lay danh sach anh da tao that bai");
    }
  } catch (err) {
    errorCode(res, "lỗi backend");
  }
};

const deleteImg = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await model.image.destroy({
      where: {
        image_id: id,
      },
    });
    if (data) {
      successCode(res, "Xoa anh thanh cong");
    } else {
      failCode(res, data, "xoa anh that bai");
    }
  } catch (err) {
    errorCode(res, "lỗi backend");
  }
};

module.exports = {
  getUsers,
  listIMGOfUser,
  listIMGCreated,
  deleteImg,
};
