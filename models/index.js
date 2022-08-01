const sequelize = require('../db/connect')
// eslint-disable-next-line no-unused-vars
const User = require('./User')
// eslint-disable-next-line no-unused-vars
const Books = require('./Books')

const synch = async () => {
  try {
    // eslint-disable-next-line no-unused-vars
    const result = await sequelize.sync({
      logging: false,
      alter: true
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = synch
