const crypto = require('crypto');

module.exports = {
  'users-permissions': {
    config: {
      jwtSecret: crypto.randomBytes(32).toString('hex')
    }
  }
};