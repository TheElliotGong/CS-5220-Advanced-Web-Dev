import axios from 'axios';
import express from 'express'

const router = express.Router();

router.get('/search', async (req, res) => {
    const { path, query, headers, body } = req.query
    try {
        const params = {
            api_key: process.env.API_KEY,
            method: "track.search",
        }
        const data = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=track.search&api_key=${process.env.API_KEY}&artist=cher&track=believe&format=json`, {params});
        console.log(data);

    }
    catch (err) {

    }

})

export default router;