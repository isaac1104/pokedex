import React, { Component, Fragment } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Icon, Spin } from 'antd';
import Pokemon from './Pokemon';
import Pokedex from './Pokedex';

class PokemonData extends Component {
  componentDidMount() {
    this.props.fetchPokemonData();
  }

  renderPokemoData() {
    const { isFetching } = this.props.pokemonData;
    const style = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        height: '80vh'
      },
      spinner: {
        fontSize: '84px'
      },
      pokedex: {
        position: 'sticky',
        top: 0,
        backgroundColor: '#36393f'
      },
      pokemonBox: {
        marginBottom: '6.5em'
      }
    };
    if (isFetching) {
      return (
        <div style={style.container}>
          <Spin
            tip='Powering up Pokedex...'
            indicator={
              <Icon
                type='loading'
                size='large'
                style={style.spinner}
              />
            }
          />
        </div>
      );
    } else {
      return (
        <div style={style.pokemonBox}>
          <Pokemon />
        </div>
      );
    }
  }

  render() {
    return (
      <Fragment>
        {this.renderPokemoData()}
      </Fragment>
    );
  }
}

function mapStateToProps({ pokemonData }) {
  return {
    pokemonData
  }
}

export default connect(mapStateToProps, actions)(PokemonData);
