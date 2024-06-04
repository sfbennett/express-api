const express = require("express");
const app = express();
const port = 3000;
const getAnimalById = require("./utils");

// Import the responses and product data from the data.js file //
const { responses, animals, facts } = require("./data");

// Responses Router (converts JS responses object into JSON responses string) //
const responsesRouter = express.Router();
responsesRouter.get("/", (req, res) => {
  res.json(responses);
});

// ANIMALS ROUTER //
const animalsRouter = express.Router();

// Animals Middleware (to validate the animal ID/that the animal exists in the database)
animalsRouter.param("animalId", (req, res, next, animalId) => {
  const animal = getAnimalById(animalId);
  if (animal) {
    req.animal = animal;
    next();
  } else {
    res.status(404).send("Animal not found!");
  }
});

// Get all animals
animalsRouter.get("/", (req, res) => {
  res.json(animals);
});

// Get animal by ID
animalsRouter.get("/:animalId", (req, res) => {
  res.send(req.animal);
});

// FACTS ROUTER (generates a random fact each time) //
const factsRouter = express.Router();

// Get a random fact
factsRouter.get("/", (req, res) => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const randomFact = facts[randomIndex];
  res.json(randomFact);
});

// Mount all Routers to be able to use them //
app.use("/api/responses", responsesRouter);
app.use("/api/animals", animalsRouter);
app.use("/api/facts", factsRouter);

// Basic Route handler
app.get("/", (req, res) => {
  res.send("Hello, World! I am working on making an API with Express");
});

// Start Express server and have it listen for HTTP requests
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
