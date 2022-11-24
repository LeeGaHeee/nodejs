var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'nodejs',
  password: 'gahui0415^',
  database: 'opentutorials'
})
db.connect();

module.exports = db;