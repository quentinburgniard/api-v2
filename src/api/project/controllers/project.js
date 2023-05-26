'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::project.project', ({ strapi }) =>  ({
  async findOneBySlug(ctx) {
    let data = await strapi.db.query('api::project.project').findOne({
      //select: ['title', 'description'],
      where: {
        locale: ctx.params.locale,
        //publishedAt: { $notNull: true },
        slug: ctx.params.slug
      }
      //populate: true,
    });
    if (data) {
      let id = data.id;
      delete data.id;
      return {
        data: {
          id: id,
          attributes: data
        },
        meta: {}
      }
    }
  }
}));
