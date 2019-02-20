import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortPokemonData } from '../actions';
import { Select } from 'antd';
const { Option } = Select;

class SortDropdown extends Component {
  render() {
    return (
      <Select
        style={{ width: 210 }}
        placeholder='Sort By'
        onChange={value => this.props.sortPokemonData(value)}
      >
        <Option value='alphabetically'>Name (A - Z)</Option>
        <Option value='reverse-alphabetically'>Name (Z - A)</Option>
        <Option value='id-ascending'>ID (Ascending)</Option>
        <Option value='id-descending'>ID (Descending)</Option>
      </Select>
    );
  }
}

export default connect(null, { sortPokemonData })(SortDropdown);
