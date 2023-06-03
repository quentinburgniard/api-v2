'use strict';

module.exports = {
  routes: [
    {
      handler: 'asset.findOneBySlug',
      method: 'GET',
      path: '/assets/info/:slug'
    },
    {
      handler: 'asset.getContent',
      method: 'GET',
      path: '/assets/:slug'
    }
  ]
};