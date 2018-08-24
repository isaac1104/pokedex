import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

const SearchForm = props => {
  return (
    <Search
      onChange={props.handleSearch}
    />
  );
}

export default SearchForm;
