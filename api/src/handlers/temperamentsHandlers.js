const {
  getAllTemperaments,
} = require("../controllers/temperamentsControllers");

const getTemperamentsHandler = async (req, res) => {
  try {
    const results = await getAllTemperaments();
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getTemperamentsHandler };
