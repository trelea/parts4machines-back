/**
 * seed-wheel service
 */

export default () => ({
  async seedWheel() {
    const wheel = [
      // Left
      [
        "Left",
        "Лево",
        "Ліво",
        "Izquierda"
      ],
      // Right
      [
        "Right",
        "Право",
        "Право",
        "Derecha"
      ]
    ].forEach(async ([en, ru, ua, es]) => await strapi.documents('api::wheel.wheel').create({ data: { en, ru, ua, es } }))
  }
});
