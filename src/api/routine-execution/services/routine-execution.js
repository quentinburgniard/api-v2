'use strict';

/**
 * routine-execution service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::routine-execution.routine-execution');
