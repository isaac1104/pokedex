import React, { Component } from 'react';
import { Card, Col } from 'antd';
import { connect } from 'react-redux';
import { fetchSelectedPokemonData, togglePokemonModal } from '../../actions';
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
    const { data, fetchSelectedPokemonData, togglePokemonModal } = this.props;

    return (
      <Col xs={24} sm={12} md={8} lg={6} xl={3}>
        <Card
          className='pokemon-card'
          style={{ ...style.card, backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png)` }}
          onClick={() => {
            fetchSelectedPokemonData(data.name);
            togglePokemonModal();
          }}
        >
          <Meta
            className='pokemon-name'
            title={data.name}
          />
        </Card>
      </Col>
    );
  }
}

export default connect(null, { fetchSelectedPokemonData, togglePokemonModal })(PokemonCard);
