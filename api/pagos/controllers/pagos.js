"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
const Stripe = require("stripe");

const stripe = Stripe(
  "sk_test_51HwB4jKXeIkpjAJjKNf3bEAbMSsuynQXX0UY1j7yz8NP1F2rKxU3niZEqzRPM2nRmNmjgpKI3d9fJCRxGaxdS9RS00TVScOJrU"
);

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const create = async (ctx) => {
  //   let entity;
  //   if (ctx.is("multipart")) {
  //     const { data, files } = parseMultipartData(ctx);
  //     entity = await strapi.services.restaurant.create(data, { files });
  //   } else {
  //     entity = await strapi.services.restaurant.create(ctx.request.body);
  //   }
  //   return sanitizeEntity(entity, { model: strapi.models.restaurant });

  console.log("create", ctx.request.body);

  const { id, amount } = ctx.request.body;

  const payment = await stripe.paymentIntents.create({
    amount,
    payment_method: id,
    currency: "mxn",
    description: "Gaming KeyBoard",
    confirm: true,
  });

  console.log(payment);

  return sanitizeEntity(
    { message: "Successull" },
    { model: strapi.models.pagos }
  );
};

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  create,
};
