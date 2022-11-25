'use strict';

/**
 * hestia service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hestia.hestia');
