/**
 * seed-fuel service
 */

export default () => ({

  async seedFuel() {
    const fuels = [
      // Petrol
      [
        "Petrol",
        "Бензин",
        "Бензин",
        "Gasolina"
      ],
      // Diesel
      [
        "Diesel",
        "Дизель",
        "Дизель",
        "Diésel"
      ],
      // Electric
      [
        "Electric",
        "Электричество",
        "Електричний",
        "Eléctrico"
      ],
      // Hybrid
      [
        "Hybrid",
        "Гибрид",
        "Гібрид",
        "Híbrido"
      ],
      // Ethanol
      [
        "Ethanol",
        "Этанол",
        "Етанол",
        "Etanol"
      ],
      // Biodiesel
      [
        "Biodiesel",
        "Биодизель",
        "Біодизель",
        "Biodiésel"
      ],
      // CNG
      [
        "CNG (Compressed Natural Gas)",
        "Сжатый природный газ (CNG)",
        "Стиснений природний газ (CNG)",
        "GNC (Gas Natural Comprimido)"
      ],
      // LPG
      [
        "LPG (Liquefied Petroleum Gas)",
        "Жидкий нефтяной газ (LPG)",
        "Жидкий нафтовий газ (LPG)",
        "GLP (Gas Licuado de Petróleo)"
      ],
      // Hydrogen
      [
        "Hydrogen",
        "Водород",
        "Водень",
        "Hidrógeno"
      ],
      // Propane
      [
        "Propane",
        "Пропан",
        "Пропан",
        "Propano"
      ]
    ].forEach(async ([en, ru, ua, es]) => await strapi.documents('api::fuel.fuel').create({ data: { en, ru, ua, es } }))
  },


});
