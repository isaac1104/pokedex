import React, { Component } from 'react';
import { fetchPokemonData } from '../../actions';
import { connect } from 'react-redux';

class Pokedex extends Component {
  componentDidMount() {
    this.props.fetchPokemonData();
  }

  render() {
    console.log(this.props.pokemonData);
    return (
      <div>
        <h1>Pokedex</h1>
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
