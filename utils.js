// Define getAnimalById function and export:

const { animals, facts } = require("./data");

const getAnimalById = (id) => {
  return animals[id];
};

// Define getRandomFact function and export:

const getRandomFact = () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  return facts[randomIndex];
};

module.exports = { getAnimalById, getRandomFact };
