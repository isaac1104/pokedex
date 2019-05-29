import React, { Component, Fragment } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Icon, Spin, Row, Col } from 'antd';
import Pokemon from './Pokemon';
import SearchForm from '../Search/SearchForm';
import SortDropdown from '../SortDropdown';

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
          <Row>
            <Col xs={24} sm={16} md={16} lg={16} xl={16}>
              <SearchForm />
            </Col>
            <Col xs={24} sm={8} md={8} lg={8} xl={8}>
              <SortDropdown />
            </Col>
          </Row>
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
