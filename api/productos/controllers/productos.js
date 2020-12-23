'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const findName = async(ctx) => 
{
    const { id } = ctx.params;

    console.log(id);

    const entity = await strapi.services["productos"].findOne({ nombreProducto: id });

    console.log(entity);
    return sanitizeEntity(entity, { model: strapi.models["productos"] });
}

module.exports = {
    findName,
};
