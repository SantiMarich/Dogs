const axios = require("axios");
const { Temperament } = require("../db");
const { API_URL } = process.env;

const getAllTemperaments = async () => {
  try {
    const response = await axios.get(API_URL);

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
    throw new Error("No se encontraron temperamentos");
  }
};

module.exports = { getAllTemperaments };
