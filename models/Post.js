const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bootcamp_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliver_format: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quality: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    standardsMet: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    repeat: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    overallRating: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    comments: {
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