import React from 'react';
import { Input } from 'antd';

const SearchForm = props => {
  return (
    <Input
      onChange={props.handleSearch}
      placeholder='search for a pokemon'
    />
  );
}

export default SearchForm;
