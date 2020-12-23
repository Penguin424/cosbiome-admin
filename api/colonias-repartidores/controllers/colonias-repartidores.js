'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const findOneColonia = async (ctx) => 
{
    const { id } = ctx.params;

    console.log(id);

    const entity = await strapi.services["colonias-repartidores"].findOne({ colonia: id });

    if(entity === null)
    {
        return sanitizeEntity({empty: true}, { model: strapi.models["colonias-repartidores"] });
    }
    else
    {
        return sanitizeEntity(entity, { model: strapi.models["colonias-repartidores"] });
    }

}

module.exports = {
    findOneColonia,
};
