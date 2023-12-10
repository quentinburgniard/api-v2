'use strict';

const { createCoreController } = require('@strapi/strapi').factories;
const { GetObjectCommand, PutObjectCommand, S3Client } = require('@aws-sdk/client-s3');
const { createReadStream } = require('fs');

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
  async create(context) {
    if (context.request.files && context.request.files.file) {
      await s3.send(new PutObjectCommand({
        Body: createReadStream(context.request.files.file.path),
        Bucket: 'digitalleman',
        ContentType: context.request.files.file.type,
        Key: `api/${context.request.files.file.name}`
      }));

      const body = {
        data: {
          description: context.request.body.description || null,
          locale: context.request.body.locale || null,
          public: context.request.body.public == 'true' ? true : false,
          slug: context.request.files.file.name,
          user: ctx.state.user ? ctx.state.user.id : null
        }
      };
      const sanitizedInputData = await this.sanitizeInput(body.data, context);
      const entity = await strapi.entityService.create('api::asset.asset', {
        data: sanitizedInputData,
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, context);
      return this.transformResponse(sanitizedEntity);
    }
  },
  
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
  },

  async update(context) {
    const body = {
      data: {
        description: context.request.body.description || null,
        locale: context.request.body.locale || null,
        public: context.request.body.public ? context.request.body.public == 'true' ? true : false : null
      }
    };
    const sanitizedInputData = await this.sanitizeInput(body.data, context);
    const entity = await strapi.entityService.update('api::asset.asset', context.params.id, {
      data: sanitizedInputData,
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, context);

    console.log(context.state);

    if (sanitizedEntity && context.request.files && context.request.files.file) {
      await s3.send(new PutObjectCommand({
        Body: createReadStream(context.request.files.file.path),
        Bucket: 'digitalleman',
        ContentType: context.request.files.file.type,
        Key: `api/${sanitizedEntity.slug}`
      }));
    }

    return this.transformResponse(sanitizedEntity);
  }
}));
