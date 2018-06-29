import React, { Component, Fragment } from 'react';
import SearchForm from '../Search/SearchForm';
import { connect } from 'react-redux';
import { filterPokemonData } from '../../actions';
import { Card, Col, Divider, Row } from 'antd';
const { Meta } = Card;

class Pokedex extends Component {
  handleSearch(event) {
    this.props.filterPokemonData(event.target.value);
  }

  renderPokemonDetail() {
    const { data, isFetching } = this.props.selectedPokemonData;
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
      },
      text: {
        textAlign: 'center',
        marginTop: '20px'
      }
    }
    if (isFetching) {
      return (
        <div style={style.container}>
          <div>
            <img src='/images/pokeball.gif' alt='loader' style={style.spinner} />
            <h1 style={{ textAlign: 'center' }}>Loading...</h1>
          </div>
        </div>
      )
    }
    if (!data.id) {
      return <h1 style={style.text}>Click a Pokemon for details</h1>
    }

    return (
      <Card
        style={{ textAlign: 'center' }}
        cover={
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
            alt='pokemon'
          />
        }
        actions={data.types.map(pokemon => {
          return <h4 key={pokemon.type.name}>{pokemon.type.name}</h4>
        })}
      >
        <Meta
          title={<h1>{data.name}</h1>}
          description={
            <Fragment>
              <Row>
                <h3>{data.height} Ft. <Divider type='vertical' /> {data.weight} Lbs.</h3>
              </Row>
              <Row>
                {data.stats.map(pokemon => {
                  return (
                    <Col lg={12} key={pokemon.stat.name}>
                      <h4>{pokemon.stat.name}: {pokemon.base_stat}</h4>
                    </Col>
                  )
                })}
              </Row>
            </Fragment>
          }
        />
      </Card>
    );
  }

  render() {
    console.log(this.props.selectedPokemonData);
    return (
      <Fragment>
        <SearchForm handleSearch={this.handleSearch.bind(this)} />
        {this.renderPokemonDetail()}
      </Fragment>
    );
  }
}

function mapStateToProps({ selectedPokemonData }) {
  return {
    selectedPokemonData
  }
}

export default connect(mapStateToProps, { filterPokemonData })(Pokedex);
