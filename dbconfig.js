var mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    connectionLimit: 10,
    queueLimit: 100,
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12376539',
    password: 'JqKIXI6gzu',
    port: 3306,
    database: 'sql12376539',
    connectTimeout: 10000,
    waitForConnections: true,
    acquireTimeout: 10000,
    debug: false,
    charset: 'utf8'
  });
}