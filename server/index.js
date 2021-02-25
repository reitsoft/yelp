require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const { Restaurants } = require("./routes");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

// REST API
app.use("/restaurants", Restaurants);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
