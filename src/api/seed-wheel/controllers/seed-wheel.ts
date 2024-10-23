/**
 * A set of functions called "actions" for `seed-wheel`
 */

export default {
  seedWheel: async (ctx: any, next: any) => {
    try {
      const data = await strapi.service('api::seed-wheel.seed-wheel').seedWheel()
      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  }
};
