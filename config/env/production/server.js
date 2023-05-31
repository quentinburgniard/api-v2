const crypto = require('crypto');

module.exports = {
  app: {
    keys: [
      crypto.randomBytes(32).toString('hex'),
      crypto.randomBytes(32).toString('hex'),
      crypto.randomBytes(32).toString('hex'),
      crypto.randomBytes(32).toString('hex')
    ]
  },
  host: '0.0.0.0',
  port: 80,
  proxy: true,
  url: 'https://api.digitalleman.com'
};