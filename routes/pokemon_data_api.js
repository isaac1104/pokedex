const axios = require('axios');

module.exports = app => {
  app.get('/api/pokemon', async (req, res) => {
    const request = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
    const { data } = request;
    res.status(200).send(data);
  });

  app.get('/api/selectedPokemon', async (req, res) => {
    const request = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.query.pokemon}`);
    const { data } = request;
    res.status(200).send(data);
  });
}
