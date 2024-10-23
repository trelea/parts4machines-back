/**
 * A set of functions called "actions" for `seed-fuel`
 */

export default {
  seedFuel: async (ctx: any, next: any) => {
    try {
      const data = await strapi.service('api::seed-fuel.seed-fuel').seedFuel()
      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  },
};
