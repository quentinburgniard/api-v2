'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project.project', ({ strapi }) =>  ({
  async findOneBySlug(locale, slug, params = {}) {
    return  await strapi.db.query('api::project.project').findOne({
      populate: {
        images: true,
        relatedProjects: {
          where: {
            publishedAt: {
              $notNull: true
            }
          }
        },
        tags: true
      },
      where: {
        locale: locale,
        slug: slug
      }
    });
  }
}));
