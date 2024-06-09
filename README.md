# Animal x Programming Express API

A simple RESTful API that I created with Express for managing data from three different end points.

1. Hello, World! and other responses (to test the app's initial functionality)
2. Animals Facts
3. Random Programming Facts

Check out my API deployed on Render [here](https://animal-programming-api.onrender.com).

## API Endpoints

### Get all animals

- Method: `GET`
- URL: `/api/animals`

For example, to see a full list of animals visit: https://animal-programming-api.onrender.com/api/animals

### Get animal by ID

- Method: `GET`
- URL: `/api/animals/:animalId`

For example, to retrieve the animal with the ID 4, the URL would be: `/api/animals/4`

### Get a random fact about programming

- Method: `GET`
- URL: `/api/facts/random`

After running this request, refresh the page to GET another random programming fact!

### Get all programming facts

- Method: `GET`
- URL: `/api/facts`

### Get all responses

- Method: `GET`
- URL: `/api/responses`

## Technologies used

- Node.js
- Express.js
- Routers and Route handlers
- Middleware
- HTTP Methods
- JSON
- Render for hosting
