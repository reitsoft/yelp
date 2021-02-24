const { DataTypes } = require("sequelize");
const db = require("../db");

const Review = db.define("Review", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  review: {
    type: DataTypes.STRING(500),
    allowNull: false
  }
});

// Review.sync({ force: true });

module.exports = Review;