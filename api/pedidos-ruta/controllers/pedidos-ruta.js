'use strict';

const { sanitizeEntity } = require('strapi-utils')

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const fechaRepartidor = async(ctx) => 
{
    let entities;
    let { id, fecha } = ctx.params;

    console.log(ctx.query, ctx.params);

    if (ctx.query._q) {
        entities = await strapi.services['pedidos-ruta'].search(ctx.query);
    } else {
        entities = await strapi.services['pedidos-ruta'].find({ repartidor: id,  fecha: fecha});
    }

    return entities.map((entity) =>
        sanitizeEntity(entity, { model: strapi.models['pedidos-ruta'] })
    );
}

module.exports = {
    fechaRepartidor
};
