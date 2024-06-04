# Express API

A simple RESTful API that I created with Express for managing data from three different end points.

- Responses (to test the app's initial functionality)
- Animals
- Random Programming Facts (generated with each GET request/page refresh)

## API Endpoints

### Get all animals

- Method: `GET`
- URL: `/animals`

### Get an animal by ID

- Method: `GET`
- URL: `/api/animals/:animalId`

For example, to retrieve the animal with ID 4, the URL would be: `/api/animals/4`

### Get a random fact about programming

- Method: `GET`
- URL: `/facts`
