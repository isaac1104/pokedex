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
        style={{ width: 160 }}
        placeholder='Sort By'
        onChange={value => this.props.sortPokemonData(value)}
      >
        <Select.Option value='alphabetically'>Name (A - Z)</Select.Option>
        <Select.Option value='reverse-alphabetically'>Name (Z - A)</Select.Option>
        <Select.Option value='id-ascending'>ID (Ascending)</Select.Option>
        <Select.Option value='id-descending'>ID (Descending)</Select.Option>
      </Select>
    );
  }

  render() {
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
