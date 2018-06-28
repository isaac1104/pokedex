const axios = require('axios');

module.exports = app => {
  app.get('/api/pokemon', async (req, res) => {
    const request = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
    const { data } = request;
    res.send(data);
  });
}
