const cleanArray = (array) =>
  array.map((element) => {
    return {
      id: element.id,
      name: element.name,
      image:
        element.image && element.image.url
          ? element.image.url
          : element.reference_image_id
          ? `https://cdn2.thedogapi.com/images/${element.reference_image_id}.jpg`
          : null,
      height: element.height?.metric || "",
      weight: element.weight?.metric || "",
      life_span: element.life_span,
      created: false,
      temperaments: element.temperament ? element.temperament.split(", ") : [],
    };
  });

module.exports = { cleanArray };
