'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::event.event', ({ strapi }) => ({
  async create(ctx) {
    if (ctx.state.user) {
      ctx.request.body.data.user = ctx.state.user.id;
      const response = await super.create(ctx);
      return response;
    }
  }
}));