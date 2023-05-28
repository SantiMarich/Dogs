const cleanArray = (array) =>
  array.map((element) => {
    return {
      id: element.id,
      name: element.name,
      height: element.height,
      weight: element.weight,
      life_span: element.life_span,
      created: false,
      temperaments: element.temperament ? element.temperament.split(", ") : [],
    };
  });

module.exports = { cleanArray };
