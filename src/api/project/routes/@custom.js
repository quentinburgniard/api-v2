'use strict';

module.exports = {
  routes: [
    {
      config: {
        policies: [
          'global::published'
        ]
      },
      handler: 'project.findOneBySlug',
      method: 'GET',
      path: '/projects/:locale/:slug'
    }
  ]
};