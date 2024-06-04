const express = require("express");
const app = express();
const port = 3000;

// Import the responses and product data from the data.js file //
const { responses, animals, facts } = require("./data");

// Responses Router (converts JS responses object into JSON responses string) //
const responsesRouter = express.Router();
responsesRouter.get("/", (req, res) => {
  res.json(responses);
});

// Animals Router //
const animalsRouter = express.Router();
animalsRouter.get("/", (req, res) => {
  res.json(animals);
});

// Facts Router (generates a random fact each time) //
const factsRouter = express.Router();
factsRouter.get("/", (req, res) => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const randomFact = facts[randomIndex];
  res.json(randomFact);
});

// Mount both Routers to be able to use them //
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
