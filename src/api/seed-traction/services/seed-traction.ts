/**
 * seed-traction service
 */

export default () => ({

  async seedTraction() {
    const traction = [
      // Front-Wheel Drive
      [
        "Front-Wheel Drive (FWD)",
        "Передний привод (FWD)",
        "Передній привід (FWD)",
        "Tracción delantera (FWD)"
      ],
      // Rear-Wheel Drive
      [
        "Rear-Wheel Drive (RWD)",
        "Задний привод (RWD)",
        "Задній привід (RWD)",
        "Tracción trasera (RWD)"
      ],
      // All-Wheel Drive
      [
        "All-Wheel Drive (AWD)",
        "Полный привод (AWD)",
        "Повний привід (AWD)",
        "Tracción en las cuatro ruedas (AWD)"
      ]
    ].forEach(async ([en, ru, ua, es]) => await strapi.documents('api::traction.traction').create({ data: { en, ru, ua, es } }))
  }

});
