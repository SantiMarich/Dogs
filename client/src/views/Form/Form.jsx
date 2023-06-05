import React, { useState, useEffect } from "react";
import style from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postDog, getTemperamentsDogs } from "../../redux/actions";
import DogDefault from "../../assets/img/DogDefault2.png";
import {
  validateName,
  validateHeight,
  validateWeight,
  validateLifespan,
} from "./Validations";

const Form = () => {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.allTemperaments);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLifeSpan: "",
    maxLifeSpan: "",
    selectedTemperaments: [],
    image: "",
  });

  useEffect(() => {
    dispatch(getTemperamentsDogs());
  }, [dispatch]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formData.name === "") {
      alert("Por favor, completa los campos antes de enviar el formulario.");
      return;
    }

    if (hasFormErrors()) {
      alert(
        "Existen errores en el formulario. Por favor, corrígelos antes de enviar."
      );
      return;
    }

    const dogData = {
      name: formData.name,
      height: `${formData.minHeight} - ${formData.maxHeight}`,
      weight: `${formData.minWeight} - ${formData.maxWeight}`,
      life_span: `${formData.minLifeSpan} - ${formData.maxLifeSpan}`,
      temperaments: formData.selectedTemperaments.map((temperament) => ({
        id: temperament.id,
      })),
      image: DogDefault,
    };

    try {
      await dispatch(postDog(dogData));
      setErrors({ general: "El perro se creó exitosamente" });
    } catch (error) {
      setErrors({ general: `Error al crear el perro: ${error.message}` });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    const formErrors = getFormErrors(name, value, formData);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: formErrors,
    }));
  };

  const handleImageChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleTemperamentChange = (event) => {
    const temperamentId = parseInt(event.target.value);
    const selectedTemperament = allTemperaments.find(
      (temperament) => temperament.id === temperamentId
    );
    if (selectedTemperament) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        selectedTemperaments: [
          ...prevFormData.selectedTemperaments,
          selectedTemperament,
        ],
      }));
    }
  };

  const handleRemoveTemperament = (temperamentId) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedTemperaments: prevFormData.selectedTemperaments.filter(
        (temperament) => temperament.id !== temperamentId
      ),
    }));
  };

  const hasFormErrors = () => {
    for (const errorKey in errors) {
      if (errors[errorKey] && errors[errorKey].length > 0) {
        return true;
      }
    }
    return false;
  };

  const getFormErrors = (name, value, formData) => {
    if (name === "name") {
      return validateName(value);
    } else if (name === "minHeight" || name === "maxHeight") {
      const minHeight = name === "minHeight" ? value : formData.minHeight;
      const maxHeight = name === "maxHeight" ? value : formData.maxHeight;
      return validateHeight(minHeight, maxHeight);
    } else if (name === "minWeight" || name === "maxWeight") {
      const minWeight = name === "minWeight" ? value : formData.minWeight;
      const maxWeight = name === "maxWeight" ? value : formData.maxWeight;
      return validateWeight(minWeight, maxWeight);
    } else if (name === "minLifeSpan" || name === "maxLifeSpan") {
      const minLifeSpan = name === "minLifeSpan" ? value : formData.minLifeSpan;
      const maxLifeSpan = name === "maxLifeSpan" ? value : formData.maxLifeSpan;
      return validateLifespan(minLifeSpan, maxLifeSpan);
    }
    return [];
  };

  return (
    <form onSubmit={handleFormSubmit} className={style.Form}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        {errors.name && errors.name.length > 0 && (
          <span className={style.errors}>{errors.name[0]}</span>
        )}
      </div>
      <div className={style.inputGroup}>
        <div className={style.inputWrapper}>
          <label>
            Height (Min):
            <input
              type="text"
              name="minHeight"
              value={formData.minHeight}
              onChange={handleInputChange}
            />
          </label>
          {errors.minHeight && (
            <span className={style.errors}>{errors.minHeight}</span>
          )}
        </div>
        <div className={style.inputWrapper}>
          <label>
            Height (Max):
            <input
              type="text"
              name="maxHeight"
              value={formData.maxHeight}
              onChange={handleInputChange}
            />
          </label>
          {errors.maxHeight && (
            <span className={style.errors}>{errors.maxHeight}</span>
          )}
        </div>
      </div>
      <div className={style.inputGroup}>
        <div className={style.inputWrapper}>
          <label>
            Min Weight:
            <input
              type="text"
              name="minWeight"
              value={formData.minWeight}
              onChange={handleInputChange}
            />
          </label>
          {errors.minWeight && (
            <span className={style.errors}>{errors.minWeight}</span>
          )}
        </div>
        <div className={style.inputWrapper}>
          <label>
            Max Weight:
            <input
              type="text"
              name="maxWeight"
              value={formData.maxWeight}
              onChange={handleInputChange}
            />
          </label>
          {errors.maxWeight && (
            <span className={style.errors}>{errors.maxWeight}</span>
          )}
        </div>
      </div>
      <div className={style.inputGroup}>
        <div className={style.inputWrapper}>
          <label>
            Life Span (Min):
            <input
              type="text"
              name="minLifeSpan"
              value={formData.minLifeSpan}
              onChange={handleInputChange}
            />
          </label>
          {errors.minLifeSpan && (
            <span className={style.errors}>{errors.minLifeSpan}</span>
          )}
        </div>
        <div className={style.inputWrapper}>
          <label>
            Life Span (Max):
            <input
              type="text"
              name="maxLifeSpan"
              value={formData.maxLifeSpan}
              onChange={handleInputChange}
            />
          </label>
          {errors.maxLifeSpan && (
            <span className={style.errors}>{errors.maxLifeSpan}</span>
          )}
        </div>
      </div>
      <label>
        URL Image:
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleImageChange}
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
          {formData.selectedTemperaments.map((temperament) => (
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
      {errors.general && <span className={style.errors}>{errors.general}</span>}
      <button type="submit">Create Dog</button>
    </form>
  );
};

export default Form;
