'use strict';

module.exports = {
  bootstrap({ strapi }) {
  },
  register({ strapi }) {
    strapi.contentType('plugin::upload.file').attributes.user = {
      user: {
        relation: 'oneToOne',
        target: 'plugin::users-permissions.user',
        type: 'relation'
      }
    }
  }
};