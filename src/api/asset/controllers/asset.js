'use strict';

const { createCoreController } = require('@strapi/strapi').factories;
const { GetObjectCommand, S3Client } = require('@aws-sdk/client-s3');

const s3 = new S3Client({
  forcePathStyle: false,
  endpoint: 'https://fra1.digitaloceanspaces.com',
  region: 'fra1',
  credentials: {
    accessKeyId: process.env.DIGITALOCEAN_USER,
    secretAccessKey: process.env.DIGITALOCEAN_PASSWORD
  }
});

module.exports = createCoreController('api::asset.asset', ({ strapi }) =>  ({
  async findOneBySlug(context) {
    const results = await strapi.service('api::asset.asset').findOneBySlug(context.params.slug, context.state.user ? context.state.user.id : null);
    const sanitizedResults = await this.sanitizeOutput(results, context);
    return this.transformResponse(sanitizedResults);
  },

  async getContent(context) {
    const results = await strapi.service('api::asset.asset').findOneBySlug(context.params.slug, context.state.user ? context.state.user.id : null);
    console.log(results);
    if (results) {
      const response = await s3.send(new GetObjectCommand({
        Bucket: 'digitalleman',
        Key: `api/${context.params.slug}`
      }));
      context.body = Buffer.concat(await response.Body.toArray());
      context.status = 200;
      context.type = response.ContentType;
      context.set('cache-control', `${results.public ? 'public': 'private'}, max-age=604800`);
    }
  }
}));
