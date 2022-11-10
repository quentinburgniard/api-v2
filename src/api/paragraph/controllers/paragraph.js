'use strict';

/**
 * paragraph controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::paragraph.paragraph', ({ strapi }) => ({
  async find(ctx) {
    //let filters = ctx.query.filters;
    //filters.user = ctx.state.user.id;
    ctx.query.filters.user = ctx.state.user.id;
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },
  async findOne(ctx) {
    const response = await super.findOne(ctx);
    console.log(response);
    return response;
  }
}));