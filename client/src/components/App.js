import React, { Component } from 'react';
import { Col, Row } from 'antd';
import PokemonContainer from './PokemonData/PokemonContainer';
import Pokedex from './PokemonData/Pokedex';

class App extends Component {
  render() {
    return (
      <Row>
        <Col lg={8}>
          <Pokedex />
        </Col>
        <Col lg={16}>
          <PokemonContainer />
        </Col>
      </Row>
    );
  }
}

export default App;
