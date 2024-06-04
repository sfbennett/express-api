// Define getAnimalById function and export:

const { animals } = require("./data");

const getAnimalById = (id) => {
  return animals[id];
};

module.exports = getAnimalById;
