const crypto = require('crypto');

module.exports = {
  apiToken: {
    salt: env('SALT'),
  },
  auth: {
    options: {
      expiresIn: '7d'
    },
    secret: env('SECRET')
  }
};