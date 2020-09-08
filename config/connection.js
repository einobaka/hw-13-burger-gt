//**FUNCTIONS, PAGE DONE**//

// MySQL connect
const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "!Q2w3e123",
//   database: "burgers_db"
// });

const connection = mysql.createConnection({
  HOST: "us-cdbr-east-02.cleardb.com",
  USER: "b8797704ed84f6",
  PASSWORD: "6aabdc0e",
  DB: "heroku_b47f60853593882"
});

// DB connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;