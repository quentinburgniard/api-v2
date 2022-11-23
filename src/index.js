'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  register({ strapi }) {
    strapi.contentType('plugin::upload.file').attributes.user = {
      type: 'relation',
      relation: 'oneToOne',
      target: 'plugin::users-permissions.user'
    }
  },
  bootstrap({ strapi }) {},
};
