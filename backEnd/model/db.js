var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'mysql.eecs.ku.edu',
  user: 'pconnor',
  password: 'eveeN7qu',
  database: 'pconnor'
})

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;