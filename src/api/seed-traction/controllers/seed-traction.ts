/**
 * A set of functions called "actions" for `seed-traction`
 */

export default {
  seedTraction: async (ctx: any, next: any) => {
    try {
      const data = await strapi.service('api::seed-traction.seed-traction').seedTraction()
      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  },
};
