import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Input } from 'antd';
import { filterPokemonData } from '../../actions';
const { Search } = Input;

class SearchForm extends Component {
  renderInput({ input }) {
    return (
      <Search
        {...input}
        autoComplete='off'
        placeholder='Enter A Movie Title'
      />
    )
  };

  render() {
    return (
      <Field
        name='search'
        component={this.renderInput}
        onChange={_.debounce((e, value) => this.props.filterPokemonData(value), 500)}
      />
    );
  }
}

export default compose(
  connect(null, { filterPokemonData }),
  reduxForm({ form: 'search' }))(SearchForm);
