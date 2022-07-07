const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/connect");
const User = require("./User");

const Books = sequelize.define(
  "Books",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING,
      references: {
        model: User,
        key: "username",
      },
    },
  },
  { timestamps: false }
);

module.exports = Books;
