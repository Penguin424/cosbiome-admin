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

    const entity = await strapi.services["clientes-soal"].findOne({ nombreCliente: id });
    return sanitizeEntity(entity, { model: strapi.models["clientes-soal"] });
}

const findNumTel = async(ctx) => 
{
    const { id } = ctx.params;

    console.log(id);

    const entity = await strapi.services["clientes-soal"].findOne({ numTelefono1: id });
    return sanitizeEntity(entity, { model: strapi.models["clientes-soal"] });
}

module.exports = {
    findName,
    findNumTel
};
