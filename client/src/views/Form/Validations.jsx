export const validateName = (name) => {
  const errors = [];

  if (!name) {
    errors.push("El nombre es requerido");
  } else if (!/^[a-zA-Z\s]{1,25}$/.test(name)) {
    errors.push(
      "El nombre solo puede contener letras y espacios, con una longitud máxima de 25 caracteres"
    );
  }

  return errors;
};

export const validateHeight = (minHeight, maxHeight) => {
  const errors = [];

  if (!minHeight && !maxHeight) {
    errors.push("Se requiere al menos una altura");
  } else {
    if (minHeight && (!/^\d+$/.test(minHeight) || parseInt(minHeight) < 1)) {
      errors.push("La altura mínima debe ser un número entero positivo");
    }

    if (maxHeight && (!/^\d+$/.test(maxHeight) || parseInt(maxHeight) < 1)) {
      errors.push("La altura máxima debe ser un número entero positivo");
    }

    if (minHeight && maxHeight && parseInt(maxHeight) <= parseInt(minHeight)) {
      errors.push("La altura máxima debe ser mayor que la altura mínima");
    }
  }

  return errors;
};

export const validateWeight = (minWeight, maxWeight) => {
  const errors = [];

  if (!minWeight && !maxWeight) {
    errors.push("Se requiere al menos un peso");
  } else {
    if (minWeight && (!/^\d+$/.test(minWeight) || parseInt(minWeight) < 1)) {
      errors.push("El peso mínimo debe ser un número entero positivo");
    }

    if (maxWeight && (!/^\d+$/.test(maxWeight) || parseInt(maxWeight) < 1)) {
      errors.push("El peso máximo debe ser un número entero positivo");
    }

    if (minWeight && maxWeight && parseInt(maxWeight) <= parseInt(minWeight)) {
      errors.push("El peso máximo debe ser mayor que el peso mínimo");
    }
  }

  return errors;
};

export const validateLifespan = (minLifeSpan, maxLifeSpan) => {
  const errors = [];

  if (!minLifeSpan && !maxLifeSpan) {
    errors.push("Se requiere al menos una esperanza de vida");
  } else {
    if (
      minLifeSpan &&
      (!/^\d+$/.test(minLifeSpan) || parseInt(minLifeSpan) < 1)
    ) {
      errors.push(
        "La esperanza de vida mínima debe ser un número entero positivo"
      );
    }

    if (
      maxLifeSpan &&
      (!/^\d+$/.test(maxLifeSpan) || parseInt(maxLifeSpan) < 1)
    ) {
      errors.push(
        "La esperanza de vida máxima debe ser un número entero positivo"
      );
    }

    if (
      minLifeSpan &&
      maxLifeSpan &&
      parseInt(maxLifeSpan) <= parseInt(minLifeSpan)
    ) {
      errors.push(
        "La esperanza de vida máxima debe ser mayor que la esperanza de vida mínima"
      );
    }
  }

  return errors;
};
