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
<<<<<<< HEAD
    quality: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    standardsMet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
=======
>>>>>>> 36c6614b6b3a996495e5553da8d844b37fd27b7c
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
