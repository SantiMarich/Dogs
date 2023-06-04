import React, { useState, useEffect } from "react";
import style from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postDog, getTemperamentsDogs } from "../../redux/actions";
import DogDefault from "../../assets/img/DogDefault2.png";

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [minHeight, setMinHeight] = useState("");
  const [maxHeight, setMaxHeight] = useState("");
  const [minWeight, setMinWeight] = useState("");
  const [maxWeight, setMaxWeight] = useState("");
  const [lifeSpan, setLifeSpan] = useState("");
  const [selectedTemperaments, setSelectedTemperaments] = useState([]);
  const [image, setImage] = useState("");
  const allTemperaments = useSelector((state) => state.allTemperaments);

  useEffect(() => {
    dispatch(getTemperamentsDogs());
  }, [dispatch]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Validar campos aquí...

    const dogData = {
      name,
      height: `${minHeight} - ${maxHeight}`,
      weight: `${minWeight} - ${maxWeight}`,
      life_span: lifeSpan,
      temperaments: selectedTemperaments.map((temperament) => ({
        id: temperament.id,
      })),
      image: DogDefault,
    };

    console.log(dogData);

    try {
      await dispatch(postDog(dogData));
      console.log("El perro se creó exitosamente");
    } catch (error) {
      console.log("Error al crear el perro:", error.message);
    }
  };

  const handleTemperamentChange = (event) => {
    const temperamentId = parseInt(event.target.value);
    const selectedTemperament = allTemperaments.find(
      (temperament) => temperament.id === temperamentId
    );
    if (selectedTemperament) {
      setSelectedTemperaments((prevTemperaments) => [
        ...prevTemperaments,
        selectedTemperament,
      ]);
    }
  };

  const handleRemoveTemperament = (temperamentId) => {
    setSelectedTemperaments((prevTemperaments) =>
      prevTemperaments.filter((temperament) => temperament.id !== temperamentId)
    );
  };

  return (
    <form onSubmit={handleFormSubmit} className={style.Form}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Height (Min):
        <input
          type="text"
          value={minHeight}
          onChange={(e) => setMinHeight(e.target.value)}
        />
      </label>
      <label>
        Height (Max):
        <input
          type="text"
          value={maxHeight}
          onChange={(e) => setMaxHeight(e.target.value)}
        />
      </label>
      <label>
        Min Weight:
        <input
          type="text"
          value={minWeight}
          onChange={(e) => setMinWeight(e.target.value)}
        />
      </label>
      <label>
        Max Weight:
        <input
          type="text"
          value={maxWeight}
          onChange={(e) => setMaxWeight(e.target.value)}
        />
      </label>
      <label>
        Life Span:
        <input
          type="text"
          value={lifeSpan}
          onChange={(e) => setLifeSpan(e.target.value)}
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <div className="form-group">
        <label htmlFor="temperament">Temperamentos:</label>
        <select id="temperament" onChange={handleTemperamentChange}>
          <option value="">Seleccione un temperamento</option>
          {allTemperaments.map((temperament) => (
            <option key={temperament.id} value={temperament.id}>
              {temperament.name}
            </option>
          ))}
        </select>
        <ul className="selected-temperaments">
          {selectedTemperaments.map((temperament) => (
            <li key={temperament.id}>
              {temperament.name}
              <button
                type="button"
                onClick={() => handleRemoveTemperament(temperament.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button type="submit">Create Dog</button>
    </form>
  );
};

export default Form;
