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
  /*'upload': {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('DIGITALOCEAN_USER'),
        endpoint: 'fra1.digitaloceanspaces.com/private',
        params: {
          Bucket: 'digitalleman'
        },
        region: 'fra1',
        secretAccessKey: env('DIGITALOCEAN_PASSWORD')
      },
      actionOptions: {
        upload: {
          ACL: 'private'
        },
        uploadStream: {
          ACL: 'private'
        }
      }
    }
  },*/
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
      jwtSecret: env('SECRET')
    }
  }
});