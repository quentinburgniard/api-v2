'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::asset.asset', ({ strapi }) =>  ({
  async findOneBySlug(slug, userID) {
    if (userID) {
      return await strapi.db.query('api::asset.asset').findOne({
        where: {
          $or: [
            {
              slug: slug,
              public: true
            },
            {
              slug: slug,
              user: userID
            }
          ]
        }
      });
    } else {
      return await strapi.db.query('api::asset.asset').findOne({
        where: {
          slug: slug,
          public: true
        }
      });
    }
  }
}));