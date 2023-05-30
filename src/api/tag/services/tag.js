'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tag.tag', ({ strapi }) =>  ({
  async findOneBySlug(locale, slug, params = {}) {
    return  await strapi.db.query('api::tag.tag').findOne({
      populate: params.populate == '*' ? true : params.populate,
      where: {
        ...params.filters,
        locale: locale,
        slug: slug
      }
    });
  }
}));