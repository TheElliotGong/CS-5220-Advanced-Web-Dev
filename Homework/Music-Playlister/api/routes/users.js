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

router.post('/login', async (req, res) => {
  const {username, password} = req.body;
   if (!username || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }
} );

router.get('/:id', async (req, res) => {
  try
  {
    const {id} = req.params;
    const authorization = req.headers.authorization;
    if(!authorization || authorization != id)
    {
      return res.status(403).json({error: 'Forbidden: You are not authorized to view this uers.'});
    }
  }catch(err)
  {
    return res.status(500).json({ error: 'An error occurred' });
  }
} )
export default router;
