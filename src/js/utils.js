const saveLocalStorage = (key, value) => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));

      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

export default saveLocalStorage;
