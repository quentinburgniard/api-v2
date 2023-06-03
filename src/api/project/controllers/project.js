'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::project.project', ({ strapi }) =>  ({
  async findOneBySlug(context) {
    const results = await strapi.service('api::project.project').findOneBySlug(context.params.locale, context.params.slug);
    const sanitizedResults = await this.sanitizeOutput(results, context);
    return this.transformResponse(sanitizedResults);
  }
}));
