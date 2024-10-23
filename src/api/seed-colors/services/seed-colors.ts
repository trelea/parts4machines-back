/**
 * seed-colors service
 */

export default () => ({

  async seedColors() {
    const colors = [
      // Red colors
      [
        "Red",
        "Красный",
        "Червоний",
        "Rojo"
      ],
      // Blue colors
      [
        "Blue",
        "Синий",
        "Синій",
        "Azul"
      ],
      // Green colors
      [
        "Green",
        "Зеленый",
        "Зелений",
        "Verde"
      ],
      // Yellow colors
      [
        "Yellow",
        "Желтый",
        "Жовтий",
        "Amarillo"
      ],
      // Orange colors
      [
        "Orange",
        "Оранжевый",
        "Помаранчевий",
        "Naranja"
      ],
      // Purple colors
      [
        "Purple",
        "Фиолетовый",
        "Фіолетовий",
        "Púrpura"
      ],
      // Pink colors
      [
        "Pink",
        "Розовый",
        "Рожевий",
        "Rosa"
      ],
      // Brown colors
      [
        "Brown",
        "Коричневый",
        "Коричневий",
        "Marrón"
      ],
      // Black colors
      [
        "Black",
        "Черный",
        "Чорний",
        "Negro"
      ],
      // White colors
      [
        "White",
        "Белый",
        "Білий",
        "Blanco"
      ],
      // Gray colors
      [
        "Gray",
        "Серый",
        "Сірий",
        "Gris"
      ],
      // Cyan colors
      [
        "Cyan",
        "Циан",
        "Ціан",
        "Cian"
      ],
      // Magenta colors
      [
        "Magenta",
        "Маджента",
        "Маджента",
        "Magenta"
      ],
      // Lime colors
      [
        "Lime",
        "Лайм",
        "Лайм",
        "Lima"
      ],
      // Indigo colors
      [
        "Indigo",
        "Индиго",
        "Індіго",
        "Índigo"
      ],
      // Violet colors
      [
        "Violet",
        "Фиалковый",
        "Фіалковий",
        "Violeta"
      ],
      // Turquoise colors
      [
        "Turquoise",
        "Бирюзовый",
        "Бірюзовий",
        "Turquesa"
      ],
      // Gold colors
      [
        "Gold",
        "Золотой",
        "Золотий",
        "Dorado"
      ],
      // Silver colors
      [
        "Silver",
        "Серебряный",
        "Сріблястий",
        "Plateado"
      ],
      // Maroon colors
      [
        "Maroon",
        "Бордовый",
        "Бордовий",
        "Burdeos"
      ]
    ].forEach(async ([en, ru, ua, es]) => await strapi.documents('api::color.color').create({ data: { en, ru, ua, es } }))
  },



});
