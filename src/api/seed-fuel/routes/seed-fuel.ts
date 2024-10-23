export default {
  routes: [
    {
      method: 'PUT',
      path: '/seed-fuel',
      handler: 'seed-fuel.seedFuel',
      config: {
        policies: [],
        middlewares: [],
      },
    }
  ],
};
