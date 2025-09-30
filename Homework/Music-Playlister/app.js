import express from 'express';
import 'dotenev/config';
import playlists from './api/routes/playlists.js';
import tracks from './api/routes/tracks.js';
import users from './users/routes/users.js';
const port = 3000;
const app = express();

app.use('/playlists', playlists);
app.use('/tracks', tracks);
app.use('/users', users);


app.listen(port, () => {
    console.log(`Server started on ${port}`);
})