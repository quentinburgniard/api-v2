'use strict';

/**
 * paragraph controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::paragraph.paragraph', ({ strapi }) => ({
  async create(ctx) {
    if (ctx.state.user) {
      ctx.request.body.data.user = ctx.state.user.id;
      const response = await super.create(ctx);
      return response;
    }
  },
  async find(ctx) {
    if (ctx.state.user) {
      let filters = ctx.query.filters || {};
      filters.user = ctx.state.user.id;
      ctx.query.filters = filters;
      const { data, meta } = await super.find(ctx);
      return { data, meta };
    }
  },
  async findOne(ctx) {
    const response = await super.findOne(ctx);
    console.log(response);
    return response;
  }
}));