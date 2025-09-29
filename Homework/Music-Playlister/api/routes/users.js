const signUp = async (req, res) => {
    const username = `${req.body.username}`;
    const pass = `${req.body.pass}`;

    if (!username || !pass) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try
  {
    
  }catch (err)
  {

  }

};

module.exports = {signUp};