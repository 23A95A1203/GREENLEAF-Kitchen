require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Create MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// ✅ Connect to Database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("✅ Connected to MySQL Database!");
});

// ✅ GET all meals
app.get("/meals", (req, res) => {
  db.query("SELECT * FROM meal_planner", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// ✅ POST (Add a Meal)
app.post("/meals", (req, res) => {
  const { date, breakfast, lunch, dinner } = req.body;
  db.query(
    "INSERT INTO meal_planner (date, breakfast, lunch, dinner) VALUES (?, ?, ?, ?)",
    [date, breakfast, lunch, dinner],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Meal added successfully!" });
    }
  );
});

// ✅ DELETE (Remove a Meal by ID)
app.delete("/meals/:id", (req, res) => {
  const mealId = req.params.id;
  db.query("DELETE FROM meal_planner WHERE id = ?", [mealId], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Meal deleted successfully!" });
  });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
