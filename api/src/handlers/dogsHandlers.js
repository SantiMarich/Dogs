const {
  postDog,
  getDogsById,
  getDogsByName,
  getAllDogs,
} = require("../controllers/dogsControllers");

const getDogsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const results = name ? await getDogsByName(name) : await getAllDogs();
    if (results.length === 0) {
      return res.status(404).json({ message: "La raza indicada no existe" });
    }
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDogsIdHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "DB" : "API";
  try {
    const dog = await getDogsById(id, source);
    res.status(200).json(dog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postDogsHandler = async (req, res) => {
  const { name, image, height, weight, life_span, temperaments } = req.body;
  try {
    const newDog = await postDog(
      name,
      image,
      height,
      weight,
      life_span,
      temperaments
    );
    res.status(201).json(newDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getDogsHandler, getDogsIdHandler, postDogsHandler };
