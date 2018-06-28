import React, { Component, Fragment } from 'react';
import SearchForm from '../Search/SearchForm';
import { connect } from 'react-redux';
import { filterPokemonData } from '../../actions';
import { Card } from 'antd';
const { Meta } = Card;

class Pokedex extends Component {
  handleSearch(event) {
    this.props.filterPokemonData(event.target.value);
  }

  renderPokemonDetail() {
    const { data, isFetching } = this.props.selectedPokemonData;
    if (isFetching) {
      return <h1>Loading...</h1>
    }
    if (!data.id) {
      return <div />
    }

    return (
      <Card
        cover={
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
            alt='pokemon'
          />
        }
        actions={data.types.map(pokemon => {
          return <h3>{pokemon.type.name}</h3>
        })}
        >
        <Meta
          title={<h1 style={{ textAlign: 'center' }}>{data.name}</h1>}
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
