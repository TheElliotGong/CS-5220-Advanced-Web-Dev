import axios from 'axios';
import express from 'express';

const router = express.Router();

const RAWG_API_KEY = process.env.API_KEY;

/**
 * @route GET /games/search
 * @description Search for games using the RAWG API
 * @queryparam {string} name (required) search API for game
 * @queryparam {string} genre (optional) apply genre filter when searching
 * @queryparam {string} platform (optional) apply platform filter when searching
 *
 * @returns {Object} 200 - An array of minimal game objects
 * */
router.get('/search', async (req, res) => {
    const { name, genre, platform } = req.query;

    try {
        const params = {
            key: RAWG_API_KEY,
            search: name,
            genre: genre,
            platform: platform
        };

        const { data } = await axios.get('https://api.rawg.io/api/games', { params });

        const minimal = data.results.map((game) => {
            return {
                id: game.id,
                name: game.name,
                genres: game.genres,
                platforms: game.platforms
            };
        });

        res.json(minimal);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to search games via RAWG API' });
    }
});


router.get('/:rawgid', async (req, res) => {
    const {rawgid} = req.params
    try
    {
        const params = {key: RAWG_API_KEY };
        const {data} = await axios.get(`${RAWG_BASE_URL}/games/${rawgid}`, {params})

        const simplified = {
            id: data.id,
            name: data.name,
            description: data.description,
            released: data.released,
            image: data.background_image,
            platforms: data.platforms.map((p) => p.platform.name),
            develoeprs: data.developers.map((d) => d.name)
            
            
        }
        res.json(simplified);
    }catch(err)
    {
        console.log(err);
        res.status(500).json({error: 'Failed to search games via the RAWG API'})
    }
})
export default router;
