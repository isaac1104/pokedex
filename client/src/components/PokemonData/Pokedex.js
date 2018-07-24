import React, { Component, Fragment } from 'react';
import SearchForm from '../Search/SearchForm';
import { connect } from 'react-redux';
import { filterPokemonData } from '../../actions';
import { Card, Col, Divider, Row, Progress } from 'antd';
import { FadeIn } from 'react-lazyload-fadein';
const { Meta } = Card;

class Pokedex extends Component {
  handleSearch(event) {
    this.props.filterPokemonData(event.target.value);
  }

  renderStatsChart() {
    const { data } = this.props.selectedPokemonData;
    return data.stats.map(pokemon => {
      return (
        <Col xs={24} sm={24} md={24} lg={12} xl={12} key={pokemon.stat.name}>
          <Progress
            size='small'
            showInfo={false}
            percent={(pokemon.base_stat / pokemon.max_stat) * 100}
          />
          <h5>{`${pokemon.stat.name.toUpperCase()}: ${pokemon.base_stat}`}</h5>
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
      text: {
        textAlign: 'center',
        marginTop: '20px',
        color: '#1A535C'
      },
      image: {
        width: '60%',
        margin: 'auto'
      },
      card: {
        textAlign: 'center',
        backgroundColor: '#f0f2f5'
      }
    }
    if (isFetching) {
      return (
        <div style={style.container}>
          <div>
            <FadeIn height={150} duration={100}>
              {onload => (
                <img src='/images/pokeball.gif' alt='loader' style={style.spinner} onLoad={onload} />
              )}
            </FadeIn>
            <h1 style={{ textAlign: 'center', color: '#1A535C' }}>Loading Pokemon Data...</h1>
          </div>
        </div>
      )
    }
    if (!data.id) {
      return <h1 style={style.text}>Select a Pokemon for details</h1>
    }

    return (
      <Card
        style={style.card}
        cover={
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
            style={style.image}
            alt='pokemon'
          />
        }
        actions={data.types.map(pokemon => {
          return <h4 style={{ color: '#F7FFF7' }} key={pokemon.type.name}>{pokemon.type.name}</h4>
        })}
      >
        <Meta
          title={<h1 style={{ color: '#1A535C' }}>{data.name}</h1>}
          description={
            <Fragment>
              <Row gutter={16}>
                {this.renderStatsChart()}
              </Row>
              <Row>
                <h3 style={{ color: '#1A535C' }}>{data.height} Ft. <Divider type='vertical' /> {data.weight} Lbs.</h3>
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
