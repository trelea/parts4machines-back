export default {
  routes: [
    {
      method: 'PUT',
      path: '/seed-transmission',
      handler: 'seed-transmission.seedTransmission',
      config: {
        policies: [],
        middlewares: [],
      },
    }
  ],
};
