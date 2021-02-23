require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

// REST API
// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query(
      `
        SELECT * FROM restaurants LEFT JOIN (
          SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) 
          AS avg_rating FROM reviews GROUP BY restaurant_id
        ) reviews ON restaurants.id = reviews.restaurant_id;
      `
    );
    res.status(200).json({
      status: "OK - Get all restaurants",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "FAIL - Get all restaurants",
    });
  }
});

// get one restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const restaurant = await db.query(
      `
        SELECT * FROM restaurants LEFT JOIN (
          SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) 
          AS avg_rating FROM reviews GROUP BY restaurant_id
        ) reviews ON restaurants.id = reviews.restaurant_id WHERE id = $1;
      `,
      [req.params.id]
    );

    const reviews = await db.query(
      "SELECT * FROM reviews WHERE restaurant_id = $1",
      [req.params.id]
    );

    res.status(200).json({
      status: "OK - Get one restaurant",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "FAIL - Get one restaurant",
    });
  }
});

// create restaurant
app.post("/api/v1/restaurants/", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO restaurants(name, location, price_range, active) VALUES($1, $2, $3, $4) returning *",
      [req.body.name, req.body.location, req.body.price_range, req.body.active]
    );
    res.status(201).json({
      status: "OK - Insert one restaurant",
      results: results.rows.length,
      data: {
        restaurants: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "FAIL - Insert one restaurant",
    });
  }
});

// Update restaurants
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3, active = $4 WHERE id = $5 returning *",
      [
        req.body.name,
        req.body.location,
        req.body.price_range,
        req.body.active,
        req.params.id,
      ]
    );
    res.status(200).json({
      status: "OK - Update one restaurant",
      results: results.rows.length,
      data: {
        restaurants: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "FAIL - Update one restaurant",
    });
  }
});

// Delete restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    await db.query("DELETE FROM restaurants WHERE id = $1", [req.params.id]);
    res.status(204).json({
      status: "OK - Delete one restaurant",
    });
  } catch (err) {
    res.status(400).json({
      status: "FAIL - Delete one restaurant",
      err,
    });
  }
});

// Add a Review
app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
  try {
    const newReview = await db.query(
      "INSERT INTO reviews(restaurant_id, name, rating, review) values($1, $2, $3, $4) returning *",
      [req.params.id, req.body.name, req.body.rating, req.body.review]
    );
    res.status(201).json({
      status: "OK - Insert one review",
      results: newReview.rows.length,
      data: {
        review: newReview.rows[0],
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "FAIL - Insert one review",
      error,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
