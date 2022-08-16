const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]
const db = {}

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  )
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    )
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

// Like Associations
db.Author.hasMany(db.Like, {
  foreignKey: 'likeableId',
  constraints: 'false',
  scope: {
    likeableType: 'authors'
  }
})
db.Like.belongsTo(db.Author, {
  foreignKey: 'likeableId',
  constraints: 'false'
})

db.Book.hasMany(db.Like, {
  foreignKey: 'likeableId',
  constraints: 'false',
  scope: {
    likeableType: 'books'
  }
})
db.Like.belongsTo(db.Book, {
  foreignKey: 'likeableId',
  constraints: 'false'
})

db.Category.hasMany(db.Like, {
  foreignKey: 'likeableId',
  constraints: 'false',
  scope: {
    likeableType: 'categories'
  }
})
db.Like.belongsTo(db.Category, {
  foreignKey: 'likeableId',
  constraints: 'false'
})

db.Publisher.hasMany(db.Like, {
  foreignKey: 'likeableId',
  constraints: 'false',
  scope: {
    likeableType: 'publishers'
  }
})
db.Like.belongsTo(db.Publisher, {
  foreignKey: 'likeableId',
  constraints: 'false'
})

db.User.hasMany(db.Like, {
  foreignKey: 'userId',
  constraints: 'false'
})
db.Like.belongsTo(db.User, {
  foreignKey: 'userId',
  constraints: 'false'
})

// Book Associations

db.Category.hasMany(db.Book, {
  foreignKey: 'categoryId',
  constraints: 'false'
})
db.Book.belongsTo(db.Category, {
  foreignKey: 'categoryId',
  constraints: 'false'
})

db.Publisher.hasMany(db.Book, {
  foreignKey: 'publisherId',
  constraints: 'false'
})
db.Book.belongsTo(db.Publisher, {
  foreignKey: 'publisherId',
  constraints: 'false'
})

db.Book.hasMany(db.BookDetail, {
  constraints: false
})
db.BookDetail.belongsTo(db.Book, {
  constraints: false
})

// Author and Book Associations
db.Author.belongsToMany(db.Book, {
  through: 'BookAuthors'
})
db.Book.belongsToMany(db.Author, {
  through: 'BookAuthors'
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
