import React, { Component } from 'react';
import { Col, Row } from 'antd';
import PokemonContainer from './PokemonData/PokemonContainer';
import Pokedex from './PokemonData/Pokedex';

class App extends Component {
  render() {
    const style = {
      container: {
        position: 'sticky',
        top: 0
      }
    }

    return (
      <Row>
        <Col lg={7} style={style.container}>
          <Pokedex />
        </Col>
        <Col lg={17}>
          <PokemonContainer />
        </Col>
      </Row>
    );
  }
}

export default App;
