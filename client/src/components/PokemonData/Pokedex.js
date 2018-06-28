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
    const { data, isFetching } = this.props.pokemonData;
    if (isFetching) {
      return <h1>Loading...</h1>
    } else {
      return data.map(pokemon => {
        return <PokemonCard key={pokemon.name} data={pokemon}/>
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
