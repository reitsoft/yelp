const { DataTypes } = require("sequelize");
const db = require("../db");

const Restaurant = db.define("Restaurant", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  price_range: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Restaurant.sync({ force: true });

module.exports = Restaurant;