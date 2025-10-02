import express from 'express';

import {Library} from '../../lab_db.';

const router = express.Router();

router.put('/:genre', async (req, res) => {
    const {genre} = req.params;
    const game = req.body;

    const userID = req.headers.authorization
})