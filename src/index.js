'use strict';

module.exports = {
  bootstrap({ strapi }) {
  },
  register({ strapi }) {
    /*const contentType = strapi.contentType('plugin::upload.file');
    contentType.attributes = {
      ...contentType.attributes,
      user: {
        relation: 'oneToOne',
        target: 'plugin::users-permissions.user',
        type: 'relation'
      }
    }*/
  }
};