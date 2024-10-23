export default {
  routes: [
    {
      method: 'PUT',
      path: '/seed-traction',
      handler: 'seed-traction.seedTraction',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
