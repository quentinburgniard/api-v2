'use strict';

/**
 * paragraph controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::paragraph.paragraph', ({ strapi }) => ({
  async find(ctx) {
    console.log(ctx.query);
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  }
}));