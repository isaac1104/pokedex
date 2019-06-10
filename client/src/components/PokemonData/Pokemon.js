import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import { connect } from 'react-redux';
import { Row } from 'antd';
import { sortPokemonData } from '../../actions';
import PokemonModal from '../PokemonModal';

const styles = {
  container: {
    zoom: 0.7
  }
};

class Pokemon extends Component {
  renderPokemonCard() {
    const { filteredData } = this.props.pokemonData;
    return filteredData.map(pokemon => {
      return <PokemonCard key={pokemon.id} data={pokemon} />
    });
  }

  render() {
    return (
      <Row style={styles.container}>
        {this.renderPokemonCard()}
        <PokemonModal />
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
