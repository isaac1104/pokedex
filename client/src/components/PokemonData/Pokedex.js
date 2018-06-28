import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import { fetchPokemonData } from '../../actions';
import { connect } from 'react-redux';
import { Row } from 'antd';

class Pokedex extends Component {
  componentDidMount() {
    this.props.fetchPokemonData();
  }

  renderPokemonCard() {
    const { data: { results }, isFetching } = this.props.pokemonData;
    if (isFetching || !results) {
      return <h1>Loading...</h1>
    } else {
      return results.map(pokemon => {
        return <PokemonCard key={pokemon.name} name={pokemon.name}/>
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <Row>
          {this.renderPokemonCard()}
        </Row>
      </div>
    );
  }
}

function mapStateToProps({ pokemonData }) {
  return {
    pokemonData
  }
}

export default connect(mapStateToProps, { fetchPokemonData })(Pokedex);
