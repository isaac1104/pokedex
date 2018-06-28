import React from 'react';
import { Card, Col } from 'antd';
import { FadeIn } from 'react-lazyload-fadein';
const { Meta } = Card;

const PokemonCard = ({ data }) => {
  const style = {
    card: {
      textAlign: 'center'
    },
    image: {
      width: '100%',
      margin: 'auto'
    }
  }

  return (
    <Col xs={12} sm={8} md={6} lg={3} xl={3}>
      <Card
        style={style.card}
        hoverable
        onClick={() => console.log(data.name)}
        cover= {
          <FadeIn
            height={150}
            duration={300}
            placeholder={<img src='/images/pokeball.gif' alt='loading' />}
            >
            {onload => (
              <img
                alt='pokemon'
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
                style={style.image}
                onLoad={onload}
              />
            )}
          </FadeIn>
        }
        >
        <Meta
          title={data.name}
        />
      </Card>
    </Col>
  );
}

export default PokemonCard;
