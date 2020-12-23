"use strict";

const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const findClientVend = async (ctx) => {
  const { id } = ctx.params;

  const entity = await strapi.services["clientes-amarcar"].findOne({
    vendedor: id,
  });

  if (entity === null) {
    return sanitizeEntity("nocreado", {
      model: strapi.models["clientes-amarcar"],
    });
  } else {
    return sanitizeEntity(entity, { model: strapi.models["clientes-amarcar"] });
  }
};

module.exports = {
  findClientVend,
};
