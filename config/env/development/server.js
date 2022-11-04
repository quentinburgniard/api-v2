const crypto = require('crypto');

module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: 1337,
  app: {
    keys: [
      crypto.randomBytes(32).toString('hex'),
      crypto.randomBytes(32).toString('hex'),
      crypto.randomBytes(32).toString('hex'),
      crypto.randomBytes(32).toString('hex')
    ]
  },
});
