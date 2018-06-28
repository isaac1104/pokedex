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
        margin: 'auto'
      }
    }
    if (isFetching) {
      return (
        <div style={style.spinner}>
          <div>
            <img src='/images/loader.gif' alt='loader' style={{ marginBottom: '30px' }} />
            <h1 style={{ textAlign: 'center' }}>Fetching Data... Please Wait</h1>
          </div>
        </div>
      );
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
