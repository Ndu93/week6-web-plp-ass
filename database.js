// step 1: import package
const mysql = require("mysql2");

// create the connection
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Ndubueze@23",
  database: "node_crud",
});

//connect to the database
db.connect((error) => {
  if (error) {
    console.log("there was an error connecting to db: ", error.stack);
    return;
  }

  console.log("Successfully connected to db ");
});

//export the db connection
module.exports = db;
