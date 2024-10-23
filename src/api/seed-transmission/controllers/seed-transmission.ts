/**
 * A set of functions called "actions" for `seed-transmission`
 */

export default {
  seedTransmission: async (ctx: any, next: any) => {
    try {
      const data = await strapi.service('api::seed-transmission.seed-transmission').seedTransmission()
      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  },
};
