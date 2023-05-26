'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/projects/:locale/:slug',
      handler: 'project.findOneBySlug'
    }
  ]
};