import React, { Component, Fragment } from 'react';
import PokemonData from './PokemonData/PokemonData';
import FooterNav from './FooterNav';

class App extends Component {
  render() {
    return (
      <Fragment>
        <PokemonData />
        <FooterNav />
      </Fragment>
    );
  }
}

export default App;
