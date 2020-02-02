const saveLocalStorage = (key, value) => {
  return new Promise((resolve, reject) => {
    try {
      const dataStorage = JSON.parse(localStorage.getItem(key));

      const newDataStorage = [value, ...dataStorage];

      localStorage.setItem(key, JSON.stringify(newDataStorage));

      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

export default saveLocalStorage;
