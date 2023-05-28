const axios = require("axios");
const { Temperament } = require("../db");
const { API_KEY } = process.env;

const getAllTemperaments = async () => {
  const response = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );

  const uniqueTemperaments = [];

  response.data.forEach((dog) => {
    if (dog.temperament) {
      const temperaments = dog.temperament.split(", ");
      temperaments.forEach((temperament) => {
        if (!uniqueTemperaments.includes(temperament)) {
          uniqueTemperaments.push(temperament);
        }
      });
    }
  });

  for (const temperament of uniqueTemperaments) {
    await Temperament.create({ name: temperament });
  }

  const allTemperamentsId = await Temperament.findAll();
  return allTemperamentsId;
};

module.exports = { getAllTemperaments };
