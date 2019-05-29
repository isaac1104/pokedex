import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FadeIn } from 'react-lazyload-fadein';
import { Card, Col, Divider, Modal, Progress, Row } from 'antd';
import { togglePokemonModal } from '../actions';

const { Meta } = Card;
const styles = {
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinner: {
    width: '70%',
    margin: 'auto'
  },
  image: {
    width: '60%',
    margin: 'auto'
  },
  text: {
    initialMsg: {
      textAlign: 'center',
      marginTop: '20px',
      color: '#ffffff'
    },
    detail: {
      color: '#ffffff'
    },
    type: {
      color: '#F7FFF7'
    },
    stats: {
      color: '#ffffff'
    }
  },
  card: {
    loading: {
      textAlign: 'center',
      backgroundColor: '#36393f'
    },
    data: {
      textAlign: 'center',
      backgroundColor: '#36393f'
    }
  }
};

class PokemonModal extends Component {
  renderModal() {
    const { modalVisibility: { visible }, togglePokemonModal, selectedPokemonData: { data, isFetching } } = this.props;
    if (isFetching) {
      return (
        <Modal
          centered
          destroyOnClose
          visible={visible}
          onOk={togglePokemonModal}
          onCancel={togglePokemonModal}
        >
          <Card
            style={styles.card.loading}
            cover={
              <img src='/images/pokeball.gif' alt='loader' style={styles.spinner} />
            }
          />
        </Modal>
      );
    }
    if (data) {
      return (
        <Modal
          centered
          destroyOnClose
          visible={visible}
          onOk={togglePokemonModal}
          onCancel={togglePokemonModal}
        >
          <Card
            style={styles.card.data}
            cover={
              <FadeIn height={400} duration={250}>
                {onload => (
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
                    style={styles.image}
                    alt='pokemon'
                    onLoad={onload}
                  />
                )}
              </FadeIn>
            }
            actions={data.types.map(pokemon => {
              return <h4 style={styles.text.type} key={pokemon.type.name}>{pokemon.type.name}</h4>
            })}
          >
            <Meta
              title={<h1 style={styles.text.detail}>{data.name}</h1>}
              description={
                <>
                  <Row gutter={16}>
                    {this.renderStatsChart(data.stats)}
                  </Row>
                  <Row>
                    <h3 style={styles.text.detail}>{data.height} Ft. <Divider type='vertical' /> {data.weight} Lbs.</h3>
                  </Row>
                </>
              }
            />
          </Card>
        </Modal>
      );
    }
    return null;
  }

  renderStatsChart(stats) {
    return stats.map(pokemon => {
      return (
        <Col xs={24} sm={24} md={24} lg={12} xl={12} key={pokemon.stat.name}>
          <Progress
            size='small'
            showInfo={false}
            percent={(pokemon.base_stat / pokemon.max_stat) * 100}
          />
          <h5 style={styles.text.stats}>{`${pokemon.stat.name.toUpperCase()}: ${pokemon.base_stat}`}</h5>
        </Col>
      );
    });
  }

  render() {
    return (
      <>
        {this.renderModal()}
      </>
    );
  }
}

const mapStateToProps = ({ modalVisibility, selectedPokemonData }) => {
  return {
    modalVisibility,
    selectedPokemonData
  };
};

export default connect(mapStateToProps, { togglePokemonModal })(PokemonModal);
