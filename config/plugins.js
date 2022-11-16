const crypto = require('crypto');

module.exports = ({ env }) => ({
  'email': {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_TOKEN')
      },
      settings: {
        defaultFrom: 'admin@digitalleman.com',
        defaultReplyTo: 'contact@quentinburgniard.com'
      }
    }
  },
  'upload': {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('DIGITALOCEAN_USER'),
        endpoint: 'https://fra1.digitaloceanspaces.com',
        params: {
          Bucket: 'digitalleman'
        },
        region: 'fra1',
        secretAccessKey: env('DIGITALOCEAN_PASSWORD')
      }
    }
  },
  'users-permissions': {
    config: {
      jwtSecret: crypto.randomBytes(32).toString('hex')
    }
  }
});