'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const findOneFecha = async(ctx) => 
{
    const { id } = ctx.params;


    const entity = await strapi.services.rutas.findOne({ fecha: id });
    return sanitizeEntity(entity, { model: strapi.models.rutas });
}

module.exports = {
    findOneFecha
};
