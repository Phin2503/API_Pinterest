var DataTypes = require("sequelize").DataTypes;
var _comments = require("./comments");
var _image = require("./image");
var _save_image = require("./save_image");
var _users = require("./users");

function initModels(sequelize) {
  var comments = _comments(sequelize, DataTypes);
  var image = _image(sequelize, DataTypes);
  var save_image = _save_image(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  comments.belongsTo(image, { as: "image", foreignKey: "image_id"});
  image.hasMany(comments, { as: "comments", foreignKey: "image_id"});
  save_image.belongsTo(image, { as: "image", foreignKey: "image_id"});
  image.hasMany(save_image, { as: "save_images", foreignKey: "image_id"});
  comments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(comments, { as: "comments", foreignKey: "user_id"});
  image.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(image, { as: "images", foreignKey: "user_id"});
  save_image.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(save_image, { as: "save_images", foreignKey: "user_id"});

  return {
    comments,
    image,
    save_image,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
