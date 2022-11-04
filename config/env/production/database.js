const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      database: 'api',
      host: 'api-v2-data',
      password: env('MYSQL_PASSWORD'),
      timezone: 'Europe/Berlin',
      user: env('MYSQL_USER')
    }
  }
});