/**
 * A set of functions called "actions" for `seed-body`
 */

export default {
  seedBody: async (ctx: any, next: any) => {
    try {
      const data = await strapi.service('api::seed-body.seed-body').seedBody();
      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  },
};
