import React, { Component, Fragment } from 'react';
import PokemonCard from './PokemonCard';
import { fetchPokemonData } from '../../actions';
import { connect } from 'react-redux';
import { Row, Spin } from 'antd';

class Pokedex extends Component {
  componentDidMount() {
    this.props.fetchPokemonData();
  }

  renderPokemonCard() {
    const { data, isFetching } = this.props.pokemonData;
    const style = {
      spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100px'
      }
    }
    if (isFetching) {
      return <Spin style={style.spinner} size='large'/>
    } else {
      return data.map(pokemon => {
        return <PokemonCard key={pokemon.name} data={pokemon} />
      });
    }
  }

  render() {
    return (
      <Fragment>
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

export default connect(mapStateToProps, { fetchPokemonData })(Pokedex);
