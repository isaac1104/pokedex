import React, { Component, Fragment } from 'react';
import SearchForm from '../Search/SearchForm';
import { connect } from 'react-redux';
import { filterPokemonData } from '../../actions';

class Pokedex extends Component {
  handleSearch(event) {
    this.props.filterPokemonData(event.target.value);
  }

  render() {
    return (
      <Fragment>
        <SearchForm handleSearch={this.handleSearch.bind(this)} />
        <h1>Pokemon Data Here</h1>
      </Fragment>
    );
  }
}

export default connect(null, { filterPokemonData })(Pokedex);
