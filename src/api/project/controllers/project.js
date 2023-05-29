'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::project.project', ({ strapi }) =>  ({
  async findOneBySlug(ctx) {
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);
    const results = await strapi.service('api::project.project').findOneBySlug(ctx.params.locale, ctx.params.slug, sanitizedQueryParams);
    const sanitizedResults = await this.sanitizeOutput(results, ctx);
    return this.transformResponse(sanitizedResults);
  }
}));
