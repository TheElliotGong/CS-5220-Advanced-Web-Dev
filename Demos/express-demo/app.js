/*
    steps to run:
    1. install dependencies: npm install express
    2. start the server: node app.js
*/

import express from 'express';

const PORT = 8080;

// create the express app instance
const app = express();

// define a route for root url (localhost:8080)
app.get('/', (req, res) => {
    // destructure path, query, headers, and body from request
    const { path, query, headers, body } = req;

    console.log(path, query, headers, body);

    // destructure semester and year from query params
    const { semester, year } = query;

    // convert year from string to integer (query params are always string)
    const numericYear = parseInt(year);

    // respond with semester and year back as json
    res.json({ semester, year: numericYear });
});

// define a route for root url (localhost:8080/course/<course id>)
app.get('/course/:courseId', (req, res) => {
    // destructure courseId from path parameters
    const { courseId } = req.params;

    // respond with courseId as json
    res.json({ course: courseId });
});

// start the server and log a message
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
