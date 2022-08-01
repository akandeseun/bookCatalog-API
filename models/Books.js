const { DataTypes } = require('sequelize')
const sequelize = require('../db/connect')
const User = require('./User')

const Books = sequelize.define(
  'Books',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    language: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ISBN: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true
    },
    series: {
      type: DataTypes.STRING,
      allowNull: true
    },
    volume: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    publisher: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdBy: {
      type: DataTypes.STRING,
      references: {
        model: User,
        key: 'username'
      }
    }
  },
  { timestamps: false }
)

module.exports = Books
