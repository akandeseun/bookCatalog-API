const sequelize = require("../db/connect");
const User = require("./User");
const Books = require("./Books");

const synch = async () => {
  try {
    const result = await sequelize.sync({ logging: false });
  } catch (error) {
    console.log(error);
  }
};

module.exports = synch;
