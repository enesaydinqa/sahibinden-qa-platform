var mysql = require('mysql');

var db_config = {
  connectionLimit: 10,
  queueLimit: 100,
  host: '93.89.225.190',
  user: 'rmstestk_shbdn1',
  password: 'Sahibindenqa123',
  port: 3306,
  database: 'rmstestk_shbdn1',
  connectTimeout: 10000,
  waitForConnections: true,
  acquireTimeout: 10000,
  debug: false,
  charset: 'utf8'
};

var sqlConnection = function sqlConnection(sql, values, next) {

  if (arguments.length === 2) {
    next = values;
    values = null;
  }

  var connection = mysql.createConnection(db_config);

  connection.connect(function (err) {
    if (err !== null) {
      console.log("[MYSQL] Error connecting to mysql:" + err + '\n');
    }
  });

  connection.query(sql, values, function (err) {

    connection.end();

    if (err) {
      throw err;
    }

    next.apply(this, arguments);
  });
}

module.exports = sqlConnection;