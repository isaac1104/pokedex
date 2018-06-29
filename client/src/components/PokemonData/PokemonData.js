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
            <img src='/images/loading_spin.gif' alt='loader' style={style.spinner} />
            <h1 style={{ textAlign: 'center' }}>Powering up Pokedex...</h1>
          </div>
        </div>
      );
    } else {
      return (
        <Row>
          <Col xs={15} sm={14} md={8} lg={10} xl={8} style={style.pokedex}>
            <Pokedex />
          </Col>
          <Col xs={9} sm={10} md={16} lg={14} xl={16}>
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
