module.exports = ({ env }) => ({
  apiToken: {
    salt: env('SALT'),
  },
  auth: {
    options: {
      expiresIn: '7d'
    },
    secret: env('SECRET')
  }
});