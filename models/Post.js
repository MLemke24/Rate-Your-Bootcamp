const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bootcampName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliverFormat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    repeat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    overallRating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    review_comments: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
