'use strict';

/**
 * function controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::function.function', ({ strapi }) => ({
  async create(ctx) {
    /*if (ctx.state.user) {
      ctx.request.body.data.user = ctx.state.user.id;*/
      const response = await strapi.service('api::function.function').screenshot(ctx.request.body.data.parameters);
      await super.create(ctx);
      return response;
    //}
  }
}));