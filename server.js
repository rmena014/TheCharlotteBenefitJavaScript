const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
  host: "capstone-database.cqwpxjxkqcuo.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Richjenn014",
  database: "capstone",
});

app.post("/api/signup", (req, res) => {
  const { name, email, password, role } = req.body;
  // Insert the data into the Users table
  connection.query(
    "INSERT INTO Users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, password, role],
    (error, results) => {
      if (error) throw error;
      if (results.affectedRows > 0) {
        res.json({ message: "Sign up successful" });
      } else {
        res.status(400).json({ message: "Sign up failed" });
      }
    }
  );
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  const sql = "INSERT INTO ContactForm (name, email, message) VALUES (?,?,?)";
  connection.query(sql, [name, email, message], (err, results) => {
    if (err) {
      return res.send(err);
    }
    return res.send("Form submitted successfully");
  });
});

app.get("/api/users/:email", (req, res) => {
  const email = req.params.email;
  const query = `SELECT name, email, role  FROM Users WHERE email = '${email}'`;
  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error });
    }
    res.json(results);
  });
});

app.get("/api/users", (req, res) => {
  connection.query(
    "SELECT user_id, email, role FROM Users",
    (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        res.json(results);
      } else {
        res.status(404).json({ message: "No users found" });
      }
    }
  );
});

app.post("/api/login", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  connection.query(
    "SELECT * FROM Users WHERE email = ?",
    [email],
    (error, results) => {
      if (error) {
        console.log(error);
        throw error;
      }
      if (results.length > 0) {
        const user = results[0];
        if (user.password === password) {
          // Log the user in
          res.json({ message: "Log in successful" });
        } else {
          res.status(401).json({ message: "Invalid email or password" });
        }
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    }
  );
});

app.get("/api/courses", (req, res) => {
  let query = "SELECT * FROM Courses";
  if (req.query.name) {
    query += ` WHERE name LIKE '%${req.query.name}%'`;
  }
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json(results);
  });
});

app.get("/api/training-materials", (req, res) => {
  let query = "SELECT * FROM Training_Materials";
  let type = req.query.type;

  if (type) {
    query += " WHERE type = ?";
  }
  connection.query(query, [type], (err, results) => {
    if (err) {
      console.error("Error retrieving data from database: " + err.stack);
      return res.status(500).send({
        error: "Error retrieving data from database",
      });
    }
    res.send(results);
  });
});

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
