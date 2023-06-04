const axios = require("axios");
const { Temperament } = require("../db");

const getAllTemperaments = async () => {
  try {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds`);

    const uniqueTemperaments = new Set();

    response.data.forEach((dog) => {
      if (dog.temperament) {
        const temperaments = dog.temperament.split(", ");
        temperaments.forEach((temperament) => {
          uniqueTemperaments.add(temperament);
        });
      }
    });

    const savedTemperaments = [];

    for (const temperament of uniqueTemperaments) {
      const savedTemperament = await Temperament.findOrCreate({
        where: { name: temperament },
      });
      savedTemperaments.push(savedTemperament[0]);
    }

    return savedTemperaments;
  } catch (error) {
    throw new Error("Failed to fetch Temperaments");
  }
};

module.exports = { getAllTemperaments };
