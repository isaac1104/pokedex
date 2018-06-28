import React, { Component, Fragment } from 'react';
import SearchForm from '../Search/SearchForm';
import { connect } from 'react-redux';
import { filterPokemonData } from '../../actions';

class Pokedex extends Component {
  handleSearch(event) {
    this.props.filterPokemonData(event.target.value);
  }

  renderPokemonDetail() {
    const { data, isFetching } = this.props.selectedPokemonData;
    if (isFetching) {
      return <h1>Loading...</h1>
    }
    if (!data.id) {
      return <div />
    }

    return (
      <div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.selectedPokemonData.data.id}.png`} alt='pokemon' />
        <h1>{this.props.selectedPokemonData.data.name}</h1>
      </div>
    );
  }

  render() {
    console.log(this.props.selectedPokemonData);
    return (
      <Fragment>
        <SearchForm handleSearch={this.handleSearch.bind(this)} />
        {this.renderPokemonDetail()}
      </Fragment>
    );
  }
}

function mapStateToProps({ selectedPokemonData }) {
  return {
    selectedPokemonData
  }
}

export default connect(mapStateToProps, { filterPokemonData })(Pokedex);
