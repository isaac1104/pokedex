import React, { Component } from 'react';
import { Card, Col } from 'antd';
import { connect } from 'react-redux';
import { fetchSelectedPokemonData } from '../../actions';
import { FadeIn } from 'react-lazyload-fadein';
const { Meta } = Card;

class PokemonCard extends Component {
  render() {
    const style = {
      card: {
        textAlign: 'center',
        backgroundColor: '#F7FFF7'
      },
      image: {
        width: '100%',
        margin: 'auto'
      }
    }
    const { data, fetchSelectedPokemonData } = this.props;

    return (
      <Col xs={24} sm={12} md={8} lg={6} xl={3}>
        <Card
          style={style.card}
          hoverable
          onClick={() => fetchSelectedPokemonData(data.name)}
          cover={
            <img
              alt='pokemon'
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
              style={style.image}
            />
          }
        >
          <Meta
            title={data.name}
          />
        </Card>
      </Col>
    );
  }
}

export default connect(null, { fetchSelectedPokemonData })(PokemonCard);
