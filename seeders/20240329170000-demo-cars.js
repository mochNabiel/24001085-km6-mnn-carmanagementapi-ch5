'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define dummy data for cars
    const carsData = [
      {
        id: uuidv4(),
        plate: 'ABC123',
        manufacture: 'Toyota',
        model: 'Camry',
        image: 'path/to/image.jpg',
        rentPerDay: 50,
        capacity: 5,
        description: 'Sedan car suitable for family trips.',
        transmission: 'Automatic',
        availableAt: new Date(),
        available: true,
        type: 'Sedan',
        year: 2023,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more cars as needed
    ];

    const options = [
      "Cruise Control",
      "Tinted Glass",
      "AM/FM Stereo",
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation",
      "Bucket Seats",
      "Airbag: Passenger",
      "Airbag: Driver",
      "Power Seats",
      "Airbag: Side",
      "Antilock Brakes",
      "A/C: Rear",
      "Alarm",
      "Alloy Wheels",
      "Power Locks",
      "MP3 (Multi Disc)",
      "Leather Interior",
      "Fog Lights",
      "Memory Seats",
      "Rear Window Defroster",
      "Integrated Phone",
      "Cassette Player",
      "Third Row Seats",
      "Rear Window Wiper",
      "Moonroof/Sunroof",
      "Power Steering",
      "Tow Package",
    ];
    const specs = [
      "200mm front axle",
      "Roof mounted antenna",
      "Cargo compartment cover",
      "Rear bench seat -inc: (3) adjustable headrests",
      "Driver & front passenger second generation airbags w/seatbelt sensors",
      "Front seat belt pretensioners w/load limiters",
      "Rear-seat adjustable head restraints",
      "4-wheel drive",
      "Cloth covered headliner",
      "Front/rear side curtain airbags",
      "160-amp alternator",
      "Compact spare tire",
      "Child seat upper tether anchors",
      "Laminated windshield & front door glass",
      "Front & rear door mounted side curtain airbags",
      "Impact-absorbing steering column",
      "Steel beam side-impact door beams",
      "1.8L DOHC 16-valve I4 engine -inc: engine cover",
      "AM/FM stereo w/CD/MP3 player -inc: aux input",
      "Rear seat heat ducts",
      "Dual visor vanity mirrors",
      "Front wheel drive",
      "First aid kit",
      "Advanced dual-stage front airbags -inc: occupant classification system",
      "Remote fuel-filler door release",
      "5-speed automatic transmission w/OD",
      "Front bucket seats -inc: 8-way pwr driver seat, 4-way pwr passenger seat, pwr driver lumbar",
      "Front seat belt height adjusters",
      "Overhead map lights",
      "Tinted glass",
      "Remote trunk release",
      "Impact-absorbing front/rear crumple zones",
      "Rear child safety door locks",
    ];

    await Promise.all(
      options.map(async (m) => {
        await queryInterface.bulkInsert("options", [
          {
            name: m,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
    );
    await Promise.all(
      specs.map(async (m) => {
        await queryInterface.bulkInsert("specs", [
          {
            name: m,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
    );

    // Insert cars data into the Cars table
    await queryInterface.bulkInsert('Cars', carsData, {});

    return Promise.resolve();
  },

  down: async (queryInterface, Sequelize) => {
    // Remove all data from the Cars table
    await queryInterface.bulkDelete('Cars', null, {});
    await queryInterface.bulkDelete('Specs', null, {});
    await queryInterface.bulkDelete('Options', null, {});

    return Promise.resolve();
  }
};
