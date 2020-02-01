export const getBreeds = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const toJson = await response.json();

  return toJson.message;
};

export const getImageBreed = async breed => {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  const toJson = await response.json();

  return toJson;
};
