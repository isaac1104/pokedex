import React, { Component, Fragment } from 'react';
import PokemonCard from './PokemonCard';
import { connect } from 'react-redux';
import { Row, Select } from 'antd';
import { sortPokemonData } from '../../actions';

class Pokemon extends Component {
  renderPokemonCard() {
    const { filteredData } = this.props.pokemonData;
    return filteredData.map(pokemon => {
      return <PokemonCard key={pokemon.id} data={pokemon} />
    });
  }

  renderDropdown() {
    return (
      <Select
        style={{ width: 120 }}
        placeholder='Sort By'
        onChange={value => this.props.sortPokemonData(value)}
      >
        <Select.Option value='name'>Name (A - Z)</Select.Option>
        <Select.Option value='id'>ID (1 - 151)</Select.Option>
      </Select>
    );
  }

  render() {
    console.log(this.props.pokemonData);
    return (
      <Fragment>
        {this.renderDropdown()}
        <Row>
          {this.renderPokemonCard()}
        </Row>
      </Fragment>
    );
  }
}

function mapStateToProps({ pokemonData }) {
  return {
    pokemonData
  }
}

export default connect(mapStateToProps, { sortPokemonData })(Pokemon);
