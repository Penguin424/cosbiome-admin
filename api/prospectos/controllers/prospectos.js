"use strict";

const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const findForVendedor = async (ctx) => {
  let entities;
  let { id } = ctx.params;

  if (ctx.query._q) {
    entities = await strapi.services.prospectos.search(ctx.query);
  } else {
    entities = await strapi.services.prospectos.find({ en: id });
  }

  return entities.map((entity) =>
    sanitizeEntity(entity, { model: strapi.models.prospectos })
  );
};

module.exports = {
  findForVendedor,
};
