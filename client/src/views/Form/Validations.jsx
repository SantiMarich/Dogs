export const validateName = (name) => {
  const trimmedName = name.trim();
  const regex = /^[a-zA-Z\s]{1,25}$/;
  return regex.test(trimmedName);
};

export const validateHeight = (minHeight, maxHeight) => {
  const min = parseInt(minHeight);
  const max = parseInt(maxHeight);
  return min >= 1 && max >= 1 && max >= min;
};

export const validateWeight = (minWeight, maxWeight) => {
  const min = parseInt(minWeight);
  const max = parseInt(maxWeight);
  return min >= 1 && max >= 1 && max >= min;
};

export const validateLifeSpan = (lifeSpan) => {
  const value = parseInt(lifeSpan);
  return value >= 1 && value < 30;
};
