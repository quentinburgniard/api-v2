'use strict';

module.exports = {
  routes: [
    {
      handler: 'tag.findOneBySlug',
      method: 'GET',
      path: '/tags/:locale/:slug'
    }
  ]
};