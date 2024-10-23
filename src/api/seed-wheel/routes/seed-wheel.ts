export default {
  routes: [
    {
      method: 'PUT',
      path: '/seed-wheel',
      handler: 'seed-wheel.seedWheel',
      config: {
        policies: [],
        middlewares: [],
      },
    }
  ],
};
