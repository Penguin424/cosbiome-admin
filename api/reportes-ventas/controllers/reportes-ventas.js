"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const findOneFech = async (ctx) => {
  const { id } = ctx.params;

  const entity = await strapi.services["reportes-ventas"].findOne({
    fecha: id,
  });

  if (entity === null) {
    return sanitizeEntity("nocreado", {
      model: strapi.models["reportes-ventas"],
    });
  } else {
    return sanitizeEntity(entity, { model: strapi.models["reportes-ventas"] });
  }
};

const updateFech = async (ctx) => {
  const { id } = ctx.params;

  const idFinal = await strapi.services["reportes-ventas"].findOne({
    fecha: id,
  });

  let entity;
  if (ctx.is("multipart")) {
    const { data, files } = parseMultipartData(ctx);
    entity = await strapi.services["reportes-ventas"].update(
      { id: idFinal.id },
      data,
      {
        files,
      }
    );
  } else {
    entity = await strapi.services["reportes-ventas"].update(
      { id: idFinal.id },
      ctx.request.body
    );
  }

  return sanitizeEntity(entity, { model: strapi.models["reportes-ventas"] });
};

module.exports = {
  findOneFech,
  updateFech,
};
