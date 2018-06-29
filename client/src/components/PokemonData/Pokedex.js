import React, { Component, Fragment } from 'react';
import SearchForm from '../Search/SearchForm';
import { connect } from 'react-redux';
import { filterPokemonData } from '../../actions';
import { Card, Col, Divider, Row, Progress } from 'antd';
const { Meta } = Card;

class Pokedex extends Component {
  handleSearch(event) {
    this.props.filterPokemonData(event.target.value);
  }

  renderStatsChart() {
    const { data } = this.props.selectedPokemonData;
    const statsWithMaxBase = data.stats.map(pokemon => {
      if (pokemon.stat.name === 'speed') {
        pokemon.max_stat = 140;
        return pokemon;
      } else if (pokemon.stat.name === 'special-attack') {
        pokemon.max_stat = 154;
        return pokemon;
      } else if (pokemon.stat.name === 'special-defense') {
        pokemon.max_stat = 154;
        return pokemon;
      } else if (pokemon.stat.name === 'defense') {
        pokemon.max_stat = 180;
        return pokemon;
      } else if (pokemon.stat.name === 'attack') {
        pokemon.max_stat = 134;
        return pokemon;
      } else if (pokemon.stat.name === 'hp') {
        pokemon.max_stat = 250;
        return pokemon;
      } else {
        return <div />
      }
    });
    return statsWithMaxBase.map(pokemon => {
      return (
        <Col xs={12} sm={12} md={12} lg={8} xl={4} key={pokemon.stat.name}>
          <Progress type='circle' width={80} percent={(pokemon.base_stat / pokemon.max_stat) * 100} format={() => pokemon.stat.name} />
        </Col>
      );
    });
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
      },
      image: {
        width: '70%',
        margin: 'auto'
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
            style={style.image}
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
                {this.renderStatsChart()}
              </Row>
              <Row>
                <h3>{data.height} Ft. <Divider type='vertical' /> {data.weight} Lbs.</h3>
              </Row>
            </Fragment>
          }
        />
      </Card>
    );
  }

  render() {
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
