//import the packages to use
const express = require("express");
const db = require("./database");

//initialization
const app = express();

//define routes
app.get("/", (request, response) => {
  response.send("Hello, I am using the express.js package");
});

//CRUD operations

//Create - Create / Insert
//Read - Select
//Update - Update
//Delete - Delete
app.get("/createTable", (req, res) => {
  const sql = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`;

  db.query(sql, (error) => {
    if (error) {
      console.error("error creating table", error);
      return res.status(500).send("error creating table");
    }
    res.status(201).send("Table created!");
  });
});

//define port
const port = 3500;

//lauch the server
app.listen(port, () => {
  console.log(`server is running on http://127.0.0.1:${port}`);
});
