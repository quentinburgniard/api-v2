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

const streamToString = (stream) => new Promise((resolve, reject) => {
  const chunks = [];
  stream.on('data', (chunk) => chunks.push(chunk));
  stream.on('error', reject);
  stream.on('end', () => resolve(Buffer.concat(chunks)));
});

module.exports = createCoreController('api::asset.asset', ({ strapi }) =>  ({
  async findOneBySlug(context) {
    const results = await strapi.service('api::asset.asset').findOneBySlug(context.params.slug, context.state.user ? context.state.user.id : null);
    const sanitizedResults = await this.sanitizeOutput(results, context);
    return this.transformResponse(sanitizedResults);
  },

  async getContent(context) {
    s3.send(new GetObjectCommand({
      Bucket: 'digitalleman',
      Key: `api/${context.params.slug}`
    }))
    .then((data) => {
      context.type = data.ContentType;
      context.set('cache-control', 'public, max-age=86400');
      context.set('cache-control', 'private, max-age=86400');
      streamToString(data.Body).then((data) => {
        context.body = data;
      });
    });
  }
}));
