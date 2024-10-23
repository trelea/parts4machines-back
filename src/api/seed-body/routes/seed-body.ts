export default {
  routes: [
    {
      method: 'PUT',
      path: '/seed-body',
      handler: 'seed-body.seedBody',
      config: {
        policies: [],
        middlewares: [],
      },
    },

  ],
};
