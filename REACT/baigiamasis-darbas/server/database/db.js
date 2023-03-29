const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD, 
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT
});

connection.connect(function(err) {
  console.log(process.env.MYSQL_HOST);
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

module.exports = { query: (sql, values, callback) => connection.query(sql, values, callback) }