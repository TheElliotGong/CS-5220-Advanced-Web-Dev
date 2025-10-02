import express from 'express';
import 'dotenv/config';

import games from './api/routes/games.js';
import users from './api/routes/users.js';

const PORT = 8888;

const app = express();

// parse incoming json requests
app.use(express.json());

// mount route handlers
app.use('/games', games);
app.use('/users', users);

// start server
app.listen(PORT, () => {
    console.log(`server is running on localhost:${PORT}`);
});
