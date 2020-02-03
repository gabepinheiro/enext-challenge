export const getBreeds = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await response.json();

  return data.message;
};

export const getImageBreed = async breed => {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  const data = await response.json();

  return data;
};
