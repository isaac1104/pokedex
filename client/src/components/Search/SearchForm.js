import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

const SearchForm = props => {
  return (
    <Search
      onChange={props.handleSearch}
      placeholder='search for a pokemon'
    />
  );
}

export default SearchForm;
