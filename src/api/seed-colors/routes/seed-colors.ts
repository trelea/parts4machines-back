export default {
  routes: [
    {
      method: 'PUT',
      path: '/seed-colors',
      handler: 'seed-colors.seedColors',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
