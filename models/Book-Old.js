const { DataTypes } = require('sequelize')
const sequelize = require('../db/connect')
const User = require('./User')

const Books = sequelize.define(
  'Books',
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    author_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    publisher_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // // Polymorph
    // category: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    // Polymorph
    // language: {
    //   type: DataTypes.TEXT,
    //   allowNull: true
    // },
    ISBN: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    // BookDetail
    // displayTitle: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    // series: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // },
    // volume: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true
    // },
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
