import React, { Component, Fragment } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Col, Icon, Row, Spin } from 'antd';
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
        backgroundColor: '#f0f2f5'
      },
      pokemonBox: {
        marginBottom: '100px'
      }
    }
    if (isFetching) {
      return (
        <div style={style.container}>
          {/* <div> */}
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
        <Row>
          <Col xs={15} sm={14} md={8} lg={10} xl={8} style={style.pokedex}>
            <Pokedex />
          </Col>
          <Col xs={9} sm={10} md={16} lg={14} xl={16} style={style.pokemonBox}>
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
