import express from 'express';
import {User} from '../../lab_db.';
const router = express.Router();

/**
 * helper function to remove the password from a user object
 * @param {object} user - the user object.
 * @returns {object} the user object without the password
 */
const _sanitize = (user) => {
    const { password, ...rest } = user;
    return rest;
};

/**
 * @route POST /users/register
 * @desc Registers a new user with username, password and optional platform.
 * @param {Object} req.body - the request body.
 * @returns {Object} 201 - user object (sanitized)
 * @returns {Object} 400 - error if username or password missing
 */
router.post('/register', async (req, res) => {
    try {
        const { username, password, platform = null } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password required to register.' });
        }

        // TODO on Wednesday: handle ensuring that username is unique and does not exist

        // TODO on Wednesday: handle adding a user to our mock database
        const existing = User.find('username', username);
        if(existing)
        {
            return res.status(400).json({error: 'This user already exists.'})
        }
        

        const registeredUser = { username, password, platform, libraries: [] };
        res.status(201).json(_sanitize(registeredUser));
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to register user' });
    }
});

/**
 * @route POST /users/login
 * @desc Login a user by validating username and password
 * @param {Object} req.body - the request body
 * @returns {Object} 200 - user object (sanitized)
 * @returns {Object} 401 - Error if invalid credentials
 */
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // TODO on Wednesday: handle finding user by username
        const user = User.find(username)
        if (!user || user.password !== password) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        // TODO Homework 2: set authorization header with JWT

        res.json(_sanitize({ username, password }));
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to login user' });
    }
});

/**
 * @route GET /users/:id
 * @desc Retrieves a private user profile by id. Requires authorization header to match user id.
 * @param {string} id - user id from the URL
 * @header {string} authorization - authorization header with value matching user id
 * @returns {Object} 200 - user object (sanitized)
 * @returns {Object} 403 - forbidden if authorization fails
 * @returns {Object} 404 - user not found
 */
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const authorization = req.headers.authorization;

        if (!authorization || authorization !== id) {
            return res.status(403).json({ error: 'Forbidden: You are not authorized to view this user' });
        }
        // TODO on Wednesday: handle finding user by id
        const user = User.find(id)
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.json(_sanitize({ id }));
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to get user' });
    }
});

/**
 * @route GET /users/:id
 * @desc Retrieves a user profile by id with associate library. Requires authorization header to match user id.
 * @param {string} id - user id from the URL
 * @param {string} genre - genre from the URL
 * @header {string} authorization - authorization header with value matching user id
 * @returns {Object} 200 - user object with library (sanitized)
 * @returns {Object} 403 - forbidden if authorization fails
 * @returns {Object} 404 - user not found
 */
router.get('/:id/library/:genre', async (req, res) => {
    try {
        const { id, genre } = req.params;
        const authorization = req.headers.authorization;

        if (!authorization || authorization !== id) {
            return res.status(403).json({ error: 'Forbidden: You are not authorized to view this user and library' });
        }

        // TODO on Wednesday: handle getting user by id and their associate genre library
        const populatedUser = User.populate(id, genre)
        if (!populatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(_sanitize({ id, genre }));
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to get user with genre library' });
    }
});

export default router;
