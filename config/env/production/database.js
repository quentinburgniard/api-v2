const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      database: 'api',
      host: 'db',
      password: env('MYSQL_PASSWORD'),
      timezone: 'Europe/Berlin',
      user: env('MYSQL_USER')
    }
  }
});