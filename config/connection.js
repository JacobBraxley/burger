// Set up MySQL connection.
const mysql = require("mysql");

const { Client } = require('pg');

const connection = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

// connection.connect();
// const connection = mysql.createConnection({
//   host: process.env.HOSTNAME || "ec2-50-19-114-27.compute-1.amazonaws.com",
//   port: process.env.PORT || 5432,
//   user: "rfyskftunwmnja",
//   password: "a3aad821d7ebb07162b99f3ebdce3d9c588027a39cf1788581a543875c026b3a",
//   database: "d1ihk90kca33c1"
// });

// Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Export connection for our ORM to use.
module.exports = connection;