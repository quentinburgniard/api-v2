'use strict';

/**
 * hestia router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hestia.hestia');
