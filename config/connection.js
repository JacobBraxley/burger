// Set up MySQL connection.
const mysql = require("mysql");

const { Client } = require('pg');

const connection = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

connection.connect();
module.exports = connection;