import React, { Component, Fragment } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';
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
        margin: 'auto'
      },
      spinner: {
        width: '100%',
        marginBottom: '30px'
      },
      pokedex: {
        position: 'sticky',
        top: 0
      }
    }
    if (isFetching) {
      return (
        <div style={style.container}>
          <div>
            <img src='/images/loader.gif' alt='loader' style={style.spinner} />
            <h1 style={{ textAlign: 'center' }}>Loading...</h1>
          </div>
        </div>
      );
    } else {
      return (
        <Row>
          <Col lg={7} style={style.pokedex}>
            <Pokedex />
          </Col>
          <Col lg={17}>
            <Pokemon />
          </Col>
        </Row>
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
