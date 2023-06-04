'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::asset.asset', {
  config: {
    find: {
      policies: [
        'global::own-content'
      ]
    }
  },
  only: ['find']
});
