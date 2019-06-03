// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "192.168.99.103",
  port: 3306,
  user: "root",
  password: "docker",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;