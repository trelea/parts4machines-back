/**
 * seed-body service
 */

export default () => ({
  async seedBody() {
    const bodies = [
      // Sedans
      [
        "Sedan",
        "Седан",
        "Седан",
        "Sedán"
      ],
      // Hatchbacks
      [
        "Hatchback",
        "Хэтчбек",
        "Хетчбек",
        "Hatchback"
      ],
      // Coupes
      [
        "Coupe",
        "Купе",
        "Купе",
        "Coupé"
      ],
      // Convertibles
      [
        "Convertible",
        "Кабриолет",
        "Кабріолет",
        "Convertible"
      ],
      // SUVs
      [
        "SUV",
        "Внедорожник",
        "Позашляховик",
        "SUV"
      ],
      // Crossovers
      [
        "Crossover",
        "Кроссовер",
        "Кросовер",
        "Crossover"
      ],
      // Station Wagons
      [
        "Station Wagon",
        "Универсал",
        "Універсал",
        "Familiar"
      ],
      // Pickup Trucks
      [
        "Pickup Truck",
        "Пикап",
        "Пікап",
        "Pickup"
      ],
      // Minivans
      [
        "Minivan",
        "Минивэн",
        "Мініфургон",
        "Monovolumen"
      ],
      // Microcars
      [
        "Microcar",
        "Микроавтомобиль",
        "Мікроавтомобіль",
        "Microcoche"
      ],
      // Roadsters
      [
        "Roadster",
        "Родстер",
        "Родстер",
        "Roadster"
      ],
      // Limousines
      [
        "Limousine",
        "Лимузин",
        "Лімузин",
        "Limusina"
      ],
      // Fastbacks
      [
        "Fastback",
        "Фастбек",
        "Фастбек",
        "Fastback"
      ],
      // Panel Vans
      [
        "Panel Van",
        "Фургон",
        "Фургон",
        "Furgón"
      ],
      // Vans
      [
        "Van",
        "Вэн",
        "Вен",
        "Furgoneta"
      ]
    ];
    bodies.forEach(async ([en, ru, ua, es]) => {
      await strapi.documents('api::body.body').create({ data: { en, ru, ua, es } })
    })
  },

});
