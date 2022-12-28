const crypto = require('crypto');

module.exports = {
  apiToken: {
    salt: crypto.randomBytes(32).toString('hex'),
  },
  auth: {
    options: {
      expiresIn: '7d'
    },
    secret: crypto.randomBytes(32).toString('hex'),
  }
};