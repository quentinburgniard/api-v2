'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::event.event', ({ strapi }) => ({
  async create(ctx) {
    if (ctx.state.user) {
      ctx.request.body.data.user = ctx.state.user.id;
      const response = await super.create(ctx);
      return response;
    }
  },
  async find(ctx) {
    console.log(ctx.state.user);
    if (ctx.state.user) {
      let filters = ctx.query.filters || {};
      filters.user = ctx.state.user.id;
      ctx.query.filters = filters;
      const { data, meta } = await super.find(ctx);
      return { data, meta };
    }
  }
}));