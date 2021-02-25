const express = require("express");
const router = express.Router();
const Restaurants = require("../models/Restaurant");

// Get all restaurants
router.get("/", (req, res) => {
  Restaurants.findAll()
    .then((restaurants) => {
      res.status(200).json({
        data: {restaurants},
      });
    })
    .catch((err) => {
      res.status(400).json({
        err,
      });
    });
});

// (
//   `
//     SELECT * FROM restaurants LEFT JOIN (
//       SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) 
//       AS avg_rating FROM reviews GROUP BY restaurant_id
//     ) reviews ON restaurants.id = reviews.restaurant_id WHERE id = $1;
//   `,
//   [req.params.id]
// )

// Get one restaurant by id
router.get("/:id", (req, res) => {
  Restaurants.findByPk(req.params.id)
    .then((restaurant) => {
      res.status(200).json({
        data: restaurant,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err,
      });
    });
});

// Add one restaurant
router.post("/", (req, res) => {
  let { name, location, price_range } = req.body;
  Restaurants.create({
    name,
    location,
    price_range,
  })
    .then((restaurant) => {
      res.status(200).json({
        data: restaurant,
      });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

// Update one restaurant
router.put("/:id", (req, res) => {
  let { name, location, price_range } = req.body;
  Restaurants.update(
    {
      name,
      location,
      price_range,
    },
    {
      where: { id: req.params.id },
      returning: true,
    }
  )
    .then((restaurant) => {
      res.status(200).json({
        data: restaurant,
      });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

//Delete one restaurant
router.delete("/:id", (req, res) => {
  Restaurants.destroy({ where: { id: req.params.id } })
    .then(
      res.status(200).json({
        data: "Deleted",
      })
    )
    .catch((error) => {
      res.status(400).json(error);
    });
});

module.exports = router;
