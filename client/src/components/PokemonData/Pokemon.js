import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import { connect } from 'react-redux';
import { Row } from 'antd';
import { sortPokemonData } from '../../actions';

class Pokemon extends Component {
  renderPokemonCard() {
    const { filteredData } = this.props.pokemonData;
    return filteredData.map(pokemon => {
      return <PokemonCard key={pokemon.id} data={pokemon} />
    });
  }

  render() {
    return (
      <Row>
        {this.renderPokemonCard()}
      </Row>
    );
  }
}

function mapStateToProps({ pokemonData }) {
  return {
    pokemonData
  }
}

export default connect(mapStateToProps, { sortPokemonData })(Pokemon);
