import React from 'react';
import { Card, Col } from 'antd';
const { Meta } = Card;

const PokemonCard = props => {
  const style = {
    card: {
      textAlign: 'center'
    },
    image: {
      width: 150,
      margin: 'auto'
    }
  }

  return (
    <Col xs={6} sm={6} md={4} lg={4} xl={4}>
      <Card
        style={style.card}
        hoverable
        cover= {
          <img
            alt='pokemon'
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
            style={style.image}
          />
        }
        >
        <Meta
          title={props.name}
        />
      </Card>
    </Col>
  );
}

export default PokemonCard;
