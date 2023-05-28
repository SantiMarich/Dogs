const axios = require("axios");
const { Op } = require("sequelize");
const { API_KEY } = process.env;
const { Dog, Temperament } = require("../db");
const { cleanArray } = require("../helpers/dogsControllersHelpers");

const getAllDogs = async () => {
  const databaseDogs = await Dog.findAll({
    include: Temperament,
  });
  const apiDogsAll = (
    await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
  ).data;
  const apiDogs = cleanArray(apiDogsAll);

  return [...databaseDogs, ...apiDogs];
};

const getDogsByName = async (name) => {
  const lowercaseName = name.toLowerCase();
  const databaseDogs = await Dog.findAll({
    where: { name: { [Op.iLike]: "%" + lowercaseName + "%" } },
    include: Temperament,
  });
  const apiDogsAll = (
    await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
  ).data;
  const apiDogs = cleanArray(apiDogsAll);
  const filteredApi = apiDogs.filter((dog) =>
    dog.name.toLowerCase().includes(lowercaseName)
  );
  return [...filteredApi, ...databaseDogs];
};

const getDogsById = async (id, source) => {
  let dogData;
  if (source === "API") {
    dogData = (
      await axios.get(
        `https://api.thedogapi.com/v1/breeds/${id}?api_key=${API_KEY}`
      )
    ).data;
  } else {
    dogData = await Dog.findOne({
      where: { id: id },
      include: Temperament,
    });
  }
  return dogData;
};

const postDog = async (
  name,
  image,
  height,
  weight,
  life_span,
  temperaments
) => {
  const newDog = await Dog.create({ name, image, height, weight, life_span });

  if (temperaments) {
    const temperamentIds = temperaments.split(", ");
    await newDog.setTemperaments(temperamentIds);
  }

  return newDog;
};

module.exports = { getAllDogs, getDogsByName, getDogsById, postDog };
