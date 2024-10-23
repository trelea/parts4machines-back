/**
 * A set of functions called "actions" for `seed-colors`
 */

export default {
  seedColors: async (ctx: any, next: any) => {
    try {
      const data = await strapi.service('api::seed-colors.seed-colors').seedColors()
      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  },

};
