'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Cars", [
      // profile_piture: DataTypes.STRING,
      // brand: DataTypes.STRING,
      // model: DataTypes.STRING,
      // year: DataTypes.INTEGER,
      // number_of_seats: DataTypes.INTEGER,
      // price_per_day: DataTypes.INTEGER,
      // description: DataTypes.STRING,
      // user_id: DataTypes.INTEGER,
      // type: DataTypes.STRING,//[Hatchback, Sedan, SUV, MUV, Coupe, Convertible, Pickup Truck]
      // location: DataTypes.STRING,//city, country
      // engine: DataTypes.STRING,
      // gear: DataTypes.STRING,//[auto/manual]
      {
        profile_picture: '',
        brand: 'Tesla',
        model: 'X',
        year: 2020,
        number_of_seats: 5,
        price_per_day: 150,
        description: 'Electric',
        user_id: 1,
<<<<<<< HEAD
        location:"Tel aviv, Israel",
        type: "Sedan",
        engine: "Electric",
        gear: "AUTO",
=======
        location: 'Tel aviv, Israel',
        type: 'Sedan',
>>>>>>> 5091f8ab0d75beee7acbc25293e4c7517c14debb
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        profile_picture: '',
        brand: 'JEEP',
        model: 'W',
        year: 2020,
        number_of_seats: 4,
        price_per_day: 250,
        description: 'off-road',
        user_id: 1,
<<<<<<< HEAD
        location:"Tel aviv, Israel",
        type: "SUV",
        engine: "Diesel",
        gear: "AUTO",
=======
        location: 'Tel aviv, Israel',
        type: 'SUV',
>>>>>>> 5091f8ab0d75beee7acbc25293e4c7517c14debb
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        profile_picture: '',
        brand: 'Seat',
        model: 'I',
        year: 2022,
        number_of_seats: 4,
        price_per_day: 50,
        description: 'sport',
        user_id: 2,
        location:"Tel aviv, Israel",
        type: "Hatchback",
        engine: "Gas",
        gear: "MANUAL",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        profile_piture: "",
        brand: "Seat",
        model: "M",
        year: 2022,
        number_of_seats: 2,
        price_per_day: 150,
        description: "sport",
        user_id: 2,
        location:"Tel aviv, Israel",
        type: "Hatchback",
        engine: "Gas",
        gear: "MANUAL",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        profile_piture: "",
        brand: "Tesla",
        model: "Y",
        year: 2022,
        number_of_seats: 4,
        price_per_day: 50,
        description: "sport",
        user_id: 3,
        location:"Holon, Israel",
        type: "Sedan",
        engine: "Electric",
        gear: "AUTO",
        createdAt: new Date(),
        updatedAt: new Date(),
      },      {
        profile_piture: "",
        brand: "Toyota",
        model: "Aygo",
        year: 2002,
        number_of_seats: 5,
        price_per_day: 90,
        description: "compact",
        user_id: 3,
        location:"Holon, Israel",
        type: "Sedan",
        engine: "Hybrid",
        gear: "AUTO",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cars', null, {});
  },
};
