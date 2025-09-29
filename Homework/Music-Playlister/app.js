import express from 'express';
const routes = require("./api/routes/");
const port = 3000;
const app = express();

app.get('/', (req, res) => {
    const { path, query, headers, body } = req;
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
})