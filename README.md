# Express API

A simple RESTful API that I created with Express for managing data from three different end points.

1. Hello, World! and other responses (to test the app's initial functionality)
2. Animals
3. Random Programming Facts

Visit the API [here] (https://express-api-q0sg.onrender.com/).

## API Endpoints

### Get all animals

- Method: `GET`
- URL: `/animals`

For example, to see a full list of animals visit: https://express-api-q0sg.onrender.com/api/animals

### Get animal by ID

- Method: `GET`
- URL: `/api/animals/:animalId`

For example, to retrieve the animal with the ID 4, the URL would be: `/api/animals/4`

### Get a random fact about programming

- Method: `GET`
- URL: `/facts/random`

After running this request, refresh the page to GET another random programming fact!

### Get all programming facts

- Method: `GET`
- URL: `/facts`

### Technologies used

- Node.js
- Express.js
- Routers and Route handlers
- Middleware
- HTTP Methods
- JSON
