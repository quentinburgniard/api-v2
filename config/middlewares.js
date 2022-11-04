module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  {
    name: 'strapi::poweredBy',
    config: {
      poweredBy: 'Digital Leman <digitalleman.com>'
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public'
];