/**
 * seed-transmission service
 */

export default () => ({

  async seedTransmission() {
    const transmissions = [
      // Manual Transmission
      [
        "Manual Transmission",
        "Механическая коробка передач",
        "Механічна коробка передач",
        "Transmisión manual"
      ],
      // Automatic Transmission
      [
        "Automatic Transmission",
        "Автоматическая коробка передач",
        "Автоматична коробка передач",
        "Transmisión automática"
      ],
      // Continuously Variable Transmission (CVT)
      [
        "Continuously Variable Transmission (CVT)",
        "Бесступенчатая трансмиссия (CVT)",
        "Безступінчаста трансмісія (CVT)",
        "Transmisión variable continua (CVT)"
      ],
      // Dual-Clutch Transmission (DCT)
      [
        "Dual-Clutch Transmission (DCT)",
        "Двухсцепная трансмиссия (DCT)",
        "Двосцепна трансмісія (DCT)",
        "Transmisión de doble embrague (DCT)"
      ],
      // Semi-Automatic Transmission
      [
        "Semi-Automatic Transmission",
        "Полуавтоматическая коробка передач",
        "Полуавтоматична коробка передач",
        "Transmisión semiautomática"
      ]
    ].forEach(async ([en, ru, ua, es]) => await strapi.documents('api::transmission.transmission').create({ data: { en, ru, ua, es } }))
  }
});
