'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::project.project', {
  config: {
    find: {
      policies: [
        'global::published'
      ]
    }
  },
  only: ['find']
});