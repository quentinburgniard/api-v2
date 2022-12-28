const crypto = require('crypto');

module.exports = {
  apiToken: {
    salt: env('SALT'),
  },
  auth: {
    options: {
      expiresIn: '7d'
    },
    secret: crypto.randomBytes(32).toString('hex'),
  }
};