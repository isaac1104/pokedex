import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { FadeIn } from 'react-lazyload-fadein';
import { filterPokemonData } from '../../actions';
import { Card, Col, Divider, Icon, Row, Progress } from 'antd';
const { Meta } = Card;

class Pokedex extends Component {
  renderStatsChart() {
    const { data } = this.props.selectedPokemonData;
    const style = {
      text: {
        color: '#fff'
      }
    };
    return data.stats.map(pokemon => {
      return (
        <Col xs={24} sm={24} md={24} lg={12} xl={12} key={pokemon.stat.name}>
          <Progress
            size='small'
            showInfo={false}
            percent={(pokemon.base_stat / pokemon.max_stat) * 100}
          />
          <h5 style={style.text}>{`${pokemon.stat.name.toUpperCase()}: ${pokemon.base_stat}`}</h5>
        </Col>
      );
    });
  }

  renderPokemonDetail() {
    const { data, isFetching } = this.props.selectedPokemonData;
    const style = {
      spinner: {
        width: '70%',
        margin: 'auto'
      },
      text: {
        initialMsg: {
          textAlign: 'center',
          marginTop: '20px',
          color: '#fff'
        },
        detail: {
          color: '#fff'
        },
        type: {
          color: '#F7FFF7'
        }
      },
      image: {
        width: '60%',
        margin: 'auto'
      },
      card: {
        loading: {
          textAlign: 'center',
          backgroundColor: '#36393f',
          border: 'none'
        },
        data: {
          textAlign: 'center',
          backgroundColor: '#36393f',
          borderTop: 'none',
          borderLeft: 'none'
        }
      }
    };
    if (isFetching) {
      return (
        <Card
          style={style.card.loading}
          cover={
            <img src='/images/pokeball.gif' alt='loader' style={style.spinner} />
          }
        />
      );
    }
    if (!data.id) {
      return <h1 style={style.text.initialMsg}>Select a Pokemon for Details <Icon type='arrow-right' /></h1>
    }

    return (
      <Card
        style={style.card.data}
        cover={
          <FadeIn height={400} duration={250}>
            {onload => (
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
                style={style.image}
                alt='pokemon'
                onLoad={onload}
              />
            )}
          </FadeIn>
        }
        actions={data.types.map(pokemon => {
          return <h4 style={style.text.type} key={pokemon.type.name}>{pokemon.type.name}</h4>
        })}
      >
        <Meta
          title={<h1 style={style.text.detail}>{data.name}</h1>}
          description={
            <Fragment>
              <Row gutter={16}>
                {this.renderStatsChart()}
              </Row>
              <Row>
                <h3 style={style.text.detail}>{data.height} Ft. <Divider type='vertical' /> {data.weight} Lbs.</h3>
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
