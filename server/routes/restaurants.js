const express = require("express");
const router = express.Router();
const Restaurants = require("../models/Restaurant");

// Get all restaurants
router.get("/", (req, res) => {
  Restaurants.findAll()
    .then((restaurants) => {
      res.status(200).json({
        data: restaurants,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err,
      });
    });
});

// TODO: replace dummy code
// Add one restaurant
router.get("/add", (req, res) => {
  Restaurants.create({
    name: "KFC",
    location: "Singen",
    price_range: 3,
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

// Get all Blocks
// router.get("/", (req, res) => {
//   Blocks.findAll()
//     .then((blocks) => {
//       res.status(200).json({
//         data: blocks,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.Status(400).json({
//         err
//       });
//     });
// });

// Add one Block
// router.get("/add", (req, res) => {
//   const data = {
//     name: "Vorrichtung 7",
//     description: "Sonstiges",
//   }

//   let {
//     name,
//     description
//   } = data;

//   Blocks.create({
//       name,
//       description
//     })
//     .then(block => {
//       res.status(200).json({
//         data
//       })
//     })
//     .catch(error => {
//       res.status(400).json(error)
//     })
// })

// Update one Block
// router.get("/:id", (req, res) => {
//   Blocks.update({
//       name: "Roboter",
//       description: "Roboter zubehör",
//     }, {
//       returning: true,
//       where: {
//         id: 1
//       }
//     })
//     .then(updatedBlock => {
//       res.status(201).json({
//         data: updatedBlock
//       })
//     })
//     .catch(error => {
//       res.status(400).json(error)
//     })
// })

// Delete one Block
// router.post("/:id/delete", (req, res) => {
//   Blocks.destroy({ where: {id: 5} })
//     .then(res.status(200).json({
//       data: "Deleted"
//     })).catch(error => {
//       res.status(400).json(error)
//     })
// })

module.exports = router;
