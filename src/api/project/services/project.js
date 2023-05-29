'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project.project', ({ strapi }) =>  ({
  async findOneBySlug(locale, slug, params = {}) {
    return  await strapi.db.query('api::project.project').findOne({
      populate: params.populate == '*' ? true : params.populate,
      where: {
        ...params.filters,
        locale: locale,
        slug: slug
      }
    });
  }
}));
