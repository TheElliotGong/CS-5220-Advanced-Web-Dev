import express from 'express';
import 'dotenv/config';

import games from './api/routes/games.js';

const PORT = 8888;

const app = express();

app.use('/games', games);

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});
