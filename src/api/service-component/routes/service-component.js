'use strict';

/**
 * service-component router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::service-component.service-component');
