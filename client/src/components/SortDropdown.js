import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortPokemonData } from '../actions';
import { Select } from 'antd';
const { Option } = Select;

class SortDropdown extends Component {
  render() {
    return (
      <Select
        style={{ width: 180 }}
        placeholder='Sort By'
        onChange={value => this.props.sortPokemonData(value)}
      >
        <Option value='alphabetically'>A - Z</Option>
        <Option value='reverse-alphabetically'>Z - A</Option>
        <Option value='id-ascending'>ID ↑</Option>
        <Option value='id-descending'>ID ↓</Option>
      </Select>
    );
  }
}

export default connect(null, { sortPokemonData })(SortDropdown);
