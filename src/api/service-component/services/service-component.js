'use strict';

/**
 * service-component service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-component.service-component');
