'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tag.tag', ({ strapi }) =>  ({
  async findOneBySlug(locale, slug, params = {}) {
    return  await strapi.db.query('api::tag.tag').findOne({
      populate: {
        projects: {
          where: {
            publishedAt: {
              $notNull: true
            }
          }
        }
      },
      where: {
        locale: locale,
        slug: slug
      }
    });
  }
}));