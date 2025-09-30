import express from 'express'

const router = express.Router();
router.post('/register', async (req, res) => {
  const {username, password} = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {

  } catch (err) {
    return res.status(500).json({ error: 'An error occurred' });
  }
});

router.post('/login', )
export default router;
