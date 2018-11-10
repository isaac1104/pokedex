import React, { Component } from 'react';
import { Card, Col } from 'antd';
import { connect } from 'react-redux';
import { SimpleImg, SimpleImgProvider } from 'react-simple-img';
import { fetchSelectedPokemonData } from '../../actions';
const { Meta } = Card;

class PokemonCard extends Component {
  render() {
    const style = {
      card: {
        textAlign: 'center',
        backgroundColor: '#2f3136'
      },
      image: {
        margin: 'auto'
      }
    };
    const { data, fetchSelectedPokemonData } = this.props;

    return (
      <Col xs={24} sm={12} md={8} lg={6} xl={3}>
        <Card
          className='pokemon-card'
          style={style.card}
          onClick={() => fetchSelectedPokemonData(data.name)}
          cover={
            <SimpleImgProvider>
              <SimpleImg
                width={157}
                height={157}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
                alt='poster'
              />
            </SimpleImgProvider>
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
